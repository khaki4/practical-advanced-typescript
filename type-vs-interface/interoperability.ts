type Pet = {
  pose(): void;
};

interface IFeline {
  nightvision: boolean;
}

interface ICat extends IFeline, Pet {

}

/**
 * interface와 type을 혼용 가능하다.
 */

class HouseCat implements IFeline, Pet {

}

type Cat = IFeline & Pet;

export {};