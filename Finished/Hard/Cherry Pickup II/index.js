/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    function getCherry(i, j1, j2) {
        // Define grid limits / base case.
        if (i === grid.length || j1 < 0 || j1 >= grid[i].length || j2 < 0 || j2 >= grid[i].length) return 0;

        // Check memo
        if (dp[i][j1][j2] !== -1) return dp[i][j1][j2];

        // Handle case where both robots overlap.
        let repeat = 0;
        if (j1 === j2) repeat = grid[i][j1];

        // Check all possible next configurations and set max.
        let max = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                max = Math.max(max, getCherry(i + 1, j1 + x, j2 + y));
            };
        };

        //Store result at memo array.
        dp[i][j1][j2] = grid[i][j1] + grid[i][j2] + max - repeat;
        return dp[i][j1][j2];
    };

    // dp[i][j][k] => Max cherries collected starting at row i and cols j,k for robot1 and robot2 respectively.
    const dp = new Array(grid.length).fill(-1).map(value => new Array(grid[0].length).fill(-1).map(value => new Array(grid[0].length).fill(-1)));
    return getCherry(0, 0, grid[0].length - 1);
};

const grid = [[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]];
const grid2 = [[1, 2], [3, 5]];
const grid3 = [[4, 10, 8, 5, 7, 10, 4, 1, 1], [2, 2, 5, 2, 9, 2, 0, 8, 10], [7, 8, 3, 1, 8, 0, 1, 8, 4], [10, 5, 5, 6, 3, 1, 0, 4, 2], [0, 5, 6, 9, 5, 9, 4, 0, 3], [9, 10, 1, 7, 10, 4, 0, 3, 10], [9, 10, 10, 5, 6, 3, 8, 9, 3], [0, 10, 3, 2, 5, 6, 2, 9, 1], [6, 3, 4, 0, 7, 1, 5, 0, 7], [8, 4, 3, 8, 10, 1, 8, 10, 2]];
const result = cherryPickup(grid3);
console.log(result);