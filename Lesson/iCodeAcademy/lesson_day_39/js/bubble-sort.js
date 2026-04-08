console.log('Bubble Sort');

const initialArray = [9, 2, 13, 21, 3, 0];

// Problem how to sort this array?

// const randomArray = [];

// // 10000 random numbers
// for(let i = 0; i < 10000; i++){
//     const randomNumber = Math.floor(Math.random()*10000);
//     randomArray.push(randomNumber);
// }

let switchSteps = 0;
console.log(initialArray);
for(let i = 0; i < initialArray.length; i++){
    for(let j = 0; j < initialArray.length; j++){
        if(initialArray[j] > initialArray[j+1]){
            [initialArray[j], initialArray[j+1]] = [initialArray[j+1], initialArray[j]];
            // let temp = randomArray[j];
            // randomArray[j] = randomArray[j + 1];
            // randomArray[j + 1] = temp;
            switchSteps++;
            console.log(`${switchSteps} : ${initialArray}`);
            
        }
        
    }
}

console.log(initialArray);

