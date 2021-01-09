function isPrime(num) {

    for (let i = 2; i < num ; i ++ ) {
      if ( num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  
  function sumPrimes(num) {
    
    let sum = 0;
  
    for (let i = 2; i <= num; i ++ ) {
      if (isPrime(i)) {
        sum = sum + i;
      }
    }
  
    return sum;
  }
  
  let ans = sumPrimes(977);
  
  console.log(ans);