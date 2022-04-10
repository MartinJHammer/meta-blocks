// export const pipe = <T>(...fns: Array<(arg: T) => T>) => (x: T):T => fns.reduce((y, f) => f(y), x);
export const pipe = (...fns: Array<(arg: any) => any>) => (x: any):any => fns.reduce((y, f) => f(y), x);
export const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));
