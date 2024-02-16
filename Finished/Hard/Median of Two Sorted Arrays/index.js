/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b); // O((n+m)log(n+m))
    return nums1.length % 2 !== 0 ? nums1[(nums1.length + 1) / 2 - 1] : (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2
};

const nums1 = [0, 0];
const nums2 = [0, 0];
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);