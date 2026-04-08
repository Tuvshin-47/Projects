console.log('DOM - Get Element By id');

const myIdElement = document.getElementById('myid');
console.log(myIdElement);

myIdElement.style.color = 'blue';
myIdElement.textContent = 'This is my Id text';

// fontsize, background color өөрчилнө үү.
myIdElement.style.fontSize = '35px';
myIdElement.style.backgroundColor = 'tomato';

// inner HTML дээр нь нэмэх

myIdElement.innerHTML += `
    <p>This is child element </p>
    <textarea> This is text areah </textarea>
`

myIdElement.innerText += `
        <p>This is another paragraph</p>
    `