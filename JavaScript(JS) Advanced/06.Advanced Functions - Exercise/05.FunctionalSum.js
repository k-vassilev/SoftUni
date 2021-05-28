function add(a) {
    let sum = 0;
    sum += a
    
  function calc(b) {
      sum += b
      return calc
    
  }
  calc.toString = () => sum
  // Връща числен резултат, а не функция (преобразува return-а на функцията в числения му резулат)
  return calc
  //add() при първо извикване => () при второ извикване calc => () calc
  //т.е add се извиква само при първо извикване, от там нататък return-ва веднъж calc, която от своя страна постоянно return-ва себе си.
}
console.log(add(1)(2)(3));
console.log(add(1)(2)(3).toString())

