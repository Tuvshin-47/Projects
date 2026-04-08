console.log('Linear Search Algorithm');

const initialArray = [5, 1, 4, 10, 11, 15];

// Problem: 15 гэдэг тооны array дээрх index-ийг надад харуулна уу
const searchNumber = 15;
let foundIndex = -1;

// Linear Search Algorithm Implementation
for(let i = 0; i < initialArray.length; i++){
    if(initialArray[i] === searchNumber){
        foundIndex = i;
        break;
    }
}

console.log(foundIndex); // 5 || -1

if(foundIndex !== -1 ){
    console.log(`The number ${searchNumber} found in array. The number index is ${foundIndex}.`);
} else {
    console.log(`The number ${searchNumber} not found in array`);
}