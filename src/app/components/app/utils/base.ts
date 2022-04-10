export const pipe = <T>(...fns: Function[]) => (x: T):T => fns.reduce((y, f) => f(y), x);

export const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));
