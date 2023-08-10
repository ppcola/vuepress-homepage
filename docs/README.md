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

你好！我是双喜，性别男，爱好女，2022年毕业，📍目前在 **郑州**。
职业是Java后端开发，业余自学了Vue，想成为一个全栈工程师，在生活中是一个待人真诚，富有激情的人。


## News
- [现在] 正在找工作
- [2023年4月20] 离职

<!-- - [2023年1月03] 离职
- [2022年7月11] 入职象过河
- [现在] 正在找工作
- [2022年5月17]  完成线上答辩 -->


## 教育 与 经历

- **郑州象过河** <br/>
Java后端开发 2022.7 - 2023.4

- **河南工学院** <br/>
软件工程专业 2018 - 2022


## 项目


[→ 查看全部](/projects/)

<ProjectCard image="/projects/2.png" hideBorder=true>

  **特种设备智慧管理云平台**

  2022年07-2023年04
  
智慧云平台是个为特种设备使用单位提供安全管理服务的平台, 项目使用的前端技术：vue 、uniapp，
项目分为三个端，包括企业端、政府端和电梯端。企业端的功能包括设备信息维护，隐患排查，风险
管理等；政府端是政府监管部门的用户界面，通过该端口可以进行行政审批、发布公告等工作。项目
使用 MinIO 来管理附件，实现附件的管理和预览功能。
  
  [[官网](https://www.zhglts.cn/)] [[详细内容](/projects/item/zhy.html)]

</ProjectCard>



<ProjectCard hideBorder=true>
  
  **基于NEAT的无人驾驶仿真系统**
  
  Self driving and remote control car : AI based project using NEAT-Python.

  The application of virtual simulation technology is becoming more and more extensive. people urgently need safe, reliable, low-cost and flexible automatic driving simulation system.

  [[Link](https://github.com/ppcola/Semote_Control_Car)]

</ProjectCard>


## 奖项 & 荣誉

### 证书

-  **普通话证书** 二级乙等
-  **CET-4**  成绩单  507分


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
