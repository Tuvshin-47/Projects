console.log('JS DOM - CreateElement');

const containerElement = document.getElementsByClassName('container'); // [element]
console.log(containerElement[0]);
const insideContainerArrayElement = containerElement[0];
// insideContainerArrayElement-ийг 300px, 400px-гийн урт өндөртэй бас арын өнгийг нь
// өөрчлөөд оруулна уу.
insideContainerArrayElement.style.width = '300px';
insideContainerArrayElement.style.height = '400px';
insideContainerArrayElement.style.backgroundColor = 'blue';

// шинээр head гэдэг div элемент үүсгээд дугуй болгоод тэгээд арынх нь өнгийг өөрчилье.
const headElement = document.createElement('div');
headElement.classList.add('head');
headElement.style.height = '50px';
headElement.style.width = '50px';
headElement.style.backgroundColor = 'tomato';
// border radius өгнө үү


insideContainerArrayElement.appendChild(headElement);
