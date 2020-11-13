(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1073:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,O=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return n?a.a.createElement(O,l(l({ref:t},i),{},{components:n})):a.a.createElement(O,l({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},494:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),c=(n(0),n(1073)),o={id:"mysqlconnection",title:"Class: MySqlConnection",sidebar_label:"MySqlConnection"},l={unversionedId:"api/classes/mysqlconnection",id:"api/classes/mysqlconnection",isDocsHomePage:!1,title:"Class: MySqlConnection",description:"Hierarchy",source:"@site/docs/api/classes/mysqlconnection.md",slug:"/api/classes/mysqlconnection",permalink:"/docs/next/api/classes/mysqlconnection",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/mysqlconnection.md",version:"current",sidebar_label:"MySqlConnection",sidebar:"API",previous:{title:"Class: MongoPlatform",permalink:"/docs/next/api/classes/mongoplatform"},next:{title:"Class: MySqlDriver",permalink:"/docs/next/api/classes/mysqldriver"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"connect",id:"connect",children:[]},{value:"getConnectionOptions",id:"getconnectionoptions",children:[]},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[]},{value:"transformRawResult",id:"transformrawresult",children:[]}]}],i={rightToc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"any"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"MySqlConnection")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"connect"},"connect"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"connect"),"(): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/mysql-base/src/MySqlConnection.ts#L5"}),"packages/mysql-base/src/MySqlConnection.ts:5"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getConnectionOptions"),"(): Knex.MySqlConnectionConfig"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/mysql-base/src/MySqlConnection.ts#L13"}),"packages/mysql-base/src/MySqlConnection.ts:13"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Knex.MySqlConnectionConfig"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/mysql-base/src/MySqlConnection.ts#L9"}),"packages/mysql-base/src/MySqlConnection.ts:9"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," string"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transformrawresult"},"transformRawResult"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"transformRawResult"),"<","T>(",Object(c.b)("inlineCode",{parentName:"p"},"res"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"',"): T"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/mysql-base/src/MySqlConnection.ts#L34"}),"packages/mysql-base/src/MySqlConnection.ts:34"))),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"res")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"method")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"')))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," T"))}s.isMDXComponent=!0}}]);