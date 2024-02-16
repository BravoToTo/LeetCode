/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const MAX_INT = 2147483647;
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    let array = x.toString().split('');
    let temp = array.length;
    for (let i = array.length - 1; i >= 0; i++) {
        if (array[i] === 0) {
            temp--;
        }
        if (array[i] !== 0) {
            break;
        }
    }
    array = array.slice(0, temp).reverse().join('');
    let reverseInt = parseInt(array);
    if (reverseInt > MAX_INT) {
        return 0;
    }
    if (isNegative === true) {
         return -1*reverseInt;
    } else {
        return reverseInt;
    }

};

let x = 1534236469;
console.log(reverse(x));