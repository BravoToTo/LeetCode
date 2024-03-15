/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = new Array(nums.length).fill(1);

    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= product;
        product *= nums[i];
    };

    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];    
    };
    
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {
    const leftProducts = new Array(nums.length).fill(1);
    const rightProducts = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++)
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];

    for (let i = nums.length - 2; i >= 0; i--)
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];


    console.log(leftProducts);
    console.log(rightProducts);
    const result = [];
    for (let i = 0; i < nums.length; i++)
        result.push(leftProducts[i] * rightProducts[i]);

    return result;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);