/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let count = Array(mat.length).fill(0);
    count.fill(0,0,mat.length);
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            count[i] += mat[i][j];
        }
    }
    let ordered_count = [...count];
    ordered_count.sort(function(a, b){return a - b});
    let result = [];
    console.log(ordered_count, count);
    for (let i = 0; i < count.length; i++) {
        let index = count.indexOf(ordered_count[i]);
        result.push(index);
        count[index] = -1;
    }
    return result.slice(0, k);
};

let mat = [
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

let k = 1;
console.log(kWeakestRows(mat, k));