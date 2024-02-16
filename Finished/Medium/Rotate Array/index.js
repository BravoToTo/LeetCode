// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // get shifted array
    const copy = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        copy[(i + k) % nums.length] = nums[i];
    };

    // in-place
    for (let i = 0; i < nums.length; i++) {
        nums[i] = copy[i];
    };
};

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3;
rotate(nums, k);
console.log(nums)
