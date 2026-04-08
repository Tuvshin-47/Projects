console.log('Insertion Sort');

let myArray = [5, 2, 4, 6, 1, 3];

function insertionSort(array){
    for(let i = 0; i < array.length; i++){
        let key = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > key){
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = key;
        console.log(array);
    }

    return array;
}


console.log(insertionSort(myArray)); 
