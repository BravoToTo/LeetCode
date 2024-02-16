/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    const words = text.match(/\w+/g);
    words.sort((a, b) => a.length - b.length);
    const sentence = words.join(' ').toLowerCase();
    return sentence.slice(0, 1).toUpperCase() + sentence.slice(1);
};

const text = "Leetcode is cool";
const result = arrangeWords(text);
console.log(result);