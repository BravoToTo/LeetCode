function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
    if (head.val >= 5) head = new ListNode(0, head);

    for (let i = head; i != null; i = i.next) {
        i.val = i.val * 2 % 10;
        if (i.next?.val >= 5) i.val++;
    };
    return head;
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
}

const list = new ListNode(1, new ListNode(8, new ListNode(9)));
const original = ListNodeToArray(list);
console.log("Original list:", original);

const doubledList = doubleIt(list);

const result = ListNodeToArray(doubledList);
console.log("Doubled list:", result);
