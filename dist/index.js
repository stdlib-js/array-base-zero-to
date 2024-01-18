"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=t(function(z,c){
function h(r){var e,i;if(e=[],r<=0)return e;for(i=0;i<r;i++)e.push(i);return e}c.exports=h
});var p=t(function(O,o){
var x=require('@stdlib/array-base-assert-is-complex128array/dist'),g=require('@stdlib/array-base-assert-is-complex64array/dist'),f=require('@stdlib/array-base-arraylike2object/dist'),m=require('@stdlib/strided-base-reinterpret-complex128/dist'),y=require('@stdlib/strided-base-reinterpret-complex64/dist');function w(r,e,i){var a,n;for(n=i,a=0;n>=0&&n<r.length;)r[n]=a,n+=e,a+=1;return r}function l(r,e,i,a){var n,v,s;for(v=i*2,s=a*2,n=0;s>=0&&s<e.length;)e[s]=n,e[s+1]=0,s+=v,n+=1;return r}function b(r,e,i){var a,n,v,s;for(a=r.data,n=r.accessors[1],s=i,v=0;s>=0&&s<a.length;)n(a,s,v),s+=e,v+=1;return a}function j(r,e,i){var a=f(r);return a.accessorProtocol?x(r)?l(r,m(r,0),e,i):g(r)?l(r,y(r,0),e,i):b(a,e,i):w(r,e,i)}o.exports=j
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),C=p();A(q,"assign",C);module.exports=q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
