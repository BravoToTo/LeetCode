/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const nMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        nMap.set(arr[i], (nMap.get(arr[i]) || 0) + 1);
    };
    let largest = -1;
    nMap.forEach((value, key) => {
        if (value === key) {
            largest = Math.max(largest, key);
        };
    });
    return largest;
};

const arr = [2, 2, 3, 4];
const result = findLucky(arr);
console.log("Result =", result);