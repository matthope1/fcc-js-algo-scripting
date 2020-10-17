
function destroyer(arr) {

    for (let index = 1; index < arguments.length; index++) {
      arr = arr.filter(num => num != arguments[index]);
    }

    return arr;
}
  
const newArr = destroyer([1, 2, 3, 1, 2, 3], 2, 3);