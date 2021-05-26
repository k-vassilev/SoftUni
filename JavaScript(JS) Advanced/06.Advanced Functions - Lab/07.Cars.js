function solve(input) {
    let cars = {}
    for (const row of input) {
        let [...params] = row.split(" ");
        let command = params[0];
        if(command === "create"){
            if(params.length <= 2){
                let name = params[1]
                cars[name] = ""
            }else{
                let model = params[3];
                cars[params[1]] = model
            }
        }
    }
    console.log(cars)
}
solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
