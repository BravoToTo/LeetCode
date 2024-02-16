/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    const newImg = new Array(img.length);
    for (let i = 0; i < img.length; i++) {
        newImg[i] = new Array(img[0].length);
        for (let j = 0; j < img[0].length; j++) {
            newImg[i][j] = 0;
        };
    };

    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[i].length; j++) {
            const neighbors = [img[i][j]];
            if (i - 1 >= 0) {
                neighbors.push(img[i - 1][j]);
                if (j - 1 >= 0)
                    neighbors.push(img[i - 1][j - 1]);
                if (j + 1 < img[i].length)
                    neighbors.push(img[i - 1][j + 1]);
            };
            if (i + 1 < img.length) {
                neighbors.push(img[i + 1][j]);
                if (j - 1 >= 0)
                    neighbors.push(img[i + 1][j - 1]);
                if (j + 1 < img[i].length)
                    neighbors.push(img[i + 1][j + 1]);
            };
            if (j - 1 >= 0)
                neighbors.push(img[i][j - 1]);
            if (j + 1 < img[i].length)
                neighbors.push(img[i][j + 1]);
            newImg[i][j] = Math.floor(neighbors.reduce((a, b) => a + b) / neighbors.length);
        };
    };
    return newImg;
};

const img = [[100, 200, 100], [200, 50, 200], [100, 200, 100]]
const result = imageSmoother(img);
console.log(result);