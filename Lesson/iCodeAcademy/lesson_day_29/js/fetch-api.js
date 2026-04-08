console.log('fetch API');

// https://dummyjson.com/products/1

const URL = 'https://dummyjson.com/products/1';

function fetchData(url) {
    const result = fetch(url); // Promise
    result
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const productContainerElement = document.getElementById('product-container');
            console.log(productContainerElement);
            productContainerElement.innerHTML = `<p>${data.title}</p>`;
            productContainerElement.innerHTML += `<p>${data.price}</p>`;

        })
}

fetchData(URL);

const PRODUCTS_URL = 'https://dummyjson.com/products';
const fetchProducts = function (url) {
    const result = fetch(url);
    result
        .then((response) => response.json())
        .then((data) => {
            console.log('products', data);
            const products = data.products;
            console.log(products);
            const productsContainerElement = document.getElementById('products-container');

            for(let i = 0; i < products.length; i++){
                productsContainerElement.innerHTML += `
                    <div class="card-element">
                            <p>${products[i].title}</p>
                            <p>${products[i].price}</p>
                    </div>
                `;

            }

        })
}
fetchProducts(PRODUCTS_URL);