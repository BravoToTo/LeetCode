/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    class Queue {
        constructor() {
            this.items = {};
            this.frontIndex = 0;
            this.backIndex = 0;
        }
        enqueue(item) {
            this.items[this.backIndex] = item;
            this.backIndex++;
        }
        dequeue() {
            const item = this.items[this.frontIndex];
            delete this.items[this.frontIndex];
            this.frontIndex++;
            return item;
        }
        peek() {
            return this.items[this.frontIndex];
        }
        get printQueue() {
            return this.items;
        }
    };
    const queue = new Queue();
    for (let i = 0; i < tickets.length; i++)
        queue.enqueue([tickets[i], i]);

    let count = 0;
    let kTh = tickets[k];
    while (kTh > 0) {
        const curr = queue.dequeue();
        if (curr[1] === k) kTh--;
        if (curr[0] > 0) {
            curr[0]--;
            queue.enqueue(curr);
            count++;
        };
    };

    return count;
};

const tickets = [2, 3, 2];
const k = 2;
const result = timeRequiredToBuy(tickets, k);
console.log(result);