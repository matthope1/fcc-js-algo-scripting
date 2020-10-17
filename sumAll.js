
function sumAll(arr) {

    let start = arr[0];
    let end = arr[1];
    let sum = 0;

    // if order is decreasing then swap start and end 
    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let index = start; index <= end; index++) {
        sum += index;
    }

    return sum;
}

const res = sumAll([4, 1])


console.log(res);
