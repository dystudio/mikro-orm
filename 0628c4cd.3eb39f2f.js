(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1073:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=o(a),j=r,d=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(d,i(i({ref:t},l),{},{components:a})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(1),n=a(6),b=(a(0),a(1073)),c={id:"iwrappedentityinternal",title:"Interface: IWrappedEntityInternal<T, PK, P>",sidebar_label:"IWrappedEntityInternal"},i={unversionedId:"api/interfaces/iwrappedentityinternal",id:"api/interfaces/iwrappedentityinternal",isDocsHomePage:!1,title:"Interface: IWrappedEntityInternal<T, PK, P>",description:"Type parameters",source:"@site/docs/api/interfaces/iwrappedentityinternal.md",slug:"/api/interfaces/iwrappedentityinternal",permalink:"/docs/next/api/interfaces/iwrappedentityinternal",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/iwrappedentityinternal.md",version:"current",sidebar_label:"IWrappedEntityInternal",sidebar:"API",previous:{title:"Interface: IWrappedEntity<T, PK, P>",permalink:"/docs/next/api/interfaces/iwrappedentity"},next:{title:"Interface: Index",permalink:"/docs/next/api/interfaces/index"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"__data",id:"__data",children:[]},{value:"__em",id:"__em",children:[]},{value:"__identifier",id:"__identifier",children:[]},{value:"__initialized",id:"__initialized",children:[]},{value:"__lazyInitialized",id:"__lazyinitialized",children:[]},{value:"__managed",id:"__managed",children:[]},{value:"__meta",id:"__meta",children:[]},{value:"__originalEntityData",id:"__originalentitydata",children:[]},{value:"__platform",id:"__platform",children:[]},{value:"__populated",id:"__populated",children:[]},{value:"__primaryKeyCond",id:"__primarykeycond",children:[]},{value:"__primaryKeys",id:"__primarykeys",children:[]},{value:"__serializationContext",id:"__serializationcontext",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"getPrimaryKey",id:"getprimarykey",children:[]},{value:"getSerializedPrimaryKey",id:"getserializedprimarykey",children:[]},{value:"hasPrimaryKey",id:"hasprimarykey",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"setPrimaryKey",id:"setprimarykey",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toReference",id:"toreference",children:[]}]}],l={rightToc:p};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"PK")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof T"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof T")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),"<","T, PK, P>"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"IWrappedEntityInternal")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"__data"},"_","_","data"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","data"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L95"}),"packages/core/src/typings.ts:95"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__em"},"_","_","em"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"_","_","em"),": any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L96"}),"packages/core/src/typings.ts:96"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__identifier"},"_","_","identifier"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"_","_","identifier"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entityidentifier"}),"EntityIdentifier")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L100"}),"packages/core/src/typings.ts:100"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__initialized"},"_","_","initialized"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","initialized"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L98"}),"packages/core/src/typings.ts:98"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__lazyinitialized"},"_","_","lazyInitialized"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","lazyInitialized"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L103"}),"packages/core/src/typings.ts:103"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__managed"},"_","_","managed"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","managed"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L101"}),"packages/core/src/typings.ts:101"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__meta"},"_","_","meta"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L94"}),"packages/core/src/typings.ts:94"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__originalentitydata"},"_","_","originalEntityData"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"_","_","originalEntityData"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#entitydata"}),"EntityData"),"<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L99"}),"packages/core/src/typings.ts:99"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__platform"},"_","_","platform"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","platform"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/platform"}),"Platform")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L97"}),"packages/core/src/typings.ts:97"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__populated"},"_","_","populated"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","populated"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L102"}),"packages/core/src/typings.ts:102"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__primarykeycond"},"_","_","primaryKeyCond"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","primaryKeyCond"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T> ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L105"}),"packages/core/src/typings.ts:105"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__primarykeys"},"_","_","primaryKeys"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","primaryKeys"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L104"}),"packages/core/src/typings.ts:104"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"__serializationcontext"},"_","_","serializationContext"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"_","_","serializationContext"),": { populate?: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#populateoptions"}),"PopulateOptions"),"<","T>[] ; root?: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/serializationcontext"}),"SerializationContext"),"<","T>  }"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L106"}),"packages/core/src/typings.ts:106"))),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populate?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#populateoptions"}),"PopulateOptions"),"<","T>[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"root?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/serializationcontext"}),"SerializationContext"),"<","T>")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"assign"},"assign"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"assign"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": any, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/assignoptions"}),"AssignOptions")," ","|"," boolean): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#assign"}),"assign"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L86"}),"packages/core/src/typings.ts:86"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/assignoptions"}),"AssignOptions")," ","|"," boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getprimarykey"},"getPrimaryKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getPrimaryKey"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L91"}),"packages/core/src/typings.ts:91"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getserializedprimarykey"},"getSerializedPrimaryKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getSerializedPrimaryKey"),"(): string & keyof T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L93"}),"packages/core/src/typings.ts:93"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string & keyof T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hasprimarykey"},"hasPrimaryKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasPrimaryKey"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L90"}),"packages/core/src/typings.ts:90"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"init"),"<","P>(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": boolean, ",Object(b.b)("inlineCode",{parentName:"p"},"populate?"),": P, ",Object(b.b)("inlineCode",{parentName:"p"},"lockMode?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/enums/lockmode"}),"LockMode"),"): Promise","<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#init"}),"init"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L82"}),"packages/core/src/typings.ts:82"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#populate"}),"Populate"),"<","T>"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Populate\\","<","T>")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populated?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populate?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"P")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"lockMode?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/enums/lockmode"}),"LockMode"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#isinitialized"}),"isInitialized"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L80"}),"packages/core/src/typings.ts:80"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populated"},"populated"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"populated"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#populated"}),"populated"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L81"}),"packages/core/src/typings.ts:81"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populated?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setprimarykey"},"setPrimaryKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setPrimaryKey"),"(",Object(b.b)("inlineCode",{parentName:"p"},"val"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L92"}),"packages/core/src/typings.ts:92"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"val")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#tojson"}),"toJSON"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L85"}),"packages/core/src/typings.ts:85"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...args")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toobject"},"toObject"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toObject"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": string[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#toobject"}),"toObject"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L84"}),"packages/core/src/typings.ts:84"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ignoreFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toreference"},"toReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toReference"),"<","PK2, P2>(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P2>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#toreference"}),"toReference"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/0124d9d/packages/core/src/typings.ts#L83"}),"packages/core/src/typings.ts:83"))),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"PK2")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PK ","|"," unknown"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unknown")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P2")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"P ","|"," unknown"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unknown")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P2>"))}o.isMDXComponent=!0}}]);