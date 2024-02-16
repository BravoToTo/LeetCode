/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function (grid, k) {
    // Initialize 3d-memo array
    let dp = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        dp[i] = new Array(grid[0].length);
        for (let j = 0; j < grid[0].length; j++) {
            dp[i][j] = new Array(k);
            for (let z = 0; z < k; z++) {
                dp[i][j][z] = -1;
            };
        };
    };

    // Recursive function with memoization
    function pathsDivisible(grid, k, i, j, sumMod) {
        // base case
        if (i === grid.length - 1 && j === grid[i].length - 1)
            return (sumMod + grid[i][j]) % k === 0 ? 1 : 0;


        // check if state has already been computed
        if (dp[i][j][sumMod] != -1)
            return dp[i][j][sumMod];


        // calculate value with recursion and store it in dp for further function calls
        let paths = 0;
        if (i < grid.length - 1) {
            paths += pathsDivisible(grid, k, i + 1, j, (sumMod + grid[i][j]) % k) % mod;
        };
        if (j < grid[i].length - 1) {
            paths += pathsDivisible(grid, k, i, j + 1, (sumMod + grid[i][j]) % k) % mod;
        };
        dp[i][j][sumMod] = paths;
        return paths;
    };

    //Since the answer may be very large, it is asked to return the answer modulo 10^9 + 7
    const mod = (10 ** 9 + 7);
    return pathsDivisible(grid, k, 0, 0, 0) % mod;
};


const grid = [[5, 2, 4], [3, 0, 5], [0, 7, 2]];
const k = 3;


const result = numberOfPaths(grid, k);

console.log("Result =", result);
