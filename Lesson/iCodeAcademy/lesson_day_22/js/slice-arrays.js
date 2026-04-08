console.log('Lesson Day 22 - Array Methods');

// push
(function () {
    const myNumberArray = [];
    // initialize the array with numbers
    for (let i = 0; i < 10; i++) {
        let elementNumbers = myNumberArray.push(i);
        console.log(`How Many elements added : ${elementNumbers}`);
    }
    // loop through array
    for (let i = 0; i < myNumberArray.length; i++) {
        console.log(`Number : ${myNumberArray[i]}`);
    }
})();

// pop
(function () {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber);

    const myRandomArray = [];
    for (let i = 0; i < randomNumber; i++) {
        myRandomArray.push(i);
    }
    console.log(myRandomArray);
    const result = myRandomArray.pop(); // сүүлчийн элементийг array-гаас устгах
    console.log(result);
    console.log(myRandomArray); // сүүлчийн элементийг нь устгасан array
})();

// sort
(function(){
    let hues = ['Red', 'RED', 'red', 'Green', 'Blue'];
    let numbers = [1, 20, 3, 17, 14, 0.5];
    let objectNumber = [Number(1), Number(20)]; // at home
    console.log(`Colors: ${hues}`);
    console.log(`Dictionary Sort: ${hues.sort()}`);
    console.log(`Numbers: ${numbers}`);
    // sort the numbers
    console.log(`Dictionary Sort: ${numbers.sort()}`)
    console.log(`Correct Dictionary Sort: ${numbers.sort(sortNumbers)}`);

    function sortNumbers(numOne, numTwo){
        return numOne - numTwo;
    }
})();

// join
(function(){
    let numbers = [1, 20, 3, 17, 14, 0.5];
    const result = numbers.join();
    console.log(typeof numbers);
    console.log(typeof result);
    let seasons = ['Spring', 'Summer', 'Winter', 'Fall'];
    console.log(`Seasons: ${seasons}`);
    console.log(`Joined: ${seasons.join(' & ')}`);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(`Months: \n${months.join(' | \n')}`);
})();