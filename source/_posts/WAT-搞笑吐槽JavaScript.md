---
title: Wat 吐槽JavaScript
date: 2016-12-21 01:17:26
tags: 笑话  Web
categories: 笑话
permalink: wat
header-img: "/content/images/wat/home-bg-o.jpg"

---

今天晚上在研究React技术栈头疼的时候，突然看到一个吐槽JavaScript的视频，简直搞笑，不过也挺客观的，毕竟是一个10天内攒出来的语言，虽然现在发展有ES支撑，但是依然非常零散，不过我按照视频里的做法试了一下，似乎有的返回结果不太一样。

# Wat
<video class="u-full-width" poster="https://www.destroyallsoftware.com/images/posters/talks/wat.poster.png" preload="none" controls="" width=100%>
        <source src="https://destroyallsoftware-talks.s3.amazonaws.com/wat.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIKRVCECXBC4ZGHIQ%2F20161221%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20161221T011204Z&amp;X-Amz-Expires=14400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=9803770d82cec61b8000bfc2dfef63ceb36c8edd0ae37cc15b8d6748d41e3632">
      </video>


```javascript
[] + []
""
[] + {}
"[object Object]"
{} + []
0
{} + {}
"[object Object][object Object]"
Array(16)
[undefined × 16]
Array(16).join("wat")
"watwatwatwatwatwatwatwatwatwatwatwatwatwatwat"
Array(16).join("wat" - 1 ) + " Batman!"
"NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!"
```
总之，看完这个视频，我就想说一句：

![](/content/images/wat/1.jpg)


# Javascript的出生与死亡

此外还有另一个视频 对JS从1995-2035年的历史阐述及大胆预测。

<video class="u-full-width" poster="https://www.destroyallsoftware.com/images/posters/talks/the-birth-and-death-of-javascript.poster.png" preload="none" controls="" width=100%>
        <source src="https://destroyallsoftware-talks.s3.amazonaws.com/the-birth-and-death-of-javascript.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIKRVCECXBC4ZGHIQ%2F20161221%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20161221T010857Z&amp;X-Amz-Expires=14400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6c7e037344b9f21a3d0282ea7848e905144b849f9ded9a0f881e769467f0e6bb">
      </video>

十分客观的罗列出了JS的缺点、当前JS发展趋势必然产生的低效率问题。

![](/content/images/wat/2.png)
