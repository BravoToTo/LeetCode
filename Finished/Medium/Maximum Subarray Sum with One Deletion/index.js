/**
 * @param {number[]} arr
 * @return {number}
 */
function maximumSum(arr) {
    let maxSumWithoutDeletion = arr[0];
    let maxSumWithDeletion = 0;
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxSumWithDeletion = Math.max(maxSumWithoutDeletion, maxSumWithDeletion + arr[i]);
        maxSumWithoutDeletion = Math.max(maxSumWithoutDeletion + arr[i], arr[i]);
        result = Math.max(result, maxSumWithoutDeletion, maxSumWithDeletion);
    };
    return result;
};

const arr = [2, 1, -2, -5, -2]
const result = maximumSum(arr);
console.log("Result =", result);