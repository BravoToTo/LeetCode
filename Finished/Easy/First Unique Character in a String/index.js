/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const charObj = {};
    for (let i = 0; i < s.length; i++) {
        if (charObj.hasOwnProperty(s[i]))
            charObj[s[i]] = -1;
        else
            charObj[s[i]] = i;
    };
    const result = Object.entries(charObj).filter(value => {
        if (value[1] !== -1)
            return value;
    });
    return result.length !== 0 ? result[0][1] : -1;
};

const s = "aabb";
const result = firstUniqChar(s);
console.log("Result =", result);