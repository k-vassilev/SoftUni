function solution() {
  let intStr = "";

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };

  function append(str) {
    intStr += str;
  }
  function removeStart(n) {
    intStr = intStr.slice(n);
  }
  function removeEnd(r) {
    intStr = intStr.slice(0, -r);
  }
  function print() {
    console.log(intStr);
  }
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
