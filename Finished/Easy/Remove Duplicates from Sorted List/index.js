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
var deleteDuplicates = function (head) {
    let result = new ListNode(0);
    let headResult = result;
    let pVal;
    for (let i = head; i !== null; i = i.next) {
        if (pVal !== i.val) {
            headResult.next = new ListNode(i.val);
            headResult = headResult.next;
        };
        pVal = i.val;
    };
    return result.next
};

const head = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(ListNodeToArray(head));

const result = deleteDuplicates(head);
console.log("Result = ", ListNodeToArray(result));