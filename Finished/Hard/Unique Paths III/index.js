/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    var dfs = function (grid, row, col, acc) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === -1) return 0;
        if (grid[row][col] === 2 && grid.length * grid[0].length - 1 - blockCount === -acc) return 1;

        const temp = grid[row][col];
        grid[row][col] = -1;
        const ret = dfs(grid, row, col - 1, acc - 1) + dfs(grid, row - 1, col, acc - 1) + dfs(grid, row, col + 1, acc - 1) + dfs(grid, row + 1, col, acc - 1);
        grid[row][col] = temp;
        return ret;
    };

    let blockCount = 0;
    let start = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1)
                start = [row, col];

            if (grid[row][col] === -1) blockCount++;
        };
    };

    return dfs(grid, start[0], start[1], 0);
};

const grid = [[0, 1], [2, 0]]
const result = uniquePathsIII(grid);
console.log(result);