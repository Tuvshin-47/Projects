console.log('Lesson Day 18 - JS Logical Operators')

// AND Logical Operator
// Logical PRODUCT - Үржвэр (A * B)
console.log('===== LOGICAL PRODUCT = &&/AND Operator');
console.log(false && false); // false => 0 && 0/ 0 * 0
console.log(false && true); // false => 0 && 1/ 0 * 1
console.log(true && false); // false => 1 && 0/ 1 * 0
console.log(true && true); // true => 1 && 1 / 1 * 1

console.log('===== LOGICAL SUM === ||/ OR operator');
console.log(false || false); // false => 0 || 0/ 0 + 0
console.log(false || true); // true => 0 || 1/ 0 + 1
console.log(true || false); // true => 1 || 0/ 1 + 0
console.log(true || true); // true => 1 || 1 / 1 + 1

console.log('===== LOGICAL NEGATION === !/ NOT operator');
console.log(!false); // true 
console.log(!true); // false

console.log('=====EXCLUSIVE LOGICAL SUM === XOR operator');
console.log(false ^ false); // false => 0 XOR 0 => 0
console.log(false ^ true); // true => 0 XOR 1 => 1
console.log(true ^ false); // true => 1 XOR 0 => 1
console.log(true ^ true); // false => 1 XOR 1 => 0


