// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    const str1Freq = frequencyCounter(str1);
    const str2Freq = frequencyCounter(str2);

    if (str1Freq.size !== str2Freq.size) return false;

    for (let [char, count] of str1Freq) {
        if (count !== str2Freq.get(char)) return false;
    }
    return true;
}

function frequencyCounter(str) {
    let charMap = new Map();
    for (let char of str) {
        charMap.set(char, charMap.get(char) + 1 || 1);
    }
    return charMap;
}

module.exports = sameFrequency;