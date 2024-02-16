/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const sMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sortedWord = strs[i].split('').sort().join('');
        if (sMap.has(sortedWord)) {
            sMap.get(sortedWord).push(strs[i]);
        } else
            sMap.set(sortedWord, [strs[i]]);
    };
    // return Array.from(sMap.values()); // Other(Prettier) way
    const result = [];
    sMap.forEach(value => {
        result.push(value)
    });
    return result;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log("Result =", result);