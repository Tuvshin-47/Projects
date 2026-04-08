console.log("IF ElSE Statements");

// IF ELSE

(function () {
  if (7 < 2) {
    console.log("Failure");
  } else {
    console.log("Success");
  }
})();

// closure бичээд score гэдэг хувьсагчид 70 гэдэг тоог оноо
// Хэрвээ тухайн score нь 60-аас их байвал "Pass" бусад үед "Fail" гэж хэвлэдэг болгоно уу

(function () {
  let score = 70;
  if (score > 60) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
})();
