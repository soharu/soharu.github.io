"use strict";(self.webpackChunksoharu_gatsby_blog=self.webpackChunksoharu_gatsby_blog||[]).push([[986],{1157:function(t,e,n){var o=n(7294),r=n(1082),i=n(3964),a=n.n(i),s=n(9),l=s.default.section.withConfig({displayName:"post-list-section__SectionWrapper",componentId:"sc-1or4tfp-0"})(["margin:0 0 1.5rem 0;padding:0;&:last-child{margin-bottom:1rem;}"]),m=s.default.h2.withConfig({displayName:"post-list-section__SectionTitle",componentId:"sc-1or4tfp-1"})(["margin-bottom:0.5rem;padding:0 0 1rem 0;border-bottom:1px dashed #ccc;& span{font-weight:lighter;color:red;font-size:0.8rem;}"]),c=s.default.div.withConfig({displayName:"post-list-section__PostListItem",componentId:"sc-1or4tfp-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;column-gap:1rem;row-gap:0.2rem;align-items:center;margin-bottom:0.5rem;padding:0;"]),f=s.default.div.withConfig({displayName:"post-list-section__PostDate",componentId:"sc-1or4tfp-3"})(["margin:0;border-radius:0.2rem;font-size:0.8rem;font-family:'Noto Sans KR',sans-serif;"]),p=s.default.div.withConfig({displayName:"post-list-section__PostTitle",componentId:"sc-1or4tfp-4"})(["margin:0;min-width:300px;"]),d=function(t){var e=t.title,n=t.posts,i=""+e;return o.createElement(l,null,o.createElement(m,null,i),n.map((function(t){var e=t.node,n=a()(e.frontmatter.date).local().format("YYYY년 MM월 DD일");return o.createElement(c,{key:e.id},o.createElement(f,null,n),o.createElement(p,null,o.createElement(r.Link,{to:e.fields.slug},e.frontmatter.title)))})))};d.defaultProps={title:"",posts:[]},e.Z=d},4813:function(t,e,n){n.r(e);var o=n(5785),r=n(7294),i=n(1082),a=n(6189),s=n(3500),l=n(1157);e.default=function(){var t=(0,i.useStaticQuery)("2564608239"),e=t.posts.edges.map((function(t){return t.node.frontmatter.year})),n=(0,o.Z)(new Set(e)),m={};return n.forEach((function(e){m[e]=t.posts.edges.filter((function(t){return t.node.frontmatter.year===e}))})),r.createElement(a.Z,null,r.createElement(s.Z,{title:"Posts"}),n.map((function(t){return r.createElement(l.Z,{key:t,title:t+"년",posts:m[t]})})))}}}]);
//# sourceMappingURL=component---src-pages-posts-js-e3984c14260caaaaff37.js.map