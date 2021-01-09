function getFibSeq(num) {
  let fibSeq = [1,1];
  let currentNum = 0;
  for (let i = 2; i < num && currentNum < num; i ++ ) {

    currentNum = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(currentNum);

  }

  return fibSeq;
}


function sumFibs(num) {

  let fibArray = getFibSeq(num);
  console.log(fibArray);

  let sum = 0;

  for (let i = 0; i < fibArray.length; i ++ ) {
    if (parseInt(fibArray[i]) % 2 !== 0 && parseInt(fibArray[i]) <= num) {
      sum = sum + parseInt(fibArray[i]);
    }
  }
  
  return sum;
}

let ans = sumFibs(3);

console.log(ans);