(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(1),b=a(6),n=(a(0),a(806)),c={id:"criterianode",title:"Class: CriteriaNode",sidebar_label:"CriteriaNode"},i={unversionedId:"api/classes/criterianode",id:"api/classes/criterianode",isDocsHomePage:!1,title:"Class: CriteriaNode",description:"Helper for working with deeply nested where/orderBy/having criteria. Uses composite pattern to build tree from the payload.",source:"@site/docs/api/classes/criterianode.md",slug:"/api/classes/criterianode",permalink:"/docs/next/api/classes/criterianode",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/criterianode.md",version:"current",sidebar_label:"CriteriaNode",sidebar:"API",previous:{title:"Class: ConstraintViolationException",permalink:"/docs/next/api/classes/constraintviolationexception"},next:{title:"Class: CriteriaNodeFactory",permalink:"/docs/next/api/classes/criterianodefactory"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"entityName",id:"entityname",children:[]},{value:"key",id:"key",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"parent",id:"parent",children:[]},{value:"payload",id:"payload",children:[]},{value:"prop",id:"prop",children:[]}]},{value:"Methods",id:"methods",children:[{value:"inspect.custom",id:"inspectcustom",children:[]},{value:"getPath",id:"getpath",children:[]},{value:"getPivotPath",id:"getpivotpath",children:[]},{value:"isPivotJoin",id:"ispivotjoin",children:[]},{value:"process",id:"process",children:[]},{value:"renameFieldToPK",id:"renamefieldtopk",children:[]},{value:"shouldInline",id:"shouldinline",children:[]},{value:"shouldRename",id:"shouldrename",children:[]},{value:"willAutoJoin",id:"willautojoin",children:[]},{value:"isCustomExpression",id:"iscustomexpression",children:[]}]}],p={rightToc:l};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Helper for working with deeply nested where/orderBy/having criteria. Uses composite pattern to build tree from the payload.\nAuto-joins relations and converts payload from { books: { publisher: { name: '...' } } } to { 'publisher_alias.name': '...' }"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"CriteriaNode")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/objectcriterianode"}),"ObjectCriteriaNode")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/arraycriterianode"}),"ArrayCriteriaNode")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/scalarcriterianode"}),"ScalarCriteriaNode")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new CriteriaNode"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage"),", ",Object(n.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/icriterianode"}),"ICriteriaNode"),", ",Object(n.b)("inlineCode",{parentName:"p"},"key?"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"validate?"),": boolean): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/criterianode"}),"CriteriaNode")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L12"}),"packages/knex/src/query/CriteriaNode.ts:12"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entityName")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"parent?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"validate")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/criterianode"}),"CriteriaNode")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"entityname"},"entityName"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"entityName"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L15"}),"packages/knex/src/query/CriteriaNode.ts:15"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"key"},"key"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"key"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L17"}),"packages/knex/src/query/CriteriaNode.ts:17"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L14"}),"packages/knex/src/query/CriteriaNode.ts:14"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"parent"},"parent"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"parent"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L16"}),"packages/knex/src/query/CriteriaNode.ts:16"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"payload"},"payload"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"payload"),": any"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L11"}),"packages/knex/src/query/CriteriaNode.ts:11"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"prop"},"prop"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L12"}),"packages/knex/src/query/CriteriaNode.ts:12"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"inspectcustom"},"[inspect.custom]"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"[inspect.custom]"),"(): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L119"}),"packages/knex/src/query/CriteriaNode.ts:119"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getpath"},"getPath"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getPath"),"(): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L78"}),"packages/knex/src/query/CriteriaNode.ts:78"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getpivotpath"},"getPivotPath"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getPivotPath"),"(",Object(n.b)("inlineCode",{parentName:"p"},"path"),": string): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L115"}),"packages/knex/src/query/CriteriaNode.ts:115"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"path")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"ispivotjoin"},"isPivotJoin"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"isPivotJoin"),"(): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L103"}),"packages/knex/src/query/CriteriaNode.ts:103"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"process"},"process"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"process"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"alias?"),": string): any"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L32"}),"packages/knex/src/query/CriteriaNode.ts:32"))),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"qb")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"alias?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," any"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"renamefieldtopk"},"renameFieldToPK"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"renameFieldToPK"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L64"}),"packages/knex/src/query/CriteriaNode.ts:64"))),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"qb")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shouldinline"},"shouldInline"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"shouldInline"),"(",Object(n.b)("inlineCode",{parentName:"p"},"payload"),": any): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L36"}),"packages/knex/src/query/CriteriaNode.ts:36"))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"payload")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shouldrename"},"shouldRename"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"shouldRename"),"(",Object(n.b)("inlineCode",{parentName:"p"},"payload"),": any): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L44"}),"packages/knex/src/query/CriteriaNode.ts:44"))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"payload")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"willautojoin"},"willAutoJoin"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"willAutoJoin"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"alias?"),": string): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L40"}),"packages/knex/src/query/CriteriaNode.ts:40"))),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"qb")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"alias?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"iscustomexpression"},"isCustomExpression"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"isCustomExpression"),"(",Object(n.b)("inlineCode",{parentName:"p"},"field"),": string): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b1518b4/packages/knex/src/query/CriteriaNode.ts#L123"}),"packages/knex/src/query/CriteriaNode.ts:123"))),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"field")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"))}o.isMDXComponent=!0},806:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(a),j=r,d=m["".concat(c,".").concat(j)]||m[j]||O[j]||n;return a?b.a.createElement(d,i(i({ref:t},p),{},{components:a})):b.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<n;p++)c[p]=a[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);