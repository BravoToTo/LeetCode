/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    if (s === t) return s;

    const tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    };
    const charTable = new Map();

    let left = 0, right = 0;
    let allComply = false;
    let minWindow = s;
    while (right < s.length || allComply) {
        if (tMap.has(s[right]) && !allComply) {
            charTable.set(s[right], (charTable.get(s[right]) || 0) + 1);
        };

        //Check if all chars are present
        allComply = true;
        if (charTable.size === tMap.size) {
            for (const [key, value] of charTable) {
                if (value < tMap.get(key)) {
                    allComply = false;
                    break;
                };
            };
        } else {
            allComply = false;
        };

        if (allComply) {
            if (tMap.has(s[left])) {
                //Found one minimum
                if (minWindow.length > (right - left))
                    minWindow = s.slice(left, right + 1);
                const count = charTable.get(s[left]);
                count > 1 ? charTable.set(s[left], charTable.get(s[left]) - 1) : charTable.delete(s[left]);

            };
            left++;
        } else {
            if (right < s.length) {
                right++;
            };
        }
    };
    return (left === 0 && right === s.length) ? "" : minWindow;
};

const s = "ADOBECODEBANC";
const t = "ABC"
const result = minWindow(s, t);
console.log("Result =", result);