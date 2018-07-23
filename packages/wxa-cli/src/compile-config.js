import {getDistPath, writeFile, readFile, error, isFile, warn} from './utils';
import {info} from './utils';
import path from 'path';
import {AsyncSeriesHook} from 'tapable';
import PathParser from './helpers/pathParser';
import logger from './helpers/logger';
import schedule from './schedule';

class CConfig {
    constructor(src, dist) {
        this.current = process.cwd();
        this.src = src || 'src';
        this.dist = dist || 'dist';
        this.type = 'json';
        this.$sourceType = 'json';
        this.code = '';
        this.modulesPath = path.join(this.current, 'node_modules', path.sep);
        this.localVisualPath = path.join(this.current, 'local', path.sep);
        this.npmPath = path.join(this.current, dist, 'npm', path.sep);
        this.localPath = path.join(this.current, dist, 'local', path.sep);
        this.hooks = {
            optimizeAssets: new AsyncSeriesHook(['opath', 'compilation']),
        };
    }

    copyComponents(com, pret) {
        let {isNodeModule, isAbsolute} = pret;

        let isNpm = isNodeModule;

        let extOfCom = ['.wxml', '.wxss', '.js', '.json'];
        // wxa com support
        let wxaFile = isNpm ? path.join(this.modulesPath, com+'.wxa') : com+path.sep+'.wxa';

        if (isFile(wxaFile)) {
            schedule.addTask(path.parse(wxaFile), void(0), {type: isNpm ? 'npm' : 'local'} );
        } else {
            // console.log(com)
            extOfCom.forEach((ext)=>{
                let uri = isNpm ? path.join(this.modulesPath, com+ext) : com+ext;

                // console.log('uri', uri)

                if (ext === '.js' && isFile(uri)) {
                    // while js file use script compiler.
                    schedule.addTask(path.parse(uri), void(0), {type: isNpm ? 'npm' : 'local'});
                } else if (isFile(uri)) {
                    // file is exits
                    let target = path.join(this.npmPath, com+ext);
                    logger.info(`write ${isNpm ? 'npm' : 'local'} com`, path.relative(this.current, target));
                    writeFile(target, readFile(uri));
                } else if (ext === '.json') {
                    logger.warn(com+'组件不存在json配置文件');
                }
            });
        }
    }

    resolveComponents(code, opath) {
        if (!code.usingComponents) return code;

        let coms = code.usingComponents;
        Object.keys(coms).forEach((key)=>{
            let com = code.usingComponents[key];
            let pret = new PathParser().parse(com);
            if (pret.isNodeModule) {
                // copy npm or local components, generate new path;
                this.copyComponents(com, pret);
                let target = path.join(pret.isNodeModule ? this.npmPath : this.localPath, com);
                let resolved = path.relative(getDistPath(opath, 'json', this.src, this.dist), target).replace(/\\/g, '/').replace(/^\.\.\//, './');
                coms[key] = resolved;
            }
        });
        code.usingComponents = coms;
        return code;
    }

    compile(content, opath) {
        if (content == null) {
            content = readFile(path.join(opath.dir, opath.base));
            if (content == null) throw new Error('打开文件失败 ', path.join(opath.dir, opath.base));
        }
        try {
            content = JSON.parse(content);
            // 编译组件
            content = this.resolveComponents(content, opath);
        } catch (e) {
            logger.errorNow(`ERROR IN: ${opath.dir+path.sep+opath.base}`, e);
            return Promise.reject(e);
        }

        this.code = JSON.stringify(content, void(0), 4);
        return this.hooks.optimizeAssets.promise(opath, this).then((err)=>{
            if (err) return Promise.reject(err);
            let target = getDistPath(opath, 'json', this.src, this.dist);
            logger.info('Config', path.relative(this.current, target));
            writeFile(target, this.code);
        }).catch((e)=>{
            logger.errorNow('Error In: '+path.join(opath.dir, opath.base), e);
        });
    }
}

export default CConfig;
