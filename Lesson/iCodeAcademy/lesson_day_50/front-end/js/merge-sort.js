let myArray = [12, 8, 9, 3, 11, 5, 4];


function mergeSort(array){
    // хэрвээ array маань урт нь 1 байвал
    if(array.length == 1){
        return array;
    }
    const middleElementIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleElementIndex);
    const rightArray = array.slice(middleElementIndex);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < leftArray.length && j < rightArray.length){
        if(leftArray[i] < rightArray[j]){
            result.push(leftArray[i]);
            console.log('Right: ', result);
            i++;
        } else {
            result.push(rightArray[j]);
            console.log('Left: ', result);
            j++;
        }
    }
    const leftPart = leftArray.slice(i);
    const rightPart = rightArray.slice(j);

    return result.concat(leftPart).concat(rightPart);
}


const sortedArray = mergeSort(myArray);
console.log(sortedArray);