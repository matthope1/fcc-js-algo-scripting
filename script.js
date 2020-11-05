
const vowels = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
  // use spread str into an array

  // get first letter

  const first_letter = str[0];
  const strLen = str.length;
  
  // check if first letter is consonant
  if (!vowels.includes(first_letter)) {
    // check for consonant cluster

    // if there's a consonant cluster
    // find out where it ends to get all letters in cluster
    let i = 0;
    for (i; i < strLen; i++) {
      // find index of first item that is a vowel
      if (vowels.includes(str[i])) {
          break; 
      }
    }
    
    let cluster = str.split(0,i);
    let endOfString = str.split(i,strLen);

    // move the letter or cluster to the end of the word

    // add ay to the end of the word
  }
  else {
    // if first letter is vowel
    // add way to the end of the word
  }
  
  return str;
}

translatePigLatin("glove");
