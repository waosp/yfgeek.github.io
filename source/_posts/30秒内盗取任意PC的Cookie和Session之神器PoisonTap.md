---
title: 30秒内盗取任意PC的Cookie和Session之神器PoisonTap
date: 2016-12-18 18:44:51
tags: hack 
categories: hack
---

著名黑阔Samy Kamkar利用Raspberry Pi Zero黑客神器PoisonTap，只需30秒，就可以窃取有任意密码的电脑系统下的Cookie和Session，并实现长期后门安装。PoisonTap不是暴力破解密码，而是绕过密码。

是的，买了Raspberry Pi Zero，有幸尝试了一下这个基于Node的工具，真乃神器。

<!--more-->

# 介绍

PoisonTap 通吃 Windows/Mac/Linux系统。其实现原理十分猥琐。

![](/content/images/poisontap/1.gif)

把自己伪装成有线网卡，一旦插入系统中，众所周知，所有的操作系统的规则都是这样的：

> 有线网络>无线网络

也就是说，如果他连接着Wi-Fi，没关系，系统会以我的伪网卡为最高优先级。在系统处于锁屏状态下，只要有网络通信，无论系统通信哪个都会被强制跳转到我用于 攻击你的页面 ，成批量的窃取你的Cookie和Session。

没错，就是你猜到的MITM，中间人攻击。通过PoisonTap，我们可以：

- 模拟成一个伪USB网卡
- 不需要解锁电脑就可以实现攻击
- 劫持系统所有网络连接的所有流量 包括局域网
- 窃取储存Alexa前一百万的网站的Cookie和Session
- 用远程outbound的方式进行WebSocket或DNS重绑定攻击
- 用HTTP的JS缓存禁止对该PC进行web后门安装，缓存涉及到上千个域名和cdn js缓存供应商
- 截取Cookie后可以使用该PC的Cookie进行登录，实现中间人攻击的最终目标

PoisonTap比你想象的更强大的是，PoisonTap能够突破以下普通MITM办不到的几点：

* 锁屏密码
* 路由表ARP的优先级设置和网络适配器优先级设置
* 同源策略 (Same-Origin Policy)
* X-Frame-Options 响应头攻击
* Cookie的HttpOnly安全设置
* Cookie的SameSite安全属性
* 两步/多步验证密码(2FA/MFA)
* DNS劫持
* 跨域资源共享CORS
* HTTPS cookie 保护


![](/content/images/poisontap/2.gif)

# 参考
https://github.com/samyk/poisontap
