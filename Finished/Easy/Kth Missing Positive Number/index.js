/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let counter = 0;
    let integer = 1;
    for (let i = 0; i < arr.length; i++) {
        while (integer < arr[i]) {
            counter++;
            if (counter === k) {
                return integer;
            };
            integer++;
        };
        integer++;
    };
    while (counter < k) {
        integer++;
        counter++;
    };
    return integer - 1;
};

const arr = [1, 2, 3, 4]; // [1,3,5,8,9,10]
const k = 2;
findKthPositive(arr, k);