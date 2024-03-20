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
}

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let counter = 0;
    let head = list1;
    let firstLinkList1;
    let secondLinkList1;
    while (counter <= b + 1) {
        if (counter === a - 1) firstLinkList1 = head;
        if (counter === b + 1) secondLinkList1 = head;
        head = head.next;
        counter++;
    };

    firstLinkList1.next = list2;

    let list2head = list2;
    while (list2head.next) list2head = list2head.next;
    list2head.next = secondLinkList1;

    return list1;
};



const list1 = new ListNode(10, new ListNode(1, new ListNode(13, new ListNode(6, new ListNode(9, new ListNode(5))))));
const list2 = new ListNode(1000000, new ListNode(1000001, new ListNode(1000002)));
const a = 3;
const b = 4;
const result = mergeInBetween(list1, a, b, list2);
console.log(ListNodeToArray(result));