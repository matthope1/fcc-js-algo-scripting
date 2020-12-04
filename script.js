function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
    for (let item in collection) {
        // current object is collection[item]
        for (let key in source) {
            if (source[key] == collection[item][key]) {
                arr.push(collection[item]);
            }
        }
    }

    // Only change code above this line
    return arr;
  }
  
let ans = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); 
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]; 
console.log(ans);
  



