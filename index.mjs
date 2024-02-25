// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";function s(e){var r,t;if(r=[],e<=0)return r;for(t=0;t<e;t++)r.push(t);return r}function o(e,r,t,n){var s,o,i;for(o=2*t,i=2*n,s=0;i>=0&&i<r.length;)r[i]=s,r[i+1]=0,i+=o,s+=1;return e}function i(e,s,i){var d=r(e);return d.accessorProtocol?"complex128"===d.dtype?o(e,t(e,0),s,i):"complex64"===d.dtype?o(e,n(e,0),s,i):function(e,r,t){var n,s,o,i;for(n=e.data,s=e.accessors[1],i=t,o=0;i>=0&&i<n.length;)s(n,i,o),i+=r,o+=1;return n}(d,s,i):function(e,r,t){var n,s;for(s=t,n=0;s>=0&&s<e.length;)e[s]=n,s+=r,n+=1;return e}(e,s,i)}e(s,"assign",i);export{i as assign,s as default};
//# sourceMappingURL=index.mjs.map