/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let array = [];
    for (let index = 1; index <= n; index++) {
        if (index % 3 === 0) {
            if (index % 5 === 0) {
                array[index-1] = "FizzBuzz";
            }
            else {
                array[index-1] = "Fizz";
            }
        }
        else if (index % 5 === 0) {
            array[index-1] = "Buzz";
        }
        else {
            array[index-1] = index.toString();
        }
    }
    return array;
};

console.log(fizzBuzz(3));