function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
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
    
    let cluster = str.slice(0,i);
    let endOfString = str.slice(i,strLen);

    // move the letter or cluster to the end of the word
    // add ay to the end of the word
    str = endOfString + cluster + "ay";

  }
  else {
    // if first letter is vowel
    // add way to the end of the word
    str = str + "way";
  }
  
  return str;
}


function test() {
  console.log("This should be aliforniacay:");
  const ans = translatePigLatin("california");
  // aliforniacay
  console.log("This should be aragraphspay:");
  translatePigLatin("paragraphs");
  // aragraphspay
  console.log("This should be oveglay:");
  translatePigLatin("glove");
  // oveglay
  console.log("This should be algorithmway:");
  translatePigLatin("algorithm");
  //algorithmway
  console.log("This should be eightway:");
  translatePigLatin("eight");
  // eightway
  console.log("This should be artzschway:");
  translatePigLatin("schwartz");
  // artzschway
  console.log("This should be rhythmay:");
  translatePigLatin("rhythm");
  // rhythmay
}


test();
