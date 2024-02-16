/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    function checkRepeat(substr) {
        const map = new Set();
        for (let i = 0; i < substr.length; i++) {
            const char = substr[i];
            if (!map.has(char)) {
                map.add(char);
            } else {
                return true;
            };
        };
        return false;
    };

    if (s.length === 0)
        return 0;

    //Init sliding window to check every possible substr.
    let window = s.length;
    while (window > 1) {
        for (let i = 0; i <= s.length - window; i++) {
            if (!checkRepeat(s.slice(i, i + window)))
                return window;
        };
        window--;
    };
    return 1;
};

const s = "abcabcbb";
const result = lengthOfLongestSubstring(s);
console.log(result);