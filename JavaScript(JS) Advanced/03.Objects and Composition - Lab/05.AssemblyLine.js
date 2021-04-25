// let startObj = {
//   name: "test",
//   make: "audi",
// };

// function hasClima(obj) {
//   obj.temp = 21;
//   obj.tempSettings = 21;
//   obj.adjustTemp = (adjustTemp) => {
//     if (this.temp < this.tempSettings) {
//       this.temp += 1;
//     } else if (this.temp > this.tempSettings) {
//       this.temp -= 1;
//     }
//   };
// }
// hasClima(startObj);

// function hasAudio(obj) {
//   obj.currentTrack = {
//     name: null,
//     artist: null,
//   };
//   obj.nowPlaying = (nowPlaying) => {
//     if (obj.currentTrack.name !== null) {
//       console.log(
//         `Now playing \`${obj.currentTrack.name}\` by \`${obj.currentTrack.artist}\``
//       );
//     }
//   };
//   obj.nowPlaying();
// }
// hasAudio(startObj);

//function hasParktornic(obj) {
    let carObj ={
        checkDistance: function (distance) {
            if(carObj.checkDistance(distance) < 0.1){
                console.log(`Beep! Beep! Beep!"`)
            }else if(0.1 <= carObj.checkDistance(distance) && carObj.checkDistance(distance) < 0.25){
                console.log(`Beep! Beep!"`)
            }else if(0.25 <= carObj.checkDistance(distance) && carObj.checkDistance(distance) < 0.5){
                console.log(`Beep!`)
            }else{
                console.log(``)
            }
        }
    }
    carObj.checkDistance(0.2);
    
//}hasParktornic(startObj);
//console.log(startObj)
