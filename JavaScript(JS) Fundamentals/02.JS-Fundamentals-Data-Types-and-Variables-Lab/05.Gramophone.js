function gramophone(band, album, song) {
  let bandName = band.length;
  let albumName = album.length;
  let songName = song.length;

  let time = (albumName * bandName * songName) / 2;
  let rotations = Math.ceil(time / 2.5);
  console.log(`The plate was rotated ${rotations} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
