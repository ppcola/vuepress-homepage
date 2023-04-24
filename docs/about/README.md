---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: '程 双 喜'
info: '毕业于河南工学院'
interests: '兴趣： 喜欢弹吉他和跑步🏃‍。'
socials:
- title: github
  link: https://github.com/ppcola
- title: weixinQR
  link: https://ppcola.com/about/weixin.html
- title: instagram
  link: https://www.instagram.com/shuangxi5
- title: email
  link: 'mailto:Mr.Shuangxi@gmail.com'
actions:
- text: Projects
  link: /projects/
- text: Blog
  link: /about/weixin.html
- text: CV
  link: /resume.pdf
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

你好！我是双喜，2022年毕业于[河南工学院](https://baike.baidu.com/item/%E6%B2%B3%E5%8D%97%E5%B7%A5%E5%AD%A6%E9%99%A2/9750218) 计算机科学与技术学院软件工程专业, 📍目前在 **郑州**。

热衷于Java学习和在Linux平台下进行程序开发， :dizzy: 

> _本来是想用主页记录一些项目经历，想不到在“关于”这里卡了半天。我想不出能够放到台面上来形容我的词语，我觉得自己是一个无趣至极的人 没有什么值得介绍的。当我在网上搜索自我介绍范文时我看到了这句话：说给自己，说给过去，说给新的相逢，**愿你，珍惜每一次介绍自己的机会。**_

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>