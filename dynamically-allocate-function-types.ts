namespace dynamicAllocate {
  interface StringContainer {
    value: string;
    format(): string;
    split(): string[];
  }

  interface NumberContainer {
    value: number;
    nearestPrime: number;
    round(): number;
  }

  type Item<T> = {
    id: T;
    container: T extends string ? StringContainer : NumberContainer;
  };

  let item: Item<number> = {
    id: "a23d",
    container: null
  };

  //========================================================================
  type ArrayFilter<T> = T extends any[] ? T : never;

  type StringOrNumbers = ArrayFilter<string | number | string[] | number[]>;

  /**
   * 1. distribute -> never | never | string[] | number[]
   * 2. "never" is ignored -> string[] | number[]
   */

  //========================================================================
  interface Book {
    id: string;
    tableOfContents: string[];
  }

  interface Tv {
    id: number;
    diagonal: number;
  }

  interface IItemService {
    getItem<T extends string | number>(id: T): T extends string ? Book : Tv;
  }

  let book: Book;
  let tv: Tv;
  let itemService: IItemService;

  const _book = itemService.getItem("10");
  const _tv = itemService.getItem(true);
}
