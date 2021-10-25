export default function (str: any, defaultValue: any): any {
    if (typeof str === 'string') {
        try {
            return JSON.parse(str) || defaultValue;
        } catch (e) {
            return defaultValue;
        }
    } else if (str) {
        return str;
    }
    return defaultValue;
}
