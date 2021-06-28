// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
    if (ltrs.length < msg.length) return false;
    let msgCharMap = frequencyCounter(msg);
    let ltrsCharMap = frequencyCounter(ltrs);
    if (ltrsCharMap.size < msgCharMap.size) return false;
    for (let [char, count] of msgCharMap) {
        if (!(ltrsCharMap.get(char) >= count)) return false;
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

module.exports = constructNote;
