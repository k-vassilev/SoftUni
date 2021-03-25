function songs(input) {
  let n = input.shift();
  let listName = input.pop();
  class songs {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    print() {
      console.log(this.name);
    }
  }

  for (let index = 0; index < n; index++) {
    [typeList, name, time] = input[index].split(`_`);

    if (listName === typeList || listName === "all") {
      let newSong = new songs(typeList, name, time);
      newSong.print();
    }
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
