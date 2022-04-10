export const map = <T>(logic: (x:T) => T) => (x: T[]) => x.map(logic)
export const filter = <T>(logic: (x:T) => boolean) => (x: T[]) => x.filter(logic);
export const isNill = <T>(x: T) => x === undefined || x === null;
export const isNotNill =  <T>(x: T) => !isNill(x);
export const filterNotNill = filter(isNotNill)