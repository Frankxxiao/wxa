import 'babel-polyfill';

import {getConfig, getFiles, readFile, isFile} from './utils';
import path from 'path';
import chokidar from 'chokidar';
import schedule from './schedule';
import logger from './helpers/logger';
import compilerLoader from './loader';
import debugPKG from 'debug';
import {green} from 'chalk';
import defaultPret from './const/defaultPret';

let debug = debugPKG('WXA:Compiler');

class Compiler {
    constructor(src, dist, ext) {
        this.current = process.cwd();
        this.src = src || 'src';
        this.dist = dist || 'dist';
        this.ext = ext || '.wxa';
        this.isWatching = false;
        this.isWatchReady = false;
        this.queue = {};
        this.init();
    }
    // 找到引用的src文件
    findReference(file) {
        let files = getFiles(this.src);

        let refs = [];

        let reg = new RegExp('\\'+this.ext+'$');

        files = files.filter((f)=>reg.test(f));

        files.forEach((f)=>{
            let opath = path.parse(path.join(this.current, this.src, f));
            // console.log(opath);
            let content = readFile(opath);

            content.replace(/<(script|template|style)\s.*src\s*src=\s*['"](.*)['"]/ig, (match, tag, srcpath)=>{
                if (path.join(opath.dir, srcpath) === path.join(this.current, src, file)) {
                    refs.push(f);
                }
            });
        });

        return refs;
    }
    init() {
        // 加载编译器
        const configs = getConfig();
        schedule.set('wxaConfigs', configs || {});
        schedule.toggleMounting(true);

        // mount compilers
        const defaultCompilers = [];
        const usedCompilers = Array.from(new Set(defaultCompilers.concat(configs.use || [])));

        return compilerLoader
        .mount(usedCompilers, configs.compilers||{})
        .then(()=>{
            schedule.toggleMounting(false);
        });
    }
    watch(cmd) {
        if (this.isWatching) return;
        this.isWatching = true;

        // set mode
        schedule.set('mode', 'watch');

        chokidar.watch(`.${path.sep}${this.src}`, {
            awaitWriteFinish: {
                stabilityThreshold: 300,
                pollInterval: 100,
            },
        })
        .on('all', (event, filepath)=>{
            if (this.isWatchReady && ['change', 'add'].indexOf(event)>-1 && !this.queue[filepath]) {
                cmd.file = path.join('..', filepath);
                // schedule
                logger.message(event, filepath, true);
                this.queue[filepath] = event;
                cmd.category = event;
                this.build(cmd);
                setTimeout(()=>this.queue[filepath]=false, 500);
            }
        })
        .on('ready', (event, filepath)=>{
            this.isWatchReady = true;
            logger.message('Watch', '准备完毕，开始监听文件', true);
        });
    }
    async build(cmd) {
        let config = getConfig();

        config.source = this.src;
        config.dist = this.dist;
        config.ext = this.ext;

        let file = cmd.file;
        let files = file ? [file] : getFiles(this.src);

        schedule.set('src', this.src);
        schedule.set('dist', this.dist);
        schedule.set('options', cmd);

        logger.infoNow('Compile', 'AT: '+new Date().toLocaleString(), void(0));
        // schedule.once('finish', (n)=>{
        //     logger.infoNow('Compile', 'END: '+new Date().toLocaleString()+` ${green(n)} files process`, void(0));
        //     if (cmd.watch) this.watch(cmd);
        // });

        // find app.js、 app.wxa first
        let appJSON = this.src+path.sep+'app.json';
        let appJS = this.src+path.sep+'app.js';
        let wxaJSON = this.src+path.sep+'app'+this.ext;
        let isWXA = false;
        if (!isFile(appJSON) && isFile(wxaJSON)) {
            isWXA = true;
        } else {
            logger.errorNow('不存在app.json或app.wxa文件!');
        }

        try {
            await this.init();

            // debug('compiler loader init map %O', compilerLoader.map);

            let p;
            if (isWXA) {
                let compiler = compilerLoader.get('wxa');

                p = ()=>compiler.parse(void(0), void(0), wxaJSON, 'wxa');
            } else {
                p = ()=>Promise.resolve({
                    script: {
                        code: readFile(appJS),
                    },
                    config: {
                        code: require(appJSON),
                    },
                });
            }

            let ret = await p();
            let rst = ret.rst || ret;
            delete rst.template;

            let appConfigs = JSON.parse(rst.config.code);
            // mount to schedule.
            schedule.set('appConfigs', appConfigs);
            schedule.set('$pageArray', [{
                src: wxaJSON,
                rst: rst,
                type: 'wxa',
                category: 'app',
                pret: defaultPret,
            }]);

            // do dependencies analysis.
            await schedule.doDPA();
            debug('schedule dependencies Tree %O', schedule.$indexOfModule);

            // module optimize, dependencies merge, minor.
            // await schedule.doOptimize();

            // module dest, dependencies copy,
            // await schedule.doLanding();
        } catch (e) {
            logger.errorNow(e);
        }
        // this.init()
        // .then(()=>p())
        // .then((rst)=>{
        //     let {json} = rst;

        //     let appConfigs = JSON.parse(json.code);
        //     // mount to schedule.
        //     schedule.set('appConfigs', appConfigs);

        //     // do dependencies analysis.
        //     schedule.doDPA();

        //     // module optimize, dependencies merge, minor.
        //     schedule.doOptimize();

        //     // module dest, dependencies copy,
        //     schedule.doLanding();

        //     let scriptCompiler = new ScriptCompiler(this.src, this.dist, this.ext);

        //     return scriptCompiler.$compile(
        //         rst.script.type,
        //         rst.script.code,
        //         path.parse(isWXA ? wxaJSON : appJS),
        //         {ast: true}
        //     );
        // })
        // .then((succ)=>{
        //     // console.log(succ);
        //     let {ast} = succ;
        //     let dependencies = findDependencies(ast);
        //     writeFile(this.src+path.sep+'app.ast.json', JSON.stringify(dependencies, void(0), 2));
        // });


        // files.forEach((file)=>{
        //     let opath = path.parse(path.join(this.current, this.src, file));
        //     // console.log(opath);
        //     // if (file) {
        //         schedule.addTask(opath, void(0), {category: cmd.category});
        //     // } else {
        //     //     let refs = this.findReference(file);
        //     //     if (!refs.length) schedule.addTask(opath);
        //     // }
        // });

        if (cmd.category) delete cmd.category;
    }
}


export default Compiler;
