console.log('Lesson day 17 - Comparison Operators');
// Closure function

(function(){

    let x = 6;
    let y = 7;
    let z = '7';

    // == - operator
    console.log(x == y); // false
    console.log(x == z); // false
    console.log(y == z); // true
    
    // === - operator - утга болон төрлийг нь адилхан эсэхийг шалгах

    console.log(x === y); // false
    console.log(x === z); // false
    console.log(y === z); // false

    // != operator буюу тэнцүү бишүү

    console.log(x != y); // true
    console.log(x != z); // true
    console.log(y != z); // false

    // !== operator буюу бүр бүр тэнцүү бишүү
    console.log(x !== y); // true
    console.log(x !== z); // true
    console.log(y !== z); // true
})();