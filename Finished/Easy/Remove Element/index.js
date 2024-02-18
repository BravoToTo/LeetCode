/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // Count will keep track of the number of elements after "removing" all 'val' elements.
    let count = 0;
    // Loop through the entire array.
    for (let i = 0; i < nums.length; i++) {
        // If nums[i] is not equal to val, we send it to our left pointer whilst also increasing it.
        // If nums[i] is equal to val, we ignore it, it will get re-written at the next valid number.
        if (nums[i] !== val)
            nums[count++] = nums[i];
    };
    return count;
};

const nums = [0, 4, 4, 0, 4, 4, 4, 0, 2]
const val = 4;
removeElement(nums, val);
console.log(nums);