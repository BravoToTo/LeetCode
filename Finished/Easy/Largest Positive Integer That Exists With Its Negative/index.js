/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let right = nums.length - 1;
    let result = -1;
    for (let i = 0; i <= right; i++) {
        while (i < right) {
            if (nums[i] === -nums[right]) {
                result = Math.max(result, Math.abs(nums[i]));
                break;
            }
            right--;
        };
        right = nums.length - 1;
    };
    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK2 = function (nums) {
    const numSet = new Set();
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(-nums[i]))
            result = Math.max(result, Math.abs(nums[i]));
        numSet.add(nums[i]);
    };
    return result;
};

const nums = [-1, 2, -3, 3];

const result = findMaxK(nums);
console.log("Result =", result);

const result2 = findMaxK2(nums);
console.log("Result2 =", result2);