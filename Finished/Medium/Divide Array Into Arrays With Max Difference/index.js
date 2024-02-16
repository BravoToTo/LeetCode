/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 1] - nums[i] <= k && nums[i + 2] - nums[i] <= k && nums[i + 2] - nums[i + 1] <= k) {
            result.push([nums[i], nums[i + 1], nums[i + 2]]);
        } else {
            return [];
        }
    };
    return result;
};

const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1];
const k = 2;
const result = divideArray(nums, k);
console.log(result);