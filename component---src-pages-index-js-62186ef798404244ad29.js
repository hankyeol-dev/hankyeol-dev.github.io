"use strict";(self.webpackChunkhankyeolk_dev_blog=self.webpackChunkhankyeolk_dev_blog||[]).push([[678],{810:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(5785),l=a(7294);var c=e=>{let{categories:t,setActiveCategory:a,category:r,postCategoryCount:c}=e;const s=e=>{e.preventDefault(),a(e.currentTarget.id)};return l.createElement("section",{className:"categoryAside-container"},l.createElement("div",{className:"flex flex-col w-full",id:"category-header"},l.createElement("p",{className:"text-sm sm:text-lg md:text-xl font-medium md:font-semibold"},r),l.createElement("hr",{className:"w-full border-[#343a40] mt-3 md:mt-5"})),l.createElement("div",{className:"w-full flex md:flex-col gap-x-2 gap-y-2 flex-wrap",id:"category-list"},t.map(((e,a)=>l.createElement("div",{className:"categoryAside-category",id:e,key:e,onClick:s},l.createElement("p",null,e),l.createElement("p",null,c[t.indexOf(e)]))))))},s=a(1883);var o=e=>{let{id:t,postSlug:a,title:r,content:c,category:o,createdAt:n}=e;return l.createElement("div",{className:"p-3 border-[#343a40] border postCard-hover"},l.createElement(s.Link,{className:"flex flex-col cursor-pointer",to:""+a},l.createElement("div",{id:"postcard-tag-container",className:"postCard-tag-Container"},o.slice(0,2).map(((e,t)=>l.createElement("div",{key:t,className:"postCard-category",id:"post-tag"},e))),l.createElement("p",{className:" text-[#343a40] text-[0.5rem] font-thin sm:text-xs sm:font-normal"},n)),l.createElement("p",{className:"postCard-title filter-none"},r),l.createElement("p",{className:"postCard-content-preview"},c),l.createElement("button",{className:"flex flex-row-reverse"},l.createElement("p",{className:"postCard-moreBtn"},"더 읽어보기 👉"))))};var n=e=>{let{posts:t,category:a}=e;const r=(0,l.useMemo)((()=>"전체"===a?t:t.filter((e=>e.category.includes(a)))),[t,a]);return l.createElement("section",{id:"postcard-list",className:"flex flex-col items-center gap-y-4 w-full"},r.map((e=>l.createElement(o,{key:e.id,postSlug:e.postSlug,id:e.id,title:e.title,content:e.content,category:e.category,createdAt:e.createdAt}))))},m=a(1754),i=a(5241);var d=e=>{let{data:t}=e;const a=["전체"].concat((0,r.Z)(t.site.siteMetadata.postBasisCategories)),s=t.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return{id:t.id,postSlug:t.fields.postSlug,title:t.frontmatter.title,createdAt:t.frontmatter.createdAt,content:t.excerpt,category:t.frontmatter.categories.split(" ")}})),o=[s.length].concat((0,r.Z)(a.slice(1).map((e=>0))));s.forEach((e=>{a.forEach((t=>{e.category.includes(t)&&(o[a.indexOf(t)]+=1)}))}));const{0:d,1:p}=(0,l.useState)(a[0]),g=(0,l.useCallback)((e=>{p(e)}),[]);return l.createElement(i.Z,null,l.createElement(m.Z,{title:"한결 블로그 | "+d,description:"PM 강한결의 블로그입니다."}),l.createElement("main",{className:"w-full px-3 flex md:flex-row md:gap-x-4 md:gap-y-0 justify-between sm:min-h-[950px]"},l.createElement("section",{className:"md:basis-2/3"},l.createElement(n,{posts:s,category:d})),l.createElement("section",{className:"md:basis-1/3 hidden md:block"},l.createElement(c,{id:"category-aside",categories:a,setActiveCategory:g,category:d,postCategoryCount:o}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-62186ef798404244ad29.js.map