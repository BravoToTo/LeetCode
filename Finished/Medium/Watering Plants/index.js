/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    let steps = 0;
    let position = -1;
    let canCapacity = capacity;
    while (position < plants.length - 1) {
        if (plants[position + 1] <= canCapacity) {
            steps++;
            position++;
            canCapacity -= plants[position];
            plants[position] = 0;
        } else {
            steps += position + 1;
            position = -1;
            canCapacity = capacity;
        };
    }
    return steps;
};

const plants = [2, 2, 3, 3];
const capacity = 5;
const result = wateringPlants(plants, capacity);
console.log(result);