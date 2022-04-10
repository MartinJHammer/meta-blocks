export const pipe = <T>(...fns: Function[]) => (x: T):T => fns.reduce((y, f) => f(y), x);

export const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));

export const log = (msg = '') => <T>(x: T): T => {
  console.log(msg, x);
  return x;
}

export const withLog = <T>(fn: (...args: any[]) => T)=> pipe<T>(fn, log())