/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const nMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        nMap.set(nums[i], (nMap.get(nums[i]) || 0) + 1);
    };
    return Array.from(nMap.entries()).filter(value => value[1] > nums.length / 2)[0][0]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
    // Boyer–Moore majority vote algorithm
    let canditate;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (counter === 0) {
            canditate = nums[i];
            counter++;
        } else {
            canditate === nums[i] ? counter++ : counter--;
        };
    };
    return canditate;
};

const nums = [2, 2, 1, 1, 1, 2, 2]
const result = majorityElement(nums);
console.log(result);

const result2 = majorityElement2(nums);
console.log(result2);