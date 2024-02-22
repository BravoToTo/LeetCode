/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n === 1) return 1;
    const adjacencyMap = new Map();
    for (let i = 0; i < trust.length; i++) {
        // Person giving trust
        let adjacency = adjacencyMap.get(trust[i][0]) || [0, 0];
        adjacency[0]++;
        adjacencyMap.set(trust[i][0], adjacency);

        // Person receiving trust
        adjacency = adjacencyMap.get(trust[i][1]) || [0, 0];
        adjacency[1]++;
        adjacencyMap.set(trust[i][1], adjacency);
    };

    for (const [key, value] of adjacencyMap.entries())
        if (value[0] === 0 && value[1] === n - 1) return key;

    return -1;
};

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge2 = function (n, trust) {
    if (n === 1) return 1;
    const adjacencyMap = new Map();
    for (let i = 0; i < trust.length; i++) {
        // Person giving trust
        adjacencyMap.set(trust[i][0], (adjacencyMap.get(trust[i][0]) || 0) - 1);

        // Person receiving trust
        adjacencyMap.set(trust[i][1], (adjacencyMap.get(trust[i][1]) || 0) + 1);
    };

    for (const [key, value] of adjacencyMap.entries())
        if (value === n - 1) return key;

    return -1;
};

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge3 = function (n, trust) {
    const peopleTrust = new Array(n + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        // Person giving trust
        peopleTrust[trust[i][0]] -= 1;

        // Person receiving trust
        peopleTrust[trust[i][1]] += 1;
    };

    for (let i = 1; i < peopleTrust.length; i++)
        if (peopleTrust[i] === n - 1) return i;

    return -1;
};

const n = 3;
const trust = [[1, 3], [2, 3]];
const result = findJudge(n, trust);
console.log(result);

const result2 = findJudge2(n, trust);
console.log(result2);

const result3 = findJudge3(n, trust);
console.log(result3);