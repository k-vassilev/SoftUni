function birthday(rent){
    let cake = Number(rent) * 0.2;
    let drinks = cake - (0.45 * cake);
    let animator = (1 / 3) * rent;
    let total = Number(rent) + Number(drinks) + Number(animator) + Number(cake);

    console.log(total)
}

birthday("2250")
