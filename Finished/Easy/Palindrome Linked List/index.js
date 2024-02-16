function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let newList = new ListNode(head.val);
    let trail = head.next;
    let length = 0;
    for (let i = trail; i !== null; i = i.next) {
        length++;
        newList = new ListNode(i.val, newList);
    };

    for (let i = 0; i < length; i++) {
        if (newList.val !== head.val) {
            return false;
        };
        newList = newList.next;
        head = head.next;
    };
    return true;
};

// const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
const head = new ListNode(1, new ListNode(2));
const result = isPalindrome(head);
console.log("Result =", result);