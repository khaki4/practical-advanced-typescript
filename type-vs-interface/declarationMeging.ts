interface Foo {
  a: string;
}

interface Foo {
  b: string;
}

let foo: Foo;

/*
 * interface는
 * foo.a
 * foo.b 둘다 사용가능
 *
 * type의 경우는 불가능
 */