function solve(bitcoins, yuan, comission) {
  bitcoins = Number(bitcoins);
  yuan = Number(yuan);
  comission = Number(comission);
  let lev = 1;

  let bitcoinPrice = 1168 * bitcoins; //lev
  let dollar = 1.76 * lev;
  let yuanPrice = 0.15 * yuan; // dollar
  yuanPrice = yuanPrice * 1.76; // lev
  let euro = 1.95 * lev;

  let total = (bitcoinPrice + yuanPrice) / 1.95;
  let currentComission = total * (comission / 100);

  let result = total - currentComission;
  console.log(result.toFixed(2));
}
