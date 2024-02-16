/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    return names.map((item, i) => [item, heights[i]]).sort((a, b) => b[1] - a[1]).map(item => item[0]);
};

const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
const result = sortPeople(names, heights);
console.log("Result =", result);