"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[9713],{39713:function(n,r,e){e.r(r),e.d(r,{default:function(){return o}});var i=e(66252),t=(0,i._)("h4",null,"requestAnimationFrame 动画使用及内存泄漏问题",-1),a=[(0,i.Uk)(""),(0,i._)("code",null,"\r\n    requestAnimationFrame 每秒60次执行\r\n    let animation //使用变量接收动画的返回值 不接受会一直开启新的定时器 最终会造成内存泄漏\r\n    function render(){\r\n        !todo\r\n        animation = requestAnimationFrame(render)\r\n        if(end){\r\n            cancelAnimationFrame(animation) //取消定时器\r\n        }\r\n    }\r\n    animation = requestAnimationFrame(render)\r\n",-1),(0,i.Uk)("\r\n")];const u={};var o=(0,e(83744).Z)(u,[["render",function(n,r){var e=(0,i.Q2)("code");return(0,i.wg)(),(0,i.iD)("section",null,[t,(0,i.wy)(((0,i.wg)(),(0,i.iD)("pre",null,a)),[[e]])])}]])}}]);