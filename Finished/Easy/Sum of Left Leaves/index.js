function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    function dfs(node, isLeft) {
        if (!node) return 0;
        if (isLeft && !node.left && !node.right) return node.val;
        return dfs(node.left, 1) + dfs(node.right, 0);
    };
    return dfs(root, 0);
};

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const result = sumOfLeftLeaves(root);
console.log(result);