function isUpper(char) {
    return char == char.toUpperCase();
}

function isCharacterALetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

function spinalCase(str) {
  let newStr = '';
  let sep; 

  for (let i = 0; i < str.length; i ++) {
    if (!isCharacterALetter(str[i])) {
      sep = str[i];
      break;
    }
  }

  newStr = str.replace(sep,"-");

  while (sep in str){
    newStr = str.repalce(sep, "-");
  }

  return newStr;
}
  
const ans = spinalCase('This Is Spinal Tap');
console.log(ans);







