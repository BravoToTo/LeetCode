/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const stack = [];
    let removed = 0;
    for (let i = 0; i < num.length; i++) {
        while (stack.length && num[i] < stack[stack.length - 1] && removed < k) {
            if (num[i] < stack[stack.length - 1]) {
                stack.pop();
                removed++;
            };
        };
        stack.push(num[i]);
    };
    
    while (removed < k) {
        stack.pop();
        removed++;
    };

    console.log(stack);
    console.log(stack.join('').replace(/^0+/g, '') || '0');

    return stack.join('').replace(/^0+/g, '');
    return BigInt(stack.join('')).toString();
};

const num = "10200";
const k = 1;
const result = removeKdigits(num, k);
console.log(result);