
const vowels = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
    // use spread str into an array
    [...str].forEach(letter => {
      console.log(letter);
    });
  return str;
}

translatePigLatin("consonant");
