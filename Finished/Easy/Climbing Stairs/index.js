/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // Tabulation
    const dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    };
    return dp[n];
};

const n = 2;
const result = climbStairs(n);
console.log("Result =", result);