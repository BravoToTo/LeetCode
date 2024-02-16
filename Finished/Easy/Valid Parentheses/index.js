/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    function oppositeBracket(bracket) {
        if (bracket === '(') return ')';
        if (bracket === '[') return ']';
        if (bracket === '{') return '}';
        return '';
    };
    
    if (s.length % 2 !== 0) return false;

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];
        if (bracket === '(' || bracket === '[' || bracket === '{') stack.push(bracket);
        else if ((bracket === ')' || bracket === ']' || bracket === '}') && oppositeBracket(stack[stack.length - 1]) === bracket)
            stack.pop();
        else
            return false;
    };
    return stack.length === 0;
};

const s = "(("
const result = isValid(s);
console.log(result);