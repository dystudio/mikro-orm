(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{1073:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return d}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var o=c.a.createContext({}),i=function(e){var r=c.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):b(b({},r),e)),t},m=function(e){var r=i(e.components);return c.a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},p=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=i(t),p=n,d=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return t?c.a.createElement(d,b(b({ref:r},o),{},{components:t})):c.a.createElement(d,b({ref:r},o))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=p;var b={};for(var l in r)hasOwnProperty.call(r,l)&&(b[l]=r[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,s[1]=b;for(var o=2;o<a;o++)s[o]=t[o];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},425:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return b})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return i}));var n=t(1),c=t(6),a=(t(0),t(1073)),s={id:"queryorder",title:"Enumeration: QueryOrder",sidebar_label:"QueryOrder"},b={unversionedId:"api/enums/queryorder",id:"version-4.3/api/enums/queryorder",isDocsHomePage:!1,title:"Enumeration: QueryOrder",description:"Enumeration members",source:"@site/versioned_docs/version-4.3/api/enums/queryorder.md",slug:"/api/enums/queryorder",permalink:"/docs/api/enums/queryorder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/enums/queryorder.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1605294412,sidebar_label:"QueryOrder",sidebar:"version-4.3/API",previous:{title:"Enumeration: QueryOperator",permalink:"/docs/api/enums/queryoperator"},next:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/api/enums/queryordernumeric"}},l=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"ASC",id:"asc",children:[]},{value:"ASC_NULLS_FIRST",id:"asc_nulls_first",children:[]},{value:"ASC_NULLS_LAST",id:"asc_nulls_last",children:[]},{value:"DESC",id:"desc",children:[]},{value:"DESC_NULLS_FIRST",id:"desc_nulls_first",children:[]},{value:"DESC_NULLS_LAST",id:"desc_nulls_last",children:[]},{value:"asc",id:"asc-1",children:[]},{value:"asc_nulls_first",id:"asc_nulls_first-1",children:[]},{value:"asc_nulls_last",id:"asc_nulls_last-1",children:[]},{value:"desc",id:"desc-1",children:[]},{value:"desc_nulls_first",id:"desc_nulls_first-1",children:[]},{value:"desc_nulls_last",id:"desc_nulls_last-1",children:[]}]}],o={rightToc:l};function i(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("h3",{id:"asc"},"ASC"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"ASC"),':  = "ASC"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L27"}),"packages/core/src/enums.ts:27"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"asc_nulls_first"},"ASC","_","NULLS","_","FIRST"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"ASC","_","NULLS","_","FIRST"),':  = "ASC NULLS FIRST"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L29"}),"packages/core/src/enums.ts:29"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"asc_nulls_last"},"ASC","_","NULLS","_","LAST"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"ASC","_","NULLS","_","LAST"),':  = "ASC NULLS LAST"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L28"}),"packages/core/src/enums.ts:28"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"desc"},"DESC"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"DESC"),':  = "DESC"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L30"}),"packages/core/src/enums.ts:30"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"desc_nulls_first"},"DESC","_","NULLS","_","FIRST"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"DESC","_","NULLS","_","FIRST"),':  = "DESC NULLS FIRST"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L32"}),"packages/core/src/enums.ts:32"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"desc_nulls_last"},"DESC","_","NULLS","_","LAST"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"DESC","_","NULLS","_","LAST"),':  = "DESC NULLS LAST"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L31"}),"packages/core/src/enums.ts:31"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"asc-1"},"asc"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"asc"),':  = "asc"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L33"}),"packages/core/src/enums.ts:33"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"asc_nulls_first-1"},"asc","_","nulls","_","first"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"asc","_","nulls","_","first"),':  = "asc nulls first"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L35"}),"packages/core/src/enums.ts:35"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"asc_nulls_last-1"},"asc","_","nulls","_","last"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"asc","_","nulls","_","last"),':  = "asc nulls last"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L34"}),"packages/core/src/enums.ts:34"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"desc-1"},"desc"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"desc"),':  = "desc"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L36"}),"packages/core/src/enums.ts:36"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"desc_nulls_first-1"},"desc","_","nulls","_","first"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"desc","_","nulls","_","first"),':  = "desc nulls first"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L38"}),"packages/core/src/enums.ts:38"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"desc_nulls_last-1"},"desc","_","nulls","_","last"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"desc","_","nulls","_","last"),':  = "desc nulls last"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L37"}),"packages/core/src/enums.ts:37"))))}i.isMDXComponent=!0}}]);