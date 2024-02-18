/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    class PriorityQueue {
        constructor(comparator = ((a, b) => a - b)) {
            this.values = [];
            this.comparator = comparator;
            this.size = 0;
        }
        add(val) {
            this.size++;
            this.values.push(val);
            let idx = this.size - 1, parentIdx = Math.floor((idx - 1) / 2);
            while (parentIdx >= 0 && this.comparator(this.values[parentIdx], this.values[idx]) > 0) {
                [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
                idx = parentIdx;
                parentIdx = Math.floor((idx - 1) / 2);
            }
        }
        remove() {
            if (this.size === 0) return -1;
            this.size--;
            if (this.size === 0) return this.values.pop();
            let removedVal = this.values[0];
            this.values[0] = this.values.pop();
            let idx = 0;
            while (idx < this.size && idx < Math.floor(this.size / 2)) {
                let leftIdx = idx * 2 + 1, rightIdx = idx * 2 + 2;
                if (rightIdx === this.size) {
                    if (this.comparator(this.values[leftIdx], this.values[idx]) > 0) break;
                    [this.values[leftIdx], this.values[idx]] = [this.values[idx], this.values[leftIdx]];
                    idx = leftIdx;
                } else if (this.comparator(this.values[leftIdx], this.values[idx]) < 0 || this.comparator(this.values[rightIdx], this.values[idx]) < 0) {
                    if (this.comparator(this.values[leftIdx], this.values[rightIdx]) <= 0) {
                        [this.values[leftIdx], this.values[idx]] = [this.values[idx], this.values[leftIdx]];
                        idx = leftIdx;
                    } else {
                        [this.values[rightIdx], this.values[idx]] = [this.values[idx], this.values[rightIdx]];
                        idx = rightIdx;
                    }
                } else {
                    break;
                }
            }
            return removedVal;
        }
        top() {
            return this.values[0];
        }
        isEmpty() {
            return this.size === 0;
        }
    }

    const freeRoomQueue = new PriorityQueue((a, b) => a[0] - b[0]); // This queue will track the number of all free rooms and the next availableTime
    // Initialize freeRoomQueue.
    for (let i = 0; i < n; i++)
        freeRoomQueue.add([i, 0]);

    const meetingQueue = new PriorityQueue((a, b) => a[1] - b[1]); // This queue will track where every meeting is being held, and its corresponding ending time.
    const meetingCounter = new Array(n).fill(0); // Array that will keep track of how many meetings every room held.
    meetings.sort((a, b) => a[0] - b[0]) // Sort in non-decreasing order by starting time.

    for (const [start, end] of meetings) {
        const duration = end - start;

        // Clear all meetings that have ended from the Queue and add rooms back to freeRoomQueue.
        // Note: condition is '<=' because meeting time interval is half-closed. [start,end), else it would've just been '<'.
        while (!meetingQueue.isEmpty() && meetingQueue.top()[1] <= start)
            freeRoomQueue.add(meetingQueue.remove());

        // If we still haven't freed any room:
        if (freeRoomQueue.isEmpty()) {
            // Clear the next-ending meeting
            const [roomIdx, availableTime] = meetingQueue.remove()
            freeRoomQueue.add([roomIdx, availableTime]);

            // In case there are multiple meetings ending at the same availableTime, we need to clear them all.
            while (!meetingQueue.isEmpty() && meetingQueue.top()[1] === availableTime)
                freeRoomQueue.add(meetingQueue.remove());
        };

        // After making room, start next meeting and add 1 to meetingCounter at roomIdx.
        const [roomIdx, availableTime] = freeRoomQueue.remove();
        meetingCounter[roomIdx]++;
        meetingQueue.add([roomIdx, Math.max(availableTime, start) + duration]);
    };

    // Calculate the lowest room number that held the most meetings.
    let result = 0;
    for (let i = 0; i < meetingCounter.length; i++)
        if (meetingCounter[result] < meetingCounter[i]) result = i;

    return result;
};

const n = 4;
const meetings = [[18, 19], [3, 12], [17, 19], [2, 13], [7, 10]]
const result = mostBooked(n, meetings);
console.log(result); // Expected 0