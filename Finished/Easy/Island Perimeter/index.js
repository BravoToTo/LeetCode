/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if ((j > 0 && grid[i][j - 1] === 0) || j === 0) perimeter++;
                if ((i > 0 && grid[i - 1][j] === 0) || i === 0) perimeter++;
                if ((j < grid[i].length - 1 && grid[i][j + 1] === 0) || j === grid[i].length - 1) perimeter++;
                if ((i < grid.length - 1 && grid[i + 1][j] === 0) || i === grid.length - 1) perimeter++;
            };
        };
    };
    return perimeter;
};

const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
const result = islandPerimeter(grid);
console.log(result);