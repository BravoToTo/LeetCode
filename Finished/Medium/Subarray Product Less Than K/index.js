/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0;

    let left = 0, right = 0, counter = 0, acc = 1;
    while (right < nums.length) {
        acc *= nums[right]; // ACCUMULATE
        while (acc >= k) acc /= nums[left++]; // SHRINK
        counter += right - left + 1; // COUNT
        right++; // EXPAND
    }
    return counter;
};

var numSubarrayProductLessThanK2 = function (nums, k) {
    let left = 0, right = 0, counter = 0, acc = 1;
    while ( right < nums.length) {
        let i = left;
        acc = 1;
        while (i <= right && acc * nums[i] < k) {
            acc *= nums[i];
            i++;
        }
        if (i > right) {
            counter += right - left + 1;
            right++
        }
        else {
            left++
        }
    }
    return counter;
};

// Cont. Subarrays = n (n+1) / 2
// n = 4 --> cont.subarrays = 10? Yes
// n = 3 --> cont.subarrays = 6? Yes

const nums = [10, 5, 2, 6];
const k = 100;

const result = numSubarrayProductLessThanK(nums, k);
console.log(result);

const result2 = numSubarrayProductLessThanK2(nums, k);
console.log(result2);