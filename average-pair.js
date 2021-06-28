// add whatever parameters you deem necessary
function averagePair(arr, targetAverage) {
    //multiple pointers

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let average = avg(arr[left], arr[right]);
        if (average === targetAverage) {
            return true;
        } else if (average > targetAverage) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

function avg() {
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }
    return sum / arguments.length;
}
module.exports = averagePair;