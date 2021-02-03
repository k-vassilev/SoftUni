function solve(num) {
  // не го правим на Number, защото ще го четем като стринг
  let sum = 0; // променлива за събиране
  for (let i = 0; i < num.length; i++) {
    let currentIndex = Number(num[i]); // след като вземем всяка позиция, превръщаме я в число, за да можем да я смятаме
    sum += currentIndex; //всеки път да се събира със следващия индекс, който е направен на число
  }
  console.log(`The sum of the digits is:${sum}`);
}
solve(`564891`);
