// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    s = s.trimStart();
    if (s.length === 0) {return 0}

    let isPositive = true;
    if (s[0] === "-") {
        isPositive = false;
        s = s.slice(1,s.length);
    } else if (s[0] === "+") {
        s = s.slice(1,s.length);
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/\d/) === null) {
            s = s.slice(0, i);
            break;
        }
    }
    let integer = 1*s;
    const MAX_INT = 2147483647;
    if (integer > MAX_INT) {
        integer = MAX_INT;
        if (isPositive === false) {
            integer++;
        }
    }
    if (isPositive) {
        return integer;
    } else {
        return -1*integer;
    }

};

let s = "244";
console.log(myAtoi(s));