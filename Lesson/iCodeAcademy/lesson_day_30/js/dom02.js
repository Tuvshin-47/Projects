console.log('DOM - Get elements by tag name');


const liElements = document.getElementsByTagName('li');
console.log(liElements);

for(let i = 0; i < liElements.length; i++){
    const element = liElements[i];
    console.log(element);
    element.style.fontSize = '25px';
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
}
