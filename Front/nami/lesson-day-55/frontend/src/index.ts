document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '<h1> Hello TS</h1>';
  }
});

console.log('Hello Typescript');
console.log('LD-55');

// basic data types
let age: number = 45;
console.log(age);

age = 46;
console.log(age);

let price: number = 99.99;
console.log(`PRICE${price}`);

// string
let firstName: string = 'John';
let message: string = `HELLO${firstName}`;
console.log(message);

// booleAN
let isActibe: boolean = true;
console.log(`boolean value:${isActibe}`);
// array
let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(`Number arrays: ${numbers}`);

// string turultei array
let familyName: string[] = ['Bars', 'naraa', 'nomi'];
console.log(`family nem: ${familyName}`);
// boolean turultei array

//
let person: [string, number] = ['John', 25];
console.log(`Person array ${person}`);
// enum type
enum Color {
  RED,
  GREEN,
  BLUE,
}
let favoriteColor: Color = Color.BLUE;
console.log(`FAVCOLOR ${favoriteColor}`);

// any type
let notSUre: any = 4;
notSUre = 'Maybe text';
notSUre = true;
notSUre = ['HI', 'HRU', 'ksjjcb'];
console.log(notSUre);

// Functions
function logMessage(): void {
  console.log('Hello Type');
}
logMessage();

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addTwoNumbers(4, 5));

function greet(name: string, greerting?: string): string {
  if (greerting) {
    return `${greerting}, ${name}`;
  }
  return `Sainuu, ${name}`;
}
console.log(greet('khangaihuu', 'Guten Tag'));
console.log(greet('Tuguldur'));

// multiply gedeg 2
let multiply = (c: number, d: number): number => c * d;

console.log(multiply(4, 5));

// interface
interface User {
  name: string;
  age: number;
  email: string;
}

let user: User = {
  name: 'Joshua',
  age: 25,
  email: 'joshua@get',
};
console.log(user);

// lamborghini 2025 onii zagvar

interface Car {
  brand: string;
  model: string;
  year?: number;
}
let car: Car = {
  brand: 'lamgorg',
  model: 'uranus',
  year: 2000,
};
console.log(car);
