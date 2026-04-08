console.log('Lesson day 26 - Callback functions');

// 2 тоон параметр аваад түүний нийлбэрийг буцаадаг
// функц бичнэ үү

function addTwoNumber(x, y){
    return x + y;
}

// 4 * (x + y) гэдэг томъёог боддог функц бичнэ үү
// функцын нэрийг өөрөө өгнө үү

function multiplyNumbers(x, y, callback){
    return 4 * callback(x, y);
}

console.log(multiplyNumbers(5, 6, addTwoNumber));

// 5 - 4 * (x + y) гэдэг функцыг шинэээр бичээд дуудаж харуулна уу

function subtractNumbers(x, y, callback){
    return 5 - 4 * callback(x, y);
}

console.log(subtractNumbers(10, 6, addTwoNumber)); // -59

// 2 тоог үржүүлдэг функц бичнэ үү
function multipTwoNumbers(a, b){
    return a * b;
}
// Одоо multiplyNumbers гэдэг функц дээрээ callback дээр нь энэ үржүүлдэг
// функцээ өгөөд үр дүнг шалгаарай.
console.log(multiplyNumbers(4, 5, multipTwoNumbers));

// Дахиад subtractNumbers гэдэг функцээ callback дээр нь энэ үржүүлдэг
// функцээ өгөөд үр дүнг нь шалгаарай.
console.log(subtractNumbers(10, 11, multipTwoNumbers));