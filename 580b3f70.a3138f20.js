(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1073:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),o=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},i=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=o(a),i=r,j=s["".concat(c,".").concat(i)]||s[i]||O[i]||n;return a?b.a.createElement(j,p(p({ref:t},m),{},{components:a})):b.a.createElement(j,p({ref:t},m))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=i;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var m=2;m<n;m++)c[m]=a[m];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},392:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(1),b=a(6),n=(a(0),a(1073)),c={id:"enumarraytype",title:"Class: EnumArrayType<T>",sidebar_label:"EnumArrayType"},p={unversionedId:"api/classes/enumarraytype",id:"version-4.3/api/classes/enumarraytype",isDocsHomePage:!1,title:"Class: EnumArrayType<T>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/classes/enumarraytype.md",slug:"/api/classes/enumarraytype",permalink:"/docs/api/classes/enumarraytype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/enumarraytype.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1605294412,sidebar_label:"EnumArrayType",sidebar:"version-4.3/API",previous:{title:"Class: EntityValidator",permalink:"/docs/api/classes/entityvalidator"},next:{title:"Class: EventManager",permalink:"/docs/api/classes/eventmanager"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"items",id:"items",children:[]},{value:"owner",id:"owner",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],m={rightToc:l};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/arraytype"}),"ArrayType"),"<","T>"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"EnumArrayType")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new EnumArrayType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"owner"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"items?"),": T[], ",Object(n.b)("inlineCode",{parentName:"p"},"hydrate?"),": (i: string) => T): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/enumarraytype"}),"EnumArrayType")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype"}),"ArrayType"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype#constructor"}),"constructor"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/EnumArrayType.ts#L14"}),"packages/core/src/types/EnumArrayType.ts:14"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"owner")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"items?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[]"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"hydrate")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(i: string) => T"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"i => i as T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/enumarraytype"}),"EnumArrayType")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"items"},"items"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"items"),": T[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/EnumArrayType.ts#L17"}),"packages/core/src/types/EnumArrayType.ts:17"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"owner"},"owner"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"owner"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/EnumArrayType.ts#L16"}),"packages/core/src/types/EnumArrayType.ts:16"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"compareastype"},"compareAsType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"compareAsType"),"(): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype"}),"ArrayType"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype#compareastype"}),"compareAsType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type#compareastype"}),"compareAsType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L41"}),"packages/core/src/types/ArrayType.ts:41"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T[] ","|"," null, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform"),", ",Object(n.b)("inlineCode",{parentName:"p"},"fromQuery?"),": boolean): string ","|"," null"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype"}),"ArrayType"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype#converttodatabasevalue"}),"convertToDatabaseValue"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/EnumArrayType.ts#L22"}),"packages/core/src/types/EnumArrayType.ts:22"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[] ","|"," null")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/platform"}),"Platform"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string ","|"," null"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T[] ","|"," string ","|"," null, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform"),"): T[] ","|"," null"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype"}),"ArrayType"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype#converttojsvalue"}),"convertToJSValue"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type#converttojsvalue"}),"convertToJSValue"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L29"}),"packages/core/src/types/ArrayType.ts:29"))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[] ","|"," string ","|"," null")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T[] ","|"," null"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform"),"): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype"}),"ArrayType"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype#getcolumntype"}),"getColumnType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type#getcolumntype"}),"getColumnType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L49"}),"packages/core/src/types/ArrayType.ts:49"))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T[]): T[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype"}),"ArrayType"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/arraytype#tojson"}),"toJSON"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type#tojson"}),"toJSON"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L45"}),"packages/core/src/types/ArrayType.ts:45"))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"gettype"},"getType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getType"),"<","JSType, DBType>(",Object(n.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#constructor"}),"Constructor"),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>>): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/classes/type#gettype"}),"getType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/Type.ts#L46"}),"packages/core/src/types/Type.ts:46"))),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cls")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#constructor"}),"Constructor"),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>>")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>"))}o.isMDXComponent=!0}}]);