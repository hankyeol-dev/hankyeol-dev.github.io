(self.webpackChunkhankyeolk_dev_blog=self.webpackChunkhankyeolk_dev_blog||[]).push([[946],{7290:function(e,t,a){"use strict";a.d(t,{H:function(){return N},b:function(){return ee},c:function(){return z},g:function(){return H},h:function(){return w},p:function(){return $},r:function(){return ne}});let n,s,l=!1;const r="undefined"!=typeof window?window:{},o=r.document||{head:{}},c={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,a,n)=>e.addEventListener(t,a,n),rel:(e,t,a,n)=>e.removeEventListener(t,a,n),ce:(e,t)=>new CustomEvent(e,t)},$=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),m=(e,t,a,n)=>{a&&a.map((([a,n,s])=>{const l=u(e,a),r=d(t,s),o=f(a);c.ael(l,n,r,o),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>c.rel(l,n,r,o)))}))},d=(e,t)=>a=>{try{256&e.$flags$?e.$lazyInstance$[t](a):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,a])}catch(n){re(n)}},u=(e,t)=>4&t?o:8&t?r:e,f=e=>0!=(2&e),h="http://www.w3.org/1999/xlink",p=new WeakMap,g=e=>{const t=e.$cmpMeta$,a=e.$hostElement$,n=t.$flags$,s=(t.$tagName$,()=>{}),l=((e,t,a,n)=>{let s=b(t),l=$e.get(s);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){e=e.head||e;let t,a=p.get(e);a||p.set(e,a=new Set),a.has(s)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),a&&a.add(s))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return s})(a.shadowRoot?a.shadowRoot:a.getRootNode(),t);10&n&&(a["s-sc"]=l,a.classList.add(l+"-h")),s()},b=(e,t)=>"sc-"+e.$tagName$,v={},y=e=>"object"===(e=typeof e)||"function"===e,w=(e,t,...a)=>{let n=null,s=null,l=!1,r=!1,o=[];const c=t=>{for(let a=0;a<t.length;a++)n=t[a],Array.isArray(n)?c(n):null!=n&&"boolean"!=typeof n&&((l="function"!=typeof e&&!y(n))&&(n=String(n)),l&&r?o[o.length-1].$text$+=n:o.push(l?E(null,n):n),r=l)};if(c(a),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,o,k);const $=E(e,null);return $.$attrs$=t,o.length>0&&($.$children$=o),$.$key$=s,$},E=(e,t)=>{const a={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return a},N={},k={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(R)},L=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),R=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),w(e.vtag,t,...e.vchildren||[])}const t=E(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},P=(e,t,a,n,s,l)=>{if(a!==n){let $=le(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,s=F(a),l=F(n);t.remove(...s.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in a)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)a&&n[t]===a[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if($||"o"!==t[0]||"n"!==t[1]){const r=y(n);if(($||r&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{let s=null==n?"":n;"list"===t?$=!1:null!=a&&e[t]==s||(e[t]=s)}}catch(o){}let c=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,c=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(h,t):e.removeAttribute(t)):(!$||4&l||s)&&!r&&(n=!0===n?"":n,c?e.setAttributeNS(h,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):le(r,i)?i.slice(2):i[2]+t.slice(3),a&&c.rel(e,t,a,!1),n&&c.ael(e,t,n,!1)}},S=/\s/,F=e=>e?e.split(S):[],x=(e,t,a,n)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||v,r=t.$attrs$||v;for(n in l)n in r||P(s,n,l[n],void 0,a,t.$flags$);for(n in r)P(s,n,l[n],r[n],a,t.$flags$)},I=(e,t,a,s)=>{let l,r,c=t.$children$[a],$=0;if(null!==c.$text$)l=c.$elm$=o.createTextNode(c.$text$);else if(l=c.$elm$=o.createElement(c.$tag$),x(null,c,false),null!=n&&l["s-si"]!==n&&l.classList.add(l["s-si"]=n),c.$children$)for($=0;$<c.$children$.length;++$)r=I(e,c,$),r&&l.appendChild(r);return l},C=(e,t,a,n,l,r)=>{let o,c=e;for(c.shadowRoot&&c.tagName===s&&(c=c.shadowRoot);l<=r;++l)n[l]&&(o=I(null,a,l),o&&(n[l].$elm$=o,c.insertBefore(o,t)))},M=(e,t,a,n,s)=>{for(;t<=a;++t)(n=e[t])&&(s=n.$elm$,T(n),s.remove())},j=(e,t)=>e.$tag$===t.$tag$&&e.$key$===t.$key$,A=(e,t)=>{const a=t.$elm$=e.$elm$,n=e.$children$,s=t.$children$,l=t.$tag$,r=t.$text$;null===r?("slot"===l||x(e,t,false),null!==n&&null!==s?((e,t,a,n)=>{let s,l,r=0,o=0,c=0,$=0,i=t.length-1,m=t[0],d=t[i],u=n.length-1,f=n[0],h=n[u];for(;r<=i&&o<=u;)if(null==m)m=t[++r];else if(null==d)d=t[--i];else if(null==f)f=n[++o];else if(null==h)h=n[--u];else if(j(m,f))A(m,f),m=t[++r],f=n[++o];else if(j(d,h))A(d,h),d=t[--i],h=n[--u];else if(j(m,h))A(m,h),e.insertBefore(m.$elm$,d.$elm$.nextSibling),m=t[++r],h=n[--u];else if(j(d,f))A(d,f),e.insertBefore(d.$elm$,m.$elm$),d=t[--i],f=n[++o];else{for(c=-1,$=r;$<=i;++$)if(t[$]&&null!==t[$].$key$&&t[$].$key$===f.$key$){c=$;break}c>=0?(l=t[c],l.$tag$!==f.$tag$?s=I(t&&t[o],a,c):(A(l,f),t[c]=void 0,s=l.$elm$),f=n[++o]):(s=I(t&&t[o],a,o),f=n[++o]),s&&m.$elm$.parentNode.insertBefore(s,m.$elm$)}r>i?C(e,null==n[u+1]?null:n[u+1].$elm$,a,n,o,u):o>u&&M(t,r,i)})(a,n,t,s):null!==s?(null!==e.$text$&&(a.textContent=""),C(a,null,t,s,0,s.length-1)):null!==n&&M(n,0,n.length-1)):e.$text$!==r&&(a.data=r)},T=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(T)},O=(e,t)=>{const a=e.$hostElement$,l=e.$cmpMeta$,r=e.$vnode$||E(null,null),o=(c=t)&&c.$tag$===N?t:w(null,null,t);var c;s=a.tagName,l.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},l.$attrsToReflect$.map((([e,t])=>o.$attrs$[t]=a[e]))),o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=r.$elm$=a.shadowRoot||a,n=a["s-sc"],A(r,o)},H=e=>ae(e).$hostElement$,z=(e,t,a)=>{const n=H(e);return{emit:e=>_(n,t,{bubbles:!!(4&a),composed:!!(2&a),cancelable:!!(1&a),detail:e})}},_=(e,t,a)=>{const n=c.ce(t,a);return e.dispatchEvent(n),n},q=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},B=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);q(e,e.$ancestorComponent$);return pe((()=>U(e,t)))},U=(e,t)=>{const a=(e.$cmpMeta$.$tagName$,()=>{}),n=e.$lazyInstance$;let s;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>G(n,e,t))),e.$queuedListeners$=null),s=G(n,"componentWillLoad")),a(),J(s,(()=>D(e,n,t)))},D=async(e,t,a)=>{const n=e.$hostElement$,s=(e.$cmpMeta$.$tagName$,()=>{}),l=n["s-rc"];a&&g(e);const r=(e.$cmpMeta$.$tagName$,()=>{});V(e,t),l&&(l.map((e=>e())),n["s-rc"]=void 0),r(),s();{const t=n["s-p"],a=()=>W(e);0===t.length?a():(Promise.all(t).then(a),e.$flags$|=4,t.length=0)}},V=(e,t,a)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,O(e,t)}catch(n){re(n,e.$hostElement$)}return null},W=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,a=()=>{},n=e.$lazyInstance$,s=e.$ancestorComponent$;64&e.$flags$?(G(n,"componentDidUpdate"),a()):(e.$flags$|=64,K(t),G(n,"componentDidLoad"),a(),e.$onReadyResolve$(t),s||Z()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&he((()=>B(e,!1))),e.$flags$&=-517},Z=e=>{K(o.documentElement),he((()=>_(r,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})))},G=(e,t,a)=>{if(e&&e[t])try{return e[t](a)}catch(n){re(n)}},J=(e,t)=>e&&e.then?e.then(t):t(),K=e=>e.classList.add("hydrated"),Q=(e,t,a,n)=>{const s=ae(e),l=s.$hostElement$,r=s.$instanceValues$.get(t),o=s.$flags$,c=s.$lazyInstance$;var $,i;if($=a,i=n.$members$[t][0],a=null==$||y($)?$:4&i?"false"!==$&&(""===$||!!$):1&i?String($):$,!(8&o&&void 0!==r||a===r)&&(s.$instanceValues$.set(t,a),c)){if(n.$watchers$&&128&o){const e=n.$watchers$[t];e&&e.map((e=>{try{c[e](a,r,t)}catch(n){re(n,l)}}))}2==(18&o)&&B(s,!1)}},X=(e,t,a)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const n=Object.entries(t.$members$),s=e.prototype;if(n.map((([e,[n]])=>{31&n||2&a&&32&n?Object.defineProperty(s,e,{get(){return t=e,ae(this).$instanceValues$.get(t);var t},set(a){Q(this,e,a,t)},configurable:!0,enumerable:!0}):1&a&&64&n&&Object.defineProperty(s,e,{value(...t){const a=ae(this);return a.$onInstancePromise$.then((()=>a.$lazyInstance$[e](...t)))}})})),1&a){const a=new Map;s.attributeChangedCallback=function(e,t,n){c.jmp((()=>{const t=a.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const s=n[1]||e;return a.set(s,e),512&n[0]&&t.$attrsToReflect$.push([e,s]),s}))}}return e},Y=async(e,t,a,n,s)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(s=ce(a)).then){const e=()=>{};s=await s,e()}s.isProxied||(a.$watchers$=s.watchers,X(s,a,2),s.isProxied=!0);const e=(a.$tagName$,()=>{});t.$flags$|=8;try{new s(t)}catch(o){re(o)}t.$flags$&=-9,t.$flags$|=128,e()}if(s.style){let e=s.style;const t=b(a);if(!$e.has(t)){const n=(a.$tagName$,()=>{});((e,t,a)=>{let n=$e.get(e);i&&a?(n=n||new CSSStyleSheet,n.replace(t)):n=t,$e.set(e,n)})(t,e,!!(1&a.$flags$)),n()}}}const l=t.$ancestorComponent$,r=()=>B(t,!0);l&&l["s-rc"]?l["s-rc"].push(r):r()},ee=(e,t={})=>{const a=()=>{},n=[],s=t.exclude||[],l=r.customElements,$=o.head,i=$.querySelector("meta[charset]"),d=o.createElement("style"),u=[];let f,h=!0;Object.assign(c,t),c.$resourcesUrl$=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>{e[1].map((t=>{const a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};a.$members$=t[2],a.$listeners$=t[3],a.$attrsToReflect$=[],a.$watchers$={};const r=a.$tagName$,o=class extends HTMLElement{constructor(e){super(e),se(e=this,a),1&a.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),h?u.push(this):c.jmp((()=>(e=>{if(0==(1&c.$flags$)){const t=ae(e),a=t.$cmpMeta$,n=(a.$tagName$,()=>{});if(1&t.$flags$)m(e,t,a.$listeners$);else{t.$flags$|=1;{let a=e;for(;a=a.parentNode||a.host;)if(a["s-p"]){q(t,t.$ancestorComponent$=a);break}}a.$members$&&Object.entries(a.$members$).map((([t,[a]])=>{if(31&a&&e.hasOwnProperty(t)){const a=e[t];delete e[t],e[t]=a}})),Y(0,t,a)}n()}})(this)))}disconnectedCallback(){c.jmp((()=>(e=>{if(0==(1&c.$flags$)){const t=ae(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this)))}componentOnReady(){return ae(this).$onReadyPromise$}};a.$lazyBundleId$=e[0],s.includes(r)||l.get(r)||(n.push(r),l.define(r,X(o,a,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),$.insertBefore(d,i?i.nextSibling:$.firstChild),h=!1,u.length?u.map((e=>e.connectedCallback())):c.jmp((()=>f=setTimeout(Z,30))),a()},te=new WeakMap,ae=e=>te.get(e),ne=(e,t)=>te.set(t.$lazyInstance$=e,t),se=(e,t)=>{const a={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return a.$onInstancePromise$=new Promise((e=>a.$onInstanceResolve$=e)),a.$onReadyPromise$=new Promise((e=>a.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],m(e,a,t.$listeners$),te.set(e,a)},le=(e,t)=>t in e,re=(e,t)=>(0,console.error)(e,t),oe=new Map,ce=(e,t,n)=>{const s=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$,r=oe.get(l);return r?r[s]:a(9047)(`./${l}.entry.js`).then((e=>(oe.set(l,e),e[s])),re)},$e=new Map,ie=[],me=[],de=(e,t)=>a=>{e.push(a),l||(l=!0,t&&4&c.$flags$?he(fe):c.raf(fe))},ue=e=>{for(let a=0;a<e.length;a++)try{e[a](performance.now())}catch(t){re(t)}e.length=0},fe=()=>{ue(ie),ue(me),(l=ie.length>0)&&c.raf(fe)},he=e=>$().then(e),pe=de(me,!0)},9047:function(e,t,a){var n={"./deckgo-highlight-code.entry.js":[5533,533]};function s(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return a.e(t[1]).then((function(){return a(s)}))}s.keys=function(){return Object.keys(n)},s.id=9047,e.exports=s},9056:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(7294);var s=n.memo((e=>{let{repo:t}=e;const a=(0,n.createRef)(),s=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{if(!a.current||s.current)return;const e=document.createElement("script"),n={src:"https://utteranc.es/client.js",repo:t,theme:"github-light",label:"post-comment","issue-term":"pathname",async:!0,crossOrigin:"anonymous"};Object.keys(n).forEach((t=>{e.setAttribute(t,n[t])})),a.current.appendChild(e),s.current=!0}),[t]),n.createElement("div",{ref:a,className:"w-full mt-3"})}));const l=["https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F169dc6aa-7d4e-4a4e-9363-e7ec9143efed%2Fblog.png?table=block&id=f33852d6-61be-4905-bd96-34932148ede3&spaceId=8b0941ab-7438-4d26-bc5a-baa5da72052c&width=1900&userId=58220135-364e-4669-99a8-fa4af12740ae&cache=v2","https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe15087ad-3f3e-4234-9b41-0f18d5da1e76%2Fdevelopment.png?table=block&id=e881e5d4-691c-44cf-ad4d-178aa9050e7c&spaceId=8b0941ab-7438-4d26-bc5a-baa5da72052c&width=1900&userId=58220135-364e-4669-99a8-fa4af12740ae&cache=v2","https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69aa907a-20b4-40a5-a8b9-e292e3e96232%2Fproduct.png?table=block&id=720d0dfa-68ac-4431-976f-85fce83fddc6&spaceId=8b0941ab-7438-4d26-bc5a-baa5da72052c&width=1900&userId=58220135-364e-4669-99a8-fa4af12740ae&cache=v2","https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F42a7e814-4a90-460f-8bf5-8a7b17ad55fa%2Fbrand.png?table=block&id=3225e420-a777-4f93-bbea-2a3ab5bd10ca&spaceId=8b0941ab-7438-4d26-bc5a-baa5da72052c&width=1900&userId=58220135-364e-4669-99a8-fa4af12740ae&cache=v2","https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F945f5eb5-9039-4774-9f88-5f4b330e04c8%2Fbook.png?table=block&id=150260bf-5740-4f66-bf24-0c5e7db1833d&spaceId=8b0941ab-7438-4d26-bc5a-baa5da72052c&width=1900&userId=58220135-364e-4669-99a8-fa4af12740ae&cache=v2"],r=["블로그","개발","프로덕트","브랜드","책"];var o=e=>{let{html:t,toc:a,post:o}=e;const{frontmatter:c}=o,$=r.indexOf(c.categories.split(" ")[0]),i=-1===$?"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F86cb3690-ad87-40f3-9272-a615d7c3bdbe%2Fetc.png?table=block&id=428e70d9-14c2-483b-8b4c-fc1016dfbc09&spaceId=8b0941ab-7438-4d26-bc5a-baa5da72052c&width=1900&userId=58220135-364e-4669-99a8-fa4af12740ae&cache=v2":l[$];return n.createElement("section",{className:"postPage-container"},n.createElement("div",{className:"postPage-content"},n.createElement("img",{src:i,alt:"post-img",className:"w-full mb-5"}),n.createElement("div",{dangerouslySetInnerHTML:{__html:t},className:"postPage-html"}),n.createElement(s,{repo:"hankyeol-dev/hankyeol-dev.github.io"})),n.createElement("div",{className:"postPage-toc-container"},n.createElement("p",{className:"text-[#343a40] text-sm border-b pb-1"},"목차"),n.createElement("div",{dangerouslySetInnerHTML:{__html:a},className:"postPage-toc"})))};var c=e=>{let{post:t}=e;const{frontmatter:a}=t;return n.createElement("header",{className:"postHeader-container"},n.createElement("h3",null,a.emoji),n.createElement("p",{className:"postHeader-title"},a.title),n.createElement("p",{className:"postHeader-dateNcagtegory"},a.createdAt,"   |   ",a.categories))},$=a(1883);var i=e=>{let{prevPost:t,nextPost:a}=e;return n.createElement("section",{className:"postNav-container"},n.createElement("p",{className:"text-xl font-medium text-[#495057] mb-4"},"이어지는 글,"),(t||a)&&n.createElement("div",{className:"postNav-card-container"},t&&n.createElement("div",{className:"md:w-[50%] w-full postCard-hover"},n.createElement($.Link,{className:"postNav-card",to:""+t.fields.postSlug,replace:!0},n.createElement("div",{className:"postNav-icon"},t.frontmatter.emoji),n.createElement("div",{className:"postNav-info-container"},n.createElement("h3",{className:"postNav-title"},t.frontmatter.title),n.createElement("p",{className:"postNav-date"},t.frontmatter.createdAt)))),a&&n.createElement("div",{className:"md:w-[50%] w-full postCard-hover"},n.createElement($.Link,{className:"postNav-card",to:""+a.fields.postSlug,replace:!0},n.createElement("div",{className:"postNav-icon"},a.frontmatter.emoji),n.createElement("div",{className:"postNav-info-container"},n.createElement("h3",{className:"postNav-title"},a.frontmatter.title),n.createElement("p",{className:"postNav-date"},a.frontmatter.createdAt))))))},m=a(1754),d=a(2309),u=a(7290);var f;!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,u.p)().then((()=>(0,u.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],f)));var h=e=>{let{data:t}=e;const{curPost:a,prevPost:s,nextPost:l,curPostToc:r}=t;return n.createElement(d.Z,null,n.createElement(m.Z,{title:a.frontmatter.title+" | 한결 블로그"}),n.createElement(c,{post:a}),n.createElement(o,{html:a.html,toc:a.tableOfContents,post:a}),n.createElement(i,{prevPost:s||"",nextPost:l||""}))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-9835b066902cfaf062aa.js.map