/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    const date = new Date(year, month - 1, day);
    const dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayWeek[date.getDay()];
};

const day = 18;
const month = 7;
const year = 1999;
const result = dayOfTheWeek(day, month, year);
console.log(result);