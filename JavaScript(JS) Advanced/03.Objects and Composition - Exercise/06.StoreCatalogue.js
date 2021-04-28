function storeCatalogue(input) {
  let sorted = input.sort((a, b) => a.localeCompare(b));
  let result = {}

  for (let line of sorted) {
    let key = line.charAt(0);
    if(result[key] == undefined){
      result[key] = `${line}\n`
    }else{
      result[key] += `${line}\n`
    }
  }
  for (const el in result) {
    console.log(el);
    console.log(result[el])
  }
 
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
