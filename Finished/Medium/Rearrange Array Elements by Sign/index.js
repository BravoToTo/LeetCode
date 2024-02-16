class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    const positive = [];
    const negative = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] > 0 ? positive.push(nums[i]) : negative.push(nums[i]);
    };
    const result = [];
    for (let i = 0; i < positive.length; i++) {
        result.push(positive[i]);
        result.push(negative[i]);
    };
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray2 = function (nums) {
    let j = 0, i = 0;
    let polarity = true; // true: positive, false: negative
    let result = [];
    while (i < nums.length && j < nums.length) {
        while (i < nums.length && nums[i] < 0) i++;
        while (j < nums.length && nums[j] > 0) j++;
        if (polarity) {
            result.push(nums[i]);
            i++
        }
        else {
            result.push(nums[j]);
            j++
        }
        polarity = !polarity;
    }
    while (i < nums.length) {
        if (nums[i] > 0)
            result.push(nums[i]);
        i++;
    }
    while (j < nums.length) {
        if (nums[j] < 0)
            result.push(nums[j]);
        j++;
    };

    return result
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray3 = function (nums) {
    const positiveQueue = new Queue()
    const negativeQueue = new Queue()
    let positiveNext = true;
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (positiveNext) {
            if (nums[i] > 0) {
                if (positiveQueue.length > 0) {
                    result.push(positiveQueue.dequeue());
                    positiveQueue.enqueue(nums[i]);
                }
                else
                    result.push(nums[i]);
                positiveNext = false;
            } else {
                negativeQueue.enqueue(nums[i]);
                if (positiveQueue.length > 0) {
                    result.push(positiveQueue.dequeue());
                    positiveNext = false;
                };
            };
        } else {
            if (nums[i] < 0) {
                if (negativeQueue.length > 0) {
                    result.push(negativeQueue.dequeue());
                    negativeQueue.enqueue(nums[i]);
                }
                else
                    result.push(nums[i]);
                positiveNext = true;
            } else {
                positiveQueue.enqueue(nums[i]);
                if (negativeQueue.length > 0) {
                    result.push(negativeQueue.dequeue());
                    positiveNext = true;
                };
            };
        };
    };
    while (positiveQueue.length > 0 || negativeQueue.length > 0) {
        if (positiveNext && positiveQueue.length > 0) {
            result.push(positiveQueue.dequeue())
            positiveNext = false;
        };
        if (!positiveNext && negativeQueue.length > 0) {
            result.push(negativeQueue.dequeue())
            positiveNext = true;
        };
    };
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray4 = function (nums) {
    const result = new Array(nums.length);
    let nextPositive = 0;
    let nextNegative = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[nextPositive] = nums[i]
            nextPositive += 2;
        } else {
            result[nextNegative] = nums[i];
            nextNegative += 2;
        };
    };
    return result;
};

const nums = [3, 1, -2, -5, 2, -4];
const result = rearrangeArray(nums);
console.log(result);

const result2 = rearrangeArray2(nums);
console.log(result2);

const result3 = rearrangeArray3(nums);
console.log(result3);

const result4 = rearrangeArray4(nums);
console.log(result4);


console.log(testTime(1000,rearrangeArray, nums));
console.log(testTime(1000,rearrangeArray2, nums));
console.log(testTime(1000,rearrangeArray3, nums));
console.log(testTime(1000,rearrangeArray4, nums));

function testTime(quantity, fn, nums) {
    let result = 0;
    for (let i = 0; i < quantity; i++) {
        const start = performance.now()
        fn(nums);
        const end = performance.now()
        result += (end - start);
    };
    return result / quantity;
};