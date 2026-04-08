console.log('Selection Sort');
const myArray = [20, 12, 10, 15, 2];

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            console.log(myArray);
            // let tmp = array[i];
            // array[i] = array[minIndex];
            // array[minIndex] = tmp;
            // Exercise [a, b] = [2, 3]
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
    return array;
}

// use the function to sort the myArray
console.log(selectionSort(myArray))