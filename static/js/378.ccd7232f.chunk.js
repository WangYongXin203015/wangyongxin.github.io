"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[378],{378:function(r,e,n){n.r(e),n.d(e,{default:function(){return l}});var t=n(66252),a=n(3577),i=(0,t._)("h4",null,"WebGPU项目搭建",-1),o=[(0,t.Uk)(""),(0,t._)("code",null,"\r\n    //使用webpack创建项目\r\n    index.html 添加 canvas元素\r\n    "+(0,a.zw)(' <div style="text-align: center;">\n        <canvas id="canvas" width="800" height="800" ></canvas>\n    </div>')+'\r\n    //着色器会写成单独的wgsl文件 所以我们需要 raw-loader\r\n    // raw-loader 可以将文件加载为文本格式\r\n    npm install --save-dev raw-loader\r\n    //使用时需要使用ESmodule\r\n    //声明文件添加\r\n\r\n    declare module "*.wgsl" {\r\n        const value: string;\r\n        export default value;\r\n    }\r\n    //package.json 添加\r\n    {    \r\n        ...\r\n        "type": "module",\r\n    }\r\n    //webpack 引入方式需要改成ESmodule引入方式\r\n    //使用dirname 需要自己获取\r\n    import url from \'url\';\r\n    import path from \'path\';\r\n    const dirname = path.dirname(url.fileURLToPath(import.meta.url));\r\n    //webpack.config.js module节点添加\r\n    rules: [\r\n        ...\r\n        {   test: /\\.wgsl$/, use: ["raw-loader"]},\r\n    ]\r\n    npm install @webgpu/types \r\n    //tsconfig.json compilerOptions节点 添加\r\n    {\r\n        ...\r\n        "types": ["@webgpu/types"], \r\n    }\r\n',-1),(0,t.Uk)("\r\n")],c=(0,t._)("h4",null,"开始学习",-1),s=[(0,t.Uk)(""),(0,t._)("code",null,'\r\n    //基础步骤\r\n    //获取设备相关 \r\n    //创建渲染管线\r\n    //指令编码器开启渲染管道\r\n    export  async function initwebGpu(id:string){\r\n        if(!navigator.gpu) throw Error() //判断浏览器是否支持 对古朴的代理\r\n        const adapter:GPUAdapter | null  = await navigator.gpu.requestAdapter({powerPreference:"high-performance"}) // 代理gpu\r\n        if (!adapter) throw Error()\r\n        const device:GPUDevice = await adapter.requestDevice()  //获取逻辑Gpu js 可以操作\r\n        if (!device) throw Error()\r\n        const canvas:HTMLCanvasElement | null = document.querySelector(id) //获取画布 具体节点\r\n        if (!canvas) throw Error()\r\n    const context:GPUCanvasContext | null =  canvas.getContext("webgpu") //逻辑对象\r\n    if (!context) throw Error()\r\n        // const format = context.getPreferredFormat(adapter) //将被弃用\r\n        const format:GPUTextureFormat = navigator.gpu.getPreferredCanvasFormat()\r\n        const size = [\r\n            canvas.clientWidth * window.devicePixelRatio,\r\n            canvas.clientHeight * window.devicePixelRatio\r\n        ]\r\n        console.dir(canvas);\r\n        \r\n    context?.configure({\r\n        device,\r\n        format,\r\n        // size,\r\n        alphaMode:"opaque"\r\n    })\r\n    return {adapter, device,canvas,context,format}\r\n    }\r\n\r\n    export  async function initPipeline (device:GPUDevice, format:GPUTextureFormat, vertex:string,fragment:string){\r\n        // device.createComputePipeline\r\n        //顶点着色器 \r\n        const  vertexShader=device.createShaderModule({ \r\n            code:vertex,\r\n        })\r\n        //片元着色器\r\n        const fragmentShader =device.createShaderModule({\r\n            code:fragment\r\n        })\r\n        //创建渲染管线\r\n        const pipeline:GPURenderPipeline =await  device.createRenderPipelineAsync({ \r\n            layout:"auto",\r\n            vertex: {\r\n                module:device.createShaderModule({\r\n                    code: vertex, // 顶点着色器代码\r\n                }),\r\n                entryPoint: \'main\', // 入口函数\r\n            },\r\n            fragment: {\r\n                module:device.createShaderModule({\r\n                    code: fragment, // 片元着色器代码\r\n                }),\r\n                entryPoint: \'main\',\r\n                targets: [\r\n                    {\r\n                        format: format, // 即上文的最终渲染色彩格式\r\n                    },\r\n                ],\r\n            },\r\n            primitive:{\r\n                //绘图模式 list 不会复用 strip 回复用重复线段和点\r\n                topology:"triangle-strip"\r\n            },\r\n            multisample:{\r\n                count:4 \r\n            },\r\n        })\r\n        return {pipeline}\r\n    }\r\n\r\n    export function render(device:GPUDevice,pipeline:GPURenderPipeline,context:GPUCanvasContext) {\r\n        const size = [\r\n            canvas.clientWidth * window.devicePixelRatio,\r\n            canvas.clientHeight * window.devicePixelRatio\r\n        ]\r\n\r\n        const texture = device.createTexture({\r\n            size,\r\n            sampleCount: 4,\r\n            format: navigator.gpu.getPreferredCanvasFormat(),\r\n            usage: GPUTextureUsage.RENDER_ATTACHMENT,\r\n        });\r\n        const renderPassDescriptor = {\r\n            colorAttachments: [\r\n                {\r\n                    resolveTarget:context.getCurrentTexture().createView(),\r\n                    view:  texture.createView(),\r\n                    loadOp:"clear",\r\n                    storeOp: \'store\',\r\n                }, \r\n            ],\r\n        }\r\n        const renderPassEncoder= cmdEncoder.beginRenderPass(renderPassDescriptor);\r\n        renderPassEncoder.setPipeline(pipeline);\r\n        renderPassEncoder.draw(3, 1, 0, 1);\r\n        renderPassEncoder.end();  //录制结束\r\n        device.queue.submit([cmdEncoder.finish()])//结束绘制\r\n    }\r\n',-1),(0,t.Uk)("\r\n")];const d={};var l=(0,n(83744).Z)(d,[["render",function(r,e){var n=(0,t.Q2)("code");return(0,t.wg)(),(0,t.iD)("section",null,[i,(0,t.wy)(((0,t.wg)(),(0,t.iD)("pre",null,o)),[[n]]),c,(0,t.wy)(((0,t.wg)(),(0,t.iD)("pre",null,s)),[[n]])])}]])}}]);