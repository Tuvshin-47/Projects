const fruits: string[] = ['banana', 'apple', 'cherry'];
const numbers: number[] = [4, 2, 5, 1, 3];
const nums: number[] = [40, 100, 1, 5, 25, 10];
interface Person {
    name: string;
    age: number;
}
const people: Person[] = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 28},
    {name: 'Bob', age: 42}
]

export function arraySort(){
    console.log(fruits);
    fruits.sort();
    console.log(fruits);

    // sort numbers
    console.log(numbers);
    numbers.sort();
    console.log(numbers);

    // sort nums
    console.log(nums);
    nums.sort((a, b) => a - b); // тоог өсөх дарааллаар эрэмбэлэх
    console.log(nums);
    nums.sort((a,b) => b - a); // тоог буурах дараалаар эрэмбэлэх
    console.log(nums);

    // sort by age
    people.sort((a, b) => a.age - b.age);
    console.log(people);

    // sort by name
    people.sort((a, b)=> a.name.localeCompare(b.name));
    console.log(people);
}