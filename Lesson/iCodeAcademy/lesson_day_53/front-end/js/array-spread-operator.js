console.log('spread operator');

const array1 = [1, 4, 5];
const array2 = [3, 2, 10];

// how to merge or UNION = [1, 4, 5, 3, 2, 10]

const newArray = [];
for(let i=0; i < array1.length; i++){
    newArray.push(array1[i]);
}
console.log('New Array', newArray);
for(let i=0; i < array2.length; i++){
    newArray.push(array2[i]);
}
console.log('New Array', newArray);

// spread operator to merge arrays
const spreadArray = [...array1, ...array2];
console.log(spreadArray);