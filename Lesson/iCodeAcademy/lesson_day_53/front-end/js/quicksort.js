console.log('quick sort');

// bubble, selection, merge, insertion, quicksort

const myArray = [7, 2, 1, 6, 8, 5, 3, 4];

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];

    const left = [];
    const middle = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            middle.push(array[i]);
        }
    }

    // recursive
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log('Initial array: ', myArray);
console.log('Quick Sort sorted Algorithm', quickSort(myArray));

// test case
const testCases = [
    [],
    [1],
    [1, 1, 1],
    [5, 4, 3, 2, 1],
    [5.6, 1.7, 1.8, 2.7, 3.5],
    ['hi', 'hoi', 'hui', 'hai', 'i', 'e']
]

testCases.forEach((test, index) => {
    console.log(`Test ${index + 1}: 
        Initial: [${test}],
        Sorted: [${quickSort(test)}]
        `)
});