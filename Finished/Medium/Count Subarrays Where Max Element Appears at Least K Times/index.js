/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let maxElement = 0;
    for (let i = 0; i < nums.length; i++)
        maxElement = Math.max(maxElement, nums[i]);

    let left = 0, right = 0, count = 0, elemCount = 0, n = nums.length;
    while (right < n) {
        if (nums[right] === maxElement) elemCount++;
        while (elemCount >= k) {
            count += n - right;
            if (nums[left++] === maxElement) elemCount--;
        };
        right++;
    };
    return count;
};

const k = 2;
const nums = [1, 3, 2, 3, 3];
const result = countSubarrays(nums, k);
console.log(result);