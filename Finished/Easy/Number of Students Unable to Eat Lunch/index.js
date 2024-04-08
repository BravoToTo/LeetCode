/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let count = 0;
    while (students.length > 0 && count < students.length) {
        if (students[0] === sandwiches[0]) {
            count = 0;
            students.shift();
            sandwiches.shift();
        } else {
            count++;
            students.push(students.shift());
        }
    };
    return count;
};

const students = [1, 1, 1, 0, 0, 1]
const sandwiches = [1, 0, 0, 0, 1, 1]
const result = countStudents(students, sandwiches);
console.log(result);