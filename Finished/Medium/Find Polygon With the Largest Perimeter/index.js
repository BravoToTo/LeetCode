// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    // Polygon min 3 sides, max nums.length sides.
    nums.sort((a, b) => b - a); // O(n*log(n))
    let totalPerimeter = nums.reduce((a, b) => a + b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (totalPerimeter - nums[i] > nums[i])
            return totalPerimeter;
        totalPerimeter -= nums[i];
    };
    return -1;
};

var largestPerimeter2 = function (nums) {
    // Optimized a bit, 0.0001 faster on avg.
    // Polygon min 3 sides, max nums.length sides.
    nums.sort((a, b) => b - a); // O(n*log(n))
    let totalPerimeter = nums.reduce((a, b) => a + b);
    for (let i = 0; i < nums.length - 2; i++) {
        totalPerimeter -= nums[i];
        if (totalPerimeter > nums[i])
            return totalPerimeter + nums[i];
    };
    return -1;
};

const nums = [5, 5, 50]
const result = largestPerimeter(nums);
console.log(result);


console.log(testTime(10000, largestPerimeter, nums));
console.log(testTime(10000, largestPerimeter2, nums));

function testTime(quantity, fn, ...args) {
    let result = 0;
    for (let i = 0; i < quantity; i++) {
        const start = performance.now()
        fn(...args);
        const end = performance.now()
        result += (end - start);
    };
    return result / quantity;
};