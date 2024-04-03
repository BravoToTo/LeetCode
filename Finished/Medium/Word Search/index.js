/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // We need to find the starting letter. O(N^2)?
    function existWrapper(board, word, row, col, wordPointer) {
        // Base cases
        if (wordPointer === word.length) return true;
        if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || board[row][col] !== word[wordPointer]) return false;

        // Logic
        let temp = board[row][col];
        board[row][col] = '*';
        const result =
            existWrapper(board, word, row, col + 1, wordPointer + 1) || // right
            existWrapper(board, word, row, col - 1, wordPointer + 1) || // left
            existWrapper(board, word, row + 1, col, wordPointer + 1) || // down
            existWrapper(board, word, row - 1, col, wordPointer + 1);   // up
        board[row][col] = temp;
        return result;
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (existWrapper(board, word, row, col, 0)) return true;
        };
    };
    return false;
};

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];
const word = "SEE";
const result = exist(board, word);
console.log(result);