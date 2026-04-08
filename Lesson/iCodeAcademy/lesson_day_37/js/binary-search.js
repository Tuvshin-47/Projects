const initialArray = [1, 5, 10, -5, 4, 3, 2, 11, 24];

const sortNum = (numOne, numTwo) => {
    return numOne - numTwo;
}
// sorted array
initialArray.sort(sortNum) // sorting
console.log(initialArray);

const searchNumber = 11;
// Binary search Algorithm

let lowIndex = 0;
let highIndex = initialArray.length - 1;
let computationSteps = 0;

while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (initialArray[midIndex] === searchNumber) {
        console.log(initialArray[midIndex]);
        computationSteps++;
        break;
    } else if (initialArray[midIndex] < searchNumber) {
        lowIndex = midIndex + 1;
        computationSteps++;
    } else {
        highIndex = midIndex - 1;
        computationSteps++;
    }
    console.log('The number is not found');
}

console.log(`The algorithm run about ${computationSteps} steps to search a number using binary search algorithm`);

