// add whatever parameters you deem necessary
function countPairs(arr, targetSum) {
    let possibleMatches = new Set();
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (possibleMatches.has(arr[i])) {
            count++;
        } else {
            possibleMatches.add(targetSum - arr[i]);
        }
    }
    return count;
}

module.exports = countPairs;
