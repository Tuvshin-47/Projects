console.log('try and catch ');


function divideNumbers(a, b) {
    try {
        if (b === 0) {
            // '2' == 2 => true
            // '2' === 2 => false   
            throw new Error();
        }
        return a / b;
    } catch (error) {
        console.log(error, 'Division by 0 is impossible');
        return 0;
    }
}

(function () {
    // console.log(5/0);

    console.log(divideNumbers(5, 0)); // infinity
    console.log(divideNumbers(10, 2)); // 5
})();

// Exercises
// parseJSONSafely гэдэг функц бичээрэй.
// Энэхүү функц нь jsonString гэдэг параметр авдаг байна.
// Хэрвээ JSON.parse(jsonString) гэхэд алдаа гарвал 
//  console.error("JSON алдаа:", error.message); гэж Error өгөөд
// return { error: "JSON форматын алдаа" }; гэж хэвлэдэг байна.
// Харин try дотор алдаа гарахгүй үед JSON.parse хийснийг буцаадаг байна.
// дараах тестүүдийг хийгээрэй.

function parseJSONSafely(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("JSON алдаа:", error.message);
        return { error: "JSON форматын алдаа" };
    }
}

console.log(parseJSONSafely('{"name": "John"}')); // Үр дүн { name: "John" }
console.log(parseJSONSafely('{name: John}')); // Үр дүн { error: "JSON форматын алдаа" }