(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("b0WT"),o=a("q1tI"),i=a.n(o),r=a("Wbzz"),d=a("Bl7J"),l=a("vrFN"),c=a("wd/R"),m=a.n(c),p=a("vOnD"),s=a("rOMS"),f=p.a.div.withConfig({displayName:"post-preview__ContentWrapper",componentId:"qjle4c-0"})(["margin-bottom:0.5rem;padding:1rem;background-color:#f2f2f2;"]),g=p.a.h3.withConfig({displayName:"post-preview__Title",componentId:"qjle4c-1"})(["margin:0 0 0.8rem 0;padding:0;font-size:1rem;background-color:#f2f2f2;& a{color:#000000;}& a:hover{color:#202c6a;}"]),u=p.a.div.withConfig({displayName:"post-preview__Excerpt",componentId:"qjle4c-2"})(["margin:0;padding:0;font-size:0.8rem;"]),b=p.a.div.withConfig({displayName:"post-preview__PostMetaList",componentId:"qjle4c-3"})(["margin:0.5rem 0 0 0;padding:0.1rem 0rem;text-align:right;color:#333;font-size:0.7rem;font-weight:light;"]),w=function(e){var t=e.post,a=m()(t.frontmatter.date).local().format("YYYY/MM/DD"),n=t.timeToRead+" min";return i.a.createElement(f,null,i.a.createElement(g,null,i.a.createElement(r.Link,{to:t.fields.slug},t.frontmatter.title)," "),i.a.createElement(u,null,t.excerpt),i.a.createElement(b,null,i.a.createElement(s.a,{icon:"🗓",iconLabel:"Date",text:a})," · ",i.a.createElement(s.a,{icon:"⏱",iconLabel:"timeToRead",text:n})))},T=p.a.section.withConfig({displayName:"pages__SectionWrapper",componentId:"sc-1dm6pdp-0"})(["margin:0;padding:0;"]),v=p.a.h2.withConfig({displayName:"pages__SectionTitle",componentId:"sc-1dm6pdp-1"})(["margin:0;padding:0 0 1rem 0;"]),h=p.a.div.withConfig({displayName:"pages__SectionContents",componentId:"sc-1dm6pdp-2"})(["margin:0;padding:0;"]),I=p.a.div.withConfig({displayName:"pages__SectionFooter",componentId:"sc-1dm6pdp-3"})(["margin:0;padding:0.5rem;text-align:center;font-size:0.8rem;background-color:#ffcc06;& a{color:#ffffff;}"]);t.default=function(){var e=n.data;return i.a.createElement(d.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement(T,null,i.a.createElement(v,null,"Recent Posts"),i.a.createElement(h,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return i.a.createElement(w,{key:t.id,post:t})}))),i.a.createElement(I,null,i.a.createElement(r.Link,{to:"/posts"},"Show All Posts"))))}},b0WT:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"278e4e4c-5189-54b5-9752-6a25a126eba4","frontmatter":{"title":"2019년 TSG 모임을 돌아보며","date":"2020-01-01 23:23:00+0900"},"fields":{"slug":"/posts/2020-01-01-2019-TSG-Review/"},"timeToRead":1,"excerpt":"매주 화요일에 진행되는 TSG(tuestudy.org) 모임의 2019년 결산을 하면서 느낀 개인적인 감상을 남겨본다. 1년 동안 41번 모임을 했는데 그 중에 40번 참석했다. 심지어 혼자 참석한 날도 있다. 하지만 그 뒤로는 혼자 할 거 같으면 …"}},{"node":{"id":"0977dad1-cb17-586d-b7ea-029e7445da7d","frontmatter":{"title":"TIL - 책과 서평","date":"2019-12-14 23:15:00+0900"},"fields":{"slug":"/posts/2019-12-14-TIL-Book-and-Book-Review/"},"timeToRead":1,"excerpt":"TIL 서평은 책에 대한 독자의 해석을 조리있게 글로 적은 것이다. 책과 서평 \\"서평 쓰는 법: 독서의 완성\\"을 계속 읽고 있다. 앞선 글에서 정리한 내용에서는 서평의 본질을 독후감과 비교하여 다루었다면, 그 다음에 이어지는 \\"책과 서평\\"이라는 장에…"}},{"node":{"id":"6d8bd41b-3243-541e-83c2-d31bc6c342de","frontmatter":{"title":"TIL - 서평과 독후감의 차이","date":"2019-12-13 23:15:00+0900"},"fields":{"slug":"/posts/2019-12-13-TIL-Book-Review-and-Impression/"},"timeToRead":1,"excerpt":"TIL 서평을 작성하기 위해서는 서평이 무엇인지를 정확히 알아야 한다. 서평의 소재는 책이고, 방식은 비평이다. 서평의 본질은 독후감과 비교했을 때 명확히 드러난다. 서평은 설득하는 글이기에 논리적이어야 하고, 서평을 읽는 독자의 세계로 나아가기 때…"}},{"node":{"id":"ca2ca460-9bab-57b9-9274-dc999ebc393a","frontmatter":{"title":"TIL - Github Pages 배포 문제 해결","date":"2019-12-12 13:38:00+0900"},"fields":{"slug":"/posts/2019-12-12-TIL-Github-Pages-Deployment-Problem/"},"timeToRead":2,"excerpt":"TIL Github Pages로 정적 사이트를 배포할 때,  파일을 사이트 루트에 추가해 두면 Github에서 Jekyll 빌드를 건너뛸 수 있다. 로 사이트를 배포할 때, dotfile을 함께 배포하려면  또는  옵션을 사용해야 한다. Github…"}},{"node":{"id":"2e0cfbbd-78d9-5e20-8598-dd62b6f209c4","frontmatter":{"title":"TIL - Youtubue 채널 운영팁","date":"2019-12-11 23:21:00+0900"},"fields":{"slug":"/posts/2019-12-11-TIL-Youtube-Tips/"},"timeToRead":2,"excerpt":"그림 유튜버의 그림 유튜브 운영팁 우선 영상을 촬영해야 한다. 촬영을 위해서는 장비가 필요하다. 동영상 촬영은 아이폰이면 충분 녹음 장비는 필수는 아님 그림 그리는 걸 찍어야 하기 때문에 아이폰 거치대가 필요 다음은 편집이다. 편집을 위해 두 가지 …"}}]}}}')},rOMS:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("vOnD").a.div.withConfig({displayName:"post-meta-item__ContentWrapper",componentId:"sc-1jpwhy6-0"})(["display:inline-block;vertical-align:middle;padding:0;margin:0;"]);t.a=function(e){var t=e.icon,a=e.iconLabel,n=e.text;return o.a.createElement(i,null,o.a.createElement("span",{role:"img","aria-label":a},t),n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-d60a216bd60806d60c6f.js.map