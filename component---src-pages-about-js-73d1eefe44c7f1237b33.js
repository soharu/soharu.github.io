(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{201:function(e,t,a){"use strict";a.r(t);a(242);var r=a(258),i=a(0),n=a.n(i),o=a(259),s=a.n(o),l=a(205),d=a(212),c=a(210),u=l.a.section.withConfig({displayName:"about__SectionWrapper",componentId:"iwouy1-0"})(["margin:0;padding:2rem 0 1rem 0;text-align:center;& p{margin:0;padding:0 0 1rem 0;}"]),f=l.a.h2.withConfig({displayName:"about__SectionTitle",componentId:"iwouy1-1"})(["margin:0;padding:1rem 0;"]),m=l.a.div.withConfig({displayName:"about__SectionContents",componentId:"iwouy1-2"})(["margin:0;padding:0 0 1rem 0;"]),p=l.a.a.withConfig({displayName:"about__SocialLink",componentId:"iwouy1-3"})(["display:inline-block;margin:0;background-color:#202c6a;font-size:0.6rem;padding:0.1rem 0.4rem;border-radius:0.1rem;color:white;&:hover{background-color:#ffcc06;text-decoration:none;}"]);t.default=function(){var e=r.data;return n.a.createElement(d.a,null,n.a.createElement(c.a,{title:"About"}),n.a.createElement(u,null,n.a.createElement(s.a,{fixed:e.profileImage.childImageSharp.fixed,alt:"haru-thumbs-up"}),n.a.createElement(f,null,"Haru"),n.a.createElement(m,null,n.a.createElement("p",null,n.a.createElement(p,{href:"https://github.com/soharu"},"Github: @soharu")),n.a.createElement("p",null,"Software Engineer",n.a.createElement("br",null),"(Currently iOS App Developer)"),n.a.createElement("p",null,"* * *"),n.a.createElement("p",null,"짧은 호흡으로 글쓰는 연습 공간"),n.a.createElement("p",null,"남들은 모르겠고 나한테 도움되는 글쓰기"),n.a.createElement("p",null,"취미 코딩은 최대한 잉여하게"))))}},206:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),o=a.n(n);a.d(t,"a",function(){return o.a});a(207),a(9).default.enqueue,i.a.createContext({})},207:function(e,t,a){var r;e.exports=(r=a(208))&&r.default||r},208:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),i=a.n(r),n=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e){e.exports={data:{site:{siteMetadata:{author:"Jahyun Oh",title:"haru-note",description:"별일 없는 하루의 잡다한 기록",social:[{name:"github",url:"https://github.com/soharu"},{name:"instagram",url:"https://www.instagram.com/soharu.day"}]}}}}},210:function(e,t,a){"use strict";var r=a(211),i=a(0),n=a.n(i),o=a(214),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},211:function(e){e.exports={data:{site:{siteMetadata:{title:"haru-note",description:"별일 없는 하루의 잡다한 기록",author:"Jahyun Oh"}}}}},212:function(e,t,a){"use strict";var r=a(209),i=a(0),n=a.n(i),o=a(205),s=a(206),l=o.a.div.withConfig({displayName:"site-menu__ContentWrapper",componentId:"sc-1amydso-0"})(["width:100%;background-color:#ffcc06;padding:0.5rem;text-align:center;"]),d=o.a.ul.withConfig({displayName:"site-menu__List",componentId:"sc-1amydso-1"})(["liststyle:none;margin:0;"]),c=o.a.li.withConfig({displayName:"site-menu__InlineListItem",componentId:"sc-1amydso-2"})(["display:inline-block;margin-bottom:0;margin-left:0.8rem;&:first-child{margin-left:0rem;}& a{color:white;}& a:hover{color:#202c6a;}"]),u=function(e){return n.a.createElement(c,null,n.a.createElement("a",{href:e.to},e.children))},f=function(){return n.a.createElement(l,null,n.a.createElement(d,null,n.a.createElement(u,{to:"/"},"Home"),n.a.createElement(u,{to:"/about/"},"About"),n.a.createElement(u,{to:"/posts/"},"Posts"),n.a.createElement(u,{to:"/tags/"},"Tags")))},m=o.a.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["background-color:#202c6a;"]),p=o.a.div.withConfig({displayName:"header__SiteInfo",componentId:"sc-31ozxh-1"})(["margin:0 auto;max-width:960px;padding:2.5rem;text-align:center;"]),g=o.a.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-31ozxh-2"})(["display:inline-block;margin:0 0 0.8rem 0;& a{color:white;}& a:hover{color:#ffcc06;}"]),h=o.a.p.withConfig({displayName:"header__SiteDescription",componentId:"sc-31ozxh-3"})(["color:#f2f2f2;margin:0;font-size:0.8rem;"]),b=function(e){var t=e.siteTitle,a=e.description;return n.a.createElement(m,null,n.a.createElement(p,null,n.a.createElement(g,null,n.a.createElement(s.a,{to:"/"},t)),n.a.createElement(h,null,a)),n.a.createElement(f,null))};b.defaultProps={siteTitle:"",description:"",social:[]};var y=b,E=o.a.footer.withConfig({displayName:"footer__ContentWrapper",componentId:"r54yyk-0"})(["border-top:1px solid #EFEAF4;padding-top:0.5rem;padding-bottom:1rem;text-align:center;font-size:0.8rem;"]),w=function(e){var t=e.author;return n.a.createElement(E,null,"© 2014-",(new Date).getFullYear()," ",n.a.createElement("b",null,t),". All rights reserved. Built with"," ",n.a.createElement("b",null,n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),".")};w.defaultProps={author:""};var S=w,v=(a(196),o.a.div.withConfig({displayName:"layout__ContentWrapper",componentId:"sc-1jczwjl-0"})(["margin:0 auto;max-width:800px;padding:2rem 1rem;& main{min-height:400;}"]));t.a=function(e){var t=e.children,a=r.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{siteTitle:a.site.siteMetadata.title,description:a.site.siteMetadata.description,social:a.site.siteMetadata.social}),n.a.createElement(v,null,n.a.createElement("main",null,t)),n.a.createElement(S,{author:a.site.siteMetadata.author}))}},242:function(e,t,a){"use strict";a(257)("fixed",function(e){return function(){return e(this,"tt","","")}})},257:function(e,t,a){var r=a(1),i=a(7),n=a(32),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},258:function(e){e.exports={data:{profileImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEu0lEQVQ4y11Ua1BUZRg+y2hcZM85sKKGl0mwmqyUptG8l8M09UfHjKJkzIhRo4sNjvmjHzZNWDZTEwkWWEgIaa4SiA2KXBVt2T1cVi4LyiU3cUwbpnRbxT1n36f3O7BbdmbePd/3ne959n2f9yKRJkvioTaZzRoh1miXJwU1OS3gVA6xDbMFAq2KfrdV8eou2c53N/D3qHGcNUJgQxzhRbAtbmKtrA1qigc9CjCsAkNsF9ku8X5QBgZ4zd/4ziDfTZekMIfFXASFZ5oSOsw1iXoY2KvovRWK/sX2qODnOZGUszGWdmXbgldOqTr6ZB1uvtOngDF5/yE1f8wwOYRcDPAFzWqgUzF2ZsaQrKj06IIllPHaVpr/+FKSIlSaNjWGSnOthG7ZMFxWHYMmaf7/vFTWskfQnbKBfiWY+3YU5iQ9Sadra+nO7b8hHt+tv9DUeBo529+nKUoiHd4TC3hkYozOGCZVMsbd1EQCWLMuDrVTNm7Ux2LB/ETq6u7D5cvDGBkZQejx+/24/vtV7PumBEsWRhG1q6wlO3HB1NTL8lmFhmkT3vE/qdTwtUQvpqVjbOwO+vr6+D12D6HT2Yr+/ktYuSwFf9RFcOgKDJeiT+iZJbQ7JDYm4UWVDn5koaUrUuFytULTXKiqqsLo6CgCgQAqKysxMDAAh8OBxYsXoTh3Lsac8YQ2xnpMwmrh4TAnAehQg7fORlLR3h348qvCsFc+nw8Hig9gf9F+3Lx5M3x+oOQgaupc6DzChF2cyC5VEPYIDwMsKG/iyN8SQfX2LBw+UsXa/WYCe3t70d7ZgYHhQWgul3nmdnciv6AATfY03D43mdCusgkdZZ9Itc6CgruD4JWp+8h9SEycifLycjQ2NqKuoQEXnO1oOn4Kjc3NnOkGHK2oReb6GcwsAd0qMZFJyFx+ydBkryjmoWo5WF8o02c5UzE5UsXOnTvC4VUWfI+8LR9M7HS8uy0HyXOi0X0sDldOWonbMSiSw8QeSXcqdgwp6LLLesK0qWRLmElJSXOwaPEqZG75ED/aa3Cm5Tza3G3I31eGJU9vwbwHU7Bs+QrEyjZkv8LhcrmJpDBhjQh5g9luHlmvK5JpijWBEmc9gtIyO+Y/8RJmz1uD6Q+k46EFbyB+1suYMfcFTtq3WLduLZYujCTfOZHQcNlki8KOEo0uCpszbnz8jopo2/O0e08h7vhHGVyEhLmvY3rym1iz/j34fTdw3tGBlIUpdL0uBowzmFB0yjX2MDxh0tHDU6Q/Rv8pbxZF21Jxsb+XhGJHK37G9KRNSEjaire2fWKq2NzcQqufWY3hE1OIuyTADSE6ZfNEH4/PwIBTzsNVFT/sjtRLyyqMxuZfcLKmklKf20QzkjNo9sMb6anl66lg76d0zjmIs/UlxsgJKQCvDYamlEwMGMu/Q1EM1gtqPmmRaDi+C8e/e1Z3FEt6S3G04ShVSCu3kudYTFA7aDFqD72qO46t4iKN4nJTS0J4k/CehSB1x2X4zkhe9PNlbzwPVVUkjMHy+KD9lc96LIBr0jW44zeHyUKjK+Th3VZZYoB5iD9XWoNttiyWoZrLqofNp7sUP5uHrYY6pmXr7sfMBGDofgvXoSU0rP8BVoe555ENxXcAAAAASUVORK5CYII=",width:150,height:150,src:"/static/9197d31aac24975b2c10bf7312edaaef/4148e/haru-icon.png",srcSet:"/static/9197d31aac24975b2c10bf7312edaaef/4148e/haru-icon.png 1x,\n/static/9197d31aac24975b2c10bf7312edaaef/de03e/haru-icon.png 1.5x,\n/static/9197d31aac24975b2c10bf7312edaaef/1e9e2/haru-icon.png 2x"}}}}}},259:function(e,t,a){"use strict";a(29),a(30),a(13),a(95),a(143),a(242);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(73)),o=r(a(74)),s=r(a(144)),l=r(a(145)),d=r(a(0)),c=r(a(53)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function w(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(C,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},C=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,I=e.loading,L=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:x?1:0,transition:z?"opacity "+b+"ms":"none"},s),N="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&R,s,f),V={title:t,alt:this.state.isVisible?"":a,style:k,className:m};if(p){var W=p,j=W[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),N&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&R)}),j.base64&&d.default.createElement(A,{src:j.base64,spreadProps:V,imageVariants:W,generateSources:v}),j.tracedSVG&&d.default.createElement(A,{src:j.tracedSVG,spreadProps:V,imageVariants:W,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(W),d.default.createElement(C,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:I},j,{imageVariants:W}))}}))}if(g){var M=g,D=M[0],U=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete U.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},N&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:N,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},z&&R)}),D.base64&&d.default.createElement(A,{src:D.base64,spreadProps:V,imageVariants:M,generateSources:v}),D.tracedSVG&&d.default.createElement(A,{src:D.tracedSVG,spreadProps:V,imageVariants:M,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(M),d.default.createElement(C,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:I},D,{imageVariants:M}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:z,sizes:T,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=x;t.default=N}}]);
//# sourceMappingURL=component---src-pages-about-js-73d1eefe44c7f1237b33.js.map