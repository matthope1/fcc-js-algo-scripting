function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let firstLetter = str[0];
  let len = str.length;

  let startingPoint = alphabet.search(firstLetter);

  for (let i = startingPoint; i < startingPoint + len + 1; i ++) {
    if (! str.includes(alphabet[i])){
      return alphabet[i];
    }
  }
  return undefined;
}

let ans = fearNotLetter("stvwx");
console.log(ans); 
;