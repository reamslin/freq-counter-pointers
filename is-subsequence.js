// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < str1.length && pointer2 < str2.length) {
        //if they are the same character increase both pointers
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
            pointer2++;
        } else {
            //if they are not, increase pointer 2
            pointer2++;
        }
    }
    if (pointer1 === str1.length) {
        return true;
    } else {
        return false;
    }
}

module.exports = isSubsequence;
