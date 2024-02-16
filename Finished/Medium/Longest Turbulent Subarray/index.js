/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    let greater = 1;
    let counter = 1;
    let counter2 = 1;
    let max = counter;
    const arrLength = arr.length;
    for (let i = 0; i < arr.length - 1; i++) {
        // console.log("Counter =", counter, counter2, "|| Max =", max);
        // console.log(i, arr[i], arr[i + 1]);
        if ((max - counter) > (arrLength - i - 1) && (max - counter2) > (arrLength - i - 1)) return max;

        if ((greater * arr[i] < greater * arr[i + 1])) {
            // console.log("inside if");
            counter++;
            max = Math.max(max, counter);
        } else {
            counter = 1;
        };
        if ((-1 * greater * arr[i] > -1 * greater * arr[i + 1])) {
            // console.log("inside if2");
            counter2++;
            max = Math.max(max, counter2);
        } else {
            counter2 = 1;
        };
        greater *= -1;
    };
    return max;
};

const arr = [92, 134, 98, 4, 183, 40, 103, 67, 35, 129, 196, 115, 2, 182, 200, 166, 77, 181, 70, 84, 1, 55, 179, 80, 174, 37, 120, 116, 156, 193, 15, 60, 44, 166, 9, 141, 64, 65, 12, 36];
const result = maxTurbulenceSize(arr);
console.log("Result =", result);