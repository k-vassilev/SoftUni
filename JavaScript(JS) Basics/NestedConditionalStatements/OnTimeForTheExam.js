function solve(examHour, examMinutes, arrivalHour, arrivalMinutes) {
  examHour = Number(examHour);
  examMinutes = Number(examMinutes);
  arrivalHour = Number(arrivalHour);
  arrivalMinutes = Number(arrivalMinutes);

  let eMinutes = examHour * 60 + examMinutes;
  let aMinutes = arrivalHour * 60 + arrivalMinutes;

  let hh = Math.abs((eMinutes - aMinutes) / 60);
  hh = Math.floor(hh);
  let mm = Math.abs((eMinutes - aMinutes) % 60).toFixed(0);

  if (eMinutes >= aMinutes && eMinutes <= aMinutes + 30) {
    if (eMinutes != aMinutes) {
      if (eMinutes > aMinutes && eMinutes < aMinutes + 60) {
        let mm = Math.abs(eMinutes - aMinutes);
        console.log(`On time`);
        console.log(`${mm} minutes before the start`);
      }
    } else if (eMinutes === aMinutes) {
      console.log(`On time`);
    }
  } else if (eMinutes > aMinutes + 30) {
    if (eMinutes >= aMinutes + 60) {
      if (mm < 10) {
        console.log(`Early`);
        console.log(`${hh}:0${mm} hours before the start`);
      } else if (mm >= 10 && mm < 60) {
        console.log(`Early`);
        console.log(`${hh}:${mm} hours before the start`);
      } else {
        console.log(`Early`);
        console.log(`${hh}:00 hours before the start`);
      }
    } else {
      console.log(`Early`);
      console.log(`${mm} minutes before the start`);
    }
  } else if (eMinutes < aMinutes) {
    if (eMinutes + 60 > aMinutes) {
      console.log(`Late`);
      console.log(`${mm} minutes after the start`);
    } else if (eMinutes + 60 <= aMinutes) {
      if (mm < 10) {
        console.log(`Late`);
        console.log(`${hh}:0${mm} hours after the start`);
      } else if (mm >= 10 && mm < 60) {
        console.log(`Late`);
        console.log(`${hh}:${mm} hours after the start`);
      } else if ((mm = 60)) {
        console.log(`Late`);
        console.log(`${hh}:00 hours after the start`);
      }
    }
  }
}
solve("11", "30", "10", "55");
