function solve(...params) {
  
  let obj = {
      string: 0,
      number: 0,
      function: 0,
      object: 0
  }
  while (params.length > 0) {
    let currentParam = params[0];
    let type = typeof currentParam;
    let value = currentParam.toString();
    
    
    
    if (type === "string") {
      obj.string++;
      console.log(`${type}: ${value}`);
    }
    if (type === "number") {
      obj.number++;
      console.log(`${type}: ${value}`);
    }
    if (type === "function") {
      obj.function++;
      console.log(`${type}: ${value}`);
    }
    if(type === "object"){
        obj.object++;
        console.log(`${type}: ${currentParam}`);
    }
    params.shift();
  }
  objArr = Object.entries(obj);
  let sorted = objArr.sort((a,b) => b[1] - a[1])
  for (const key in sorted) {
      if(sorted[key][1] !== 0){
          let val = sorted[key][1];
          let name = sorted[key][0]
        console.log(`${name} = ${val}`);
      }
     
  }
  
}
solve("cat", 42, function () { console.log("Hello world!"); });
//solve({ name: 'bob'}, 3.333, 9.999)
