/**
 * 동일한 type 과 interface
 */
type Eat = (food: string) => void;
type AnimalList = string[];

interface IEat {
  (food: string): void;
}

interface IAnimalList {
  [index: number]: string;
}