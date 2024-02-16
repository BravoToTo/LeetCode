/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1)
        return 0;

    if (nums[0] > nums[1])
        return 0;

    if (nums[nums.length - 1] > nums[nums.length - 2])
        return nums.length - 1;

    let i = 1;
    while (i < nums.length - 1) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])
            return i;
        nums[i] > nums[i + 1] ? i += 2 : i++;
    };
    return 0;
};

const nums = [1, 2, 3, 1];
const result = findPeakElement(nums);
console.log(result);