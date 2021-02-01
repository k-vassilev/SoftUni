function solve() {
  // for (i = 7; i <= 997; i += 10){
  //     console.log(i);
  // }

  for (i = 7; i <= 997; i++) {
    if (i % 10 == 7) {
      // всяко число, модулно разделено на 10, дава резултат единиците - т.е ...7
      console.log(i);
    }
  }
}
solve();
