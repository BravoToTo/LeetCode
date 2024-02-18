/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // Count will keep track of the number of elements after "removing" all duplicates.
    let count = 0;
    // Loop through the entire array.
    for (let i = 0; i < nums.length; i++) {
        // If nums[i] is not equal to nums[i + 1], we send it to our left pointer whilst also increasing it.
        // If nums[i] is equal to nums[i + 1], we ignore it, it will get re-written at the next valid number.
        if (nums[i] !== nums[i + 1])
            nums[count++] = nums[i];
    };
    return count;
};

const nums = [-1, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(nums);
const k = removeDuplicates(nums);
console.log(nums.slice(0, k));