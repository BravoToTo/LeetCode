/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    // O(n) time, O(1) Space
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) result.push(Math.abs(nums[i]))
        else nums[Math.abs(nums[i]) - 1] *= -1;
    };
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates2 = function (nums) {
    const freq = new Map();
    const result = [];
    for (let i = 0; i < nums.length; i++)
        freq.has(nums[i]) ? result.push(nums[i]) : freq.set(nums[i], 1);

    return result;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const result = findDuplicates(nums);
console.log(result);