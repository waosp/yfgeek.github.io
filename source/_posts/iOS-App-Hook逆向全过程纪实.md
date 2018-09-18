---
title: iOS App Hook逆向全过程纪实——添加虚拟定位
date: 2018-09-18 09:26:08
tags: Hack
categories: Hack
---

# 前言

# 下载APP

因为我的需要Hook的APP是企业级APP，从Safari里安装。所以，可以直接在网站上下载到ipa文件。

在电脑上，打开企业提供的网址，找到iOS安装入口，点击下载，会自动下载一个`.plist`文件，打开如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>items</key>
	<array>
		<dict>
			<key>assets</key>
			<array>
				<dict>
					<key>kind</key>
					<string>software-package</string>
					<key>url</key>
					<string>https://**/下载地址/</string>
				</dict>
				<dict>
					<key>kind</key>
					<string>display-image</string>
					<key>url</key>
					<string>https://**/ios-icon/</string>
				</dict>
				<dict>
					<key>kind</key>
					<string>full-size-image</string>
					<key>url</key>
					<string>https://**/ios-icon/</string>
				</dict>
			</array>
			<key>metadata</key>
			<dict>
				<key>bundle-identifier</key>
				<string>xxx.xxx.com</string>
				<key>bundle-version</key>
				<string>1.0.0</string>
				<key>kind</key>
				<string>software</string>
				<key>title</key>
				<string>软件名字</string>
			</dict>
		</dict>
	</array>
</dict>
</plist>

```

找到`software-package`中的`url`值，复制到浏览器，会自动请求服务器，下载一个带有企业签名的ipa文件。

# 确认是否脱壳解密

把ipa文件后缀改成zip，然后解压，会看到.app文件

```bash
file /Users/ivan/Desktop/Payload/xxx.app/xxx
/Users/ivan/Desktop/Payload/xxx.app/xxx: Mach-O universal binary with 2 architectures: [arm_v7:Mach-O executable arm_v7] [arm64]
/Users/ivan/Desktop/Payload/xxx.app/xxx (for architecture armv7):	Mach-O executable arm_v7
/Users/ivan/Desktop/Payload/xxx.app/xxx (for architecture arm64):	Mach-O 64-bit executable arm64
```

可见，xxx包含armv7和arm64两个版本。

otool可以输出app的load commands，然后通过查看cryptid这个标志位来判断app是否被加密。1代表加密了，0代表被解密了：

```bash
otool -l /Users/ivan/Desktop/Payload/xxx.app/xxx   | grep -B 2 crypt
          cmd LC_ENCRYPTION_INFO
      cmdsize 20
     cryptoff 16384
    cryptsize 4161536
      cryptid 0
--
          cmd LC_ENCRYPTION_INFO_64
      cmdsize 24
     cryptoff 16384
    cryptsize 4866048
      cryptid 0
```

可见，xxx为0状态，企业级app不在app stroe上发布，没有被加密。

# 测试重新签名

## 重新签名打包

GitHub上的`Urinx`大佬为我们准备了一键化的重新签名工具`Appsign`，非常好用，下载地址：

https://github.com/Urinx/iOSAppHook/releases

下载后，测试能否重新签名，因为我们的最终目的是将程序重新打包签名，将带有tweak的程序安装到手机上，这一步骤至关重要。

赋予执行权限

```bash
chomd +x /Users/ivan/Downloads/AppResign
```

执行命令，按照AppResign的要求，命令为``AppResign input output``

```bash
/Users/ivan/Downloads/AppResign  /Users/ivan/Desktop/要被签名的文件.ipa  /Users/ivan/Desktop/output/输出的文件xxx.ipa
=============================
[*] Configure Resigning
Choose Signing Ceritificate:
[0] iPhone Developer: aabb@foxmail.com (3N2H*****3)
[1] *****
[2] iPhone Developer: xxxxx@icloud.com (4*****6T9C)
> 2
Use Certificate: iPhone Developer: xxxx@icloud.com (4*****6T9C)

Choose Provisioning Profile:
[0] iOS Team Provisioning Profile: cc.caver.SimulateLocation (KHER5U9877)
Use Profile: iOS Team Provisioning Profile: cc.caver.SimulateLocation (KHER5U9877)
Position: /Users/ivan/Library/MobileDevice/Provisioning Profiles/xxxx-ec15-xxxx-bf8d-xxxx.mobileprovision

Use default bundle ID: cc.caver.SimulateLocation

Set App Display Name: pojieapp
Delete url schemes (y/n): n
=============================
[*] Start Resigning App
Extracting ipa file
Copying provisioning profile to app bundle
Parsing entitlements
Changing App ID to cc.caver.SimulateLocation
Changing Display Name to yuanqu
Codesigning /xxx.app with entitlements
Packaging IPA
Done, output at /Users/ivan/Desktop/output/输出的文件xxx.ipa
```

## 安装测试

打开Xcode，点击Window，点击`Devices and Simulators`

看到如下界面，点击加号，添加刚刚`output`出的ipa，稍等片刻，安装到手机。

信任证书后，如果能成功安装并且打开，说明没毛病。





# MonkeyDev

`iOSOpenDev`能直接通过`Xcode`新建`Hook`的工程模板，然后编译生成安装带有hook的ipa。

但是`iOSOpenDev`的作者从13年就不更新了，经过网络搜索，我们找到了`iOSOpenDev`的替代版`MonkeyDev`。

安装很简单:

```bash
git clone https://github.com/AloneMonkey/MonkeyDev.git
cd MonkeyDev/bin
sudo ./md-install
```

如果不用，运行下面的命令卸载:

```bash
sudo ./md-uninstall
```



# 编写Hook

修改地理位置信息

```objective-c
-(void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray *)locations {    
    CLLocation *newLocation = locations[0];
    CLLocationCoordinate2D coordinate = newLocation.coordinate;  
}
```

通过引用LocationTracker框架后,开始获取位置后,便会通过locationManager这个代理来回调,并通过 CLLocationCoordinate2D coordinate = newLocation.coordinate. 这句来获取到位置信息. 明白原理就简单了,接下来我们只需要在app内部hook到CLLocation的coordinate,并返回我们想要的地理位置就可以啦,源代码如下:

## 精度维度获取



## 偏移量



## 实现代码

```objective-c
%hook LocationTracker
-(CLLocationCoordinate2D) coordinate{
  CLLocationCoordinate2D oldCoordinate = %orig;
  oldCoordinate.latitude = 39.0810750000; //新的latitude
  oldCoordinate.longitude = 116.0896720000; //新的longitude
  return oldCoordinate;
}
%end
```





# 参考

https://github.com/Urinx/iOSAppHook

http://iosre.com/t/iosopendev-theos/8524

http://iosre.com/t/app/3917

https://pandara.xyz/2016/08/14/fake_wechat_location2/