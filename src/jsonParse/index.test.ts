import jsonParse from './index';
describe('jsonParse', () => {
	it('will return the normal result of json.parse when the str argument is passed a string that conforms to the JSON specification', () => {
		expect(jsonParse('[1,2,3]', [])).toEqual([1, 2, 3]);
		expect(JSON.stringify(jsonParse('[1,2,3]', []))).toBe('[1,2,3]');

		expect(jsonParse('{"1":1}', {})).toEqual({ '1': 1 });
		expect(JSON.stringify(jsonParse('{"1":1}', {}))).toBe('{"1":1}');
	});
	it(' will return itself when the str argument is passed a non-string and the value Boolean is true', () => {
		expect(jsonParse({ '1': 1 }, {})).toEqual({ '1': 1 });
		expect(JSON.stringify(jsonParse({ '1': 1 }, {}))).toBe('{"1":1}');

		expect(jsonParse([1, 2, 3], [])).toEqual([1, 2, 3]);
		expect(JSON.stringify(jsonParse([1, 2, 3], []))).toBe('[1,2,3]');
	});

	it('will return the second argument defaultValue when the str argument is passed a non-string and the value Boolean is false', () => {
		expect(jsonParse(undefined, [])).toEqual([]);
		expect(JSON.stringify(jsonParse(undefined, []))).toBe('[]');

		expect(jsonParse(undefined, {})).toEqual({});
		expect(JSON.stringify(jsonParse(undefined, {}))).toBe('{}');
	});

	it('will return the second argument defaultValue when the str argument is passed a string and the value Boolean is false', () => {
		expect(jsonParse('0', 'defaultValue')).toBe('defaultValue');
	});

	it('will return the second argument defaultValue when the str argument is passed a string that does not conform to the JSON specification ', () => {
		// JSON.parse() 不允许用逗号作为结尾, 将抛出异常
		expect(jsonParse('[1, 2, 3, 4, ]', [])).toEqual([]);
		expect(jsonParse('{"foo" : 1, }', {})).toEqual({});
	});
});
