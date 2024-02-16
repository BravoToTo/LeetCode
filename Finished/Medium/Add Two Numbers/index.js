function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
};

/**
 * @param {ListNode} ListNode
 * @return {Array}
 */
function ListNodeToArray(ListNode) {
    const arr = [];
    for (let i = ListNode; i != null; i = i.next) {
        arr.push(i.val)
    };
    return arr;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const a = l1?.val || 0;
    const b = l2?.val || 0;
    let newList = new ListNode((a + b) % 10);
    let carry = false;
    if (a + b >= 10) carry = true;
    l1 = l1?.next;
    l2 = l2?.next;
    while (l1 != null || l2 != null) {
        const a = l1?.val || 0;
        const b = l2?.val || 0;
        newList = new ListNode((a + b + carry) % 10, newList);
        a + b + carry >= 10 ? carry = true : carry = false;

        l1 = l1?.next;
        l2 = l2?.next;
    };
    if (carry) newList = new ListNode(1, newList);
    return reverseList(newList);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers2 = function (l1, l2) {
    let newList = new ListNode(0);
    let headList = newList; //pointer to newList
    let carry = false;
    let sum = 0;

    while (l1 !== null || l2 !== null) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        };
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        };
        sum += carry;

        if (sum >= 10) {
            sum %= 10;
            carry = true;
        } else {
            carry = false;
        };

        headList.next = new ListNode(sum);
        headList = headList.next;
        sum = 0;
    };
    if (carry) headList.next = new ListNode(1);
    return newList.next;
};

/**
 * @param {ListNode} list
 * @return {ListNode}
 */
function reverseList(list) {
    let newList = new ListNode(list.val)
    for (let i = list.next; i != null; i = i.next) {
        newList = new ListNode(i.val, newList);
    };
    return newList;
};


let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));


const added = addTwoNumbers2(l1, l2);

console.log(ListNodeToArray(added));

// console.log(ListNodeToArray(l1));
// console.log(ListNodeToArray(l2));
