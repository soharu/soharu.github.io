(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(212),o=a(210);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},206:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(66),o=a.n(r);a.d(t,"a",function(){return o.a});a(207),a(9).default.enqueue,i.a.createContext({})},207:function(e,t,a){var n;e.exports=(n=a(209))&&n.default||n},208:function(e){e.exports={data:{site:{siteMetadata:{author:"Jahyun Oh",title:"haru-note",description:"별일 없는 하루의 잡다한 기록",social:[{name:"github",url:"https://github.com/soharu"},{name:"instagram",url:"https://www.instagram.com/soharu.day"}]}}}}},209:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),i=a.n(n),r=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},210:function(e,t,a){"use strict";var n=a(211),i=a(0),r=a.n(i),o=a(214),l=a.n(o);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},211:function(e){e.exports={data:{site:{siteMetadata:{title:"haru-note",description:"별일 없는 하루의 잡다한 기록",author:"Jahyun Oh"}}}}},212:function(e,t,a){"use strict";var n=a(208),i=a(0),r=a.n(i),o=a(205),l=a(206),c=o.a.div.withConfig({displayName:"site-menu__ContentWrapper",componentId:"sc-1amydso-0"})(["width:100%;background-color:#ffcc06;padding:0.5rem;text-align:center;"]),s=o.a.ul.withConfig({displayName:"site-menu__List",componentId:"sc-1amydso-1"})(["liststyle:none;margin:0;"]),u=o.a.li.withConfig({displayName:"site-menu__InlineListItem",componentId:"sc-1amydso-2"})(["display:inline-block;margin-bottom:0;margin-left:0.8rem;&:first-child{margin-left:0rem;}& a{color:white;}& a:hover{color:#202c6a;}"]),m=function(e){return r.a.createElement(u,null,r.a.createElement("a",{href:e.to},e.children))},d=function(){return r.a.createElement(c,null,r.a.createElement(s,null,r.a.createElement(m,{to:"/"},"Home"),r.a.createElement(m,{to:"/about/"},"About"),r.a.createElement(m,{to:"/posts/"},"Posts"),r.a.createElement(m,{to:"/tags/"},"Tags")))},p=o.a.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["background-color:#202c6a;"]),h=o.a.div.withConfig({displayName:"header__SiteInfo",componentId:"sc-31ozxh-1"})(["margin:0 auto;max-width:960px;padding:2.5rem;text-align:center;"]),f=o.a.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-31ozxh-2"})(["display:inline-block;margin:0 0 0.8rem 0;& a{color:white;}& a:hover{color:#ffcc06;}"]),g=o.a.p.withConfig({displayName:"header__SiteDescription",componentId:"sc-31ozxh-3"})(["color:#f2f2f2;margin:0;font-size:0.8rem;"]),E=function(e){var t=e.siteTitle,a=e.description;return r.a.createElement(p,null,r.a.createElement(h,null,r.a.createElement(f,null,r.a.createElement(l.a,{to:"/"},t)),r.a.createElement(g,null,a)),r.a.createElement(d,null))};E.defaultProps={siteTitle:"",description:"",social:[]};var w=E,y=o.a.footer.withConfig({displayName:"footer__ContentWrapper",componentId:"r54yyk-0"})(["border-top:1px solid #EFEAF4;padding-top:0.5rem;padding-bottom:1rem;text-align:center;font-size:0.8rem;"]),b=function(e){var t=e.author;return r.a.createElement(y,null,"© 2014-",(new Date).getFullYear()," ",r.a.createElement("b",null,t),". All rights reserved. Built with"," ",r.a.createElement("b",null,r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),".")};b.defaultProps={author:""};var v=b,_=(a(196),o.a.div.withConfig({displayName:"layout__ContentWrapper",componentId:"ii2kc2-0"})(["margin:0 auto;max-width:800px;padding:1.45rem 1rem;& main{min-height:400;}"]));t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{siteTitle:a.site.siteMetadata.title,description:a.site.siteMetadata.description,social:a.site.siteMetadata.social}),r.a.createElement(_,null,r.a.createElement("main",null,t)),r.a.createElement(v,{author:a.site.siteMetadata.author}))}}}]);
//# sourceMappingURL=component---src-pages-404-js-81d548caba82bdea978d.js.map