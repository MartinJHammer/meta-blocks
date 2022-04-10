import { pipe } from './base';

export const withLog = <T>(fn: (...args: any[]) => T)=> pipe(fn, log());

export const log = (msg = '') => <T>(x: T): T => {
    console.log(msg, x);
    return x;
  };