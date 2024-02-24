/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const flightMap = new Map();
    for (let i = 0; i < flights.length; i++) {
        const neighbors = flightMap.get(flights[i][0]) || [];
        neighbors.push([flights[i][1], flights[i][2]]);
        flightMap.set(flights[i][0], neighbors);
    };

    const queue = [[src, 0]];
    const accumulatedWeight = new Array(n).fill(Number.MAX_VALUE);
    accumulatedWeight[src] = 0;
    k++;
    while (k-- > 0 && queue.length > 0) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const [currNode, currWeight] = queue.shift();

            if (!flightMap.has(currNode)) continue;

            // Iterate through all neighbors.
            for (const [neighbor, weight] of flightMap.get(currNode)) {
                const newWeight = currWeight + weight;
                if (newWeight < accumulatedWeight[neighbor]) {
                    accumulatedWeight[neighbor] = newWeight;
                    queue.push([neighbor, accumulatedWeight[neighbor]]);
                };
            };
        }
    };
    return accumulatedWeight[dst] === Number.MAX_VALUE ? -1 : accumulatedWeight[dst];
};

const n = 11;
const flights = [[0, 3, 3], [3, 4, 3], [4, 1, 3], [0, 5, 1], [5, 1, 100], [0, 6, 2], [6, 1, 100], [0, 7, 1], [7, 8, 1], [8, 9, 1], [9, 1, 1], [1, 10, 1], [10, 2, 1], [1, 2, 100]]
const src = 0;
const dst = 2;
const k = 4;
const result = findCheapestPrice(n, flights, src, dst, k);
console.log(result);