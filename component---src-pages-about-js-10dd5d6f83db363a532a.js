"use strict";(self.webpackChunksoharu_gatsby_blog=self.webpackChunksoharu_gatsby_blog||[]).push([[682],{6162:function(e,t,a){var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),l=r(a(5354)),o=r(a(7316)),s=r(a(7154)),d=r(a(7294)),c=r(a(5697)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,E=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+d+l+o+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(z,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,E=e.Tag,w=e.itemProp,v=e.loading,x=e.draggable,C=g||h;if(!C)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,s.default)({opacity:k?1:0,transition:N?"opacity "+y+"ms":"none"},o),H="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&T,o,f),W={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:w},j=this.state.isHydrated?p(C):C[0];if(g)return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),H&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&T)}),j.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:C,generateSources:L}),j.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:C,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(C),d.default.createElement(z,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:v},j,{imageVariants:C}))}}));if(h){var P=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete P.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},H&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},N&&T)}),j.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:C,generateSources:L}),j.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:C,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(C),d.default.createElement(z,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:v},j,{imageVariants:C}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:N,sizes:O,fixed:H(c.default.oneOfType([N,c.default.arrayOf(N)])),fluid:H(c.default.oneOfType([O,c.default.arrayOf(O)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=k;t.Z=T},6189:function(e,t,a){a.d(t,{Z:function(){return S}});var r=a(7294),i=a(1597),n=a(9),l=n.default.div.withConfig({displayName:"site-menu__ContentWrapper",componentId:"sc-1who3lo-0"})(["width:100%;background-color:#ffcc06;padding:0.8rem;text-align:center;"]),o=n.default.ul.withConfig({displayName:"site-menu__List",componentId:"sc-1who3lo-1"})(["liststyle:none;margin:0;"]),s=n.default.li.withConfig({displayName:"site-menu__InlineListItem",componentId:"sc-1who3lo-2"})(["font-family:'Noto Sans KR',sans-serif;font-size:1.2rem;font-weight:bold;display:inline-block;margin-bottom:0;margin-left:1.2rem;&:first-child{margin-left:0rem;}& a{color:white;}& a:hover{color:#202c6a;}"]),d=function(e){return r.createElement(s,null,r.createElement("a",{href:e.to},e.children))},c=function(){return r.createElement(l,null,r.createElement(o,null,r.createElement(d,{to:"/about/"},"누구"),r.createElement(d,{to:"/"},"최신 글"),r.createElement(d,{to:"/posts/"},"모든 글"),r.createElement(d,{to:"/tags/"},"태그")))},u=n.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-uf9zlk-0"})(["background-color:#202c6a;"]),f=n.default.div.withConfig({displayName:"header__SiteInfo",componentId:"sc-uf9zlk-1"})(["margin:0 auto;max-width:960px;padding:2.5rem;text-align:center;"]),m=n.default.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-uf9zlk-2"})(["margin:0 0 0.8rem 0;font-size:2.5rem;& a{color:white;}& a:hover{color:#ffcc06;}"]),p=n.default.p.withConfig({displayName:"header__SiteDescription",componentId:"sc-uf9zlk-3"})(["color:#f2f2f2;margin:0;font-size:0.9rem;"]),g=function(e){var t=e.siteTitle,a=e.description;return r.createElement(u,null,r.createElement(f,null,r.createElement(m,null,r.createElement(i.Link,{to:"/"},t)),r.createElement(p,null,a)),r.createElement(c,null))};g.defaultProps={siteTitle:"",description:"",social:[]};var h=g,b=n.default.footer.withConfig({displayName:"footer__ContentWrapper",componentId:"sc-1j0boyw-0"})(["border-top:1px solid #EFEAF4;padding-top:0.5rem;padding-bottom:1rem;text-align:center;font-size:0.8rem;font-family:'Noto Sans KR',sans-serif;"]),y=function(e){var t=e.author;return r.createElement(b,null,"© 2014-",(new Date).getFullYear()," ",t," / ",r.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"로 만듬")};y.defaultProps={author:""};var E=y,w=n.default.div.withConfig({displayName:"layout__ContentWrapper",componentId:"sc-1jczwjl-0"})(["margin:0 auto;max-width:800px;padding:2rem 1rem;& main{min-height:400;}"]),S=function(e){var t=e.children,a=(0,i.useStaticQuery)("4176829876");return r.createElement(r.Fragment,null,r.createElement(h,{siteTitle:a.site.siteMetadata.title,description:a.site.siteMetadata.description,social:a.site.siteMetadata.social}),r.createElement(w,null,r.createElement("main",null,t)),r.createElement(E,{author:a.site.siteMetadata.author}))}},3500:function(e,t,a){var r=a(7294),i=a(2055),n=a(1597);function l(e){var t=e.description,a=e.lang,l=e.meta,o=e.title,s=(0,n.useStaticQuery)("63159454").site,d=t||s.siteMetadata.description;return r.createElement(i.HelmetProvider,null,r.createElement(i.Helmet,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"}].concat(l)}))}l.defaultProps={lang:"ko",meta:[],description:""},t.Z=l},5465:function(e,t,a){a.r(t);var r=a(7294),i=a(1597),n=a(6162),l=a(9),o=a(6189),s=a(3500),d=l.default.section.withConfig({displayName:"about__SectionWrapper",componentId:"sc-iwouy1-0"})(["margin:0;padding:2rem 0 1rem 0;text-align:center;& p{margin:0;padding:0 0 1rem 0;}"]),c=l.default.h2.withConfig({displayName:"about__SectionTitle",componentId:"sc-iwouy1-1"})(["margin:0;padding:1rem 0;font-family:'Noto Sans KR',sans-serif;& span{font-weight:normal;font-size:0.8rem;}"]),u=l.default.div.withConfig({displayName:"about__SectionContents",componentId:"sc-iwouy1-2"})(["margin:0;padding:0 0 1rem 0;"]),f=l.default.div.withConfig({displayName:"about__SocialLinks",componentId:"sc-iwouy1-3"})(["display:flex;flex-direction:row;justify-content:center;gap:0.5rem;"]),m=l.default.a.withConfig({displayName:"about__SocialLink",componentId:"sc-iwouy1-4"})(["font-family:'Noto Sans KR',sans-serif;display:inline-block;margin:0;background-color:#202c6a;font-size:0.6rem;padding:0.1rem 0.4rem;border-radius:0.1rem;color:white;&:hover{background-color:#ffcc06;text-decoration:none;}"]);t.default=function(){var e=(0,i.useStaticQuery)("478708071");return r.createElement(o.Z,null,r.createElement(s.Z,{title:"About"}),r.createElement(d,null,r.createElement(n.Z,{fixed:e.profileImage.childImageSharp.fixed,alt:"haru"}),r.createElement(c,null,"오 자 현",r.createElement("br",null),r.createElement("span",null,"(닉네임: 하루)")),r.createElement(u,null,r.createElement("p",null,"* * *"),r.createElement("p",null,"시니어 소프트웨어 엔지니어",r.createElement("br",null),"실용주의 프로그래머 & 클린 코더"),r.createElement("p",null,"* * *"),r.createElement("p",null,"현재 커머스 플랫폼에서 프론트엔드 개발",r.createElement("br",null),"전직 iOS 앱 개발, Nodejs 백엔드 개발 등등"),r.createElement("p",null,"* * *"),r.createElement("p",null,"블로그 운영에 대한 기조는",r.createElement("br",null),"일단 나에게 도움되는 글쓰기",r.createElement("br",null),"다른 사람에게도 도움 되면 일석이조"),r.createElement("p",null,"* * *"),r.createElement(f,null,r.createElement(m,{href:"https://github.com/soharu"},"Github: @soharu"),r.createElement(m,{href:"https://github.com/soharu"},"instgram: @soharu.day")))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-10dd5d6f83db363a532a.js.map