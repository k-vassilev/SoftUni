function solve(input) {
  let standardTickets = 0;
  let studentTickets = 0;
  let kidsTickets = 0;
  let index = 0;

  let inputLine = input[index++];

  while (inputLine !== `Finish`) {
    let movieName = inputLine;
    let ticketsCount = Number(input[index++]);
    let ticketsAvailable = ticketsCount;

    let ticketType = input[index++];
    while (ticketType !== `End`) {
      if (ticketType === `standard`) {
        standardTickets++;
      } else if (ticketType === `kid`) {
        kidsTickets++;
      } else {
        studentTickets++;
      }

      ticketsAvailable--;
      if (ticketsAvailable === 0) {
        break;
      }
      ticketType = input[index++];
    }
    let boughtTickets = ticketsCount - ticketsAvailable;
    let percentage = (boughtTickets / ticketsCount) * 100;
    console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);

    inputLine = input[index++];
  }
  let totalTickets = studentTickets + standardTickets + kidsTickets;
  let studentPercent = (studentTickets / totalTickets) * 100;
  let standardPercent = (standardTickets / totalTickets) * 100;
  let kidsPercent = (kidsTickets / totalTickets) * 100;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${studentPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);
}
