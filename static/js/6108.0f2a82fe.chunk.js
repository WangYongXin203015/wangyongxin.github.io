"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[6108],{86108:function(l,i,e){e.r(i),e.d(i,{default:function(){return r}});var t=e(66252),u=[(0,t.uE)("<h4>MVC MVVM</h4><ul> MVC Model View Controller <li>Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据</li><li>View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的</li><li> Controller（控制器）：是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据,也可以将Model的数据用View显示出来</li><li>优点低耦合方便维护</li> MVVM Model-View-ViewModel <li>vm ViewModel</li><li>Model变化 ViewModel 通知View更新</li><li>View变化 ViewModel 通知Model更新</li><li>数据和试图双向绑定</li></ul><h4>Vue底层实现原理</h4><ul> vue2 <li>Object.defineProperty()来劫持各个属性的setter和getter</li><li>数组劫持原型上的方法</li><li>新增属性无法劫持到</li><li>给每个组件添加watcher</li> vue3 <li>Proxy 代理数据 和 Reflect </li> 原理 <li>劫持数据 添加get set属性</li><li>get收集依赖 编译模板的时候触发get v2添加dep v3添加track </li><li>set 触发更新 更新数据时 v2触发notice v3trigger 派发更新</li></ul><h4>Vue2 和 Vue3的区别</h4><ul><li>tree shaking 得益于ES Module 的静态编译 需要那块引入那块</li><li>vue3 进行了模块化开发</li><ul>vue3 模块化 <li>Compiler 模块 <ul><li>compiler-core</li><li>compiler-dom</li><li>compiler-sfc</li><li>compiler-ssr</li></ul></li><li>Runtime 模块 <ul><li>runtime-core</li><li>runtime-dom</li><li>runtime-test</li></ul></li><li>Reactivity 模块 <ul><li>reactivity</li></ul></li></ul><li>vue3 使用watchEffect 可以清除副总用</li></ul><h4>虚拟Dom Diff算法</h4><ul> 虚拟Dom <li>本质是js对象 树状数据</li> Diff算法 <li>同级比较</li> key的作用 <li>Diff操作可以更加快速;</li><li>Diff操作可以更加准确;(避免渲染错误)</li></ul><h4>自定义指令</h4><ul><li>bind 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置</li><li>inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。</li><li>update：所在组件的 VNode 更新时调用</li><li>componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。</li><li>unbind：只调用一次，指令与元素解绑时调用。</li><li>ele：元素，binding：绑定的对象传递的参数，vnode，prevVnode</li><li>vue3 使用 Directive Hooks</li><li>类似组件再created 接受参数</li></ul><h4>跨域</h4><ul> 域名，协议，端口号一个不完全相同就会跨域，是浏览器行为，同源策略 <li>JSONP 利用 dom元素的src属性 只支持get 查询时指定callback 通过callback获取数据</li><li>CROS 服务器设置Access-Control-Allow-Origin</li><li>webpack本地代理 devServer中的proxy</li><li>Nginx反向代理 前端请求数据，服务器转发</li></ul><h4>assets和static的区别？</h4><ul><li>asset 会被编译</li><li>static 不会被打包编译</li></ul><h4>输入url 到渲染页面</h4><ul><li>输入合法url会访问url 否则默认搜索引擎合成合法url访问</li><li>查找缓存 先去本地缓存查找，有就拦截求情，返回缓存资源，没有发送请求</li><li>DNS解析 DNS 查找数据缓存服务中是否缓存过当前域名信息，有则直接返回；否则，会进行 DNS 解析返回域名对应的 IP 和端口号，如果没有指定端口号，http 默认 80 端口，https 默认 443。如果是 https 请求，还需要建立 TLS 连接；</li><li>建立TCP连接 三次握手</li><li>发送请求</li><li>服务器处理请求</li><li>页面渲染</li><li><ul><li>浏览器将获取的HTML文档解析成DOM树</li><li>处理CSS标记，构成层叠样式表模型CSSOM(CSS Object Model)。</li><li>将DOM和CSSOM合并为渲染树(rendering tree)，代表一系列将被渲染的对象。</li><li>渲染树的每个元素包含的内容都是计算过的，它被称之为布局layout。浏览器使用一种流式处理的方法，只需要一次绘制操作就可以布局所有的元素。</li><li>将渲染树的各个节点绘制到屏幕上，这一步被称为绘制painting。</li></ul></li><li>断开 TCP 连接：四次挥手 Connection: keep-alive 会一直连接</li></ul><h4>Http和Https区别（高频）</h4><ul><li>HTTP 标准端口是80 ，而 HTTPS 的标准端口是443</li><li>HTTPS 对传输的数据进行加密，证的网络协议，安全性高于HTTP协议</li><li>HTTPS 需要CA机构wosign的颁发的SSL证书，一般免费证书少，因而需要一定费用</li></ul><h4>GET 和 POST</h4><ul><li>GET在浏览器回退不会再次请求，POST会再次提交请求</li><li>GET请求会被浏览器主动缓存，POST不会，要手动设置</li><li>GET请求参数会被完整保留在浏览器历史记录里，POST中的参数不会</li><li>GET请求在URL中传送的参数是有长度限制的，而POST没有限制</li><li>GET参数通过URL传递，POST放在Request body中</li><li>GET参数暴露在地址栏不安全，POST放在报文内部更安全</li><li>GET一般用于查询信息，POST一般用于提交某种信息进行某些修改操作</li><li>GET产生一个TCP数据包；POST产生两个TCP数据包 POST会先发送请求头，服务器响应了再发送数据</li><li>私密性的信息请求使用post</li><li>查询信息用get</li></ul><h4>三次握手：</h4><ul><li>第一次：建立连接时，客户端发送syn包到服务器，等待服务端确认</li><li>第二次：服务器收到syn包，必须确认客户的syn，同时也发送一个syn包，即syn+ACK包</li><li>第三次：客户端收到服务器的syn和ack包，向服务器发送确认包ack，发送完毕，客户端和服务端连接成功，完成三次握手</li></ul><h4>四次挥手</h4><ul><li>第一次：浏览器发送完数据后，发送fin请求断开连接</li><li>第二次：服务器发送ack到客户端，确认客户端的断开请求</li><li>第三次：服务器请求断开fin的请求</li><li>第四次：客户端确认服务器的断开ack</li></ul><h4>缓存</h4><ul><li>强制缓存 Cache-Control和Expires 控制缓存 </li><li>协商缓存Last-Modified/If-Modified-Since Etag/If-None-Match 控制缓存</li><li>协商缓存由服务器决定是否去使用缓存 使用缓存返回304，重新返回数据200</li><li>memory cache 内存中</li><li>disk cache 磁盘里</li></ul><h4>回流和重绘</h4><ul><li>重绘：元素外观改变，不改变布局</li><li>回流/重排：重新计算元素,重新生成布局</li><li>回流一定会触发重绘，而重绘不一定会回流</li></ul><h4>router与route区别</h4><ul><li>route对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等。</li><li>router对象是全局路由的实例，是router构造方法的实例。</li></ul><h4>导航守卫</h4><ul><li>router.beforeEach 全局前置守卫</li><li>router.beforeResolve全局解析守卫</li><li>router.afterEach 全局后置守卫</li><li>beforeEnter 路由独享守卫</li></ul><h4>NextTick() 和UI更新</h4><ul><li>在下次 DOM 更新循环结束之后执行延迟回调</li><li>更新循环结束之后 调用NextTick触发真正的页面更新</li><li>ui更新是异步，批量更新，只关心最终的数据而不关心更新了多少次，只有tick的时候更新页面</li><li>异步队列执行完， UI 调用NextTick触发真正的页面更新 ，返回值是promise所以可以使用.then</li></ul><h4>computed和watch的区别是什么</h4><ul><li>computed和watch都基于watcher来实现的。</li><li>computed的属性是具备缓存的，依赖的值不发生变化，对其取值时计算属性方法不会重复执行</li><li>watch是监控值的变化，当值发生改变的时候，会调用回调函数</li><li>computed实现 <ul><li>在组件初始化的时候，computed和data会分别建立各自的响应系统</li><li>初始化computed会调用initComputed函数</li><li>注册个watcher实例， deps watcher 有两个 render watcher 和 computed watcher 当computed 发生变化 会通知这两个watcher</li><li>调用计算属性时会触发其objecet.defineProperty的get访问器函数</li><li>调用watcher.depend()方法向自身的消息订阅器dep的subs中添加其他属性的watcher 计算属性也可以作为依赖项</li><li>调用watcher的evaluate方法的get方法让自身成为其他watcher 的消息订阅者 ，触发get 时其他watcher会订阅本依赖性</li><li>当属性发生变化，触发set，会通知订阅者，</li><li>缓存实现 当依赖项set被调用 watcher.dirty 属性进行判断 dirty 为true 重新计算，否则直接返回 </li><li>data 给每个属性添加get 和 set data的watcher只有render-watcher data 不会订阅其他东西</li><li>data 收集依赖 收集依赖的时候 需要收集页面上的get(编译模板)，computed 的get，watch 的get </li><li>computed computed 可以订阅data和computed 根据 依赖性项改变 依赖项的set 被触发computed </li><li>computed 收集依赖的时候 需要收集页面上的get(编译模板) 和 computed 其他项的get， watch 的get </li><li>computed 既是订阅者，又是发布者</li></ul></li><li>watch的实现 <ul><li>initWatch 遍历watch对象 调用createWatcher方法，配发watcher</li><li>给监听的数据 添加 watch的依赖 数据变化，会通知watch更新 调用回调</li><li>immediate 初始化的时候调用回调</li><li>deep 深度监听 深度监听调用traverse 递归监听</li><li>watcher.update 更新数据 读取原值， 保存到oldvalue，再将传来的value赋值给value 调用callback</li><li>watch 只是订阅者</li></ul></li></ul><h4>v-if和v-for的那个优先级更高</h4><ul><li>2.x当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。</li><li>3.x当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级。</li><li>2.x指令的优先级 once&gt;for&gt;if&gt;tag ==template &gt; tag==solt&gt;</li><li>2.x 同时出现会先for 之后再if 浪费性能 </li><li>如果同时出现 可以再for外面包裹一层 外层盒子使用v-if </li></ul><h4>data为什么是函数</h4><ul><li>函数拥有独立的作用域，多实例不干扰</li><li>vue根实例是单例</li></ul><h4>生命周期</h4><ul><li>生命周期 是不同阶段的回调函数</li><li>组件在某些特点时间调用的函数</li><li>beforeCreate无法访问methods， data， computed等上的方法和数据。</li><li>created 可以访问methods， data， computed </li><li>beforeMount </li><li>mounted 只会执行一次挂载完成</li><li>beforeUpdate 数据更新之前 虚拟Dom重现渲染和打补丁之前，修改数据不会触发渲染</li><li>updated 调用时组件已经更新 updata中避免更改状态</li><li>beforeDestroy 销毁前调用 实例完全可用 回收资源</li><li>destroyed 实例销毁之后调用</li></ul><h4>Suspense</h4><ul><li>异步组件</li><li>两个插槽 #default 和 #fallback </li><li>fallback timeout属性 耗时多少后 展示fallback</li></ul><h4>Teleport 传送门 </h4><ul><li>&lt;Teleport to=&quot;body&quot;&gt;</li><li>可以将模板内的一部分传送带模板外</li><li>disabled 属性禁止使用</li><li>多个传送门 会向下排列</li></ul>",46)];const o={};var r=(0,e(83744).Z)(o,[["render",function(l,i){return(0,t.wg)(),(0,t.iD)("section",null,u)}]])}}]);