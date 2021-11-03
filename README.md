# safe-json-parse-and-stringify

## Install

```bash
npm i safe-json-parse-and-stringify --save
```

## Usage

```js
import { jsonParse, jsonStringify, cloneDeep } from 'safe-json-parse-and-stringify';
```

## Detail

### jsonParse(parseStr, defaultValue)

> use `JSON.parse` with `try catch`，if catch error, return defaultValue。

#### Params

- {any} parseStr
- {any} defaultValue

#### Returns

{any}

#### Examples

 | input                    | first param | output    |
 | :----------------------- | ----------- | :-------- |
 | jsonParse('[1,2,3]', []) | string      | [1,2,3]   |
 | jsonParse([1,2,3],[])    | not string  | [1,2,3]   |
 | jsonParse('{a:1}', {})   | string      | {}        |
 | jsonParse({a:1}, {})     | not string  | {a:1}     |
 | jsonParse("",{})         | string      | {}        |
 | jsonParse("",[])         | string      | []        |
 | jsonParse("")            | string      | undefined |
 | jsonParse()              | undefined   | undefined |

### jsonStringify

>Like JSON.stringify, but doesn't throw on circular references.
#### Params

Takes the same arguments as `JSON.stringify`.

```javascript
var circularObj = {};
circularObj.circularRef = circularObj;
circularObj.list = [ circularObj, circularObj ];
console.log(jsonStringify(circularObj, null, 2));
```

Output:

```json
{
  "circularRef": "[Circular]",
  "list": [
    "[Circular]",
    "[Circular]"
  ]
}
```

#### Details
> The fourth argument usually not used

```javascript
jsonStringify(obj, serializer, indent, decycler)
```

The first three arguments are the same as to JSON.stringify.  The last
is an argument that's only used when the object has been seen already.

The default `decycler` function returns the string `'[Circular]'`.
If, for example, you pass in `function(k,v){}` (return nothing) then it
will prune cycles.  If you pass in `function(k,v){ return {foo: 'bar'}}`,
then cyclical objects will always be represented as `{"foo":"bar"}` in
the result.

### cloneDeep

Using JSON.parse(JSON.stringify(obj)) for deep clone is unpredictable and not safe.Use `cloneDeep` instead.

Example

```javascript
const a = {};
a.a = a;
const b = JSON.parse(JSON.stringify(a));
/*
Uncaught TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    --- property 'a' closes the circle
    at JSON.stringify (<anonymous>)
    at <anonymous>:3:27
*/
```

#### Details

This method is loosely based on the [structured clone algorithm](https://mdn.io/Structured_clone_algorithm) and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps. ***And it recursively clones value.***
#### Arguments

value (\*): The value to recursively clone.
#### Returns

(\*): Returns the deep cloned value.

#### Example

```javascript
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
