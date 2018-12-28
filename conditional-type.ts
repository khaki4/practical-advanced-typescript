const numbers = ['2', '1']; // --> number[]

const someObject = {
  id: 21,
  name: 'Jonathan'
};

const someBoolean = true;

/**
 * keyof X turns the properties of X into a union type of the names of the properties
 */
type FlattenArray<T extends any[]> = T[number]; // T의 number index 값의 결과 이므로 number 이다. [1,2][number 인덱스] --> [1][0] --> number

// keyof T --> "id" | "name" 
// T["id" | "name"] --> T["id"] | T["name"] --> number | string
type FlattenObject<T extends object> = T[keyof T];

type Flatten<T> = T extends any[] ? T[number] :
    T extends Object ? T[keyof T] : T;


type NumbersArrayFlattened = FlattenArray<typeof numbers>;
type SomeObjectFlattened = FlattenObject<typeof someObject>; // --> number | string

type _NumbersArrayFlattened = Flatten<typeof numbers>;
type _SomeObjectFlattened = Flatten<typeof someObject>; // --> number | string
type _someBooleanFlattened = Flatten<typeof someBoolean>; // --> boolean