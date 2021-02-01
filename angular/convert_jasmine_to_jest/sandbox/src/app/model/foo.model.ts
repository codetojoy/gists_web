export class Foo {
  repeatStr(s: string, n: number): string {
    let result: string = '';
    for (let i = 1; i <= n; i++) {
      result += s;
    }
    return result;
  }
}
