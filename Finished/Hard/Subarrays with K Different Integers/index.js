/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    const atMostK = (N, K) => {
        let left = 0, count = 0, distinct = 0;
        const freq = new Map();
        for (let right = 0; right < N.length; right++) {
            const rightCount = (freq.get(N[right]) || 0);
            if (rightCount === 0) distinct++;
            freq.set(N[right], rightCount + 1);

            while (distinct > K) {
                const leftCount = freq.get(N[left]) - 1;
                freq.set(N[left], leftCount);
                if (leftCount === 0) distinct--;
                left++;
            };
            count += right - left + 1;
        };
        return count;
    }
    return atMostK(nums, k) - atMostK(nums, k - 1);
};

const nums = [1, 2, 1, 2, 3];
const k = 2;
const result = subarraysWithKDistinct(nums, k);
console.log(result);