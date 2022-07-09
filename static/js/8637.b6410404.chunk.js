"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[8637],{98637:function(l,i,t){t.r(i),t.d(i,{default:function(){return h}});var u=t(66252),o=[(0,u.uE)("<h4>js的数据类型</h4><ul> 基本数据类型： <li>ES5的5种：Null，undefined，Boolean，Number，String</li><li>ES6新增：Symbol表示独一无二的值</li><li>ES10新增：BigInt 表示任意大的整数，解决整数溢出</li> 引用数据类型 <li>Object、Array、 function、Date、RegExp、自定义数据类型</li></ul><h4>数据类型存储以及堆栈内存是什么</h4><ul> 栈 <li>存贮基本数据类型，和引用数据类型的引用</li><li>占据空间小，大小固定，属于被频繁使用的数据</li> 堆 <li>存储引用数据类型的的值</li></ul><h4>数据类型判断</h4><ul><li>typeof 基本数据类型判断</li><li>instanceof 只能正确判断引用数据类型 判断在其原型链中能否找到该类型的原型</li><li>constructor 如果改变构造函数的原型指向 判断就会出错</li><li>Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型</li></ul><h4>js数据类型转换</h4><ul><li>转换为数字（调用Number(),parseInt(),parseFloat()方法）</li><li>转换为字符串（调用.toString()或String()方法）</li><li>转换为布尔值（调用Boolean()方法） 还有隐式转换 注意：null、undefined没有.toString方法</li></ul><h4>事件</h4><ul><li>文档和浏览器窗口中发生的特定的交互瞬间，事件就发生了</li><li>事件捕获 从事件发生的顶点开始，逐级往下查找，一直到目标元素。</li><li>事件 目标阶段 </li><li>事件冒泡 事件从目标节点逐级向上传递，直到根节点。</li></ul><h4>Javascript 的作用域和作用域链</h4><ul><li>作用域： 作用域是定义变量的区域</li><li>全局作用域</li><li>函数作用域</li><li>块级作用域</li><li>作用域链 变量先在当前作用域寻找，如果找不到就逐级向上寻找</li><li>延长作用域链 with Error 闭包</li><li>变量提升 节省内存开销</li></ul><h4>防抖节流</h4><ul><li>防抖：只触发最后一次，每次清除之前的事件</li><li>节流：每隔一段时间只发生一次，使用节流阀，触发之后打开节流阀</li></ul><h4>对象和面向对象</h4><ul><li>对象：属性和方法的集合叫做对象（万物皆对象）。</li><li>面向对象：封装，继承，多态</li><li>new Object、字面量、构造函数、原型。</li><li>new Object、字面量、 少量使用</li><li>大量使用 建议使用 class</li></ul><h4>深拷贝，浅拷贝</h4><ul><li>深拷贝 复制数据</li><li>浅拷贝 复制引用</li><li>JSON.parse(JSON.stringify())</li><li>Jquery.extend() </li><li>cloneDeep</li><li>递归操作</li></ul><h4>字符串存储</h4><ul><li>字符串的内容存于堆内存中，指针存于栈内存中，且相同的字符串指向同一个堆内存地址</li><li>新增或者修改字符串后，如果是一个之前不存在的字符串，则新开辟内存空间，如果是已有的，则直接使用已有的内存空间</li></ul><h4>函数</h4><ul><li>函数声明 function name ()</li><li>函数表达式 func = function ()</li><li>func = new Function(&quot;参数1&quot;,&quot;参数2&quot;,...,&quot;参数n&quot;,&quot;函数体&quot;);</li><li>立即执行函数 func=(function(n1,n2))()</li><li>函数声明会将那个函数提升到最前面，成为全局函数。funcname()调用</li><li>函数表达式不用，可以用作匿名函数 变量()调用</li><li>函数的length 没有默认值的参数的个数</li></ul><h4>立即执行函数</h4><ul><li>立即执行函数会形成一个单独的作用域，我们可以封装一些临时变量或者局部变量，避免污染全局变量。</li><li>代码在页面加载完成之后，不得不执行一些设置工作</li><li>所有的这些工作只需要执行一次，比如只需要显示一个时间。</li><li>需要一些临时的变量，但是初始化过程结束之后，就再也不会被用到</li></ul><h4>arguments </h4><ul><li>函数参数组成的arrayLike数据</li><li>箭头函数使用 args 剩余参数</li></ul><h4>this指向的问题</h4><ul><li>在全局的环境下this是指向window， 严格模式下this会指向 undefined</li><li>在对象里调用的this，指向调用函数的那个对象，</li><li>在构造函数以及类中的this，构造函数配合 new 使用, 而 new 关键字会将构造函数中的 this 指向实例化对象，所以构造函数中的 this 指向 当前实例化的对象</li><li>方法中的this谁调用就指向谁。</li><li>箭头函数没有自己的 this，箭头函数的this在定义的时候，会继承上下文的this</li></ul><h4>函数式编程含义</h4><ul><li>组合纯函数避免共享状态、可变作用和副作用来构建软件的过程。 </li><li>使用函数来抽象作用在数据之上的控制流和操作，从而在系统中消除副作用并减少对状态的改变。</li><li>纯函数，不改变参数，不改变环境，每次调用返回值相同</li></ul><h4>闭包</h4><ul><li>闭包的概念就是：只有权利访问另一个函数作用域中的变量</li><li>闭包可以重用一个变量，且变量不会被污染，延长变量生命周期</li><li>缺点，内存消耗大，容易造成内存泄漏</li><li>使用场景 创建私有变量 函数柯里化 模块化</li></ul><h4>函数柯里化</h4><ul><li>函数返回一个函数 闭包</li><li>延迟计算、参数复用、动态生成函数</li><li>闭包的一种应用</li></ul><h4>什么是高阶函数？</h4><ul>函数的参数 或者返回值是函数</ul><h4>new</h4><ul><li>开辟内存空间</li><li>创建空对象，构造函数的this指向空对象</li><li>新对象执行原型连接，添加原型</li><li>执行构造函数，添加属性和方法</li><li>判断是否有返回值，没有返回this，有返回构造函数的返回值</li></ul><h4>垃圾回收</h4><ul><li>自动内存管理</li><li>引用计数 循环引用</li><li>标记扫除算法</li><li>内存泄露 闭包 Dom 计时器</li></ul><h4>js执行</h4><ul><li>单线程</li><li>同步任务</li><li>宏任务 定时器 ajax </li><li>微任务 promise process.nextTick</li><li>先执行同步任务-&gt; 异步任务-&gt;先执行微任务-&gt;再执行宏任务</li></ul><h4>延迟加载</h4><ul><li>js放在底部</li><li>defer属性 加载完文档再执行 序列化下载</li><li>async 下载完立即执行 有依赖关系不要使用 异步下载</li><li>监听dom load事件</li></ul><h4>location、lnavigator、history</h4><ul><li>location 对象存储了当前文档位置（URL）相关的信息</li><li>history 存储了用户（在浏览器窗口中） 访问过的 URL。</li><li>navigator 对象包含有关浏览器的信息</li></ul><h4>对象原型__proto__，原型对象prototype，原型链，构造函数 constructor</h4><ul><li>原型对象 构造函数的prototype属性指向另一个对象，这个对象的方法和属性都会被构造函数所拥有</li><li>对象原型 对象实例的__proto__属性指向构造函数的prototype原型对象 这样我们就可以在实例对象上使用原型对象的方法和属性 Object的__proto__是null</li><li>原型链 构造函数的prototype属性是一个对象所以他也拥有__proto__属性访问他自己的原型对象</li><li>对象在寻找属性和方法时会先在对象内部找，找不到就会在__proto__上找，没有找到会一直往上找，直到为null</li><li>构造函数 constructor __proto__和构造函数的prototype都有constructor属性，指向constructor本身</li><li>原型对象产生原因 需要大量创造实例 实例上相同的属性和方法保存在原型对象上，每个实例共享原型对象的引用对象原型__proto__</li></ul><h4>dom消耗性能</h4><ul><li>修改 DOM 元素，引起上下文切换，性能消耗小，引起重绘，性能消耗大</li><li>性能消耗在 JS 对象和 DOM 对象的转换和同步。也就是 V8XXX::toNative() 和 ::toV8() 的调用。</li><li>很多 DOM API 的读写都涉及页面布局的 重新计算，涉及到样式还要重绘</li><li>减少DOMAPI的调用可以提升性能,虚拟DOM只是一种方式</li><li>虚拟DOM最大的意义是可移植</li></ul>",50)];const n={};var h=(0,t(83744).Z)(n,[["render",function(l,i){return(0,u.wg)(),(0,u.iD)("section",null,o)}]])}}]);