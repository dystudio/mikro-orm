(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{1073:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,O=d["".concat(c,".").concat(s)]||d[s]||m[s]||b;return r?n.a.createElement(O,o(o({ref:t},l),{},{components:r})):n.a.createElement(O,o({ref:t},l))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<b;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},550:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(6),b=(r(0),r(1073)),c={id:"commitordercalculator",title:"Class: CommitOrderCalculator",sidebar_label:"CommitOrderCalculator"},o={unversionedId:"api/classes/commitordercalculator",id:"version-4.3/api/classes/commitordercalculator",isDocsHomePage:!1,title:"Class: CommitOrderCalculator",description:"CommitOrderCalculator implements topological sorting, which is an ordering",source:"@site/versioned_docs/version-4.3/api/classes/commitordercalculator.md",slug:"/api/classes/commitordercalculator",permalink:"/docs/api/classes/commitordercalculator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/commitordercalculator.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1605294412,sidebar_label:"CommitOrderCalculator",sidebar:"version-4.3/API",previous:{title:"Class: Collection<T, O>",permalink:"/docs/api/classes/collection"},next:{title:"Class: Configuration<D>",permalink:"/docs/api/classes/configuration"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"nodes",id:"nodes",children:[]},{value:"sortedNodeList",id:"sortednodelist",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addDependency",id:"adddependency",children:[]},{value:"addNode",id:"addnode",children:[]},{value:"discoverProperty",id:"discoverproperty",children:[]},{value:"hasNode",id:"hasnode",children:[]},{value:"sort",id:"sort",children:[]},{value:"visit",id:"visit",children:[]},{value:"visitOpenNode",id:"visitopennode",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"CommitOrderCalculator implements topological sorting, which is an ordering\nalgorithm for directed graphs (DG) and/or directed acyclic graphs (DAG) by\nusing a depth-first searching (DFS) to traverse the graph built in memory.\nThis algorithm have a linear running time based on nodes (V) and dependency\nbetween the nodes (E), resulting in a computational complexity of O(V + E)."),Object(b.b)("p",null,"Based on ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php"}),"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CommitOrderCalculator"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"nodes"},"nodes"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"nodes"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary"),"<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/node"}),"Node"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L34"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:34"))),Object(b.b)("p",null,"Matrix of nodes, keys are provided hashes and values are the node definition objects."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sortednodelist"},"sortedNodeList"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"sortedNodeList"),": string[] = []"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L37"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:37"))),Object(b.b)("p",null,"Volatile variable holding calculated nodes during sorting process."),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"adddependency"},"addDependency"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDependency"),"(",Object(b.b)("inlineCode",{parentName:"p"},"from"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"to"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"weight"),": number): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L56"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:56"))),Object(b.b)("p",null,"Adds a new dependency (edge) to the graph using their hashes."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"from")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"to")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"addnode"},"addNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": string): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L49"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:49"))),Object(b.b)("p",null,"Adds a new node to the graph, assigning its hash."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"discoverproperty"},"discoverProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"discoverProperty"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L60"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:60"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hasnode"},"hasNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": string): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L42"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:42"))),Object(b.b)("p",null,"Checks for node existence in graph."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sort"},"sort"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sort"),"(): string[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L81"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:81"))),Object(b.b)("p",null,"Return a valid order list of all current nodes.\nThe desired topological sorting is the reverse post order of these searches."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visit"},"visit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/node"}),"Node"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L102"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:102"))),Object(b.b)("p",null,"Visit a given node definition for reordering."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/interfaces/node"}),"Node"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visitopennode"},"visitOpenNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visitOpenNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/node"}),"Node"),", ",Object(b.b)("inlineCode",{parentName:"p"},"target"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/node"}),"Node"),", ",Object(b.b)("inlineCode",{parentName:"p"},"edge"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/edge"}),"Edge"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L124"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:124"))),Object(b.b)("p",null,"Visits all target's dependencies if in cycle with given node"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/interfaces/node"}),"Node"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"target")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/interfaces/node"}),"Node"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"edge")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/interfaces/edge"}),"Edge"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"))}p.isMDXComponent=!0}}]);