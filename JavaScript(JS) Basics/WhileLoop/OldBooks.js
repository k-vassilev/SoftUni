function solve(input) {
  let searchedBook = input[0];
  let index = 1;
  let counter = 0;

  while (true) {
    let currentBook = input[index++];
    counter++;

    if (currentBook === searchedBook) {
      counter = counter - 1;
      console.log(`You checked ${counter} books and found it.`);
      break;
    }
    if (currentBook === `No More Books`) {
      counter = counter - 1;
      console.log(`The book you search is not here!`);
      console.log(`You checked ${counter} books.`);
      break;
    }
  }
}
solve([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
