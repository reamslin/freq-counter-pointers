// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        //is right positive?
        if (arr[right] > 0) {
            //swap and move left pointer
            let temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left++;
        } else {
            //move right pointer
            right--;
        }
    }

    //return arr
    return arr;
}

module.exports = separatePositive;
