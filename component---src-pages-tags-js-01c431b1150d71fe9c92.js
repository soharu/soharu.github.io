"use strict";(self.webpackChunksoharu_gatsby_blog=self.webpackChunksoharu_gatsby_blog||[]).push([[159],{6189:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7294),i=n(1597),r=n(9),l=r.default.div.withConfig({displayName:"site-menu__ContentWrapper",componentId:"sc-1who3lo-0"})(["width:100%;background-color:#ffcc06;padding:0.8rem;text-align:center;"]),o=r.default.ul.withConfig({displayName:"site-menu__List",componentId:"sc-1who3lo-1"})(["liststyle:none;margin:0;"]),c=r.default.li.withConfig({displayName:"site-menu__InlineListItem",componentId:"sc-1who3lo-2"})(["font-family:'Noto Sans KR',sans-serif;font-size:1.2rem;font-weight:bold;display:inline-block;margin-bottom:0;margin-left:1.2rem;&:first-child{margin-left:0rem;}& a{color:white;}& a:hover{color:#202c6a;}"]),s=function(e){return a.createElement(c,null,a.createElement("a",{href:e.to},e.children))},m=function(){return a.createElement(l,null,a.createElement(o,null,a.createElement(s,{to:"/about/"},"누구"),a.createElement(s,{to:"/"},"최신 글"),a.createElement(s,{to:"/posts/"},"모든 글"),a.createElement(s,{to:"/tags/"},"태그")))},u=r.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-uf9zlk-0"})(["background-color:#202c6a;"]),d=r.default.div.withConfig({displayName:"header__SiteInfo",componentId:"sc-uf9zlk-1"})(["margin:0 auto;max-width:960px;padding:2.5rem;text-align:center;"]),f=r.default.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-uf9zlk-2"})(["margin:0 0 0.8rem 0;font-size:2.5rem;& a{color:white;}& a:hover{color:#ffcc06;}"]),p=r.default.p.withConfig({displayName:"header__SiteDescription",componentId:"sc-uf9zlk-3"})(["color:#f2f2f2;margin:0;font-size:0.9rem;"]),g=function(e){var t=e.siteTitle,n=e.description;return a.createElement(u,null,a.createElement(d,null,a.createElement(f,null,a.createElement(i.Link,{to:"/"},t)),a.createElement(p,null,n)),a.createElement(m,null))};g.defaultProps={siteTitle:"",description:"",social:[]};var h=g,E=r.default.footer.withConfig({displayName:"footer__ContentWrapper",componentId:"sc-1j0boyw-0"})(["border-top:1px solid #EFEAF4;padding-top:0.5rem;padding-bottom:1rem;text-align:center;font-size:0.8rem;font-family:'Noto Sans KR',sans-serif;"]),w=function(e){var t=e.author;return a.createElement(E,null,"© 2014-",(new Date).getFullYear()," ",t," / ",a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"로 만듬")};w.defaultProps={author:""};var y=w,_=r.default.div.withConfig({displayName:"layout__ContentWrapper",componentId:"sc-1jczwjl-0"})(["margin:0 auto;max-width:800px;padding:2rem 1rem;& main{min-height:400;}"]),b=function(e){var t=e.children,n=(0,i.useStaticQuery)("4176829876");return a.createElement(a.Fragment,null,a.createElement(h,{siteTitle:n.site.siteMetadata.title,description:n.site.siteMetadata.description,social:n.site.siteMetadata.social}),a.createElement(_,null,a.createElement("main",null,t)),a.createElement(y,{author:n.site.siteMetadata.author}))}},3500:function(e,t,n){var a=n(7294),i=n(2055),r=n(1597);function l(e){var t=e.description,n=e.lang,l=e.meta,o=e.title,c=(0,r.useStaticQuery)("63159454").site,s=t||c.siteMetadata.description;return a.createElement(i.HelmetProvider,null,a.createElement(i.Helmet,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"}].concat(l)}))}l.defaultProps={lang:"ko",meta:[],description:""},t.Z=l},1325:function(e,t,n){n.r(t);var a=n(7294),i=n(1597),r=n(9),l=n(6189),o=n(3500),c=n(7946),s=r.default.h2.withConfig({displayName:"tags__PageTitle",componentId:"sc-9gbhtu-0"})(["margin:0;padding:0 0 1rem 0;"]);t.default=function(){var e=(0,i.useStaticQuery)("1199425079").allPosts.tagGroup.sort((function(e,t){return t.totalCount-e.totalCount}));return a.createElement(l.Z,null,a.createElement(o.Z,{title:"Tags"}),a.createElement(s,null,"Tags"),a.createElement("div",null,e.map((function(e){return a.createElement(c.Z,{key:e.fieldValue,name:e.fieldValue,count:e.totalCount})}))))}}}]);
//# sourceMappingURL=component---src-pages-tags-js-01c431b1150d71fe9c92.js.map