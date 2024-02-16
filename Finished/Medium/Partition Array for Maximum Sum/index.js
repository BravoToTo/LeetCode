/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    let maxPartition;
    const dp = Array(arr.length + 1).fill(0);
    for (let i = 1; i <= arr.length; i++) {
        maxPartition = 0;
        for (let j = 1; ((j <= k) && (i - j) >= 0); j++) {
            maxPartition = Math.max(maxPartition, arr[i - j]);
            dp[i] = Math.max(dp[i], dp[i - j] + maxPartition * j);
        };
    };
    return dp[arr.length];
};

const arr = [1, 15, 7, 9, 2, 5, 10]; //[15,15,15,9,10,10,10]    
const k = 3;
const result = maxSumAfterPartitioning(arr, k);
console.log("Result =", result);