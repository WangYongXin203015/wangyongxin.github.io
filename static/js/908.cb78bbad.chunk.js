"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[908],{20908:function(e,i,l){l.r(i),l.d(i,{default:function(){return n}});var c=l(66252),r=[(0,c.uE)("<h4>vec常用方法</h4><ul><li>Vec::new()</li><li>vec!() 宏</li><li>vec.push()</li><li>vec.pop();</li><li>vec[index]</li><li>vec.capacity() 查看空间</li><li>vec.reserve_exact(add) 扩大空间</li><li>vec.try_reserve(add) 容量将大于或等于self.len()+add 如果已经够了 不操作避免频繁分配空间</li><li>vec.try_reserve_exact()</li><li>vec.shrink_to_fit() 缩小空间</li><li>vec.into_boxed_slice() 返回Box 缩小空间</li><li>vec.truncate(number) 裁取前几个</li><li>vec.as_slice() 返回切片</li><li>vec.as_mut_slice() 可变切片</li><li>vec.remove(index) 返回移除数据</li><li>vec.retain(F) 传入闭包进行筛选</li><li>vec.retain_mut() 返回一个可变引用</li><li>vec.dedup_by_key() 传入key 或者闭包 连续相同的key 保留第一个 相当于 连续串的去重</li><li>vec.dedup_by() 传入闭包 移除符合条件的连续串保留第一个</li><li>vec.append(vecOther) 将vecOther 的元素移入vec</li><li>vec.drain(range) 移除range 内元素 返回切片</li><li>vec.clear() 置空</li><li>vec.split_off(index) 原始vec=vec[0,index),返回vec[index,len)</li><li>vec.extend_from_slice(&amp;arr) 从arr切片拓展</li><li>vec.extend_from_within(range) 把自己的切片添加到原vec上</li><li>vec.splice(range, arr).collect() 用arr替换range的内容 获取新的vec</li><li>arr.to_vec() arr 转换vec</li><li>&amp;vec.join(ele) 将一个切片变为单个值，并给每个值之间添加分隔符</li></ul>",2)];const v={};var n=(0,l(83744).Z)(v,[["render",function(e,i){return(0,c.wg)(),(0,c.iD)("section",null,r)}]])}}]);