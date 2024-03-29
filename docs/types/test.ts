/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import zeroTo = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	zeroTo( 11 ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number...
{
	zeroTo( true ); // $ExpectError
	zeroTo( false ); // $ExpectError
	zeroTo( '5' ); // $ExpectError
	zeroTo( [] ); // $ExpectError
	zeroTo( {} ); // $ExpectError
	zeroTo( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeroTo(); // $ExpectError
	zeroTo( 3, 4 ); // $ExpectError
	zeroTo( 3, 4, 1 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	zeroTo.assign( [ 0, 0, 0, 0 ], 1, 0 ); // $ExpectType number[]
	zeroTo.assign( new Float64Array( 4 ), 1, 0 ); // $ExpectType Float64Array
	zeroTo.assign( new Float32Array( 4 ), 1, 0 ); // $ExpectType Float32Array
	zeroTo.assign( new Int32Array( 4 ), 1, 0 ); // $ExpectType Int32Array
	zeroTo.assign( new Int16Array( 4 ), 1, 0 ); // $ExpectType Int16Array
	zeroTo.assign( new Int8Array( 4 ), 1, 0 ); // $ExpectType Int8Array
	zeroTo.assign( new Uint32Array( 4 ), 1, 0 ); // $ExpectType Uint32Array
	zeroTo.assign( new Uint16Array( 4 ), 1, 0 ); // $ExpectType Uint16Array
	zeroTo.assign( new Uint8Array( 4 ), 1, 0 ); // $ExpectType Uint8Array
	zeroTo.assign( new Uint8ClampedArray( 4 ), 1, 0 ); // $ExpectType Uint8ClampedArray
	zeroTo.assign( new Complex128Array( 4 ), 1, 0 ); // $ExpectType Complex128Array
	zeroTo.assign( new Complex64Array( 4 ), 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	zeroTo.assign( 1, 1, 0 ); // $ExpectError
	zeroTo.assign( true, 1, 0 ); // $ExpectError
	zeroTo.assign( false, 1, 0 ); // $ExpectError
	zeroTo.assign( null, 1, 0 ); // $ExpectError
	zeroTo.assign( void 0, 1, 0 ); // $ExpectError
	zeroTo.assign( {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0, 0, 0, 0 ];

	zeroTo.assign( out, '1', 0 ); // $ExpectError
	zeroTo.assign( out, true, 0 ); // $ExpectError
	zeroTo.assign( out, false, 0 ); // $ExpectError
	zeroTo.assign( out, null, 0 ); // $ExpectError
	zeroTo.assign( out, void 0, 0 ); // $ExpectError
	zeroTo.assign( out, {}, 0 ); // $ExpectError
	zeroTo.assign( out, [], 0 ); // $ExpectError
	zeroTo.assign( out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = [ 0, 0, 0, 0 ];

	zeroTo.assign( out, 1, '1' ); // $ExpectError
	zeroTo.assign( out, 1, true ); // $ExpectError
	zeroTo.assign( out, 1, false ); // $ExpectError
	zeroTo.assign( out, 1, null ); // $ExpectError
	zeroTo.assign( out, 1, void 0 ); // $ExpectError
	zeroTo.assign( out, 1, {} ); // $ExpectError
	zeroTo.assign( out, 1, [] ); // $ExpectError
	zeroTo.assign( out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0, 0, 0, 0 ];

	zeroTo.assign(); // $ExpectError
	zeroTo.assign( out ); // $ExpectError
	zeroTo.assign( out, 1 ); // $ExpectError
	zeroTo.assign( out, 1, 0, {} ); // $ExpectError
}
