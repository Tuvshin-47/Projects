
// Promise
fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
// .then(console.log);

// console.log('Fetching product');
// console.log(fetch('https://dummyjson.com/products/1')); // Promise Object

fetch('https://dummyjson.com/products/1')
    .then(response => {
        // console.log(response); // data Response Object
        // console.log(response.json()); // Promise Object
        return response.json();
    }).then((data => {
        // console.log(data);

    }));

// Async Await 
/// function үүсгэх

const loadingText = 'Waiting....';
let loading = true;
const resultElement = document.getElementById('result');
async function fetchData() {
    console.log('fetch async awwait =======================')
    const fetchedData = await fetch('https://dummyjson.com/products/1');
    console.log(fetchedData); // Response Object
    const jsonData = await fetchedData.json(); // Promise Object
    console.log(jsonData);
    console.log('fetch async awwait =======================')
    loading = false;
    resultElement.textContent = 'loaded';
}

// function дуудах буюу call
// fetchData(); 
while (loading) {
    resultElement.textContent = loadingText;
    setTimeout(() => {
        fetchData();
    }, 3000);
    loading = false;
} 


