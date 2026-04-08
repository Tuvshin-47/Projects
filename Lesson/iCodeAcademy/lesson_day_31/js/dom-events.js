console.log('JS events - HTML event');

function youClickedMe() {
    const inputElement = document.getElementById('my-input');
    console.log(inputElement.value);

    const contentElement = document.querySelector(".content");
    console.log(contentElement);

    contentElement.textContent = inputElement.value;
}

const URL = 'https://dummyjson.com/products/search?q=phone';

function searchProducts(){
    const searchProductInput = document.getElementById('search-product');

    const product_url = `https://dummyjson.com/products/search?q=${searchProductInput.value}`;


    fetch(product_url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Show me the looked for products card
        });
}
