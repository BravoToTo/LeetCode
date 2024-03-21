function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head;
    let result = new ListNode(head.val);
    while (head.next) {
        head = head.next;
        result = new ListNode(head.val, result);
    };
    return result;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const result = reverseList(head);
console.log(ListNodeToArray(result));