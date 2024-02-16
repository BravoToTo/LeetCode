/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
    const peaks = [];
    for (let i = 1; i < mountain.length - 1; i++) {
        if (mountain[i - 1] < mountain[i] && mountain[i + 1] < mountain[i]) {
            peaks.push(i);
        };
    };
    return peaks;
};

const mountain = [1, 4, 3, 8, 5]
const result = findPeaks(mountain);
console.log(result);