/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    let left = 0, count = 0, minStart = 0, maxStart = 0, minPresent = false, maxPresent = false;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] < minK || nums[right] > maxK) {
            minPresent = false;
            maxPresent = false;
            left = right + 1;
            continue;
        };

        if (nums[right] === minK) {
            minPresent = true;
            minStart = right;
        };

        if (nums[right] === maxK) {
            maxPresent = true;
            maxStart = right;
        };

        if (minPresent && maxPresent)
            count += Math.min(minStart, maxStart) - left + 1;
    };
    return count;
};

const nums = [1, 3, 5, 2, 7, 5];
const minK = 1;
const maxK = 5;
const result = countSubarrays(nums, minK, maxK);
console.log(result);