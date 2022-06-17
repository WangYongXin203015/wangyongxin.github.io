"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[518],{4518:function(l,i,e){e.r(i),e.d(i,{default:function(){return u}});var r=e(6252),t=[(0,r.uE)("<h4>ES6</h4><ul><li>新增了块级作用域(let,const)</li><li>提供了定义类的语法糖(class)</li><li>新增了一种基本数据类型(Symbol)</li><li>新增了变量的解构赋值</li><li>函数参数允许设置默认值，引入了 rest 参数，新增了箭头函数</li><li>新增了模块化(import/export)</li><li>新增了 Set 和 Map 数据结构</li><li>原生提供 Proxy 构造函数，用来生成 Proxy 实例</li><li>新增了生成器(Generator)和遍历器(Iterator)</li></ul><h4>require与import的区别和使用(CommonJS规范和es6规范)</h4><ul><li>import ES规范 export多次导出 export default仅有一个</li><li>require exports属性是对外接口加载时 实在访问module.exports变量</li><li>require是运行时加载，import是编译时加载；</li><li>运行时加载，全部加载，用的时候找</li><li>编译时加载·，用那些加载那些，还能提前报错</li><li>require可以写在代码的任意位置</li><li>import只能写在文件的最顶端且不可在条件语句或函数作用域中使用；</li><li>require通过module.exports导出的值就不能再变化，import通过export导出的值可以改变；</li><li>require通过module.exports导出的是exports对象，import通过export导出是指定输出的代码；</li><li>require运行时才引入模块的属性所以性能相对较低，import编译时引入模块的属性所所以性能稍高。</li></ul><h4>箭头函数</h4><ul><li>箭头函数是匿名函数不能作为构造函数，不能使用new</li><li>箭头函数不绑定arguments,取而代之用rest参数…解决，</li><li>箭头函数通过call()或apply()调用一个函数,只传入了一个参数,对this并没有影响，不改变this</li><li> 箭头函数没有prototype(原型)，所以箭头函数本身没有this</li><li>写法简洁</li></ul><h4>Promise</h4><ul><li>解决回调地狱，all、reject、resolve、race </li><li>可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果，可以在对象之间传递和操作 promise，帮助我们处理队列</li><li>promise 有三个状态：pending[待定]初始状态，fulfilled[实现]操作成功，rejected[被否决]操作失败</li><li>Promise.all 回调添加捕获可以保证每个都会执行 all 顺序发起，异步完成</li><li>Promise.rece 返回第一完成的数据</li></ul><h4>async、await</h4><ul><li>async 函数返回promise对象</li><li>awiat 解析promise成功的对象 失败await后面的就不会在执行了</li><li></li></ul><h4>for...in 迭代和 for...of 有什么区别</h4><ul><li>对象for...in,数组for...of</li><li>for···in会遍历出来的为对象的key</li><li>for...of 便利对象会报错</li></ul><h4>Generator ，Iterator </h4><ul> Generator <li>function* 定义生成器</li><li>生成器函数不会执行任何代码，会返回Generator 的迭代器</li><li>使用next()访问 遇到yield停止</li><li>yield 相当于函数的返回值 返回两个属性 value, done done == true 迭代结束</li> Iterator <li>通过自动调用next函数访问下一元素</li></ul><h4>js构造函数的静态成员和实例成员</h4><ul><li>静态成员 构造函数本身的属性和方法，构造函数的this上直接添加</li><li>实例成员 实例的属性和方法</li></ul><h4>Set，Map</h4><ul><li>Set 不重复</li><li>Map key可以是任意变量，映射关系</li></ul><h4>proxy 和 reflect </h4><ul><li>Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义</li><li>Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。</li></ul>",20)];const o={};var u=(0,e(3744).Z)(o,[["render",function(l,i){return(0,r.wg)(),(0,r.iD)("section",null,t)}]])}}]);