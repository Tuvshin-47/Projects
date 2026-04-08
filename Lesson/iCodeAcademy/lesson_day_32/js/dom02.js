console.log('JS Cookie');

function setCookie(key, value, days){
    const d = new Date();
    d.setTime(d.getTime() + (days * 86400000));
    document.cookie = `${key}=${encodeURI(value)};expires=${d.toUTCString()};`;
}

function getCookie(key){
    if(document.cookie){
        const pairs = decodeURI(document.cookie).split(';');
        let i, name, value;
        for(i = 0; i < pairs.length; i++){
            name = pairs[i].split('=')[0].trim();
            if(name == key){
                value = pairs[i].split('=')[1];
            }
        }
        return value;
    }
}

setCookie('Student', 'Tuguldur-Nippon Class', 7);

const mainElement = document.getElementsByTagName('main'); // [main]
const containerElement = mainElement[0]; // main

const ulElement = document.createElement('ul');
containerElement.appendChild(ulElement);

console.log(getCookie('Student')); // 
const liElement = document.createElement('li');
liElement.innerHTML = getCookie('Student');
ulElement.appendChild(liElement);
//