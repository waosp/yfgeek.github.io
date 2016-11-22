---
title: Docker下的Ubuntu安装Sql Server for Linux 从入门到放弃
date: 2016-11-22 14:44:06
tags: docker sql-server
categories: docker
---

# 前言

微软已经不再是以前的那个微软了，如果微软SQL Server早开源几年，估计现在数据库方面就没有Oracle什么事情了。

Canonical 技术主管 Dustin Kirkland 表示：「微软和 Canonical 继续在 Windows 世界和 Linux 世界之间建立桥梁。 SQL Server on Ubuntu 便是这种趋势的又一示例。」


虽然docker hub下已经有mssql这个image，还是要尝试一下最新的SQL Server。
# 安装

docker 安装ubuntu

启动 docker

```
docker run -i -t ubuntu bash /bin/bash
```

安装必备软件

```
apt-get update
apt-get install -y git wget curl tar apt-transport-https sudo dialog systemd libpam-systemd systemd-gui
exit
```

保存镜像
```
docker ps -l
docker commit 2391a390a63f ubuntu #你的commit id
```
安装sql server
```
docker run -i -t ubuntu bash /bin/bash
#导入公共存储库GPG密钥
curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
#注册Microsoft SQL Server Ubuntu存储库
curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server.list > /etc/apt/sources.list.d/mssql-server.list
apt-get update
apt-get install -y mssql-server
```
完成安装
```
sudo /etc/init.d/dbus start # 确保dbus服务启动
sudo /opt/mssql/bin/sqlservr-setup
```
密码需要高复杂度

# 走过的坑
* SQL Server for Linux (需要3.75GB以上的内存)
* No usable dialog-like program is installed (``apt-get install dialog``)
* docker的ubuntu:latest不自带sudo/systemd/apt-transport-https命令(``apt-get sudo systemd apt-transport-https``)
* Failed to connect to bus: No such file or directory(``sudo /etc/init.d/dbus start``)
* Failed to execute operation: Launch helper exited with unknown return code 1 
* Failed to connect to bus: Connection refused
* Failed to start message bus: Failed to bind socket "/var/run/dbus/system_bus_socket": Address already in use (````)


# 参考
1.  systemd --user does not work: 'Failed to connect to bus'
https://answers.launchpad.net/ubuntu/+source/systemd/+question/287454

2.  关于docker出现systemctl无法使用问题 （独家）
http://www.w2bc.com/article/177598

3. 
