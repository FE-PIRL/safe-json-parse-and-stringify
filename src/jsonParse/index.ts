export default function(
  text: string,
  reviver?: ((this: any, key: string, value: any) => any) | undefined,
  defaultValue?: any,
): any {
  if (typeof text === 'string') {
    try {
      return JSON.parse(text, reviver) || defaultValue;
    } catch (e) {
      return defaultValue;
    }
  } else if (text != null) {
    return text;
  }
  return defaultValue;
}
