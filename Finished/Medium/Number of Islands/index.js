/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    function expand(row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0')
            return

        grid[row][col] = '0';

        expand(row - 1, col);
        expand(row + 1, col);
        expand(row, col - 1);
        expand(row, col + 1);
    };

    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                count++;
                expand(row, col);
            };
        };
    };
    return count;
};

const grid = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]];
const result = numIslands(grid);
console.log(result);