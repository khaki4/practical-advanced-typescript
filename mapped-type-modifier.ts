interface IPet {
  name: string;
  age: number;
  favoritePark?: string;
}

// +readonly로 readonly를 만 쓰는 것 보다 분명하게 코드를 통해 의도를 전달 할 수 있다
// -? 로 하나의 interface로 optional을 조정 할 수 있다.
type ReadonlyPet = {
  +readonly [K in keyof IPet]-?: IPet[K];
}

const pet: IPet = { name: 'Buttons', age: 5 };
const readonlyPet: ReadonlyPet = {
  name: 'Buttons',
  age: 5,
  favoritePark: 'Centeral',
};

pet.age = 6;
readonlyPet.age = 6;
