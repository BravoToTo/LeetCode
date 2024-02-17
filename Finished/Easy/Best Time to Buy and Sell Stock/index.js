/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[buy])
            buy = i;
        else
            maxProfit = Math.max(maxProfit, prices[i]-prices[buy]);
    };
    return maxProfit;
};

const prices = [7,1,5,3,6,4] // Expected = 5
const result = maxProfit(prices);
console.log(result);