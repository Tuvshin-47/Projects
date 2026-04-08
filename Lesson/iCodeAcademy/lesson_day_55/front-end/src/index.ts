document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '<h1>Hello TypeScript!</h1>';
    }
});


console.log('Hello Typescript');
console.log('Lesson Day 55');

// basic data types
// number
let age: number = 45;
console.log(age);
age = 46;
let price: number = 99.99;
console.log(`Price: ${price}`);

// string
let firstName: string = 'John';
let message: string = `Hello ${firstName}`;
console.log(message);

// boolean
let isActive: boolean = true;
console.log(`Boolean value: ${isActive}`);
// array
let numbers: number[] = [1, 3, 4, 5, -10];
console.log(`Number arrays: ${numbers}`);

// string төрөлтэй array үүсгэнэ үү
let stringArray: string[] = ['Hi', 'Hoi', 'Hui'];
console.log(`String arrays: ${stringArray}`);

// boolean төрөлтэй array үүсгэнэ үү
let booleanArray: boolean[] = [true, false, true];
console.log(`Boolean arrays: ${booleanArray}`);

// 
let person: [string, number] = ["John", 25];
console.log(`Person array: ${person}`);
// Enum types
enum Color {
    RED,
    GREEN,
    BLUE
}
let favoriteColor: Color = Color.BLUE;
console.log(`Favorite Color: ${favoriteColor}`);

// any type
let notSure: any = 4;
notSure = 'Maybe text';
notSure = true;
notSure = ['Hi', 1, true];
console.log(notSure);

// Functions
function logMessage(): void {
    console.log('Hello Typescript');
}
logMessage();

// a, b гэдэг 2 утга параметраар авдаг зөвхөн тоон утга авдаг тэгээд нийлбэрийг
// нь буцаадаг addTwoNumbers гэдэг функц тодорхойлно уу. Тэгээд 3 ширхэг
// test бичээд харуулна уу.
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

// Tests
console.log(addTwoNumbers(4, 5));
// addTwoNumbers('4', '5');
// addTwoNumbers(true, false);

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}`;
    }
    return `Сайн уу, ${name}`;
}

console.log(greet('Khangaikhuu', 'Guten Tag'));
console.log(greet('Tuguldur', 'Konnichiwa'));
console.log(greet('Azjargal'));

function greetWithDefault(name: string, greeting: string = "Сайн уу"):
    string {
    return `${greeting}, ${name}!`;
}

greetWithDefault('Bilguun', 'Bon Giourno');
greetWithDefault('Erdene-Ochir');
greetWithDefault('Namuun', 'Ni Hao');

// multiply гэдэг 2 тоон утга авдаг тэр 2 тоог үржүүлээд буцаадаг функц бичнэ үү
// гэхдээ энэ функц нь суман функц байна. Arrow Function

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(4, 5)); // 20

// Interface
interface User{
    name: string;
    age: number;
    email: string;
}

let user: User = {
    name: "Joshua",
    age: 25,
    email: "joshua@example.com"
}

interface Car {
    brand: string;
    model: string;
    year?: number // заавал биш шинж чанар
}

// lambhorgini-гийн 2025 оны загварыг тодорхойлно уу

// Tesla-гийн 2013 оны загварыг тодорхойлно уу.