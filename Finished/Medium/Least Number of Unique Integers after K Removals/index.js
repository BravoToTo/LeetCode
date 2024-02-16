/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const arrMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        arrMap.set(arr[i], (arrMap.get(arr[i]) || 0) + 1);
    };
    const freqArr = Array.from(arrMap.entries());
    freqArr.sort((a,b) => a[1] - b[1]);
    let count = freqArr.length;
    for (let i = 0; i < freqArr.length; i++) {
        if (freqArr[i][1] <= k) {
            k -= freqArr[i][1];
            count--;
        } else {
            break;
        };
    };
    return count;
};

const arr = [9,17,11,19,4,22,27,15,24,30,45,11,17,37,37]
const k = 8;
const result = findLeastNumOfUniqueInts(arr, k);
console.log(result);