/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let minLength = 200;
    strs.forEach(element => {
        if (element.length === 0) {
            return "";
        }
        minLength = Math.min(minLength, element.length);
    });
    let count = 0;
    while (true) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[0][count] !== strs[i][count]) {
                return strs[0].slice(0, count);
            }
        }
        if (count === minLength) {
            return strs[0].slice(0, count);
        } else {
            count++;
        }
    }
    
};

let strs = ["flowe","flower","flower"];
console.log(longestCommonPrefix(strs));