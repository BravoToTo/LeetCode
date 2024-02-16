/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (result[result.length - 1][1] >= intervals[i][0]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        };
    };
    return result;
};

const intervals = [[1, 4], [2, 3]]
const result = merge(intervals);
console.log("Result =", result);