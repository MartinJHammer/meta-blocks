import { resolvePath } from './resolve-path';
import { setPath } from './set-path';

export const pipe = <T>(...fns: Function[]) => (x: T):T => fns.reduce((y, f) => f(y), x);

export const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));

export const call = <T>(fn: Function): T => fn();

export const log = <T>(x: T): T => {
  console.log(x);
  return x;
}

export const shuffle = <T>(data: T[]): T[] => {
  let i = data.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [data[i], data[ri]] = [data[ri], data[i]];
  }
  return data;
};

export const shuffleArray = <T>() => pipe<T[]>(
  clone,
  shuffle
);

export const shuffleNumbers = shuffleArray<number>();

export const withLog = <T>(fn: (...args: any[]) => T)=> pipe<T>(fn, log)



export const allUpperCase = <T>(items: T[], propPath: string): T[] => {
  return clone(items).map((item) => {
    setPath(item, propPath, resolvePath(item, propPath, '').toUpperCase());
    return item;
  });
};

export const allLowerCase = <T>(items: T[], propPath: string): T[] => {
  return clone(items).map((item) => {
    setPath(item, propPath, resolvePath(item, propPath, '').toLowerCase());
    return item;
  });
};

export const copyAll = <T>(items: T[]): T[] => [...items, ...items];
