(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,a){"use strict";a.r(t);var n=a(266),o=a(0),i=a.n(o),r=a(206),l=a(212),c=a(210),s=a(217),d=a.n(s),m=a(205),p=a(219),u=m.a.div.withConfig({displayName:"post-preview__ContentWrapper",componentId:"qjle4c-0"})(["margin-bottom:0.5rem;padding:1rem;background-color:#f2f2f2;"]),f=m.a.h3.withConfig({displayName:"post-preview__Title",componentId:"qjle4c-1"})(["margin:0 0 0.8rem 0;padding:0;font-size:1rem;background-color:#f2f2f2;& a{color:#000000;}& a:hover{color:#202c6a;}"]),g=m.a.div.withConfig({displayName:"post-preview__Excerpt",componentId:"qjle4c-2"})(["margin:0;padding:0;font-size:0.8rem;"]),h=m.a.div.withConfig({displayName:"post-preview__PostMetaList",componentId:"qjle4c-3"})(["margin:0.5rem 0 0 0;padding:0.1rem 0rem;text-align:right;color:#333;font-size:0.7rem;font-weight:light;"]),w=function(e){var t=e.post,a=d()(t.frontmatter.date).local().format("YYYY/MM/DD"),n=t.timeToRead+" min";return i.a.createElement(u,null,i.a.createElement(f,null,i.a.createElement(r.a,{to:t.fields.slug},t.frontmatter.title)," "),i.a.createElement(g,null,t.excerpt),i.a.createElement(h,null,i.a.createElement(p.a,{icon:"🗓",iconLabel:"Date",text:a})," · ",i.a.createElement(p.a,{icon:"⏱",iconLabel:"timeToRead",text:n})))},b=m.a.section.withConfig({displayName:"pages__SectionWrapper",componentId:"sc-1dm6pdp-0"})(["margin:0;padding:0;"]),y=m.a.h2.withConfig({displayName:"pages__SectionTitle",componentId:"sc-1dm6pdp-1"})(["margin:0;padding:0 0 1rem 0;"]),E=m.a.div.withConfig({displayName:"pages__SectionContents",componentId:"sc-1dm6pdp-2"})(["margin:0;padding:0;"]),v=m.a.div.withConfig({displayName:"pages__SectionFooter",componentId:"sc-1dm6pdp-3"})(["margin:0;padding:0.5rem;text-align:center;font-size:0.8rem;background-color:#ffcc06;& a{color:#ffffff;}"]);t.default=function(){var e=n.data;return i.a.createElement(l.a,null,i.a.createElement(c.a,{title:"Home"}),i.a.createElement(b,null,i.a.createElement(y,null,"Recent Posts"),i.a.createElement(E,null,e.allMarkdownRemark.edges.map(function(e){var t=e.node;return i.a.createElement(w,{key:t.id,post:t})})),i.a.createElement(v,null,i.a.createElement(r.a,{to:"/posts"},"Show All Posts"))))}},206:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(66),r=a.n(i);a.d(t,"a",function(){return r.a});a(207),a(9).default.enqueue,o.a.createContext({})},207:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},208:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),o=a.n(n),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e){e.exports={data:{site:{siteMetadata:{author:"Jahyun Oh",title:"haru-note",description:"별일 없는 하루의 잡다한 기록",social:[{name:"github",url:"https://github.com/soharu"},{name:"instagram",url:"https://www.instagram.com/soharu.day"}]}}}}},210:function(e,t,a){"use strict";var n=a(211),o=a(0),i=a.n(o),r=a(214),l=a.n(r);function c(e){var t=e.description,a=e.lang,o=e.meta,r=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},211:function(e){e.exports={data:{site:{siteMetadata:{title:"haru-note",description:"별일 없는 하루의 잡다한 기록",author:"Jahyun Oh"}}}}},212:function(e,t,a){"use strict";var n=a(209),o=a(0),i=a.n(o),r=a(205),l=a(206),c=r.a.div.withConfig({displayName:"site-menu__ContentWrapper",componentId:"sc-1who3lo-0"})(["width:100%;background-color:#ffcc06;padding:0.8rem;text-align:center;"]),s=r.a.ul.withConfig({displayName:"site-menu__List",componentId:"sc-1who3lo-1"})(["liststyle:none;margin:0;"]),d=r.a.li.withConfig({displayName:"site-menu__InlineListItem",componentId:"sc-1who3lo-2"})(["font-family:'Lobster',cursive;font-size:1.2rem;display:inline-block;margin-bottom:0;margin-left:1.2rem;&:first-child{margin-left:0rem;}& a{color:white;}& a:hover{color:#202c6a;}"]),m=function(e){return i.a.createElement(d,null,i.a.createElement("a",{href:e.to},e.children))},p=function(){return i.a.createElement(c,null,i.a.createElement(s,null,i.a.createElement(m,{to:"/"},"Home"),i.a.createElement(m,{to:"/about/"},"About"),i.a.createElement(m,{to:"/posts/"},"Posts"),i.a.createElement(m,{to:"/tags/"},"Tags")))},u=r.a.header.withConfig({displayName:"header__HeaderWrapper",componentId:"uf9zlk-0"})(["background-color:#202c6a;"]),f=r.a.div.withConfig({displayName:"header__SiteInfo",componentId:"uf9zlk-1"})(["margin:0 auto;max-width:960px;padding:2.5rem;text-align:center;"]),g=r.a.h1.withConfig({displayName:"header__SiteTitle",componentId:"uf9zlk-2"})(["font-family:'Lobster',cursive;margin:0 0 0.8rem 0;font-size:2.5rem;& a{color:white;}& a:hover{color:#ffcc06;}"]),h=r.a.p.withConfig({displayName:"header__SiteDescription",componentId:"uf9zlk-3"})(["color:#f2f2f2;margin:0;font-size:0.9rem;"]),w=function(e){var t=e.siteTitle,a=e.description;return i.a.createElement(u,null,i.a.createElement(f,null,i.a.createElement(g,null,i.a.createElement(l.a,{to:"/"},t)),i.a.createElement(h,null,a)),i.a.createElement(p,null))};w.defaultProps={siteTitle:"",description:"",social:[]};var b=w,y=r.a.footer.withConfig({displayName:"footer__ContentWrapper",componentId:"sc-1j0boyw-0"})(["border-top:1px solid #EFEAF4;padding-top:0.5rem;padding-bottom:1rem;text-align:center;font-size:0.8rem;font-family:'Noto Sans KR',sans-serif;"]),E=function(e){var t=e.author;return i.a.createElement(y,null,"© 2014-",(new Date).getFullYear()," ",i.a.createElement("b",null,t),". All rights reserved. Built with"," ",i.a.createElement("b",null,i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),".")};E.defaultProps={author:""};var v=E,_=(a(196),r.a.div.withConfig({displayName:"layout__ContentWrapper",componentId:"sc-1jczwjl-0"})(["margin:0 auto;max-width:800px;padding:2rem 1rem;& main{min-height:400;}"]));t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{siteTitle:a.site.siteMetadata.title,description:a.site.siteMetadata.description,social:a.site.siteMetadata.social}),i.a.createElement(_,null,i.a.createElement("main",null,t)),i.a.createElement(v,{author:a.site.siteMetadata.author}))}},219:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(205).a.div.withConfig({displayName:"post-meta-item__ContentWrapper",componentId:"sc-1jpwhy6-0"})(["display:inline-block;vertical-align:middle;padding:0;margin:0;"]);t.a=function(e){var t=e.icon,a=e.iconLabel,n=e.text;return o.a.createElement(i,null,o.a.createElement("span",{role:"img","aria-label":a},t),n)}},266:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"927b10d5-ef89-574b-a862-95dec78419b3",frontmatter:{title:"내집마련 해커톤 작업노트 1편",date:"2019-09-25 00:15:00+0900"},fields:{slug:"/posts/2019-09-25-Hackathon-for-My-Own-Blog-Work-Log-1/"},timeToRead:3,excerpt:"지난 후기에 이어서 내집마련 해커톤에서 무엇을 했고, 어떤 삽질을 했는지 정리해보겠다. 내집마련 해커톤에 참여하는 사람들은 내집마련 내집수리 해비타트 (팀 블로그 만들기) 기타 (블로그 관련 개발 등) 중에서 선택할 수 있는데 내 경우에는 내집수리가…"}},{node:{id:"5af6510b-681b-595c-b568-25c5dfba3d8a",frontmatter:{title:"내집마련 해커톤 후기",date:"2019-09-22 16:00:00+0900"},fields:{slug:"/posts/2019-09-22-Hackathon-for-My-Own-Blog/"},timeToRead:2,excerpt:"한나님 소개로 post-a-week 의 GODORI님이 주최하는 내집마련 해커톤에 참여하였다. 모임 페이지 설명에 따르면: 내집마련 해커톤은 개발 블로그를 만들거나 블로그 관련 프로젝트를 하기 위한 원데이 해커톤입니다 해커톤 참여는 처음인데다 최근에…"}},{node:{id:"a66128fc-e95c-55a4-9c88-c35985526ca1",frontmatter:{title:"Github Pages로 블로그 배포하기",date:"2019-09-18 22:30:00+0900"},fields:{slug:"/posts/2019-09-18-Deploying-to-GitHub-Pages/"},timeToRead:2,excerpt:"처음 Jekyll로 블로그를 만들었을 때는 공개 저장소인 soharu.github.io로 블로그를 호스팅했다. DocPad로 이전했을 때는 별도 저장소를 두고 gh-pages를 이용하여 생성된 파일을 soharu.github.io로 배포하였다. Je…"}},{node:{id:"2b8f715c-687c-58b6-ae26-04acfe0fee81",frontmatter:{title:"레이아웃과 스타일링",date:"2019-09-17 22:27:00+0900"},fields:{slug:"/posts/2019-09-17-Layout-and-Styling-in-Gatsby/"},timeToRead:1,excerpt:"gatsby-starter-default를 사용하면 기본 컴포넌트로   이 제공된다. 은 헤더를 포함한 전체 페이지 레이아웃을 결정하는데 pages에 정의된 개별 페이지를 위한 자바스크립트 파일에서 이 layout 컴포넌트를 사용한다. 내 블로그와 …"}},{node:{id:"ba51a6b7-2ffd-528c-80a9-db5938baf726",frontmatter:{title:"DocPad to Gatsby",date:"2019-09-16 22:27:00+0900"},fields:{slug:"/posts/2019-09-16-DocPad-to-Gatsby/"},timeToRead:2,excerpt:"꽤 오랜 기간 블로그를 방치해 두다가 다시 글을 좀 써볼까 하고 저장소를 체크아웃 했다. 로컬에서 사이트 생성기를 실행하니 제대로 동작하지 않았다. 최신 버전으로 업그레이드 해야하는 건가 싶어서 DocPad 사이트에 찾아갔더니 프로젝트가 중단되었다는…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8701aa2c143eea76a470.js.map