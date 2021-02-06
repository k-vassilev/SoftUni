function solve(input) {
  let index = 2; // Първите 3 са заети от широчина, дължина и височина (0,1,2)
  let width = Number(input[0]); // 0-ва позиция за широчина
  let length = Number(input[1]); // 1-ва позиция за дължина
  let height = Number(input[2]); // 2-ра позиция за височина
  let boxes = input[index++]; // момента стойност на брой подадени кашни (почва от 3-тото подаване)
  let allBoxes = 0; // променлива за натрупаните до момента кащони

  let volume = width * length * height; // обем на стаята

  while (true) {
    //цикъл за четене от масива
    let currentBoxes = input[index];
    index++;
    if (currentBoxes === "Done") {
      //прекратяване при прочитане на "Done"
      break;
    }
    currentBoxes = Number(currentBoxes);
    allBoxes += currentBoxes;
    if (allBoxes >= volume) {
      //прекратяване при подадени повече кашони от максималния обем
      break;
    }
  }

  let boxesLeft = volume - allBoxes; //изчислява колко пространство остава

  if (volume - allBoxes >= 0) {
    // ако остава пространство, изписва колко остава докато се запълни максималния обем
    console.log(`${boxesLeft} Cubic meters left.`);
  } else {
    let boxesOver = allBoxes - volume; // ако не остава пространство, изчислява с колко кашоните са надхвърлили максималният обем
    console.log(`No more free space! You need ${boxesOver} Cubic meters more.`);
  }
}
solve(["10", "10", "2", "20", "20", "20", "20", "122"]);
