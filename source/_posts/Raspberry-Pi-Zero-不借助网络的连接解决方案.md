---
title: Raspberry Pi Zero 无键盘网络配置指南
date: 2016-12-17 21:58:26
tags: Raspberry  
categories: Raspberry  
permalink: raspizero
---

我大概是个Raspberry Pi粉丝，到了英国后总感觉不买点树莓派的东西亏，可是之前已经在中国买了树莓派3了，于是决定买点特别的，做点有意思的事情。

上个月，鉴于我在英国的巨大地理优势的缘故，买了一个4磅的Raspberry Pi Zero，不过网络上关于树莓派Zero的文章真的甚少，因为实在太难原价买到了。

<!--more--> 

请注意，不要认为所谓的4磅很便宜，毕竟，我还多掏了2.50磅的邮费。树莓派Zero在中国并不便宜，因为树莓派Zero的产能有限，每周只能供很少的货，买树莓派Zero就像抢12306一样，我抢了两周，也正是因为这个原因，树莓派Zero在亚马逊的黄牛卖家卖20磅，淘宝卖120元左右，实际上原价只有40元左右。

# 信仰充值

![](/content/images/raspizero/mail.jpg)

滴！信仰充值成功！

没有错，你没有看错，就是这么小，但是小也有小的坏处，没有USB口，没有Wi-Fi，没有网线接口，似乎什么都没有用。

* 1Ghz, Single-core CPU
* 512MB RAM
* Mini HDMI and USB On-The-Go ports
* Micro USB power
* HAT-compatible 40-pin header
* Composite video and reset headers

不过值得一提的是，USB On-The-Go接口也可以用来供电。

# 发车

那么关键问题就来了，如何才能在 没有网口、没有Wi-Fi、没有显示器、没有鼠标、没有键盘的情况下 配置可爱的树莓派Zero呢？

1.下载完整版 Raspbian Jessie 或 Raspbian Jessie Lite 系统，并且刷到你的SD Card里，Windows用Win32 Disk Imager， Mac/Linux 用命令，如下：

```bash
diskutil list
diskutil unmountDisk /dev/SD卡的标号 #如disk2
cd /Users/ivan/Downloads/2016-11-25-raspbian-jessie #进入目录
sudo dd bs=1m if=2016-11-25-raspbian-jessie.img of=/dev/rdisk2
```
2.刷好系统后编辑`config.txt`文件，在最后一行下，另起一行添加：
```bash
dtoverlay=dwc2
```
保存文件

3.最后，打开`cmdline.txt`文件。
找到单词`rootwait`，在其之后添加：

```
modules-load=dwc2,g_ether
```

4.添加一个文件名为`ssh`到根目录下，内容为空


5.把SD Card放到树莓派Zero，用安卓数据线与电脑连接，USB口接OTG口，等待60-90s，电脑会发现网卡并且自动配置ip地址。

![](/content/images/raspizero/1.png)

6.Ping 一下raspberrypi.local看是否能通

```
PING raspberrypi.local (169.254.70.245): 56 data bytes
64 bytes from 169.254.70.245: icmp_seq=0 ttl=64 time=0.570 ms
64 bytes from 169.254.70.245: icmp_seq=1 ttl=64 time=0.338 ms
64 bytes from 169.254.70.245: icmp_seq=2 ttl=64 time=0.316 ms
64 bytes from 169.254.70.245: icmp_seq=3 ttl=64 time=0.344 ms
```

7.ssh连接raspberrypi.local，默认密码为raspberry
```bash
pi@raspberrypi.local
```

# 配置

因为没有网络，只能通过下载离线安装文件，传输到树莓派内，再在树莓派里安装。

## 配置树莓派
通过直接运行``raspi-config``命令

你需要做
* 容量扩展
* 更改系统时区
* 更改系统密码

同时你需要通过执行``sudo passwd root``更改root密码


# 参考
https://gist.github.com/gbaman/975e2db164b3ca2b51ae11e45e8fd40a#file-howtootgfast-md


