/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let maxNonRep = 0;
    const charsInWindow = new Map();
    for (let i = 0; i < s.length; i++) {
        if (charsInWindow.has(s[i])) {
            const repeat = charsInWindow.get(s[i]);
            for (let j = start; j <= repeat; j++) {
                charsInWindow.delete(s[j]);
            };
            charsInWindow.set(s[i], i);
            maxNonRep = Math.max(maxNonRep, i - start);
            start = repeat + 1;
        } else {
            charsInWindow.set(s[i], i);
            maxNonRep = Math.max(maxNonRep, i - start + 1);
        };
    };
    return maxNonRep;
};


const s = "aabb"
//         012
const result = lengthOfLongestSubstring(s);
console.log(result);