"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[7738],{7738:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var l=r(6252),a=r(3577),o=(0,l._)("h4",null,"后端传文档流 下载xlsx",-1),t=[(0,l.Uk)(""),(0,l._)("code",null,"\r\n    async function download(){\r\n        const res =  await  Axios.method(URL,paramsData,{responseType:'blob'})\r\n        const blob = new Blob([res.data], { \r\n        type: 'application/vnd.ms-excel', \r\n        });\r\n        const fileName = 'fileName.xlsx';                           //为文件起名\r\n        const a = document.createElement('a');                      //模拟a标签下载\r\n        a.download = fileName;\r\n        a.style.display = 'none';\r\n        a.href = window.URL.createObjectURL(blob);                  //内存中创建连接地址\r\n        a.setAttribute('download', fileName)\r\n        document.body.appendChild(a);\r\n        a.click();\r\n        URL.revokeObjectURL(a.href);                                 // 释放URL 对象\r\n        document.body.removeChild(a);  \r\n    }\r\n\r\n    //连接下载\r\n    window.open('downloadFile');                                  \r\n    location.href = 'downloadFile';             \r\n",-1),(0,l.Uk)("\r\n")],d=(0,l._)("h4",null,"按需加载 import是异步的",-1),i=[(0,l.Uk)(""),(0,l._)("code",null,"\r\n    async function todo(){\r\n        const package =  await import('packageUrl')\r\n        todo!\r\n    }\r\n",-1),(0,l.Uk)("\r\n")],c=(0,l._)("h4",null,"vue 插槽和默认内容互斥 $slots访问插槽name判断插槽是否使用",-1),u=(0,l.Uk)(""),w=(0,l.Uk)("\r\n"),s=(0,l._)("h4",null,"页面跳转携带token",-1),p=(0,l._)("ul",null,[(0,l._)("li",null,"直接调用接口后端重定向到新页面"),(0,l._)("li",null,"window.open(url, name)， 新页面使用window.name 获取参数的值进行判断")],-1),m=(0,l._)("h4",null,"后端返回 Html",-1),f=(0,l.Uk)(""),h=(0,l.Uk)("\r\n");const k={};var v=(0,r(3744).Z)(k,[["render",function(n,e){var r=(0,l.Q2)("code");return(0,l.wg)(),(0,l.iD)("section",null,[o,(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,t)),[[r]]),d,(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,i)),[[r]]),c,(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,[u,(0,l._)("code",null,"\r\n   "+(0,a.zw)(' <div  class="default" v-if="!$slots.default"></div>\n    <slot name="default"></slot>')+"\r\n",1),w])),[[r]]),s,p,m,(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,[f,(0,l._)("code",null,'\r\n    //打开新页面 渲染返回数据\r\n    var newPage = window.open("about:blank", "_blank");\r\n    newPage.document.write(response.data);\r\n    //文本中保存到流中，生成url，a 标签模拟点击 请求\r\n    var downloadUrl = window.URL.createObjectURL(data);\r\n    var a = document.createElement("a");\r\n    a.href = downloadUrl;\r\n    a.click()\r\n    //使用inner-html属性 v-html\r\n    '+(0,a.zw)('<div v-html="response.data"></div>')+"\r\n    //后端返回新页面，前端访问\r\n    window.location.href=path\r\n    //后端sendRedirect \r\n",1),h])),[[r]])])}]])}}]);