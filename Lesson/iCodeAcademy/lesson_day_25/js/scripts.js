console.log('JS Callback functions');


// Миний насыг асуугаад тэгээд хувьсагчид хадгалж байгаад
// дараа нь хэвлэдэг функц бичнэ үү.
// Түүнийгээ дуудаж харуулаарай.

function giveMeAge (){
    let myAge = prompt('Give me your age');
    console.log(myAge);
}

// giveMeAge();

// function parameter
// нэрийг нь гаднаас буюу парамертраар аваад түүнийг хэвлэдэг функц бичнэ үү
// түүнийг дуудаж харуулна уу
function callMyName(name) {
    console.log(name);   
}

// callMyName('Khangaikhuu');

// нэрийг нь гаднаас буюу параметраар авдаг насыг нь prompt-ор аваад хэвлэдэг тэгээд нэрийг нь хэвлэдэг
// функц бичнэ үү

function solution(name){
    const age = prompt('Give me your age');
    console.log(age);
    console.log(name);
}

// solution('Tuguldur');

// Callback solution
function callBackSolution(name, callback){
    callback(); // function
    console.log(name);
}

// callBackSolution('Azjargal', giveMeAge);

// Exercises

// 2 тоог параметраар аваад түүний нийлбэрийг буцаадаг функц бичнэ үү
// Тэгээд шинээр параметраараа callback функц, бас 2 тоон параметр аваад түүний утгыг хувьсагчид 
// хадгалаад үр дүнг нь хэвлэдэг функц бичнэ үү. 2 тоон параметраа тухайн callback функцдээ 
// дамжуулж өгөөрэй.
// функцээ дуудаж харуулаарай.
function addNumbers(a, b){
    return a + b;
}

function callbackNumbers(a, b, callback){
   const result = callback(a, b);
   console.log(result);
}

callbackNumbers(5, 0, addNumbers);
callbackNumbers(10, 4, addNumbers);
