import { jsonParse, jsonStringify, cloneDeep } from './index';
describe('safe-json-parse-and-stringify', () => {
	it('jsonParse, jsonStringify and cloneDeep should be function', () => {
		expect(typeof jsonParse).toEqual('function');
		expect(typeof jsonStringify).toEqual('function');
		console.log(typeof cloneDeep);
		expect(typeof cloneDeep).toEqual('function');
	});
	it('jsonParse will return normal like JSON.parse', () => {
		expect(jsonParse('{"a":1}', {})).toEqual({ a: 1 });
	});
	it('jsonStringify will return normal like JSON.stringify', () => {
		expect(jsonStringify({ a: 1 })).toEqual('{"a":1}');
	});
	it('cloneDeep will recursive copying ', () => {
		expect(cloneDeep({ a: { b: { c: 1 } } })).toEqual({ a: { b: { c: 1 } } });
	});
});
