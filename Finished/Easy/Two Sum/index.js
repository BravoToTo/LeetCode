/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
function twoSum2(nums, target) {
    nums.sort((a, b) => a - b);
    let right_pointer = nums.length - 1;
    let left_pointer = 0;
    while (left_pointer !== right_pointer) {
        console.log("Start" + left_pointer, right_pointer);
        if (nums[left_pointer] + nums[right_pointer] === target) {
            return [left_pointer, right_pointer];
        }
        else if (nums[left_pointer] + nums[right_pointer] > target) {
            right_pointer--;
        }
        else {
            left_pointer++;
        }
        console.log("End" + left_pointer, right_pointer);
    }
    return undefined;
}

let nums = [3, 2, 4];
let target = 5;

console.log(twoSum2(nums, target));
