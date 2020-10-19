function spinalCase(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i ++) {
    if(str[i] == ' '){
      newStr += '-';
    }
    else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}
  
const ans = spinalCase('This Is Spinal Tap');

console.log(ans);

