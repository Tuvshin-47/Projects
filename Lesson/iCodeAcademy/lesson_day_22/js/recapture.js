console.log('lesson Day 22 - recapture');

document.write('<h1>Recapture</h1>');

// Objects
const azarga = {
    name: 'Sharga',
    gender: 'male',
    herdsman: {
        firstName: 'Tuguldur',
        lastName: 'Erendoo',
        age: 29,
        province: 'Yarmag'
    },
    age: 6,
    childrenName:
        ['Hurdan Sharga Uree',
            'Alag ereen hyazaalan uree',
            'Har Halzan Baidas']
}
console.log(azarga);
// шинээр property нэмэх
// azarga маань хөгшрөөд үс нь буурал болжээ

azarga.hair = 'Grey';
console.log(azarga);

// энэ азарга маань улсад 3 удаа айрагласан. 1, 3, 5 гэсэн утгаад авна
// тэгэхээр энэ property-г нэмнэ үү. awards гэдэг нэрээр үүсгэнэ үү.
azarga.awards = [1, 3, 5];
// Одоо азаргаа уянгалуулдаг болгоё. Тэгвэл азаргыг makeSound гэдэг property
// дээр шинээр Azarga is making sound гэж хэвлэдэг болгоорой.

azarga.makeSound = function () {
    console.log('Azarga is making sound');
}

// Одоо азарга нь өөрийнхөө насыг хэлдэг болгоё. sayAge гэдэг property дээр
// азарганы насыг хэвлэдэг болгоорой.

azarga.sayAge = function () {
    console.log(`My age is ${this.age}`);
}

console.log(azarga);

console.log(azarga.age); // 6

azarga.makeSound();
azarga.sayAge();

// Array
let numbers = [1, 3, 4.5, true, undefined, null, '1', 'True', { hi: 'Hi' }];

// 1 гэдэг тоог 15 болгож өөрчилье
// true-г false болгоё
numbers[0] = 15;
numbers[3] = false;
console.log(numbers);

// FOR loop ашиглаад бүх элементийг нь доош нь хэвлэж харуулна уу
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// WHILE loop ашиглаад бүх элементийг нь хэвлэдэг болгоно уу
console.log('============== WHILE Loop =================');
(function () {
    let i = 0;
    while (i < numbers.length) {
        console.log(numbers[i]);
        i++;
    }
})();

// Exercises
console.log('Fill Elements');
let i, result, boolArray = [];
console.log(i);
console.log(result);
console.log(boolArray);

//1-ээс 10 хүртэлх тоог хэрвээ тухайн тоо нь тэгш тоо байвал true, бусад үед нь false байхаар хадгална
// boolArray дотор FOR loop ашиглан хоосон байгааг нь [false, true, false, true, false, ...] гэдэг утгуудаар
// дүүргэж хадгалаад хэвлэнэ үү
// i % 2 === 0 байвал тэгш бусад үед нь сондгой байдаг гэдгийг санаарай.
for (let i = 1; i < 11; i++) {
    boolArray[i] = i % 2 === 0 ? true: false;
    // if (i % 2 === 0) {
    //     boolArray[i - 1] = true;
    // } else {
    //     boolArray[i - 1] = false;
    // }
}
console.log(boolArray);