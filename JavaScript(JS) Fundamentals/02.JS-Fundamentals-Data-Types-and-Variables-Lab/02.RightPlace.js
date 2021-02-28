function rightChar(word, symbol, template) {
  let changeWord = word.replace(`_`, symbol);
  if (changeWord == template) {
    console.log(`Matched`);
  } else {
    console.log(`Not Matched`);
  }
}
rightChar("Str_ng", "I", "Strong");
rightChar("Str_ng", "i", "String");
