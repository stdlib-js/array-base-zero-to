"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=v(function(k,c){
function x(e){var r,i;if(r=[],e<=0)return r;for(i=0;i<e;i++)r.push(i);return r}c.exports=x
});var p=v(function(z,o){
var g=require('@stdlib/array-base-arraylike2object/dist'),q=require('@stdlib/strided-base-reinterpret-complex128/dist'),f=require('@stdlib/strided-base-reinterpret-complex64/dist');function m(e,r,i){var a,n;for(n=i,a=0;n>=0&&n<e.length;)e[n]=a,n+=r,a+=1;return e}function l(e,r,i,a){var n,s,t;for(s=i*2,t=a*2,n=0;t>=0&&t<r.length;)r[t]=n,r[t+1]=0,t+=s,n+=1;return e}function y(e,r,i){var a,n,s,t;for(a=e.data,n=e.accessors[1],t=i,s=0;t>=0&&t<a.length;)n(a,t,s),t+=r,s+=1;return a}function w(e,r,i){var a=g(e);return a.accessorProtocol?a.dtype==="complex128"?l(e,q(e,0),r,i):a.dtype==="complex64"?l(e,f(e,0),r,i):y(a,r,i):m(e,r,i)}o.exports=w
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=u(),d=p();b(h,"assign",d);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
