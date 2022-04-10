import { pipe } from './base';

export const copyAll = <T>(data: T[]): T[] => [...data, ...data];

export const iff = <T>(condtion: () => boolean, then: <Y>() => Y | void) => (x: T) => condtion() ? then() : x

export const throwNill = <T>(msg: string) => (x: T) =>  iff<T>(
    (): boolean => { 
        return x === null || x=== undefined
    },
    (): void => {
        throw new Error(msg);
    })

export const map = <T>(logic: (x:T) => T) => (x: T[]) => x.map(logic)

export const noNillElements = <T>(msg: string) => pipe<T>(
    map(y => {
        return throwNill(msg) // message, returns if
        (y) // iff, returns if
        (y); // if, returns then() or x
    })  
)