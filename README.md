<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# zeroTo

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a linearly spaced numeric array whose elements increment by 1 starting from zero.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-zero-to
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var zeroTo = require( '@stdlib/array-base-zero-to' );
```

#### zeroTo( n )

Generates a linearly spaced numeric array whose elements increment by `1` starting from zero.

```javascript
var arr = zeroTo( 6 );
// returns [ 0, 1, 2, 3, 4, 5 ]
```

If `n <= 0`, the function returns an empty array.

```javascript
var arr = zeroTo( 0 );
// returns []

arr = zeroTo( -1 );
// returns []
```

If `n` is a non-integer value greater than zero, the function returns an array having `ceil(n)` elements.

```javascript
var arr = zeroTo( 5.1 );
// returns [ 0, 1, 2, 3, 4, 5 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sort2hp = require( '@stdlib/blas-ext-base-gsort2hp' );
var filledBy = require( '@stdlib/array-base-filled-by' );
var randu = require( '@stdlib/random-base-randu' );
var zeroTo = require( '@stdlib/array-base-zero-to' );

// Generate an array of random numbers:
var x = filledBy( 10, randu );

// Generate an array of indices:
var idx = zeroTo( x.length );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort the index array according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, idx, 1 );

console.log( x );
console.log( idx );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-zero-to.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-zero-to

[test-image]: https://github.com/stdlib-js/array-base-zero-to/actions/workflows/test.yml/badge.svg?branch=v0.0.6
[test-url]: https://github.com/stdlib-js/array-base-zero-to/actions/workflows/test.yml?query=branch=v0.0.6

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-zero-to/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-zero-to?branch=v0.0.6

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-zero-to.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-zero-to/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-zero-to/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-zero-to/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-zero-to/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-zero-to/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-zero-to/main/LICENSE

</section>

<!-- /.links -->
