console.log('Recursive function');


// Recursive function - Функц дотроо өөрөө өөрийгөө дуудах

// function recursive(problem) {
//     // 1. Зогсох нөхцөл
//     if (baseCase) {
//         return value;
//     }
    
//     // 2. Рекурсив дуудалт
//     return recursive(smaller_problem);
// }
// F(n) = F(n - 1) + F(n - 2)
// fibonacci (n) = fibonacci (n - 1) + fibonacci (n-2)
function fibonnacci(n){
    if(n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let result = fibonnacci (n - 1) + fibonnacci (n - 2);
    return result;
}
document.write(`Fibonacci 0 : ${fibonnacci(0)}`); // 0
document.write('<br/>');
document.write(`Fibonacci 1 : ${fibonnacci(1)}`); // 1
document.write('<br/>');
document.write(`Fibonacci 15 : ${fibonnacci(15)}`); // 