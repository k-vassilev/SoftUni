function solve(word) {
  let sum = 1;

  for (i = 0; i < word.length; i++) {
    let wordChar = word[i];

    switch (wordChar) {
      case ` `:
        sum += 1;
        break;
    }
  }
  if (sum > 10) {
    console.log(`The message is too long to be send! Has ${sum} words.`);
  } else {
    console.log(`The message was send successfully!`);
  }
}
solve("This message has exactly eleven words. One more as it's allowed!");
