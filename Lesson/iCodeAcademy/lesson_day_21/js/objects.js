// Problem
console.log("Lesson Day 21 - JS Objects");

(function () {
  let firstName = "Tuguldur";
  let lastName = "Erendoo";
  let age = 29;
  let secondFirstName = "Khangaikhuu";
})();

// Objects
(function () {
  const tuguldur = {
    firstName: "Tuguldur",
    lastName: "Erendoo",
    age: 29,
  };

  console.log(tuguldur);

  const khangaikhuu = {
    firstName: "Khangaikhuu",
    lastName: "Uvgunkhuu",
    age: 42,
  };

  console.log(khangaikhuu);
})();

// Exercises
// closure дотор
// нэг амьтны төрлийн object үүсгэнэ үү. Хамгийн багадаа 3 төрлийн property үүсгээд
// түүндээ утга оноогоод хэвлээд харуулна уу.
// нэг шувууны төрлийн object үүсгэнэ үү. Хамгийн багадаа 4 төрлийн property үүсгээд
// түүндээ утга оноогоод хэвлэж харуулна уу.
(function () {
  const horse = {
    color: "Brown",
    gender: "male",
    age: 2,
  };
  console.log(horse);

  const raven = {
    name: "Kheree",
    age: 200,
    iq: 200,
    gender: "female",
  };
  console.log(raven);

  //   difference of const and let

  let a = 5;
  a = 6;
  console.log(a);
  let b; // 
  console.log(b); // undefined
  b = 0;
  console.log(b); // 0

  const PI = 3.14;
//   PI = 3.16;
  console.log(PI);

  const G = 9.78;
  console.log(G);
})();


// Object change, extend, action

(function(){
    const trex = {
        species: "Dinosaur",
        kingdom: "Animal",
        name: "Tyrannosaurus",
        height: 12.4,
        weight: 8.8,
        age: 28
    };
    console.log(trex);
// after 1 million years of evolution trex changed to chicken
    trex.species = 'Birds';
    trex.name = 'Chicken';
    trex.age = 5;
    trex.height = 0.3;
    trex.weight = 2.5;
    console.log(trex);
    // object extension
    // chicken canFly
    trex.canFly = true; // dot notation
    console.log(trex);
    trex['swim'] = true;
    console.log(trex);
// make chicken cry
    trex.cry = function(){
        console.log('chicken cries');
    }
    console.log(trex);
    trex.cry(); // let chicken cry


})();