/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    const numberOfDevices = [];
    bank.forEach(row => {
        const match = row.match(/1/g);
        if (match) numberOfDevices.push(match.length);
    });
    let count = 0;
    for (let i = 0; i < numberOfDevices.length - 1; i++) {
        count += numberOfDevices[i] * numberOfDevices[i + 1];
    };
    return count;
};

var fasterNumberOfBeams2 = function (bank) {
    let countNow = 0, countBefore = 0, totalCount = 0;
    for (let i = 0; i < bank.length; i++) {
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') countNow++;
        };
        if (countNow === 0) continue;
        totalCount += countBefore * countNow;
        countBefore = countNow;
        countNow = 0;
    };
    return totalCount;
};

const bank = ["011001", "000000", "010100", "001000"];
const result = fasterNumberOfBeams2(bank);
console.log(result);