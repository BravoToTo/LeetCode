/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function (nums) {
    nums.sort((a, b) => a - b);
    let counter = 0;
    let ptr = 1;
    for (let i = 0; i < nums.length; i++) {
        while (nums[ptr] <= nums[i] && ptr < nums.length) {
            ptr++;
        };
        if (ptr < nums.length) {
            ptr++;
            counter++;
        };
    };
    return counter;
};

const nums = [43, 68, 8, 100];

const result = maximizeGreatness(nums);
console.log(result);