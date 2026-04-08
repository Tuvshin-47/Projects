console.log('Built In Objects');

// String object
const stringObject = new String('Hello');
console.log(stringObject);
console.log(typeof stringObject);
// primitive string type
const helloWorld = 'Hello World';
console.log(typeof helloWorld);

// primitive number type
const jsInteger = 42;
console.log(jsInteger);
console.log(typeof jsInteger);
const jsDouble = 15.4;
console.log(typeof jsDouble);

// Number object
const jsNumberObject = new Number(15);
console.log(typeof jsNumberObject);
console.log(jsNumberObject);

const jsNumberDoubleObject = new Number(15.685885);
console.log(typeof jsNumberDoubleObject);
console.log(jsNumberDoubleObject);
console.log(jsNumberDoubleObject.toFixed(2)); // 15.69

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Boolean primitive type
const itsTrue = true;
console.log(typeof itsTrue);
// Boolean Object
const itsTrueBooleanObj = new Boolean(true);
console.log(typeof itsTrueBooleanObj);
console.log(itsTrueBooleanObj.toString()); // "true";

// Date Object
const jsDate = new Date();
console.log(jsDate);
console.log(jsDate.getFullYear()); // 2024
console.log(jsDate.getMonth()); // 10
console.log(jsDate.getDate()); // 18
console.log(jsDate.getDay()); // 1

// Examples
const myDay = new Date('2002-1-15');
console.log(myDay.getDate()); // 15
console.log(myDay.getFullYear()); // 2002
console.log(myDay.getMonth()); // 0
// Ex-01
// Date object ашиглан хийх дасгал
// Даваагаас Ням гариг хүртэл үгээр илэрхийлсэн array үүсгээрэй. Түүнийгээ 
// weeks дотор хадгалаарай.
// Тэгээд өнөөдрийн өдрийг үүсгээд түүнийхээ өдрийг нь ашиглан ямар өдөр болохыг нь 
// SWITCH ашиглаад харуулдаг болгоорой.
// Жишээ нь: jsDate.getDay() нь 1 гэж байвал Өнөөдөр Даваа гариг гэж хэвлэнэ.
// Харин 1-7 гэсэн тооноос бусад тоо байвал энэ өдөр гаригт байхгүй гэж хэвлэнэ.
const weeks = ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'];
const today = new Date(); // өнөөдөр
switch (today.getDay()) {
    case 1:
        console.log(weeks[0]);
        break;
    case 2:
        console.log(weeks[1]);
        break;
    case 3:
        console.log(weeks[2]);

    default:
        console.log('энэ өдөр гаригт байхгүй');
}
// Ex-02
// Дараа нь жилийн саруудыг нь хадгалсан array үүсгэнэ үү. Үүнд 
// "January", "February" гэх мэт үүсгээд түүнийг
// jsDate.getMonth() гэж аваад тухайн сарыг нь харуулдаг болгоорой.
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
switch(today.getMonth()){
    case 1:
        console.log(months[0]);
        break;
        

    default:
        console.log('No month for the number');
}

