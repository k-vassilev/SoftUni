function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    let input = document.querySelector(`textarea`).value;
    let initialArray = input.split('"');
    let restaurantsArray = [];
    let result = document.querySelector(`#bestRestaurant`);

    for (let i = 1; i < initialArray.length; i++) {
      if (i % 2 !== 0) {
        let restaurant = initialArray[i];
        restaurantsArray.push(restaurant);
      }
    }
    let restaurantsObj = {};
    for (let i = 0; i < restaurantsArray.length; i++) {
      let restaurant = restaurantsArray[i];
      let splitResName = restaurant.split(` - `);
      let restaurantName = splitResName[0]; // restaurant Name
      if (!restaurantsObj.hasOwnProperty(restaurantName)) {
        restaurantsObj[restaurantName] = {};
      }
      let workersArray = splitResName[1].split(`, `);
      for (let worker of workersArray) {
        let workArr = worker.split(` `);
        let workerName = workArr[0];
        let workerSalary = workArr[1];
        restaurantsObj[restaurantName][workerName] = Number(workerSalary);
      }
    }

    for (let i = 0; i < restaurantsArray.length; i++) {
      let currentCounter = 0;
      let currentSum = 0;
      let currentRestaurant = restaurantsObj[Object.keys(restaurantsObj)[i]];
      let restaurantName = Object.keys(restaurantsObj)[i];
      console.log(restaurantName);
      let maxSalary = 0;
      for (const key in currentRestaurant) {
        currentCounter++;
      }
      for (let i = 0; i < currentCounter; i++) {
        currentSum += Number(
          currentRestaurant[Object.keys(currentRestaurant)[i]]
        );
        let currentSalary = Number(
          currentRestaurant[Object.keys(currentRestaurant)[i]]
        );
        if (currentSalary > maxSalary) {
          maxSalary = currentSalary;
        }
      }
      let currentAvg = currentSum / currentCounter;
      restaurantsObj[restaurantName].avgSal = Number(currentAvg.toFixed(2));
      restaurantsObj[restaurantName].maxSal = Number(maxSalary);
    }
    console.log(restaurantsObj);
  }
}
