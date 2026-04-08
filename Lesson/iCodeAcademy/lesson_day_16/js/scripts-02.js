console.log("Lesson Day 16 - JS Arithmetic operations");

// isNaN функц - Энэ функц тухайн утгыг тоо мөн үү бишүү гэдгийг хэлдэг

(function () {
  let str = "Hello"; // "Hello" гэдэг текстийг str гэдэг хувьсагчид хадгалах
  let num = parseInt(str); // тоо луу хөрвүүлье NaN
  console.log(num); // NaN
  console.log(isNaN(num)); // true is Not A Number
  //    boolean буюу үнэн худлыг Javascript дээр харуулдаг
  // true эсвэл false гэдэг утгуудыг харуулдаг
})();

// Exercises
// шинээр closure үүсгээрэй
// тэгээд тэрэн дотроо str гэдэг хувьсагч тодорхойлоод "42" гэдэг утгыг
// хадгалаарай.
// Хадгалсан утгаа parseFloat ашиглаад тоо луу хөрвүүлээрэй.
// тэгээд isNaN гэдэг функцыг ашиглан тухайн тоог тоо мөн биш эсэхийг
// хэвлээрэй. Тоо мөн байна уу?
(function () {
  let str = "42";
  let number = parseFloat(str);
  console.log(number); // 42 number
  console.log(isNaN(number)); // false
})();

console.log("Arithmetic Operations");
let sum = 80 + 20; // 100
console.log("Addition: " + sum);
let sub = sum - 50;
console.log("Subtraction: " + sub);
let mul = sum * 5;
console.log("Multiplication: " + mul);
let div = sum / 3;
console.log("Division: " + div);
let mod = sum % 3;
console.log("Modulus: " + mod);
let inc = ++sum;
// sum = sum + 1;
// let inc = sum; // 101
console.log("Increment: " + inc);
let dec = --sum;
// sum = sum  - 1; // 101 - 1
// let dec = sum; // 100
console.log("Decrement: " + dec);

// Assign values
console.log("JS assign values");
(function () {
  let sum = 5.0;
  sum += 5; // sum = sum + 5;
  console.log("Add & assign decimal: " + sum); // 10

  sum = 8; // Яагаад
  sum -= 4; // sum = sum - 4;
  console.log("Subtract & assign: " + sum); // 4

  sum = 8; // 8
  sum *= 4; // sum = sum * 4;
  console.log("Multiply & assign: " + sum); // 32

  sum = 8;
  sum /= 4;
  console.log("Divide & assign: " + sum); // 2

  sum = 8;
  sum %= 4;
  console.log("Modulus & assign: " + sum); // 0
})();
