# safe-json-parse-and-stringify

## Install

```bash
npm i safe-json-parse-and-stringify --save
```

## Usage

```js
import { jsonParse ,jsonStringify } from 'safe-json-parse-and-stringify';
```

## Detail

### jsonParse(str, defaultValue)

> use `JSON.parse` with `try catch`，if catch error, return defaultValue。

#### param

- {any} str
- {any} defaultValue

#### return {any}

#### demo

```js
import jsonParse from '@es/universal-common/codec/jsonParse';
jsonParse('[1,2,3]', []);     // => {{JSON.stringify(jsonParse('[1,2,3]', []))}}
jsonParse([1,2,3], []);       // => {{JSON.stringify(jsonParse([1,2,3], []))}}
jsonParse('', []);            // => {{JSON.stringify(jsonParse('', []))}}

jsonParse('{a:1}', {});       // => {{JSON.stringify(jsonParse('{a:1}', {}))}}
jsonParse({a:1}, {});         // => {{JSON.stringify(jsonParse({a:1}, {}))}}
```

### jsonStringify

>see more at https://github.com/moll/json-stringify-safe
