/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let arrowCount = 1;
    let previousEnd = Infinity;
    for (const [start, end] of points) {
        if (start <= previousEnd)
            previousEnd = Math.min(end, previousEnd);
        else {
            arrowCount++;
            previousEnd = end;
        };
    }
    return arrowCount;
};

const points = [[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]]
const result = findMinArrowShots(points);
console.log(result);