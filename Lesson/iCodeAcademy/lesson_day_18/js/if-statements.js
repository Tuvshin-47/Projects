console.log("IF Statements");

// Шийдвэр гаргалт
/**
 *  condition is always boolean - true, false
 *  if (condition) {
        // code to run if condition is true
        execute this statement when true 
        execute this statement when true 
        execute this statement when true 
    }
 */

(function () {
  let age = 3;
  if (age > 4) {
    console.log("You are older than 4 years old");
    console.log("You are a teenager");
    // ... statements
  }


  console.log("After IF statement.");
  // ternary operator
  console.log(
    age > 4
      ? "You are older than 4 years old"
      : "You are younger than 4 years old"
  );
})();

// Exercises - хэрвээ нас нь 18-аас их байвал You can vote гэдэг үг хэвлэдэг болгоно уу
// closure ашиглана уу - SCOPE 
(function(){
    let age = 19;
    if (age > 18){
        console.log('You can vote');
    }
})();

(
    function(){
        // Хэрвээ 7 > 2-оос их байвал Success
        if (7 > 2){
            console.log('Success');
        }
        // Хэрвээ 7 < 2-оос бага байвал Failure гэж хэвлэдэг болгоно уу
        if (7 < 2){
            console.log('Failure');
        }

    }
)();