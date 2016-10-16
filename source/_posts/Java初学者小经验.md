---
title: Java初学者小经验
date: 2016-09-30 12:47:27
tags: Java
categories: Java
---
# Java初学者小技巧
我是个Java新手，总结了一些经验

## 构造器和方法的区别
<table><tbody><tr></tr><tr><th><font>主题</font></th><th><font>构造器</font></th><th><font>方法</font></th></tr><tr><td><font>功能</font></td><td><font>建立一个类的实例</font></td><td><font>java功能语句</font></td></tr><tr><td><font>修饰</font></td><td><font>不能用<code>bstract</code>, <code>final</code>, <code>native</code>, <code>static</code>, or <code>synchronized</code></font></td><td><font>能<code></code></font></td></tr><tr><td><font>返回类型</font></td><td><font>没有返回值，没有void<code></code></font></td><td><code><font>有返回值，或者void</font></code></td></tr><tr><td><font>命名</font></td><td><font>和类名相同；通常为名词，大写开头</font></td><td><font>通常代表一个动词的意思，小写开头</font></td></tr><tr><td><code><font>this</font></code></td><td><font>指向同一个类中另外一个构造器，在第一行</font></td><td><font>指向当前类的一个实例，不能用于静态方法</font></td></tr><tr><td><code><font>super</font></code></td><td><font>调用父类的构造器，在第一行</font></td><td><font>调用父类中一个重载的方法</font></td></tr><tr><td><font>继承</font></td><td><font>构造器不能被继承</font></td><td><font>方法可以被继承</font></td></tr><tr><td><font>编译器自动加入一个缺省的构造器</font></td><td><font>自动加入（如果没有）</font></td><td><font>不支持</font></td></tr><tr><td><font>编译器自动加入一个缺省的调用到超类的构造器</font></td><td><font>自动加入（如果没有）</font></td><td><font>不支持</font></td></tr></tbody></table>
# Java
* 输入args
# Eclipse
* `alt + /` 自动补全
* `ctrl+shift+F` 格式化代码
* 