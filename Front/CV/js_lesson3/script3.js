let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry
console.log(fruits[4]); // Output: elderberry   
fruits[1] = "blueberry";
console.log(fruits);


console.log(fruits[0]); 
console.log(fruits[1]);

console.log(fruits.length);

let students = ["Alice", "Bob", "Charlie"];

students.forEach(function(student) {
    console.log(students[1]);
});



const foods = ["pizza", "burger", "sushi", "pasta", "salad"];
const list = document.getElementById("foodList");

foods.forEach(function(food) {
    let li = document.createElement("li");
    li.innerText = food;

    list.appendChild(li);
});


const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2021,
    color: "Space Gray" ,
    specs: [{ram: "16GB", storage: "512GB SSD"}, {ram: "32GB", storage: "1TB SSD"}]
}

console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.specs[0].ram);

const products = [
    {id: 1, name: "Laptop", price: 999.99},
    {id: 2, name: "Smartphone", price: 499.99},
    {id: 3, name: "Tablet", price: 299.99  }
]


console.log(products[0].name);
console.log(products[1].price);

const productContainer = document.getElementById("product-container");

const items = [
    { name: "HTML Хичээл", status: "Дууссан", color: "green" },
    { name: "CSS Хичээл", status: "Үзэж байгаа", color: "orange" },
    { name: "JS Хичээл", status: "Эхлээгүй", color: "red" }
];

items.forEach(items => {
    const cardHTML = `
        <div class="card" style="border-left: 5px solid ${items.color}">
            <h4>${items.name}</h4>
            <p>Төлөв: <strong>${items.status}</strong></p>
        </div>
    `;  
    productContainer.innerHTML += cardHTML;
});