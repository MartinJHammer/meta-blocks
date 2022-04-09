export function memoizer(fun: Function) {
  let cache: any = {};
  return function (n: any) {
    const strN = JSON.stringify(n);
    if (cache[strN] != undefined) {
      return cache[strN];
    } else {
      let result = fun(n);
      cache[strN] = result;
      return result;
    }
  };
}
