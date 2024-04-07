/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const stack = [];
    const starStack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(i);
        else if (s[i] === '*') starStack.push(i);
        else {
            if (stack.length === 0 && starStack.length === 0) return false;
            else if (stack.length > 0) stack.pop();
            else starStack.pop();
        };
    };

    let i = stack.length - 1;
    let j = starStack.length - 1;

    while (stack[i] < starStack[j]) {
        stack.pop();
        starStack.pop();
        i--;
        j--;
    };

    return stack.length === 0 ? true : false;
};

const s = "((*)";
const result = checkValidString(s);
console.log(result);