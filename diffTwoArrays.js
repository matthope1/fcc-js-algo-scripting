
function diffArray(arr1, arr2) {
    var newArr = [];

    for (let index = 0; index < arr1.length; index++) {
        if (!arr2.includes(arr1[index])) {
            newArr.push(arr1[index]);
        }
    }

    for (let index = 0; index < arr2.length; index++) {
        if (!arr1.includes(arr2[index])) {
            newArr.push(arr2[index]);
        }
    }

    return newArr;
}

const arr = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

console.table(arr);
