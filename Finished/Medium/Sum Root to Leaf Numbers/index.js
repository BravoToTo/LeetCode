function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    function dfs(node, path = '') {
        if (!node) return null;
        path += node.val;
        if (!node.left && !node.right) return Number(path);
        return dfs(node.left, path) + dfs(node.right, path);
    };

    return dfs(root);
};

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const result = sumNumbers(root);
console.log(result);