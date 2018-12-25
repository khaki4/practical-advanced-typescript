type Pet = IDog | ICat;

interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

function feedAnimal(animal: IAnimal) {
  animal.eat();
}

/**
 * implement 할 수 있다는 점은 type 과 interface의 큰 차이점 이다
 */
class Animal implements IAnimal {
  age = 0;

  eat() {
    console.log("nom..nom..");
  }

  speak() {
    return "roar";
  }
}

interface IDog {}
interface ICat {}

export {};