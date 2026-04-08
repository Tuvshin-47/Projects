console.log('Callback timers');

myFunction();
// function declaration
function myFunction() {
    console.log('function declaration');
}
myFunction();

// function expression / anonymous function
const myFunctionExp01 = function () {
    console.log('function expression');
}
myFunctionExp01();

// function expression / arrow function
const myFunctionExp02 = () => {
    console.log('function expression - arrow function');
}
myFunctionExp02();

// setTimeout
function printHello() {
    console.log('Hello');
}

function printMyName(myName) {
    console.log(myName);
}

function func01() {
    // JS setTimout гэдэг функц
    setTimeout(printHello, 3000);
}

function func02() {
    setTimeout(() => {
        printMyName('Khangaikhuu');
    }, 2000);
}

// setInterval

function func03() {
    setInterval(() => {
        printHello();
        console.log('=======');
    }, 3000);
}

const exercise = () => {
    const today = new Date();
    const timerElement = document.getElementById('timer');
    timerElement.innerHTML = `<h1>${today}</h1>`;
}

// show every second of the date on HTML
function func04() {
    setInterval(exercise, 1000);
}

// function expression ашиглаад func04-ийн setInterval доторх
// аrrow function-ийг тусад нь гаргана уу
// тэгээд тэр функцээ callback-аар дуудаж урьд нь ажиллаж
// байсан шигээ ажиллуулдаг болгоно уу

// function expressionを使ってfunc04のsetInterval内の
// arrow functionを外に出してください
// そしてその関数をコールバックとして呼び出し、以前のように
// 動作するようにしてください



// Function calls - Test
func01();
func02();
// func03();

func04();    
