function tickets(array, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  let result = [];
  for (const line of array) {
    let [destination, price, status] = line.split("|");
    let ticket = new Ticket(destination, price, status);
    result.push(ticket);
  }

  if (sortingCriteria === `destination`) {
    return sortedDestinations = result.sort((a, b) => a.destination.localeCompare(b.destination));
  }
  if (sortingCriteria === `price`) {
    return sortedPrice = result.sort((a, b) => a.price - b.price);
  }
  if (sortingCriteria === `status`) {
    return sortedStatus = result.sort((a, b) => a.status.localeCompare(b.status));
  }
}
console.log(tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
));

// console.log(
//   tickets(
//     [
//       "Philadelphia|94.20|available",
//       "New York City|95.99|available",
//       "New York City|95.99|sold",
//       "Boston|126.20|departed",
//     ],
//     "status"
//   )
// );

//----------------------------------------------------

// function solve(arr,criterium) {
//     let result = []
//     class Ticket {
//         constructor(destination,price,status) {
//             this.destination = destination;
//             this.price = Number(price);
//             this.status = status
//         }
//     }

//     arr.forEach(element => {
//         let [destination,price,status] = element.split("|")
//         let ticketInfo = new Ticket(destination,price,status)
//         result.push(ticketInfo)
//     });
//     //console.log(result)

//     let possibleCriteria = {
//         'destination': (a,b) => a.destination.localeCompare(b.destination),
//         'price': (a,b) => a.price - b.price,
//         'status': (a,b) => a.status.localeCompare(b.status)
//     }

//     return result.sort(possibleCriteria[criterium])
    

// }
