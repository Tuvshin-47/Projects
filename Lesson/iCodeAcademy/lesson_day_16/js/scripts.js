console.log("Lesson DAy 16 - JS Useful operations");

console.log("Recapture - Functions");

// Exercise

// 2 параметртай showFullName гэдэг нэртэй функц бичээрэй.
// эхний параметр нь firstName, дараагийнх нь lastName
// Энэхүү функц нь энэхүү 2 параметрийг нийлүүлээд
// "My name is Khangaikhuu Uvgunkhuu" гэх мэт firstName lastName 2-ыг
// холбоод буцаадаг
// 3 өөр төрлийн нэр овог өгч түүнийгээ тестлээрэй.
function showFullName(firstName, lastName) {
  return `My name is ${firstName} ${lastName}`;
}

console.log(showFullName("Khangaikhuu", "Uvgunkhuu"));

let result = showFullName("John", "Doe");
console.log(result);

console.log("===========================");
console.log("Useful operations");

let number = 42; // variable number type
let stringNumber = "42"; // variable string text type

console.log(number); // 42
console.log(stringNumber); // 42
console.log(typeof number); // number
console.log(typeof stringNumber); // string

console.log(number + 1); // 43
console.log(stringNumber + 1); // 421

// string-ийг холбох
console.log("Khangaikhuu " + "Uvgunkhuu"); // string concatenation
console.log(parseInt(stringNumber)); // 42 - from string to number
console.log(parseInt(stringNumber) + 1); // 43

// "431" + "567" = 998 болгож хэвлэнэ үү
let stringNum = "431";
console.log(parseInt(stringNum) + parseInt("567")); // 998
// 431 + "43" = 474 болгож хэвлэнэ үү
console.log(431 + parseInt("43")); // 474
console.log(431 + "43"); // 43143

let str = "42.5656";
let num = parseFloat(str);
console.log(num + 8); // 50.5656
// function Closure 
// anonymous function
(function () {
  let str = "Hello"; // variable scope
  let num = parseInt(str);

  console.log(num); // NaN
})();
