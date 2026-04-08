console.log('JS Expressions');

// Statements

// console.log(''); // 
// ...
// ...

let myName = 'Khangaikhuu'; // statement - Хангайхүү гэдэг текстийг myName гэдэг
                            // хувьсагчид хадгалаарай.
                            // = assignment буюу оногдуулах
                            // let гэдэг шинээр хувьсагчийг зарлаж байгаа гэсэн үг
// exercises
// өөрийнхөө нэрийг fullName гэдэг хувьсагчид онооно уу
let fullName = 'Khangaikhuu Uvgunkhuu';
// өөрийнхөө насыг myAge гэдэг хувьсагчид онооно уу
let myAge = 42;

console.log(myName); // Khangaikhuu
console.log(fullName); // Khangaikhuu Uvgunkhuu - text character 
console.log(myAge); /// 42 - integer number

// бутархай тоон хувьсагч тодорхойлъё
let butarhaiToo = 35.67; // floating number
console.log(butarhaiToo);

// үнэн худал буюу boolean утгыг тодорхойлъё
let unen = true; // boolean value - үнэн утга
console.log(unen); 

let hudal = false; // boolean value - худал утга
console.log(hudal);

// ямар нэгэн утга агуулдаггүй утгууд гэж байдаг

let todorhoigui = undefined;
console.log(todorhoigui); // тодорхойлогдоогүй
let nullValue = null;
console.log(nullValue); // 0 буюу утгагүй


// JS дээр түлхүүр үгээр хувьсагчийн нэрийг тодорхойлж болохгүй
// 
let letWord = 10; 
console.log(letWord); // 10
// var - ES 5 хүртэл ашиглагдаж байсан
var varVariable = 10;
var varString = 'Hello Variable';
var doubleNumber = 34.5;
var booleanValue = true;

//  Хувьсагчийн утгыг өөрлөх
letWord = 15; // хувьсагчийг дахин ашиглах
console.log(letWord); // 15

// Exercises
// ex01
// let-ээр өөрийнхөө хамаатныхаа насыг бичээд түүнийг өөр насаар өөрчилж доод талд нь
// бичээрэй. Тэгээд хувьсагчийн утгын өөрчлөлтийг консоль дээр хэвлэж харуулна уу
let cousinsAge = 29;
console.log(cousinsAge); // 29
cousinsAge = 30;
console.log(cousinsAge); // 30
// ex02
// var ашиглан чи хэдэн нохойтойг илэрхийлэх тоог хадгалаарай.
// дараа нь шинээр нэг гөлөг авсан гэж бодоод тухайн тоогоо өөрчилж консоль дээр
// хэвлэж харуулаарай.
// camel Case буюу холбоо үг орсон хувьсагчийн нэрийг бичих дүрэм
var myDog = 2;
console.log(myDog); 
myDog = 5;
console.log('I have a dog - ', myDog);
// тогтмол тоог илэрхийлэх
const PI = 3.14;
console.log(PI);
// PI = 3.15; -- comment
// console.log(PI);

