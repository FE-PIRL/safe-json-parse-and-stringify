import { jsonParse, jsonStringify } from './index';
describe('safe-json-parse-and-stringify', () => {
	it('jsonParse and jsonStringify should be function', () => {
		expect(typeof jsonParse).toEqual('function');
		expect(typeof jsonStringify).toEqual('function');
	});
	it('jsonParse will return normal like JSON.parse', () => {
		expect(jsonParse('{"a":1}', {})).toEqual({ a: 1 });
	});
	it('jsonStringify will return normal like JSON.stringify', () => {
		expect(jsonStringify({ a: 1 })).toEqual('{"a":1}');
	});
});
