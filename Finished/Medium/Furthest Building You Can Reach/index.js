/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this.heapifyUp();
        }

        pop() {
            const max = this.heap[0];
            const last = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.heapifyDown();
            }

            return max;
        }

        heapifyUp() {
            let current = this.heap.length - 1;
            while (current > 0) {
                const parent = Math.floor((current - 1) / 2);
                if (this.heap[parent] >= this.heap[current]) {
                    break;
                }
                [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
                current = parent;
            }
        }

        heapifyDown() {
            let current = 0;
            while (true) {
                let leftChild = 2 * current + 1;
                let rightChild = 2 * current + 2;
                let maxChild = leftChild;

                if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[leftChild]) {
                    maxChild = rightChild;
                }

                if (leftChild >= this.heap.length || this.heap[current] >= this.heap[maxChild]) {
                    break;
                }

                [this.heap[current], this.heap[maxChild]] = [this.heap[maxChild], this.heap[current]];
                current = maxChild;
            }
        }
    }

    const diffHeap = new MaxHeap();
    let i = 1;
    for (i; i < heights.length; i++) {
        const diff = heights[i] - heights[i - 1];
        if (diff <= 0) continue;

        diffHeap.push(diff);
        bricks -= diff;
        if (bricks < 0) {
            bricks += diffHeap.pop();
            ladders--;
        };

        if (ladders < 0) break;
    };
    return i - 1;
};

const heights = [4, 2, 7, 6, 9, 14, 12]
const bricks = 5;
const ladders = 1;
const result = furthestBuilding(heights, bricks, ladders);
console.log(result); // Expected 4