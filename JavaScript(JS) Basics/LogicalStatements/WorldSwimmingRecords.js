function solve(record, distance, time) {
  record = Number(record);
  distance = Number(distance);
  time = Number(time);

  let newtime = distance * time;
  let resistance_time = Math.floor(distance / 15);
  resistance_time = resistance_time * 12.5;

  let TotalTime = (newtime + resistance_time).toFixed(2);
  let result1 = (TotalTime - record).toFixed(2);
  let result2 = (record - TotalTime).toFixed(2);

  if (record <= TotalTime) {
    console.log(`No, he failed! He was ${result1} seconds slower.`);
  } else if (record > TotalTime) {
    console.log(
      `Yes, he succeeded! The new world record is ${TotalTime} seconds.`
    );
  }
}
solve("55555.67", "3017", "5.03");
