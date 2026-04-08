interface Animal {
    name: string;
    age: number;
    weight: number;
    height: number;
    legs: number;
}

const cow: Animal = {
    name: "Moo",
    age: 10,
    weight: 100,
    height: 100,
    legs: 0
}

console.log(cow);