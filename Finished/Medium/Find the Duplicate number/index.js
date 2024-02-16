/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.get(nums[i]) !== undefined) {
            return nums[i];
        } else {
            hash.set(nums[i], i)
        }
    }
};

let test = [1,3,4,2,2];
console.log(findDuplicate(test));