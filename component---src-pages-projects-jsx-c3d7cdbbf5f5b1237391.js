(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});a(48);var r=a(0),i=a.n(r),n=a(142),l=a(153),s=a.n(l),o=a(149);t.default=function(e){var t=e.data;return i.a.createElement(o.a,{title:"Projects"},i.a.createElement("div",{className:"item-grid"},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return i.a.createElement("div",{key:t.id},t.frontmatter.cover_image&&i.a.createElement(n.Link,{to:t.fields.slug},i.a.createElement(s.a,{fluid:t.frontmatter.cover_image.childImageSharp.fluid})),i.a.createElement("h3",null,i.a.createElement(n.Link,{to:t.fields.slug},t.frontmatter.title)),i.a.createElement("h4",null,t.frontmatter.date),i.a.createElement("p",null,t.excerpt))})))};var d="998416907"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return h});var r=a(0),i=a.n(r),n=a(4),l=a.n(n),s=a(141),o=a.n(s);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(143),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),h=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},143:function(e,t,a){var r;e.exports=(r=a(146))&&r.default||r},144:function(e,t,a){"use strict";a(33);var r=a(145),i=a.n(r),n=a(0),l=a.n(n);t.a=function(e){var t=e.children,a=i()(e,["children"]);return l.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},a),t)}},146:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),l=a.n(n),s=a(49),o=a(2),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},147:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/logo-df13ca95024f318881e91721d9086a33.png"},149:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(150),l=a.n(n),s=(a(151),a(147),a(142)),o=(a(48),a(144)),d=["about","blog","projects","team"],c=function(){return i.a.createElement("ul",{id:"main-menu"},d.map(function(e,t){return i.a.createElement("li",{key:e},i.a.createElement(s.Link,{to:t?e:"/"},e))}),i.a.createElement("li",null,i.a.createElement(o.a,{href:"https://github.com/lncm"},"github")))},u=a(148),f=a.n(u),h=function(){return i.a.createElement("header",{id:"main-header"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:f.a,alt:"LNCM Logo",className:"logo"})),i.a.createElement("h1",null,"LNCM",i.a.createElement("br",null),i.a.createElement("small",null,"Lightning Network Chiang Mai")),i.a.createElement(c,null))};t.a=function(e){var t=e.children,a=e.title;return i.a.createElement("div",{id:"layout-container"},i.a.createElement(l.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"LNCM"),i.a.createElement("link",{rel:"description",href:"Lightning Network Chiang Mai"})),i.a.createElement(h,null),a&&i.a.createElement("h2",null,a),i.a.createElement("div",{className:"content"},t))}},153:function(e,t,a){"use strict";var r=a(35);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),l=r(a(50)),s=r(a(145)),o=r(a(154)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},h=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},p=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+s+o+t+l+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1,s=t.fadeIn,o=h(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:n,fadeIn:s,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.Tag,E="boolean"==typeof m?"lightgray":m,v=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),w=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s);if(h){var S=h;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:S.base64,style:v}),S.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:S.tracedSVG,style:v}),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(y,{alt:a,title:t,src:S.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},S))}}))}if(p){var L=p,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.base64,style:v}),L.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.tracedSVG,style:v}),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-c3d7cdbbf5f5b1237391.js.map