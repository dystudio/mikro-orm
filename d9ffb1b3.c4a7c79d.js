(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1073:function(e,r,n){"use strict";n.d(r,"a",(function(){return c})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var r=i.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=d(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},p=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=t,f=c["".concat(u,".").concat(p)]||c[p]||y[p]||o;return n?i.a.createElement(f,a(a({ref:r},s),{},{components:n})):i.a.createElement(f,a({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,u=new Array(o);u[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,u[1]=a;for(var s=2;s<o;s++)u[s]=n[s];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},913:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return u})),n.d(r,"metadata",(function(){return a})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return d}));var t=n(1),i=n(6),o=(n(0),n(1073)),u={title:"Query Builder API"},a={unversionedId:"query-builder-api",id:"version-4.2/query-builder-api",isDocsHomePage:!1,title:"Query Builder API",description:"QueryBuilder provides fluent interface with these methods:",source:"@site/versioned_docs/version-4.2/query-builder-api.md",slug:"/query-builder-api",permalink:"/docs/4.2/query-builder-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/query-builder-api.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1605294412,sidebar:"version-4.2/docs",previous:{title:"EntityRepository API",permalink:"/docs/4.2/repositories-api"},next:{title:"Decorators",permalink:"/docs/4.2/decorators"}},l=[],s={rightToc:l};function d(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"select(fields: Field<T> | Field<T>[], distinct?: boolean): QueryBuilder;\naddSelect(fields: string | string[]): QueryBuilder;\ninsert(data: any): QueryBuilder;\nupdate(data: any): QueryBuilder;\ndelete(cond?: QBFilterQuery): QueryBuilder;\ntruncate(): QueryBuilder;\ncount(field?: string | string[], distinct?: boolean): QueryBuilder;\njoin(field: string, alias: string, cond?: QBFilterQuery, type?: 'leftJoin' | 'innerJoin' | 'pivotJoin', path?: string): QueryBuilder;\nleftJoin(field: string, alias: string, cond?: QBFilterQuery): QueryBuilder;\nwithSubQuery(subQuery: KnexQueryBuilder, alias: string): QueryBuilder;\nwhere(cond: QBFilterQuery<T>, operator?: keyof typeof GroupOperator): QueryBuilder;\nwhere(cond: string, params?: any[], operator?: keyof typeof GroupOperator): QueryBuilder;\nandWhere(cond: QBFilterQuery<T>): QueryBuilder;\nandWhere(cond: string, params?: any[]): QueryBuilder;\norWhere(cond: QBFilterQuery<T>): QueryBuilder;\norWhere(cond: string, params?: any[]): QueryBuilder;\norderBy(orderBy: QueryOrderMap): QueryBuilder;\ngroupBy(fields: (string | keyof T) | (string | keyof T)[]): QueryBuilder;\nhaving(cond?: QBFilterQuery | string, params?: any[]): QueryBuilder;\nraw(sql: string): Raw;\nlimit(limit?: number, offset?: number): QueryBuilder;\noffset(offset?: number): QueryBuilder;\nwithSchema(schema?: string): QueryBuilder;\nsetLockMode(mode?: LockMode): QueryBuilder;\nsetFlag(flag: QueryFlag): QueryBuilder;\nunsetFlag(flag: QueryFlag): QueryBuilder;\ngetKnexQuery(): KnexQueryBuilder;\ngetQuery(): string;\ngetParams(): readonly Value[];\ngetAliasForJoinPath(path: string): string | undefined;\ngetNextAlias(prefix?: string): string;\nexecute<U = any>(method?: 'all' | 'get' | 'run', mapResults?: boolean): Promise<U>;\ngetResult(): Promise<T[]>;\ngetResultList(): Promise<T[]>;\ngetSingleResult(): Promise<T | null>;\n/**\n * Returns knex instance with sub-query aliased with given alias.\n * You can provide `EntityName.propName` as alias, then the field name will be used based on the metadata\n */\nas(alias: string): KnexQueryBuilder;\nclone(): QueryBuilder<T>;\ngetKnex(): KnexQueryBuilder;\n")))}d.isMDXComponent=!0}}]);