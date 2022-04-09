// https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arrays-by-string-path
export const resolvePath = (object: any, path: string, defaultValue: any) =>
  path
    .split(/[\.\[\]\'\"]/)
    .filter((p) => p)
    .reduce((o, p) => (o ? o[p] : defaultValue), object);
