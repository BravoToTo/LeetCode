/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let highest = 0;
    for (let i = 0; i < accounts.length; i++) {
        let count = 0;
        for (let j = 0; j < accounts[0].length; j++) {
            count += accounts[i][j];
            if (count > highest) {
                highest = count;
            }
        }
        
    }
    return highest;
};

let accounts = [
    [2,8,7],
    [7,1,3],
    [1,9,5]];

console.log(maximumWealth(accounts));