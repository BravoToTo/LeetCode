/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let match = true;
        if (haystack[i] === needle[0]) {
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    match = false;
                    break;
                };
            }
            if (match) return i;
        };
    };
    return -1;
};

const haystack = "mississippi"
const needle = "issip"
const result = strStr(haystack, needle);
console.log(result);