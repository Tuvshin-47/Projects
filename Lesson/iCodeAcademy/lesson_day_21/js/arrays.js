console.log('js arrays');

(function(){
    // 1-ээс 10 хүртэлх тооны цуглуулга хийнэ үү
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);

    // array элементүүдийг сонгох
    document.write(numbers[2]); // 3

    // 5 дахь ба сүүлчийн элементийг доош нь цувуулж HTML дээр
    // харуулна уу
    document.write('<br/>');
    document.write(numbers[4]); // 5
    document.write('<br/>');
    document.write(numbers[9]) // 10
    document.write('<br/>');

    let colors = []; // хоосон array буюу empty array
    colors[0] = 'Red';
    colors[1] = 'Green';
    colors[2] = 'Blue';
    console.log(colors);
    document.write(colors);
    document.write('<br/>');

    // new array
    let relativeArray = new Array(4);
    console.log(relativeArray);
    relativeArray.push(1);
    console.log(relativeArray);
    // энэ array-г өөрийнхөө хамаатныхаа нэрээр дүүргэнэ үү.
    relativeArray[0] = 'Uvgunkhuu';
    relativeArray[1] = 'Manlaikhuu';
    relativeArray[2] = 'Marta';
    relativeArray[3] = 'Uranchimeg';
    console.log(relativeArray);
    console.log(relativeArray.length); // 5
    for(let i = 0; i < relativeArray.length; i++){
        document.write('<br/>');
        document.write(relativeArray[i]);
        document.write('<br/>');
    }
    // new examples
    let month, summer  = ['June', 'July', 'August'];
    for (month in summer){
        if(month !== ''){
            document.write('<br/>');
            document.write(`${month} : ${summer[month]}`);
        }
    }
    // Exercises
    // шинээр 10 элемент хадгалдаг array үүсгэнэ үү
    let numberArray = new Array(10);
    console.log(numberArray);
    // тэгээд for loop ашиглаад тухайн array-г тэгш тоогоор 
    // дүүргээд дараа нь хариуг нь HTML дээр харуулдаг болгоно уу

    for (let i = 0; i < numberArray.length; i++){
        numberArray[i] = 2*i;
    }
    document.write('<br/>');
    document.write(numberArray);
    document.write('<br/>');

})();