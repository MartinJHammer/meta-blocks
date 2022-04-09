export const setPath = (object: any, path: string, value: any) =>
  path
    .split('.')
    .reduce(
      (o, p, i) => (o[p] = path.split('.').length === ++i ? value : o[p] || {}),
      object
    );
