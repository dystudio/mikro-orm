(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1073:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},395:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(1073)),i={title:"Serializing"},l={unversionedId:"serializing",id:"version-4.0/serializing",isDocsHomePage:!1,title:"Serializing",description:"By default, all entities are monkey patched with toObject() and toJSON methods:",source:"@site/versioned_docs/version-4.0/serializing.md",slug:"/serializing",permalink:"/docs/4.0/serializing",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/serializing.md",version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1605294412,sidebar:"version-4.0/docs",previous:{title:"Propagation",permalink:"/docs/4.0/propagation"},next:{title:"EntityHelper and Decorated Entities",permalink:"/docs/4.0/entity-helper"}},c=[{value:"Hidden Properties",id:"hidden-properties",children:[]},{value:"Shadow Properties",id:"shadow-properties",children:[]},{value:"Property Serializers",id:"property-serializers",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, all entities are monkey patched with ",Object(a.b)("inlineCode",{parentName:"p"},"toObject()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"toJSON")," methods:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export interface AnyEntity<K = number | string> {\n  toObject(parent?: AnyEntity, isCollection?: boolean): Record<string, any>;\n  toJSON(...args: any[]): Record<string, any>;\n  // ...\n}\n")),Object(a.b)("p",null,"When you serialize your entity via ",Object(a.b)("inlineCode",{parentName:"p"},"JSON.stringify(entity)"),", its ",Object(a.b)("inlineCode",{parentName:"p"},"toJSON")," method will be\ncalled automatically. You can provide custom implementation for ",Object(a.b)("inlineCode",{parentName:"p"},"toJSON"),", while using\n",Object(a.b)("inlineCode",{parentName:"p"},"toObject")," for initial serialization:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  // ...\n\n  toJSON(strict = true, strip = ['id', 'email'], ...args: any[]): { [p: string]: any } {\n    const o = this.toObject(...args); // do not forget to pass rest params here\n\n    if (strict) {\n      strip.forEach(k => delete o[k]);\n    }\n\n    return o;\n  }\n\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Do not forget to pass rest params when calling ",Object(a.b)("inlineCode",{parentName:"p"},"toObject(...args)"),", otherwise the results\nmight not be stable.")),Object(a.b)("h2",{id:"hidden-properties"},"Hidden Properties"),Object(a.b)("p",null,"If you want to omit some properties from serialized result, you can mark them with ",Object(a.b)("inlineCode",{parentName:"p"},"hidden"),"\nflag on ",Object(a.b)("inlineCode",{parentName:"p"},"@Property()")," decorator:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @Property({ hidden: true })\n  hiddenField = Date.now();\n\n}\n\nconst book = new Book(...);\nconsole.log(book.toObject().hiddenField); // undefined\nconsole.log(book.toJSON().hiddenField); // undefined\n")),Object(a.b)("h2",{id:"shadow-properties"},"Shadow Properties"),Object(a.b)("p",null,"The opposite situation where you want to define a property that lives only in memory (is\nnot persisted into database) can be solved by defining your property as ",Object(a.b)("inlineCode",{parentName:"p"},"persist: false"),".\nSuch property can be assigned via one of ",Object(a.b)("inlineCode",{parentName:"p"},"Entity.assign()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"em.create()")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"em.merge()"),". It will be also part of serialized result. "),Object(a.b)("p",null,"This can be handle when dealing with additional values selected via ",Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder")," or\nMongoDB's aggregations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @Property({ persist: false })\n  count?: number;\n\n}\n\nconst book = new Book(...);\nbook.assign({ count: 123 });\nconsole.log(book.toObject().count); // 123\nconsole.log(book.toJSON().count); // 123\n")),Object(a.b)("h2",{id:"property-serializers"},"Property Serializers"),Object(a.b)("p",null,"As an alternative to custom ",Object(a.b)("inlineCode",{parentName:"p"},"toJSON()")," method, we can also use property serializers.\nThey allow to specify a callback that will be used when serializing a property:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @ManyToOne({ serializer: value => value.name, serializedName: 'authorName' })\n  author: Author;\n\n}\n\nconst author = new Author('God')\nconst book = new Book(author);\nconsole.log(book.toJSON().authorName); // 'God'\n")))}p.isMDXComponent=!0}}]);