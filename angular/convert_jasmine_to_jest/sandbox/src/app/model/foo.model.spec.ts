import { Foo } from './foo.model';

describe('Foo', () => {
  it('should do simple Jasmine canary test', () => {
    let s: string = 'abc';
    let n: number = 3;

    // test
    let result: string = new Foo().repeatStr(s, n);

    expect(result).toEqual('abcabcabc');
  });
});
