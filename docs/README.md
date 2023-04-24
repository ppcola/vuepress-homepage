---
pageClass: home-page
# some data for the components

name: 程 双喜
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/ppcola
  - title: weixin
    icon: "/icons/weixin.svg"
    link: /about/weixin.html
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com/shuangxi5

cv: /resume.pdf
bio: 毕业于河南工学院
email: Mr.Shuangxi@gmail.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## 关于

你好！我是双喜，2022年毕业于[河南工学院](https://baike.baidu.com/item/%E6%B2%B3%E5%8D%97%E5%B7%A5%E5%AD%A6%E9%99%A2/9750218) 计算机科学与技术学院软件工程专业, 📍目前在 **郑州**。

热衷于Java学习和在Linux平台下进行程序开发，着迷于好看的前端网页设计，Java的全平台兼容很打动我，于是决心投身于Java编程事业。对Nintendo Switch游戏机有着浓厚的兴趣，在生活中是一个待人真诚，善于合作，富有激情的人，喜欢用相机记录生活，虽然拍照水平低，但积极性很高。 :dizzy:


## News
- [现在] 正在找工作
- [2022年5月17]  完成线上答辩


## 教育 与 经历

- **河南工学院** <br/>
软件工程专业 2018 - 2022


## 项目


[→ 查看全部](/projects/)

<ProjectCard image="/projects/2.png" hideBorder=true>

  **传智书城图书管理系统**

  2022年03-2022年05
  
  我完成的部分是利用servlet实现注册登录。运用了MVC三层架构设计，提高代码的重复利用，降低耦合度。技术上的难点是使用GET请求传递参数后台接收到的是乱码，要改变编码方式才能正确显示内容。运行效果达到预期能够限制恶意请求，减少服务器的压力。
  
  [[源码](https://github.com/ppcola/bookstore)] [[详细内容](/guide/advanced.html)]

</ProjectCard>



<ProjectCard hideBorder=true>

  **Harry Potter and the Deathly Hallows**
  
  In the epilogue of Deathly Hallows, which is set 19 years after Voldemort's death, Harry and Ginny are a couple and have three children: James Sirius Potter, who has already been at Hogwarts for at least one year, Albus Severus Potter, who is starting his first year there, and Lily Luna Potter, who is two years away from her first year at the school.

  [[Link](https://www.google.com)]

</ProjectCard>


## 奖项 & 荣誉

### 证书

-  **普通话证书** 二级乙等
-  **CET-4**  成绩单  407分


<!-- Custom style for this page -->

<style lang="stylus">

  

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 150px
        max-height 150px
    .card-content p
      -webkit-margin-after 0.3em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 78%
          max-width 400px

</style>
