console.log('Lesson Day 15 - JS Functions and Parameters');

// function declaration
function introduceMe (){
    console.log("My name khangaikhuu");
    console.log("This is my lesson 15");
}

introduceMe(); // function call

// Exercises

// ex01 
// prompt-оор таны нэрийг асуугаад тэгээд түүнийг alert-аар хэвлэж харуулдаг функц бичнэ үү
function ex01 (){
    // let myName = prompt('What is you name');
    // alert(myName);
}
ex01();
// ex02 
// prompt-оор таны насыг асуугаад дараа нь түүнийг console дээр хэвлэдэг функц бичнэ үү

function ex02 (){
    // let myAge = prompt('What is your age');
    // console.log(myAge);
}
ex02();

// function parameter

function funcWithParam (age) {
    console.log(`You are ${age}.`); // template literal usage
    console.log('You are ' + age + " ."); // string concatenation
    console.log('You are ${age}.'); // string 
}

// parameter call function

funcWithParam(42); // 
funcWithParam(54); // 
funcWithParam(28); // 
// function with multiple parameter
function calculateNumbers (a, b, c , d) {
    console.log('My numbers : ', a, b, c, d);
}

// function call
// 3 удаа энэ функцыг өөр өөр параметртай дуудаж харуулна уу.
calculateNumbers(4, 5, 6, 7);
calculateNumbers(4, 5, 6, 7);
calculateNumbers(4, 5, 6, 7);

// exercises
// a, b гэдэг 2 параметртай addTwo гэдэг нэртэй функц тодорхойлоорой
// функцын body буюу биед тухайн 2 тоог хооронд + тэмдэг 
// ашиглан нэмээд консоль дээр харуулна уу
//  Энэ функцээ ашиглан 3 удаа өөр утгууд өгч тест бичээрэй.
function addTwo (a, b) {
    console.log('The addition of two numbers is : ', a + b);
}
addTwo(4, 5); // 9
addTwo(13, 15); // 28
addTwo(5, 6); // 11
// a, b, c гэдэг 3 параметртай multiplyThree нэртэй функц тодорхойлоод
// функцын body дотор өгөгдсөн 3 параметрийг хооронд нь үржүүлээд console дээр 
// хэвлэдэг болгоорой
// 3 тест бичнэ үү.
function multiplyThree(a, b, c) {
    console.log('THe multiplication of 3 numbers is : ', a * b * c);
}
multiplyThree(4, 5, 6); // 120
multiplyThree(5, 5, 4); // 100
multiplyThree(-1, -4, 5); // 20

// function with return value
function subtractNumbers (a, b){
    // console.log(a - b);
    let result = a - b;
    return result;
}


let result = subtractNumbers(100, 50); // 50
console.log(result); // undefined

// Exercises with return value
// Шинээр divideNumbers гэдэг функц бичээд 2 утга параметраар авдаг болгоорой
// энэ функц нь энэ 2 параметрийн хуваасан үр дүнг буцаадаг байна.
// хуваах тэмдэгтээр / ашиглаарай.
// тэгээд 3 тест бичиж харуулаарай.
function divideNumbers(a, b) {
    let result = a / b;
    return result;
}
console.log(divideNumbers(3, 4)); // 0.75
console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(100, 10)); // 10