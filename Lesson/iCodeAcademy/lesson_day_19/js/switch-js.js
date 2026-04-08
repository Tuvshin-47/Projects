// Problem
console.log("Lesson Day 19 - Switch");
// Exercise
// 7 өдөр байлаа. Эхлээд бид нар today гэдэг хувьсагчид ямар өдөр байгааг хадгална
// ЖИшээ нь : 1 хэрвээ энэхүү утга нь 1 байвал Даваа гариг гэж консоль дээр
// хэвлэнэ. 2 бол Мягмар гариг гэх мэтээр бусад бүх гаригуудыг тоогоор нь
// тааруулах хэвлэнэ. Үүнийг if else ашиглан хийнэ үү.
// Харин бусад үед жишээ нь 8 эсвэл 1-аас 7 гэдэг тооноос бусад тоо байвал
// түүнийг гаригийн тоо биш байна гэж хэвлэнэ.

(function () {
  let today = 4;
  let dayOfWeek = "";

  if (today === 1) {
    dayOfWeek = "Даваа";
  } else if (today === 2) {
    dayOfWeek = "Мягмар";
  } else if (today === 3) {
    dayOfWeek = "Лхагва";
  } else if (today === 4) {
    dayOfWeek = "Пүрэв";
  } else if (today === 5) {
    dayOfWeek = "Баасан";
  } else if (today === 6) {
    dayOfWeek = "Бямба";
  } else if (today === 7) {
    dayOfWeek = "Ням";
  } else {
    console.log("Гаригийн тоо биш байна.");
  }
  console.log(`${dayOfWeek} гараг`);
  document.write(`${dayOfWeek} гараг`);
})();

function calculateDayOfWeek(numberOfDay) {
  let dayOfWeek = "";
  switch (numberOfDay) {
    case 1:
      dayOfWeek = "Даваа гараг";
      break;
    case 2:
      dayOfWeek = "Мягмар гараг";
      break;
    case 3:
      dayOfWeek = "Лхагва гараг";
      break;
    case 4:
      dayOfWeek = "Пүрэв гараг";
      break;
    case 5:
      dayOfWeek = "Баасан гараг";
      break;
    case 6:
      dayOfWeek = "Бямба гараг";
      break;
    case 7:
      dayOfWeek = "Ням гараг";
      break;
    default:
        dayOfWeek = 'Гаригийн тоо биш байна.'
  }

  return dayOfWeek;
}
document.write('<br>');
document.write(calculateDayOfWeek(1) + '<br>');
document.write('<br>');
// гаригуудыг доош нь цувуулаад бичнэ үү.
document.write(calculateDayOfWeek(2) + '<br>');
document.write('<br>');
document.write(calculateDayOfWeek(3) + '<br>');
document.write('<br>');
document.write(calculateDayOfWeek(4) + '<br>');
document.write('<br>');
document.write(calculateDayOfWeek(5) + '<br>');
document.write('<br>');
document.write(calculateDayOfWeek(6) + '<br>');
document.write('<br>');
document.write(calculateDayOfWeek(7) + '<br>');
document.write('<br>');
document.write(calculateDayOfWeek(8) + '<br>');
document.write('<br>');
// 
