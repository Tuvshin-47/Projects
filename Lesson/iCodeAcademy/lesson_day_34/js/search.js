let globalData = []; // save fetched data

const loadingText = 'Waiting ....';

async function fetchData(searchTerm = '') {
    console.log(searchTerm);
    try {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <div class="loading">${loadingText}</div>
        `;
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await response.json();
        globalData = data.products;
        console.log(globalData);
        displayData(globalData); // rendering to the HTML
    } catch (error) {
        console.error('Error occurred to load data ', error);
        document.getElementById('results').innerHTML = `
            <div class="loading">Error during Fetch. try again later</div>
        `;
    }
}




function displayData(products) {
    console.log(products);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (products.length === 0) {
        resultsDiv.innerHTML = `
            <div class='loading'>No product Found</div>
        `;
    }
    products.forEach((product) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Brand: ${product.brand}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating}/5</p>
            <p>${product.description}</p>
        `
        resultsDiv.appendChild(itemDiv);
    })
}

function searchData() {
    const searchTerm = document.getElementById('searchInput');
    fetchData(searchTerm.value);
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchData);


const debounceSearch = debounce(searchData);
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchData();
    } else {
        debounceSearch();
    }
})

function debounce(callbackFunc, timeout = 300) {
    let timer;
    return (...args) => {
        console.log('args', args);
        clearTimeout(timer);
        timer = setTimeout(() => callbackFunc.apply(this, args), timeout);
    }
}


// fetchData(); // searchTerm = ''
setTimeout(fetchData, 1000);
// fetchData('iPhone');