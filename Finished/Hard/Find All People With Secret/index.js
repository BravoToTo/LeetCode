/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
    class UnionFind {
        constructor(n) {
            this.arr = Array(n).fill(null)
            this.arr.forEach((e, i, arr) => arr[i] = i)
        };

        connect(a, b) {
            this.arr[this.find(a)] = this.find(this.arr[b])
        };

        find(a) {
            return this.arr[a] === a ? a : (this.arr[a] = this.find(this.arr[a]))
        };

        connected(a, b) {
            return this.find(a) === this.find(b)
        };

        reset(a) {
            this.arr[a] = a
        };
    };

    meetings.sort((a, b) => a[2] - b[2]);

    const relations = new UnionFind(n);
    relations.connect(0, firstPerson);
    for (let i = 0; i < meetings.length;) {
        const people = [];
        const time = meetings[i][2]
        while (i < meetings.length && time === meetings[i][2]) {
            relations.connect(meetings[i][0], meetings[i][1]);
            people.push(meetings[i][0]);
            people.push(meetings[i][1]);
            i++;
        };
        for (const p of people)
            if (!relations.connected(0, p)) relations.reset(p);
    };

    const secret = [];
    for (let i = 0; i < n; i++) {
        if (relations.connected(0, i)) secret.push(i)
    }
    return secret;
};

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople2 = function (n, meetings, firstPerson) {
    meetings.sort((a, b) => a[2] - b[2]);

    let seenTime = new Set();
    let sortedMeetings = [];
    for (let [p1, p2, time] of meetings) {
        if (!seenTime.has(time)) {
            seenTime.add(time);
            sortedMeetings.push([]);
        };
        sortedMeetings[sortedMeetings.length - 1].push([p1, p2]);
    };

    const secret = new Set([0, firstPerson]);
    for (const meetingGroup of sortedMeetings) {
        const graph = {};
        const peopleKnowSecret = new Set();

        for (const [p1, p2] of meetingGroup) {
            if (!graph[p1]) graph[p1] = [];
            if (!graph[p2]) graph[p2] = [];

            graph[p1].push(p2);
            graph[p2].push(p1);

            if (secret.has(p1)) peopleKnowSecret.add(p1);
            if (secret.has(p2)) peopleKnowSecret.add(p2);
        };

        const queue = Array.from(peopleKnowSecret);

        while (queue.length > 0) {
            const curr = queue.shift();
            secret.add(curr);
            for (const people of graph[curr]) {
                if (!secret.has(people)) {
                    secret.add(people);
                    queue.push(people);
                };
            };
        };
    };

    return Array.from(secret);
};

const n = 13;
const meetings = [[12, 9, 300], [12, 7, 309], [12, 6, 318], [12, 3, 327], [12, 2, 336], [12, 1, 345], [12, 0, 354], [11, 10, 363], [11, 9, 372], [11, 7, 381], [11, 3, 390], [11, 2, 399], [10, 9, 408], [10, 8, 417], [10, 7, 426], [10, 5, 435], [10, 3, 444], [9, 8, 453], [9, 6, 462], [9, 5, 471], [9, 4, 480], [9, 3, 489], [9, 1, 498], [9, 0, 507], [8, 6, 516], [8, 5, 525], [8, 4, 534], [8, 1, 543], [7, 6, 552], [7, 5, 561], [7, 1, 570], [7, 0, 579], [6, 4, 588], [6, 3, 597], [6, 2, 606], [6, 1, 615], [6, 0, 624], [5, 0, 633], [4, 3, 642], [4, 1, 651], [4, 0, 660], [3, 1, 669], [2, 1, 678], [2, 0, 687], [1, 0, 696]]
const firstPerson = 1;
const result = findAllPeople(n, meetings, firstPerson);
result.sort((a, b) => a - b);
console.log(result);
