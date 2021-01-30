function solve(input) {
  let n = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (i = 1; i < input.length; i++) {
    let number = Number(input[i]); // ввзима стойността на конкретния индекс при завъртането.

    if (number < 200) {
      p1 += 1;
    } else if (number >= 200 && number < 400) {
      p2 += 1;
    } else if (number >= 400 && number < 600) {
      p3 += 1;
    } else if (number >= 600 && number < 800) {
      p4 += 1;
    } else {
      p5 += 1;
    }
  }
  p1 = (p1 / n) * 100; // input.lenght - 1 защото броя числа са без първото подадено, което е общия брой числа
  p2 = (p2 / n) * 100; // същото би се получило ако заместим input.length с n (дефинирано в началото)
  p3 = (p3 / n) * 100;
  p4 = (p4 / n) * 100;
  p5 = (p5 / n) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
solve(["3", "1", "2", "999"]);
