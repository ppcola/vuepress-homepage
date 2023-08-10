---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: '程 双 喜'
info: 'Java后端开发'
interests: '兴趣： 抽烟、喝酒、打麻将🀄'
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
  link: https://blog.ppcola.com
- text: CV
  link: /resume.pdf
footer: 豫ICP备2021020459号-1
---

<AboutCard :frontmatter="$page.frontmatter" >

你好！我是双喜，2022年毕业于[河南工学院](https://baike.baidu.com/item/%E6%B2%B3%E5%8D%97%E5%B7%A5%E5%AD%A6%E9%99%A2/9750218) 计算机科学与技术学院软件工程专业, 📍目前在 **郑州**。

飞向宇宙，浩瀚无垠！ :dizzy: 

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>