(self.webpackChunkgatsby_tailwindcss_typescript=self.webpackChunkgatsby_tailwindcss_typescript||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!i(e[s],o[s]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(d,"canUseDOM",c),d}}},7059:function(e,t,n){"use strict";n.d(t,{G:function(){return j},L:function(){return h},M:function(){return T},P:function(){return E},S:function(){return _},_:function(){return c},a:function(){return o},b:function(){return u},c:function(){return l},g:function(){return d},h:function(){return s}});var r=n(7294),a=(n(2369),n(5697)),i=n.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var l=function(e){var t;return function(e){var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,i,c,s){var l={};i&&(l.backgroundColor=i,"fixed"===n?(l.width=r,l.height=a,l.backgroundColor=i,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),c&&(l.objectFit=c),s&&(l.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}var f,p=["children"],m=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,n=c(e,p);return r.createElement(r.Fragment,null,r.createElement(m,o({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,a=e.loading,i=e.alt,s=void 0===i?"":i,l=e.shouldLoad,u=c(e,g);return r.createElement("img",o({},u,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:s}))},b=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,i=e.shouldLoad,s=void 0===i||i,l=c(e,y),u=l.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},l,t,{sizes:u,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:u})})),d):d};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,n=c(e,w);return t?r.createElement(b,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(f=b.propTypes)?void 0:f.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var T=function(e){return r.createElement(r.Fragment,null,r.createElement(b,o({},e)),r.createElement("noscript",null,r.createElement(b,o({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=b.propTypes;var C,k,x=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:x},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],N=new Set,L=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,l=e.style,u=e.backgroundColor,d=e.className,f=e.class,p=e.onStartLoad,m=e.onLoad,h=e.onError,g=c(e,A),y=i.width,v=i.height,b=i.layout,w=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),E=w.style,T=w.className,x=c(w,O),S=(0,r.useRef)(),L=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);f&&(d=f);var j=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([n.e(774),n.e(680)]).then(n.bind(n,8680)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=S.current.querySelector("[data-gatsby-image-ssr]");return r&&s()?(r.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(L)):k&&N.has(L)?void 0:(C.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;S.current&&(S.current.innerHTML=r(o({isLoading:!0,isLoaded:N.has(L),image:i},g)),N.has(L)||(e=requestAnimationFrame((function(){S.current&&(t=a(S.current,L,N,l,p,m,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){N.has(L)&&k&&(S.current.innerHTML=k(o({isLoading:N.has(L),isLoaded:N.has(L),image:i},g)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(a,o({},x,{style:o({},E,l,{backgroundColor:u}),className:T+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(L,e):null}));j.propTypes=S,j.displayName="GatsbyImage";var I,P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],M=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:x,width:M,height:M,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},_=(I=j,function(e){var t=e.src,n=e.__imageData,a=e.__error,i=c(e,P);return a&&console.warn(a),n?r.createElement(I,o({image:n},i)):(console.warn("Image not loaded",t),null)});_.displayName="StaticImage",_.propTypes=R},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},1611:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(7294),a=n(1597);function i(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var o=0;function c(){return++o}function s(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){e.current=!1}),[]),e.current}var l,u="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function d(e,t){if(e in t){var n=t[e];return"function"==typeof n?n():n}var r=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(r,d),r}function f(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){e.splice(0).forEach((function(e){return e()}))}};return t}function p(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function m(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function h(e,t,n,r,a){var i,o,c=f(),s=void 0!==a?(i=a,o={called:!1},function(){if(!o.called)return o.called=!0,i.apply(void 0,arguments)}):function(){};return p.apply(void 0,[e].concat(t,n)),c.nextFrame((function(){m.apply(void 0,[e].concat(n)),p.apply(void 0,[e].concat(r)),c.add(function(e,t){var n=f();if(!e)return n.dispose;var r=getComputedStyle(e),a=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),i=a[0],o=a[1];return 0!==i?n.setTimeout((function(){t(l.Finished)}),i+o):t(l.Finished),n.add((function(){return t(l.Cancelled)})),n.dispose}(e,(function(n){return m.apply(void 0,[e].concat(r,t)),s(n)})))})),c.add((function(){return m.apply(void 0,[e].concat(t,n,r))})),c.add((function(){return s(l.Cancelled)})),c.dispose}function g(e){return void 0===e&&(e=""),(0,r.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(l||(l={}));var y,v=(0,r.createContext)(null);!function(e){e.Visible="visible",e.Hidden="hidden"}(y||(y={}));var b=(0,r.createContext)(null);function w(e){var t=(0,r.useRef)([]),n=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),e}(),a=(0,r.useCallback)((function(r){var a=t.current.indexOf(r);-1!==a&&(t.current.splice(a,1),t.current.length<=0&&n.current&&(null==e||e()))}),[e,n,t]),i=(0,r.useCallback)((function(e){return t.current.push(e),function(){return a(e)}}),[t,a]);return(0,r.useMemo)((function(){return{children:t,register:i,unregister:a}}),[i,a,t])}function E(e){var t=e.children,n=e.enter,a=e.enterFrom,o=e.enterTo,d=e.leave,f=e.leaveFrom,p=e.leaveTo,m=i(e,["children","enter","enterFrom","enterTo","leave","leaveFrom","leaveTo"]),E=(0,r.useRef)(null),T=(0,r.useState)(y.Visible),C=T[0],k=T[1],x=function(){var e=(0,r.useContext)(v);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition />.");return e}(),S=x.show,A=x.appear,O=function(){var e=(0,r.useContext)(b);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition />.");return e}(),N=O.register,L=O.unregister,j=s(),I=(0,r.useState)(c)[0],P=(0,r.useRef)(!1),M=w((0,r.useCallback)((function(){P.current||(k(y.Hidden),L(I))}),[I,L,P]));u((function(){return N(I)}),[N,I]);var F=g(n),R=g(a),_=g(o),q=g(d),H=g(f),D=g(p);if((0,r.useEffect)((function(){if(C===y.Visible&&null===E.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[E,C]),u((function(){var e=E.current;if(e&&(!j||A))return P.current=!0,S?h(e,F,R,_,(function(){P.current=!1})):h(e,q,H,D,(function(e){P.current=!1,e===l.Finished&&M.children.current.length<=0&&(k(y.Hidden),L(I))}))}),[I,P,L,M,E,j,A,S,F,R,_,q,H,D]),C===y.Hidden)return null;if("function"==typeof t)return(0,r.createElement)(b.Provider,{value:M},t(E));var z=m.as,B=void 0===z?"div":z,U=i(m,["as"]);return(0,r.createElement)(b.Provider,{value:M},(0,r.createElement)(B,Object.assign({},U,{ref:E}),t))}function T(e){var t,n=e.show,a=e.appear,o=void 0!==a&&a,c=i(e,["show","appear"]);if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var l=(0,r.useState)(n?y.Visible:y.Hidden),u=l[0],f=l[1],p=w((0,r.useCallback)((function(){f(y.Hidden)}),[])),m=s(),h=(0,r.useMemo)((function(){return{show:n,appear:o||!m}}),[n,o,m]);return(0,r.useEffect)((function(){n?f(y.Visible):p.children.current.length<=0&&f(y.Hidden)}),[n,p]),(0,r.createElement)(b.Provider,{value:p},(0,r.createElement)(v.Provider,{value:h},d(u,((t={})[y.Visible]=function(){return(0,r.createElement)(E,Object.assign({},c))},t[y.Hidden]=null,t))))}T.Child=E;var C=n(7059),k=function(e){var t=e.isOpen,i=e.onClose,o=e.pathname,c=(0,a.useStaticQuery)("441988385").allMarkdownRemark,s=c.tags,l=c.categories;return r.createElement(T,{show:t,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-75",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",className:"fixed inset-x-0 p-2 origin-top-right md:hidden top-0 z-10"},r.createElement("div",{className:"rounded-lg shadow-lg"},r.createElement("div",{className:"rounded-lg shadow-xs divide-y-2 divide-gray-50 bg-secondary"},r.createElement("div",{className:"pt-6 pb-6 px-4 space-y-6"},r.createElement("div",{className:"absolute right-7"},r.createElement("button",{onClick:i,type:"button",className:"inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out"},r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),r.createElement("div",null,r.createElement("nav",null,r.createElement(a.Link,{to:"/",className:"link p-2 flex items-center "+("/"===o&&"link-active")},r.createElement("div",{className:"text-base leading-6 font-medium"},"Home")),r.createElement(a.Link,{to:"/about",className:"link p-2 flex items-center "+("/about"===o&&"link-active")},r.createElement("div",{className:"text-base leading-6 font-medium"},"About")),r.createElement(a.Link,{to:"https://www.facebook.com/chu1228",className:"link p-2 flex items-center"},r.createElement("div",{className:"text-base leading-6 font-medium"},"Facebook"))))),r.createElement("div",{className:"py-6 px-5 space-y-6"},r.createElement("div",{className:"grid grid-cols-2 row-gap-4 col-gap-8"},r.createElement("div",{className:"flex flex-col"},r.createElement("div",{className:"mb-4"},r.createElement("h4",{className:"py-2 font-bold"},"Category"),l.map((function(e){var t=e.value;return r.createElement(a.Link,{key:t,to:"/categories/"+t},r.createElement("p",{className:"link text-base leading-6 font-medium py-1"},t))}))),r.createElement("div",null,r.createElement("h4",{className:"py-2 font-bold"},"Tags"),s.map((function(e){var t=e.value;return r.createElement(a.Link,{key:t,to:"/tags/"+t},r.createElement("p",{className:"link text-base leading-6 font-medium py-1"},t))})))),r.createElement("div",{className:"flex flex-col"},r.createElement("h4",{className:"py-2 font-bold"},"Sponsor Creator"),r.createElement("a",{href:"https://store.line.me/stickershop/author/1019955/zh-Hant",className:"link text-base leading-6 font-medium py-1",target:"_blank"},r.createElement(C.S,{src:"../images/hippostick.png",alt:"line  hippo",width:200,height:200,__imageData:n(2835)}),r.createElement("p",{className:"text-base text-center my-2"},"Line Sticker"))))))))},x=n(3095),S=function(){var e=(0,r.useContext)(x.N),t=e.theme,n=e.setTheme;return r.createElement("div",{className:"switch-container"},r.createElement("div",{className:"switch-theme"},r.createElement("input",{id:"toggle_checkbox",onChange:function(){n((function(e){return"dark"===e?"light":"dark"}))},type:"checkbox",checked:"light"===t}),r.createElement("label",{htmlFor:"toggle_checkbox"},r.createElement("div",{id:"star"},r.createElement("div",{className:"star",id:"star-1"},"★"),r.createElement("div",{className:"star",id:"star-2"},"★")),r.createElement("div",{id:"moon"}))))},A=function(e){var t=e.siteTitle,n=e.location,i=(0,r.useState)(!1),o=i[0],c=i[1],s=n.pathname;return r.createElement("nav",{className:"mx-6 sm:px-4 py-4 rounded"},r.createElement("div",{className:"container flex flex-wrap justify-between items-center mx-auto"},r.createElement(a.Link,{to:"/",className:"flex items-center"},r.createElement("span",{className:"self-center text-xl font-semibold whitespace-nowrap tracking-widest"},t)),r.createElement("div",{className:"flex items-center -mr-2 -my-2 md:hidden"},r.createElement("div",{className:"flex mr-2 items-center"},r.createElement(S,null)),r.createElement("button",{type:"button",onClick:function(){return c(!0)},className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out"},r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})))),r.createElement("div",{className:"hidden w-full md:flex md:w-auto items-center",id:"navbar-default"},r.createElement("ul",{className:"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium mr-4"},r.createElement("li",null,r.createElement(a.Link,{to:"/",className:"link py-4 "+("/"===s&&"link-active")},"Home")),r.createElement("li",null,r.createElement(a.Link,{to:"/about",className:"link py-4 "+("/about"===s&&"link-active")},"About")),r.createElement("li",null,r.createElement(a.Link,{to:"https://www.facebook.com/chu1228",className:"link py-4"},"Facebook"))),r.createElement("div",{className:"flex items-center"},r.createElement(S,null)))),r.createElement(k,{pathname:s,isOpen:o,onClose:function(){return c(!1)}}))},O=function(e){var t,n=e.children,i=e.location,o=e.title,c=(0,a.useStaticQuery)("3649515864");return r.createElement("div",{className:"bg-primary text-main-text transition-all duration-300 min-h-screen flex flex-col"},r.createElement(A,{location:i,siteTitle:o||(null===(t=c.site.siteMetadata)||void 0===t?void 0:t.title)}),r.createElement("div",{className:"grow mx-6 md:mx-0"},n),r.createElement("footer",{className:"text-center py-2 text-sm"},"© ",(new Date).getFullYear()," · Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")," ·"," ",r.createElement("a",{href:"https://github.com/Ianpig/gatsby-tailwind-typescript-starter"},"Ian Chu")))}},4125:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,a,i,o,c=n(7294),s=n(5697),l=n.n(s),u=n(4839),d=n.n(u),f=n(2993),p=n.n(f),m=n(6494),h=n.n(m),g="bodyAttributes",y="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),E="cssText",T="href",C="http-equiv",k="innerHTML",x="itemprop",S="name",A="property",O="rel",N="src",L="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",P="defer",M="encodeSpecialCharacters",F="onChangeClientState",R="titleTemplate",_=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),q=[b.NOSCRIPT,b.SCRIPT,b.STYLE],H="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=J(e,b.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},G=function(e){return J(e,F)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===O&&"canonical"===e[n].toLowerCase()||s===O&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==k&&c!==E&&c!==x||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=h()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;se(b.BODY,r),se(b.HTML,a),ce(d,f);var p={baseTag:le(b.BASE,n),linkTags:le(b.LINK,i),metaTags:le(b.META,o),noscriptTags:le(b.NOSCRIPT,c),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(b.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==o.join(",")&&n.setAttribute(H,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,a=de(n,r),[c.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===k||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===k||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(b.BASE,t,r),bodyAttributes:fe(g,n,r),htmlAttributes:fe(y,a,r),link:fe(b.LINK,i,r),meta:fe(b.META,o,r),noscript:fe(b.NOSCRIPT,c,r),script:fe(b.SCRIPT,s,r),style:fe(b.STYLE,l,r),title:fe(b.TITLE,{title:d,titleAttributes:f},r)}},me=d()((function(e){return{baseTag:$([T,L],e),bodyAttributes:Z(g,e),defer:J(e,P),encode:J(e,M),htmlAttributes:Z(y,e),linkTags:Q(b.LINK,[O,T],e),metaTags:Q(b.META,[S,w,C,A,x],e),noscriptTags:Q(b.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:Q(b.SCRIPT,[N,k],e),styleTags:Q(b.STYLE,[E],e),title:K(e),titleAttributes:Z(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=me,o=i=function(e){function t(){return z(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case b.TITLE:return U({},a,((t={})[r.type]=o,t.titleAttributes=U({},i),t));case b.BODY:return U({},a,{bodyAttributes:U({},i)});case b.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(W(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ge=n(1597),ye=n(3095),ve=function(e){var t,n,r,a=e.description,i=e.meta,o=void 0===i?[]:i,s=e.title,l=e.image,u=(0,c.useContext)(ye.N).theme,d=(0,ge.useStaticQuery)("3761976949").site,f=a||d.siteMetadata.description,p=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:(null==d?void 0:d.lang)||"en",class:"light"===u?"theme-light":"theme-dark"},title:s,titleTemplate:p?"%s | "+p:void 0,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=d.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(o)},c.createElement("meta",{name:"description",content:f}),c.createElement("meta",{name:"og:description",content:f}),c.createElement("meta",{name:"og:title",content:s}),c.createElement("meta",{name:"og:type",content:"website"}),c.createElement("meta",{name:"og:image",content:l||d.siteMetadata.image}),c.createElement("meta",{name:"twitter:card",content:"summary"}),c.createElement("meta",{name:"twitter:title",content:s}),c.createElement("meta",{name:"twitter:description",content:f}))}},2835:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8079b88b0a49a4a49708fc8d677e6b4c/5aead/hippostick.png","srcSet":"/static/8079b88b0a49a4a49708fc8d677e6b4c/e9fba/hippostick.png 50w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/15e42/hippostick.png 100w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/5aead/hippostick.png 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/8079b88b0a49a4a49708fc8d677e6b4c/dbc4a/hippostick.webp 50w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/d8057/hippostick.webp 100w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/2e34e/hippostick.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=commons-4b8ed0dfe5e6a03a0493.js.map