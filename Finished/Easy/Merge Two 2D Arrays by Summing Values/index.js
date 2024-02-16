
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const arrayMap = new Map();
    nums1.forEach(num => {
        arrayMap.set(num[0], num[1]);
    });
    nums2.forEach(num => {
        if (arrayMap.has(num[0])) {
            arrayMap.set(num[0], arrayMap.get(num[0]) + num[1]);
        } else {
            arrayMap.set(num[0], num[1]);
        }
    });
    const merged = [];
    for (const array of arrayMap) {
        merged.push(array);
    };
    return merged.sort((a, b) => a[0] - b[0]);
};

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays2 = function (nums1, nums2) {
    let idx1 = 0;
    let idx2 = 0;
    const merged = [];
    while (idx1 < nums1.length || idx2 < nums2.length) {
        if (idx1 === nums1.length) {
            merged.push([nums2[idx2][0], nums2[idx2][1]]);
            idx2++;
        } else if (idx2 === nums2.length) {
            merged.push([nums1[idx1][0], nums1[idx1][1]]);
            idx1++;
        } else if (nums1[idx1][0] === nums2[idx2][0]) {
            merged.push([nums1[idx1][0], nums1[idx1][1] + nums2[idx2][1]]);
            idx1++;
            idx2++;
        } else if (nums1[idx1][0] < nums2[idx2][0]) {
            merged.push([nums1[idx1][0], nums1[idx1][1]]);
            idx1++;
        } else if (nums1[idx1][0] > nums2[idx2][0]) {
            merged.push([nums2[idx2][0], nums2[idx2][1]]);
            idx2++;
        };
    };
    return merged;
};

const nums1 = [[2, 4], [3, 6], [5, 5]]
const nums2 = [[1, 3], [4, 3]]
const result = mergeArrays(nums1, nums2);
console.log(result);