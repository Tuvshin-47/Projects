console.log('JS Bit operation');
// closure
(function(){
    let a = 3; // 11
    let b = 5; // 101

    console.log(a & b); // 011 + 101 = 1000

    console.log(a && b); 
})();

(function(){
    let a  = 5;
    console.log(~a); 
})();

// Exercise 25-ийг logical left shift 2 удаа хийнэ үү
// 5-ийг logical right shift 1 болон 2 удаа хийж харуулна уу
(function(){

})();
// Exercises доорхын үр дүн хэд вэ?
// 1. 12 & 5 => 4
// 2. 12 | 5 => 13
// 3. 12 ^ 5 => 9
// 4. ~12 => -13
// 5. 12 << 2 => 48