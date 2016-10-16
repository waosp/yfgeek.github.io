---
title: 'Docker Compose—简化复杂应用的利器 '
date: 2016-10-15 19:10:35
tags: docker
categories: docker
---
<div class="entry-content">
												<p>Compose是用于定义和运行复杂Docker应用的工具。你可以在一个文件中定义一个多容器的应用，然后使用一条命令来启动你的应用，然后所有相关的操作都会被自动完成。<span id="more-1319"></span></p>
<h2>1. 安装Docker和Compose</h2>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c25730712728" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;"># 当前最新的Docker是1.6.2，Compose为1.2.0
curl -s https://get.docker.io/ubuntu/ | sudo sh
sudo apt-get update
sudo apt-get install lxc-docker
# 参考http://docs.docker.com/compose/install/#install-compose
curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` &gt; /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
### 上面这个方法真的慢出翔，可以通过Python pip安装。
apt-get install python-pip python-dev
pip install -U docker-compose</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c25730712728-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c25730712728-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c25730712728-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c25730712728-4">4</div><div class="crayon-num" data-line="crayon-580270f9a8c25730712728-5">5</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c25730712728-6">6</div><div class="crayon-num" data-line="crayon-580270f9a8c25730712728-7">7</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c25730712728-8">8</div><div class="crayon-num" data-line="crayon-580270f9a8c25730712728-9">9</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c25730712728-10">10</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c25730712728-1"><span class="crayon-p"># 当前最新的Docker是1.6.2，Compose为1.2.0</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c25730712728-2"><span class="crayon-v">curl</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-i">s</span><span class="crayon-h"> </span><span class="crayon-v">https</span><span class="crayon-o">:</span><span class="crayon-c">//get.docker.io/ubuntu/ | sudo sh</span></div><div class="crayon-line" id="crayon-580270f9a8c25730712728-3"><span class="crayon-e">sudo </span><span class="crayon-v">apt</span><span class="crayon-o">-</span><span class="crayon-e">get </span><span class="crayon-e">update</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c25730712728-4"><span class="crayon-e">sudo </span><span class="crayon-v">apt</span><span class="crayon-o">-</span><span class="crayon-e">get </span><span class="crayon-e">install </span><span class="crayon-v">lxc</span><span class="crayon-o">-</span><span class="crayon-v">docker</span></div><div class="crayon-line" id="crayon-580270f9a8c25730712728-5"><span class="crayon-p"># 参考http://docs.docker.com/compose/install/#install-compose</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c25730712728-6"><span class="crayon-v">curl</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-i">L</span><span class="crayon-h"> </span><span class="crayon-v">https</span><span class="crayon-o">:</span><span class="crayon-c">//github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` &gt; /usr/local/bin/docker-compose</span></div><div class="crayon-line" id="crayon-580270f9a8c25730712728-7"><span class="crayon-v">chmod</span><span class="crayon-h"> </span><span class="crayon-o">+</span><span class="crayon-v">x</span><span class="crayon-h"> </span><span class="crayon-o">/</span><span class="crayon-v">usr</span><span class="crayon-o">/</span><span class="crayon-v">local</span><span class="crayon-o">/</span><span class="crayon-v">bin</span><span class="crayon-o">/</span><span class="crayon-v">docker</span><span class="crayon-o">-</span><span class="crayon-v">compose</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c25730712728-8"><span class="crayon-p">### 上面这个方法真的慢出翔，可以通过Python pip安装。</span></div><div class="crayon-line" id="crayon-580270f9a8c25730712728-9"><span class="crayon-v">apt</span><span class="crayon-o">-</span><span class="crayon-e">get </span><span class="crayon-e">install </span><span class="crayon-v">python</span><span class="crayon-o">-</span><span class="crayon-e">pip </span><span class="crayon-v">python</span><span class="crayon-o">-</span><span class="crayon-e">dev</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c25730712728-10"><span class="crayon-e">pip </span><span class="crayon-v">install</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-i">U</span><span class="crayon-h"> </span><span class="crayon-v">docker</span><span class="crayon-o">-</span><span class="crayon-v">compose</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0020 seconds] -->
<p></p>
<p>这样compose就安装好了，查看一下compose的版本信息：</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c44835397497" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">chmod +x /usr/local/bin/docker-compose
docker-compose -version
docker-compose 1.2.0</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c44835397497-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c44835397497-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c44835397497-3">3</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c44835397497-1"><span class="crayon-r">chmod</span><span class="crayon-h"> </span><span class="crayon-o">+</span><span class="crayon-v">x</span><span class="crayon-h"> </span><span class="crayon-o">/</span><span class="crayon-v">usr</span><span class="crayon-o">/</span><span class="crayon-v">local</span><span class="crayon-o">/</span><span class="crayon-v">bin</span><span class="crayon-o">/</span><span class="crayon-v">docker</span><span class="crayon-o">-</span><span class="crayon-e">compose</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c44835397497-2"><span class="crayon-v">docker</span><span class="crayon-o">-</span><span class="crayon-v">compose</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-e">version</span></div><div class="crayon-line" id="crayon-580270f9a8c44835397497-3"><span class="crayon-v">docker</span><span class="crayon-o">-</span><span class="crayon-i">compose</span><span class="crayon-h"> </span><span class="crayon-cn">1.2.0</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0011 seconds] -->
<p></p>
<h2>2. 使用Compose</h2>
<p>使用Compose只需要简单的三个步骤：<br>
首先，使用Dockerfile来定义你的应用环境：</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c48878639680" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">FROM python:2.7
ADD ./code
WORKDIR /code
RUN pip install -r requirements.txt</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c48878639680-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c48878639680-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c48878639680-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c48878639680-4">4</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c48878639680-1"><span class="crayon-e">FROM </span><span class="crayon-v">python</span><span class="crayon-o">:</span><span class="crayon-cn">2.7</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c48878639680-2"><span class="crayon-i">ADD</span><span class="crayon-h"> </span><span class="crayon-sy">.</span><span class="crayon-o">/</span><span class="crayon-e">code</span></div><div class="crayon-line" id="crayon-580270f9a8c48878639680-3"><span class="crayon-v">WORKDIR</span><span class="crayon-h"> </span><span class="crayon-o">/</span><span class="crayon-e">code</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c48878639680-4"><span class="crayon-e">RUN </span><span class="crayon-e">pip </span><span class="crayon-v">install</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-i">r</span><span class="crayon-h"> </span><span class="crayon-v">requirements</span><span class="crayon-sy">.</span><span class="crayon-v">txt</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0008 seconds] -->
<p></p>
<p>其中，requirements.txt中的内容包括：</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c4d809478886" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">flask
redis</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c4d809478886-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c4d809478886-2">2</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c4d809478886-1"><span class="crayon-e">flask</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c4d809478886-2"><span class="crayon-v">redis</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0003 seconds] -->
<p></p>
<p>再用Python写一个简单的app.py</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c51291884198" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">from flask importFlaskfrom redis importRedisimport os
app =Flask(__name__)
redis =Redis(host='redis', port=6379)@app.route('/')def hello():
    redis.incr('hits')return'Hello World! I have been seen %s times.'% redis.get('hits')if __name__ =="__main__":
    app.run(host="0.0.0.0", debug=True)</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c51291884198-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c51291884198-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c51291884198-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c51291884198-4">4</div><div class="crayon-num" data-line="crayon-580270f9a8c51291884198-5">5</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c51291884198-1"><span class="crayon-st">from</span><span class="crayon-h"> </span><span class="crayon-e">flask </span><span class="crayon-e">importFlaskfrom </span><span class="crayon-e">redis </span><span class="crayon-e">importRedisimport </span><span class="crayon-k ">os</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c51291884198-2"><span class="crayon-v">app</span><span class="crayon-h"> </span><span class="crayon-o">=</span><span class="crayon-e">Flask</span><span class="crayon-sy">(</span><span class="crayon-v">__name__</span><span class="crayon-sy">)</span></div><div class="crayon-line" id="crayon-580270f9a8c51291884198-3"><span class="crayon-v">redis</span><span class="crayon-h"> </span><span class="crayon-o">=</span><span class="crayon-e">Redis</span><span class="crayon-sy">(</span><span class="crayon-v">host</span><span class="crayon-o">=</span><span class="crayon-s">'redis'</span><span class="crayon-sy">,</span><span class="crayon-h"> </span><span class="crayon-v">port</span><span class="crayon-o">=</span><span class="crayon-cn">6379</span><span class="crayon-sy">)</span><span class="crayon-sy">@</span><span class="crayon-v">app</span><span class="crayon-sy">.</span><span class="crayon-e">route</span><span class="crayon-sy">(</span><span class="crayon-s">'/'</span><span class="crayon-sy">)</span><span class="crayon-r">def</span><span class="crayon-h"> </span><span class="crayon-e">hello</span><span class="crayon-sy">(</span><span class="crayon-sy">)</span><span class="crayon-o">:</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c51291884198-4"><span class="crayon-h">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="crayon-v">redis</span><span class="crayon-sy">.</span><span class="crayon-e">incr</span><span class="crayon-sy">(</span><span class="crayon-s">'hits'</span><span class="crayon-sy">)</span><span class="crayon-st">return</span><span class="crayon-s">'Hello World! I have been seen %s times.'</span><span class="crayon-o">%</span><span class="crayon-h"> </span><span class="crayon-v">redis</span><span class="crayon-sy">.</span><span class="crayon-e">get</span><span class="crayon-sy">(</span><span class="crayon-s">'hits'</span><span class="crayon-sy">)</span><span class="crayon-st">if</span><span class="crayon-h"> </span><span class="crayon-v">__name__</span><span class="crayon-h"> </span><span class="crayon-o">==</span><span class="crayon-s">"__main__"</span><span class="crayon-o">:</span></div><div class="crayon-line" id="crayon-580270f9a8c51291884198-5"><span class="crayon-h">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="crayon-v">app</span><span class="crayon-sy">.</span><span class="crayon-e">run</span><span class="crayon-sy">(</span><span class="crayon-v">host</span><span class="crayon-o">=</span><span class="crayon-s">"0.0.0.0"</span><span class="crayon-sy">,</span><span class="crayon-h"> </span><span class="crayon-v">debug</span><span class="crayon-o">=</span><span class="crayon-t">True</span><span class="crayon-sy">)</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0027 seconds] -->
<p></p>
<p><strong>第二步</strong>，用一个compose.yaml来定义你的应用服务，他们可以把不同的服务生成不同的容器中组成你的应用。</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c55508636029" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">web:
  build:.
  command: python app.py
  ports:
         - "5000:5000"
  volumes:
         - .:/code
  links:
         - redis
redis:
  image: redis</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c55508636029-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c55508636029-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c55508636029-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c55508636029-4">4</div><div class="crayon-num" data-line="crayon-580270f9a8c55508636029-5">5</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c55508636029-6">6</div><div class="crayon-num" data-line="crayon-580270f9a8c55508636029-7">7</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c55508636029-8">8</div><div class="crayon-num" data-line="crayon-580270f9a8c55508636029-9">9</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c55508636029-10">10</div><div class="crayon-num" data-line="crayon-580270f9a8c55508636029-11">11</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c55508636029-1"><span class="crayon-s ">web</span><span class="">:</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c55508636029-2"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">build</span><span class="">:.</span></div><div class="crayon-line" id="crayon-580270f9a8c55508636029-3"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">command</span><span class="">: python app.py</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c55508636029-4"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">ports</span><span class="">:</span></div><div class="crayon-line" id="crayon-580270f9a8c55508636029-5"><span class="crayon-h">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>-<span class="crayon-h"> </span><span class="crayon-i ">"5000:5000"</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c55508636029-6"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">volumes</span><span class="">:</span></div><div class="crayon-line" id="crayon-580270f9a8c55508636029-7"><span class="crayon-h">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>-<span class="crayon-h"> </span><span class="crayon-o">.</span><span class="">:/code</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c55508636029-8"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">links</span><span class="">:</span></div><div class="crayon-line" id="crayon-580270f9a8c55508636029-9"><span class="crayon-h">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>-<span class="crayon-h"> </span>redis</div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c55508636029-10"><span class="crayon-s ">redis</span><span class="">:</span></div><div class="crayon-line" id="crayon-580270f9a8c55508636029-11"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">image</span><span class="">: redis</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0007 seconds] -->
<p></p>
<p><strong>第三步</strong>，执行<code>docker-compose up</code>来启动你的应用，它会根据compose.yaml的设置来pull/run这俩个容器，然后再启动。</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c5a806091571" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">Creating myapp_redis_1...
Creating myapp_web_1...
Building web...
Step 0 : FROM python:2.7
2.7: Pulling from python
...
Status: Downloaded newer image for python:2.7
 ---&gt; d833e0b23482
Step 1 : ADD . /code
 ---&gt; 1c04b1b15808
Removing intermediate container 9dab91b4410d
Step 2 : WORKDIR /code
 ---&gt; Running in f495a62feac9
 ---&gt; ffea89a7b090
Attaching to myapp_redis_1, myapp_web_1
......
redis_1 | [1] 17 May 10:42:38.147 * The server is now ready to accept connections on port 6379
web_1   |  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
web_1   |  * Restarting with stat</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-4">4</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-5">5</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-6">6</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-7">7</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-8">8</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-9">9</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-10">10</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-11">11</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-12">12</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-13">13</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-14">14</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-15">15</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-16">16</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-17">17</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c5a806091571-18">18</div><div class="crayon-num" data-line="crayon-580270f9a8c5a806091571-19">19</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c5a806091571-1"><span class="crayon-e">Creating </span><span class="crayon-v">myapp_redis_1</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-2"><span class="crayon-e">Creating </span><span class="crayon-v">myapp_web_1</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-3"><span class="crayon-e">Building </span><span class="crayon-v">web</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-4"><span class="crayon-i">Step</span><span class="crayon-h"> </span><span class="crayon-cn">0</span><span class="crayon-h"> </span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-e">FROM </span><span class="crayon-v">python</span><span class="crayon-o">:</span><span class="crayon-cn">2.7</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-5"><span class="crayon-cn">2.7</span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-e">Pulling </span><span class="crayon-e">from </span><span class="crayon-i">python</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-6"><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-7"><span class="crayon-v">Status</span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-e">Downloaded </span><span class="crayon-e">newer </span><span class="crayon-e">image </span><span class="crayon-st">for</span><span class="crayon-h"> </span><span class="crayon-v">python</span><span class="crayon-o">:</span><span class="crayon-cn">2.7</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-8"><span class="crayon-h"> </span><span class="crayon-o">--</span><span class="crayon-o">-&gt;</span><span class="crayon-h"> </span><span class="crayon-e">d833e0b23482</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-9"><span class="crayon-i">Step</span><span class="crayon-h"> </span><span class="crayon-cn">1</span><span class="crayon-h"> </span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-i">ADD</span><span class="crayon-h"> </span><span class="crayon-sy">.</span><span class="crayon-h"> </span><span class="crayon-o">/</span><span class="crayon-v">code</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-10"><span class="crayon-h"> </span><span class="crayon-o">--</span><span class="crayon-o">-&gt;</span><span class="crayon-h"> </span><span class="crayon-cn">1c04b1b15808</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-11"><span class="crayon-e">Removing </span><span class="crayon-e">intermediate </span><span class="crayon-i">container</span><span class="crayon-h"> </span><span class="crayon-cn">9dab91b4410d</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-12"><span class="crayon-i">Step</span><span class="crayon-h"> </span><span class="crayon-cn">2</span><span class="crayon-h"> </span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-v">WORKDIR</span><span class="crayon-h"> </span><span class="crayon-o">/</span><span class="crayon-v">code</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-13"><span class="crayon-h"> </span><span class="crayon-o">--</span><span class="crayon-o">-&gt;</span><span class="crayon-h"> </span><span class="crayon-e">Running </span><span class="crayon-st">in</span><span class="crayon-h"> </span><span class="crayon-v">f495a62feac9</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-14"><span class="crayon-h"> </span><span class="crayon-o">--</span><span class="crayon-o">-&gt;</span><span class="crayon-h"> </span><span class="crayon-e">ffea89a7b090</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-15"><span class="crayon-e">Attaching </span><span class="crayon-st">to</span><span class="crayon-h"> </span><span class="crayon-v">myapp_redis_1</span><span class="crayon-sy">,</span><span class="crayon-h"> </span><span class="crayon-v">myapp_web</span><span class="crayon-sy">_</span>1</div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-16"><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span><span class="crayon-sy">.</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-17"><span class="crayon-v">redis_1</span><span class="crayon-h"> </span><span class="crayon-o">|</span><span class="crayon-h"> </span><span class="crayon-sy">[</span><span class="crayon-cn">1</span><span class="crayon-sy">]</span><span class="crayon-h"> </span><span class="crayon-cn">17</span><span class="crayon-h"> </span><span class="crayon-i">May</span><span class="crayon-h"> </span><span class="crayon-cn">10</span><span class="crayon-o">:</span><span class="crayon-cn">42</span><span class="crayon-o">:</span><span class="crayon-cn">38.147</span><span class="crayon-h"> </span><span class="crayon-o">*</span><span class="crayon-h"> </span><span class="crayon-e">The </span><span class="crayon-e">server </span><span class="crayon-st">is</span><span class="crayon-h"> </span><span class="crayon-e">now </span><span class="crayon-e">ready </span><span class="crayon-st">to</span><span class="crayon-h"> </span><span class="crayon-e">accept </span><span class="crayon-e">connections </span><span class="crayon-e">on </span><span class="crayon-i">port</span><span class="crayon-h"> </span><span class="crayon-cn">6379</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c5a806091571-18"><span class="crayon-v">web_1</span><span class="crayon-h">&nbsp;&nbsp; </span><span class="crayon-o">|</span><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-o">*</span><span class="crayon-h"> </span><span class="crayon-e">Running </span><span class="crayon-e">on </span><span class="crayon-v">http</span><span class="crayon-o">:</span><span class="crayon-c">//0.0.0.0:5000/ (Press CTRL+C to quit)</span></div><div class="crayon-line" id="crayon-580270f9a8c5a806091571-19"><span class="crayon-v">web_1</span><span class="crayon-h">&nbsp;&nbsp; </span><span class="crayon-o">|</span><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-o">*</span><span class="crayon-h"> </span><span class="crayon-e">Restarting </span><span class="crayon-e">with </span><span class="crayon-v">stat</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0039 seconds] -->
<p></p>
<h2>3. Yaml文件参考</h2>
<p>在上面的yaml文件中，我们可以看到compose文件的基本结构。首先是定义一个服务名，下面是yaml服务中的一些选项条目：<br>
<code>image</code>:镜像的ID<br>
<code>build</code>:直接从pwd的Dockerfile来build，而非通过image选项来pull<br>
<code>links</code>：连接到那些容器。每个占一行，格式为SERVICE[:ALIAS],例如 – db[:database]<br>
<code>external_links</code>：连接到该compose.yaml文件之外的容器中，比如是提供共享或者通用服务的容器服务。格式同links<br>
<code>command</code>：替换默认的command命令<br>
<code>ports</code>: 导出端口。格式可以是：</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c61341321587" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">ports:-"3000"-"8000:8000"-"127.0.0.1:8001:8001"</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c61341321587-1">1</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c61341321587-1"><span class="crayon-v">ports</span><span class="crayon-o">:</span><span class="crayon-o">-</span><span class="crayon-s">"3000"</span><span class="crayon-o">-</span><span class="crayon-s">"8000:8000"</span><span class="crayon-o">-</span><span class="crayon-s">"127.0.0.1:8001:8001"</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0005 seconds] -->
<p></p>
<p><code>expose</code>：导出端口，但不映射到宿主机的端口上。它仅对links的容器开放。格式直接指定端口号即可。<br>
<code>volumes</code>：加载路径作为卷，可以指定只读模式：</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c65962076142" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">volumes:-/var/lib/mysql
 - cache/:/tmp/cache
 -~/configs:/etc/configs/:ro</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c65962076142-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c65962076142-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c65962076142-3">3</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c65962076142-1"><span class="crayon-v">volumes</span><span class="crayon-o">:</span><span class="crayon-o">-</span><span class="crayon-o">/</span><span class="crayon-t">var</span><span class="crayon-o">/</span><span class="crayon-v">lib</span><span class="crayon-o">/</span><span class="crayon-v">mysql</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c65962076142-2"><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-h"> </span><span class="crayon-v">cache</span><span class="crayon-o">/</span><span class="crayon-o">:</span><span class="crayon-o">/</span><span class="crayon-v">tmp</span><span class="crayon-o">/</span><span class="crayon-v">cache</span></div><div class="crayon-line" id="crayon-580270f9a8c65962076142-3"><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-o">~</span><span class="crayon-o">/</span><span class="crayon-v">configs</span><span class="crayon-o">:</span><span class="crayon-o">/</span><span class="crayon-v">etc</span><span class="crayon-o">/</span><span class="crayon-v">configs</span><span class="crayon-o">/</span><span class="crayon-o">:</span><span class="crayon-v">ro</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0009 seconds] -->
<p></p>
<p><code>volumes_from</code>：加载其他容器或者服务的所有卷</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c69471704775" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">environment:- RACK_ENV=development
  - SESSION_SECRET</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c69471704775-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c69471704775-2">2</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c69471704775-1"><span class="crayon-v">environment</span><span class="crayon-o">:</span><span class="crayon-o">-</span><span class="crayon-h"> </span><span class="crayon-v">RACK_ENV</span><span class="crayon-o">=</span><span class="crayon-v">development</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c69471704775-2"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-o">-</span><span class="crayon-h"> </span><span class="crayon-v">SESSION_SECRET</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0005 seconds] -->
<p></p>
<p><code>env_file</code>：从一个文件中导入环境变量，文件的格式为RACK_ENV=development<br>
<code>extends</code>:扩展另一个服务，可以覆盖其中的一些选项。一个sample如下：</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c6e528736605" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">common.yml
webapp:
  build:./webapp
  environment:- DEBUG=false- SEND_EMAILS=false
development.yml
web:extends:
    file: common.yml
    service: webapp
  ports:-"8000:8000"
  links:- db
  environment:- DEBUG=true
db:
  image: postgres</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c6e528736605-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c6e528736605-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c6e528736605-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c6e528736605-4">4</div><div class="crayon-num" data-line="crayon-580270f9a8c6e528736605-5">5</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c6e528736605-6">6</div><div class="crayon-num" data-line="crayon-580270f9a8c6e528736605-7">7</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c6e528736605-8">8</div><div class="crayon-num" data-line="crayon-580270f9a8c6e528736605-9">9</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c6e528736605-10">10</div><div class="crayon-num" data-line="crayon-580270f9a8c6e528736605-11">11</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c6e528736605-12">12</div><div class="crayon-num" data-line="crayon-580270f9a8c6e528736605-13">13</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c6e528736605-1">common<span class="crayon-o">.</span>yml</div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c6e528736605-2"><span class="crayon-s ">webapp</span><span class="">:</span></div><div class="crayon-line" id="crayon-580270f9a8c6e528736605-3"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">build</span><span class="">:./webapp</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c6e528736605-4"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">environment</span><span class="">:- DEBUG=false- SEND_EMAILS=false</span></div><div class="crayon-line" id="crayon-580270f9a8c6e528736605-5">development<span class="crayon-o">.</span>yml</div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c6e528736605-6"><span class="crayon-s ">web</span><span class="">:extends</span><span class="">:</span></div><div class="crayon-line" id="crayon-580270f9a8c6e528736605-7"><span class="crayon-h">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="crayon-s ">file</span><span class="">: common.yml</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c6e528736605-8"><span class="crayon-h">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="crayon-s ">service</span><span class="">: webapp</span></div><div class="crayon-line" id="crayon-580270f9a8c6e528736605-9"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">ports</span><span class="">:-"8000</span><span class="">:8000"</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c6e528736605-10"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">links</span><span class="">:- db</span></div><div class="crayon-line" id="crayon-580270f9a8c6e528736605-11"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">environment</span><span class="">:- DEBUG=true</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c6e528736605-12"><span class="crayon-s ">db</span><span class="">:</span></div><div class="crayon-line" id="crayon-580270f9a8c6e528736605-13"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-s ">image</span><span class="">: postgres</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0008 seconds] -->
<p></p>
<p><code>net</code>：容器的网络模式，可以为”bridge”, “none”, “container:[name or id]”, “host”中的一个。<br>
<code>dns</code>：可以设置一个或多个自定义的DNS地址。<br>
<code>dns_search</code>:可以设置一个或多个DNS的扫描域。<br>
其他的<code>working_dir, entrypoint, user, hostname, domainname, mem_limit, privileged, restart, stdin_open, tty, cpu_shares</code>，和<code>docker run</code>命令是一样的，这些命令都是单行的命令。例如：</p>
<p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->

		<div id="crayon-580270f9a8c72058180962" class="crayon-syntax crayon-theme-github crayon-font-monaco crayon-os-mac print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important; height: auto;">
		
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly="" style="tab-size: 4; font-size: 12px !important; line-height: 15px !important; z-index: 0; opacity: 0; overflow: hidden;">cpu_shares:73
working_dir:/code
entrypoint: /code/entrypoint.sh
user: postgresql
hostname: foo
domainname: foo.com
mem_limit:1000000000
privileged:true
restart: always
stdin_open:true
tty:true</textarea></div>
			<div class="crayon-main" style="position: relative; z-index: 1; overflow: hidden;">
				<table class="crayon-table">
					<tbody><tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-580270f9a8c72058180962-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c72058180962-2">2</div><div class="crayon-num" data-line="crayon-580270f9a8c72058180962-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c72058180962-4">4</div><div class="crayon-num" data-line="crayon-580270f9a8c72058180962-5">5</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c72058180962-6">6</div><div class="crayon-num" data-line="crayon-580270f9a8c72058180962-7">7</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c72058180962-8">8</div><div class="crayon-num" data-line="crayon-580270f9a8c72058180962-9">9</div><div class="crayon-num crayon-striped-num" data-line="crayon-580270f9a8c72058180962-10">10</div><div class="crayon-num" data-line="crayon-580270f9a8c72058180962-11">11</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-580270f9a8c72058180962-1"><span class="crayon-v">cpu_shares</span><span class="crayon-o">:</span><span class="crayon-cn">73</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c72058180962-2"><span class="crayon-v">working_dir</span><span class="crayon-o">:</span><span class="crayon-o">/</span><span class="crayon-e">code</span></div><div class="crayon-line" id="crayon-580270f9a8c72058180962-3"><span class="crayon-v">entrypoint</span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-o">/</span><span class="crayon-v">code</span><span class="crayon-o">/</span><span class="crayon-v">entrypoint</span><span class="crayon-sy">.</span><span class="crayon-e">sh</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c72058180962-4"><span class="crayon-v">user</span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-e">postgresql</span></div><div class="crayon-line" id="crayon-580270f9a8c72058180962-5"><span class="crayon-v">hostname</span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-e">foo</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c72058180962-6"><span class="crayon-v">domainname</span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-v">foo</span><span class="crayon-sy">.</span><span class="crayon-e">com</span></div><div class="crayon-line" id="crayon-580270f9a8c72058180962-7"><span class="crayon-v">mem_limit</span><span class="crayon-o">:</span><span class="crayon-cn">1000000000</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c72058180962-8"><span class="crayon-v">privileged</span><span class="crayon-o">:</span><span class="crayon-t">true</span></div><div class="crayon-line" id="crayon-580270f9a8c72058180962-9"><span class="crayon-v">restart</span><span class="crayon-o">:</span><span class="crayon-h"> </span><span class="crayon-e">always</span></div><div class="crayon-line crayon-striped-line" id="crayon-580270f9a8c72058180962-10"><span class="crayon-v">stdin_open</span><span class="crayon-o">:</span><span class="crayon-t">true</span></div><div class="crayon-line" id="crayon-580270f9a8c72058180962-11"><span class="crayon-v">tty</span><span class="crayon-o">:</span><span class="crayon-t">true</span></div></div></td>
					</tr>
				</tbody></table>
			</div>
		</div>
<!-- [Format Time: 0.0013 seconds] -->
<p></p>
<h2>4. docker-compose常用命令</h2>
<p>在第二节中的<code>docker-compose up</code>，这两个容器都是在前台运行的。我们可以指定-d命令以daemon的方式启动容器。除此之外，docker-compose还支持下面参数：<br>
<code>--verbose</code>：输出详细信息<br>
<code>-f</code> 制定一个非docker-compose.yml命名的yaml文件<br>
<code>-p</code> 设置一个项目名称（默认是directory名）<br>
docker-compose的动作包括：<br>
<code>build</code>：构建服务<br>
<code>kill -s SIGINT</code>：给服务发送特定的信号。<br>
<code>logs</code>：输出日志<br>
<code>port</code>：输出绑定的端口<br>
<code>ps</code>：输出运行的容器<br>
<code>pull</code>：pull服务的image<br>
<code>rm</code>：删除停止的容器<br>
<code>run</code>: 运行某个服务，例如docker-compose run web python manage.py shell<br>
<code>start</code>：运行某个服务中存在的容器。<br>
<code>stop</code>:停止某个服务中存在的容器。<br>
<code>up</code>：create + run + attach容器到服务。<br>
<code>scale</code>：设置服务运行的容器数量。例如：docker-compose scale web=2 worker=3<br>
参考:<br>
<a href="http://docs.docker.com/compose/">Compose Document</a></p>
						<div class="clear"></div>
											</div>
                                            
>转载:http://debugo.com/docker-compose
                                   