(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{227:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=a(5),e=Object(o.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"methods装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods装饰器","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods装饰器")]),t._v(" "),a("p",[t._v("顾名思义，即作用于具体的类成员函数上的装饰器。")]),t._v(" "),a("p",[t._v("Methods装饰器有着广泛的用途。")]),t._v(" "),a("h2",{attrs:{id:"debounce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debounce","aria-hidden":"true"}},[t._v("#")]),t._v(" Debounce")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调用方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Debounce( wait, [options={}] )")])]),t._v(" "),a("li",[a("code",[t._v("@Debounce")])])])]),t._v(" "),a("li",[a("strong",[t._v("参数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("wait")]),t._v(": "),a("code",[t._v("Number")]),t._v(" 延时多少毫秒之后执行函数 "),a("strong",[t._v("Default")]),t._v(": 300")]),t._v(" "),a("li",[a("strong",[t._v("options")]),t._v(": "),a("code",[t._v("Object")]),t._v(" 参数对象\n"),a("ul",[a("li",[a("strong",[t._v("leading")]),t._v(": "),a("code",[t._v("Boolean")]),t._v(" 指定是否在超时之前触发函数。 "),a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("true")])]),t._v(" "),a("li",[a("strong",[t._v("maxWait")]),t._v(": "),a("code",[t._v("Number")]),t._v(" 在函数触发前最大延时时间。")]),t._v(" "),a("li",[a("strong",[t._v("trailing")]),t._v(": "),a("code",[t._v("Boolean")]),t._v(" 指定是否在超时之后触发函数。 "),a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("false")])])])])])]),t._v(" "),a("li",[a("strong",[t._v("用例")]),t._v(":")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Page"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Debounce "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@wxa/core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@Page\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Index")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 默认立刻执行函数，并且在一定延迟之内不会重复执行。")]),t._v("\n    @Debounce\n    "),a("span",{attrs:{class:"token function"}},[t._v("tap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pages/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 指定延迟时间")]),t._v("\n    @"),a("span",{attrs:{class:"token function"}},[t._v("Debounce")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("longTap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("detail"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setData")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            phone"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("debounce，又称反抖动函数。大量应用于控制用户交互事件行为（点击，滑动等），由于用户可能误触引发事件回调，如果不加以控制，可能引起重复的后台请求。")]),t._v(" "),a("p",[t._v("故而，几乎所有用户交互事件都需要开发者做对应控制，这个时间一个Debounce装饰器可以帮助你优雅的开发业务代码😍")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("debounce函数，详见"),a("a",{attrs:{href:"https://lodash.com/docs/4.17.10#debounce",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("lodash debounce")]),a("OutboundLink")],1),t._v(";")])]),t._v(" "),a("h2",{attrs:{id:"delay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delay","aria-hidden":"true"}},[t._v("#")]),t._v(" Delay")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调用方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Delay( wait )")])])])]),t._v(" "),a("li",[a("strong",[t._v("参数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("wait")]),t._v(": "),a("code",[t._v("Number")]),t._v(" 延时多少毫秒之后执行函数")])])]),t._v(" "),a("li",[a("strong",[t._v("用例")]),t._v(":")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Page"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delay "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@wxa/core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@Page\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Index")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 延迟1000ms之后执行函数")]),t._v("\n    @"),a("span",{attrs:{class:"token function"}},[t._v("Delay")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("sleepAndTravel")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pages/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("延迟一段时间后执行函数。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("delay函数，详见"),a("a",{attrs:{href:"https://lodash.com/docs/4.17.10#delay",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("lodash delay")]),a("OutboundLink")],1),t._v(";")])]),t._v(" "),a("h2",{attrs:{id:"deprecate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecate","aria-hidden":"true"}},[t._v("#")]),t._v(" Deprecate")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调用方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Deprecate")])])])]),t._v(" "),a("li",[a("strong",[t._v("用例")]),t._v(":")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" App"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Deprecate "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@wxa/core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@App\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Index")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 延迟1000ms之后执行函数")]),t._v("\n    @Deprecate\n    "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("开发第三方的组件或者多人合作情况下，标识某些方法即将遗弃。继续调用该方法会有一个warning。")]),t._v(" "),a("h2",{attrs:{id:"loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading","aria-hidden":"true"}},[t._v("#")]),t._v(" Loading")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调用方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Loading( tips, type )")])])])]),t._v(" "),a("li",[a("strong",[t._v("参数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("tips")]),t._v(": "),a("code",[t._v("String")]),t._v(" loading的文案提示 "),a("strong",[t._v("Default")]),t._v(" "),a("code",[t._v("Loading")])]),t._v(" "),a("li",[a("strong",[t._v("type")]),t._v(": "),a("code",[t._v("String")]),t._v(" 类型，可以指定使用导航栏loading动画或者界面loading动画 "),a("strong",[t._v("Default")]),t._v(" "),a("code",[t._v("loading")])])])]),t._v(" "),a("li",[a("strong",[t._v("用例")]),t._v(":")])]),t._v(" "),a("p",[t._v("自动显示loading动画。有两种类型"),a("code",[t._v("loading")]),t._v("或"),a("code",[t._v("bar")]),t._v("，分别是界面的loading动画及导航栏的动画。")]),t._v(" "),a("h2",{attrs:{id:"lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock","aria-hidden":"true"}},[t._v("#")]),t._v(" Lock")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调用方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Lock")])])])]),t._v(" "),a("li",[a("strong",[t._v("用例")]),t._v(":")])]),t._v(" "),a("p",[t._v("Lock装饰器，与后台的事务锁不同，wxa的锁主要用于防止函数重复执行。在日常开发中，前端防重一直是个很重要的问题。在不用"),a("code",[t._v("Lock")]),t._v("的情况下，我们需要对每个函数都增加一个变量控制：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Page"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@wxa/core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@Page\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Index")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("login")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 是否在做登录中，防止重复登录")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLoging"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLoging "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 获取微信的code，用于从微信后台换取sessionKey")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$wxapi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("login")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 后台提供的登录接口")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$fetch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/remote/login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 登录完成，记录状态")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setData")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                isLogged"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 重置标志位")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLoging "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("而使用"),a("code",[t._v("Lock")]),t._v("之后，我们无需关心太多控制逻辑，代码更加清晰了然。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Lock"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Page"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toast"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@wxa/core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@Page \n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Index")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @Lock\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("login")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 获取微信的code，用于从微信后台换取sessionKey")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$wxapi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("login")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 后台提供的登录接口")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$fetch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/remote/login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 登录完成，记录状态")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setData")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                isLogged"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("toast")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'登录失败~'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#once","aria-hidden":"true"}},[t._v("#")]),t._v(" Once")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调用方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Once")])])])]),t._v(" "),a("li",[a("strong",[t._v("用例")]),t._v(":")])]),t._v(" "),a("p",[t._v("指定函数仅会执行一次，重复的调用只会返回第一次调用的结果。详见"),a("a",{attrs:{href:"https://lodash.com/docs/4.17.10#once",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("lodash Once")]),a("OutboundLink")],1),t._v(";")]),t._v(" "),a("h2",{attrs:{id:"throttle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throttle","aria-hidden":"true"}},[t._v("#")]),t._v(" Throttle")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调用方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Throttle( wait, [options={}] )")])]),t._v(" "),a("li",[a("code",[t._v("@Throttle")])])])]),t._v(" "),a("li",[a("strong",[t._v("参数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("wait")]),t._v(": "),a("code",[t._v("Number")]),t._v(" 每隔"),a("code",[t._v("wait")]),t._v("毫秒仅执行函数一次 "),a("strong",[t._v("Default")]),t._v(": 1000")]),t._v(" "),a("li",[a("strong",[t._v("options")]),t._v(": "),a("code",[t._v("Object")]),t._v(" 参数对象\n"),a("ul",[a("li",[a("strong",[t._v("leading")]),t._v(": "),a("code",[t._v("Boolean")]),t._v(" 指定是否在超时之前触发函数。 "),a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("true")])]),t._v(" "),a("li",[a("strong",[t._v("trailing")]),t._v(": "),a("code",[t._v("Boolean")]),t._v(" 指定是否在超时之后触发函数。 "),a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("true")])])])])])]),t._v(" "),a("li",[a("strong",[t._v("用例")]),t._v(":")])]),t._v(" "),a("p",[t._v("限流函数。一般适用于持续高频触发的交互，比如"),a("code",[t._v("input")]),t._v("，"),a("code",[t._v("scroll")]),t._v("等短时间内有可能多次触发回调函数，密集的计算可能导致界面卡顿问题，这个时候一个限流函数就大有用武之地了。")])])},[],!1,null,null,null);e.options.__file="methods.md";s.default=e.exports}}]);