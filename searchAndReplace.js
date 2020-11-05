function myReplace(str, before, after) {
  // check if first letter of before string is caps

  const firstLetter = before[0];

  const upperCaseLetter = firstLetter.toUpperCase() === firstLetter;

  if (upperCaseLetter) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  else {
    after = after.toLowerCase();
  }

  str = str.replace(before,after);
  return str;
}
  
const res = myReplace("I think we should look up there", "up", "Down"); 

console.log(res);