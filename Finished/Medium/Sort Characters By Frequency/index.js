/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const frequency = {}
    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    };
    const freqArr = Object.entries(frequency);
    freqArr.sort((a, b) => b[1] - a[1]);
    return freqArr.map(value => value[0].repeat(value[1])).join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort2 = function (s) {
    const frequency = new Map()
    for (let i = 0; i < s.length; i++) {
        frequency.set(s[i], (frequency.get(s[i]) || 0) + 1);
    };
    const freqArr = Array.from(frequency.entries());
    freqArr.sort((a, b) => b[1] - a[1]);
    return freqArr.map(value => value[0].repeat(value[1])).join('');
};

const s = "cccaaa";
const result = frequencySort2(s);
console.log(result);