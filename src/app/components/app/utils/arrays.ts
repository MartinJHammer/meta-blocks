export const map = <T, Y>(logic: (x:T) => Y) => (x: T[]) => x.map(logic)
export const filter = <T>(logic: (x:T) => boolean | undefined) => (x: T[]) => x.filter(logic);
export const isNill = <T>(x: T) => x === undefined || x === null;
export const isNotNill =  <T>(x: T) => !isNill(x);
export const filterNotNill = filter(isNotNill);
export const duplicateElements = <T>(x: T[]): T[] => [...x, ...x];