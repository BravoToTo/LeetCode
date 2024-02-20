/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let missing = nums.length
    for (let i = 0; i < nums.length; i++)
        missing = missing ^ i ^ nums[i]; // XOR property -> a ^ b ^ b = a

    return missing;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function (nums) {
    let expectedSum = (nums.length) * (nums.length + 1) / 2
    for (let i = 0; i < nums.length; i++) {
        expectedSum -= nums[i];
    };
    return expectedSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber3 = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
        if (i !== nums[i]) {
            return i;
        }
    }
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
const result = missingNumber(nums);
console.log(result);

const result2 = missingNumber2(nums);
console.log(result2);

const result3 = missingNumber3(nums);
console.log(result3);