class Library {
  titles!: string[];

  constructor() { }
}

const library = new Library();

// sometime later & else where in our codebase...
const shrtTitles = library.titles.filter(
  title => title.length < 5
);

console.log('shrtTitles', shrtTitles)