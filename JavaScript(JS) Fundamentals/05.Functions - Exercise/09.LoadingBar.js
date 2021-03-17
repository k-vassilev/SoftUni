function loadingBar(num) {
  let originalNum = Number(num);
  let loading = ``;
  let loaded = ``;
  for (let i = 0; i < num; i += 10) {
    loaded += `%`;
    if (i === num) {
      break;
    }
  }
  while (num <= 100) {
    num += 10;
    loading += `.`;

    if (num === 100) {
      break;
    }
  }

  if (originalNum < 100) {
    console.log(`${originalNum}% [${loaded}${loading}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`100 % Complete!`);
    console.log(`[${loaded}]`);
  }
}
//loadingBar(30);
//loadingBar(50);
loadingBar(80);
