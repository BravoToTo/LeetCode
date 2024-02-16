/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    const distinctAverages = new Set();
    while (nums.length > 0) {
        distinctAverages.add((nums[nums.length - 1] + nums[0]) / 2);
        nums.shift();
        nums.pop();
    };
    return distinctAverages.size;
};

const nums = [4, 1, 4, 0, 3, 5];
console.log(distinctAverages(nums));