console.log('DOM Recapture');

const mainElement = document.getElementsByTagName('main');
const mainContainer = mainElement[0];
console.log(mainContainer);

// card element үүсгэе

// 1. div container гэдэг класстай
const divContainer = document.createElement('div');
divContainer.classList.add('container');
// 2. түүний хүүхэд нь img tag тэгээд URL-ийг src дээрээ авна
// unsplash ашиглаж болно. өндөр өргөнийг өгөөрэй
const imageElement = document.createElement('img');
imageElement.src = 'https://images.unsplash.com/photo-1732645023408-6e99df42f09e?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
imageElement.style.width = '300px';
imageElement.style.height = '300px';
divContainer.appendChild(imageElement);
// 3.  бас нэг хүүхэд нь p tag байх бөгөөд id нь price
// гэдэг байх бөгөөд дурын үнийг нэмж өгөөрэй.
const priceElement = document.createElement('p');
priceElement.textContent = '10000$';
divContainer.appendChild(priceElement);
// 4. бас нэг хүүхэд нь div inner-container гэдэг класстай
// энэ tag нь дотроо 2 хүүхэдтэй бөгөөд 
const innerContainerElement = document.createElement('div');
innerContainerElement.classList.add('inner-container');
divContainer.appendChild(innerContainerElement);
// 2 p tag байна. Нэгд нь бранд нэр нөгөөд нь бүтээгдэхүүний нэр байна
// энэ 2 content нь зэрэгцээ оршино.
const brandElement = document.createElement('p');
brandElement.id = 'gucchi';
brandElement.textContent = 'Gucci';
innerContainerElement.appendChild(brandElement);

const titleElement = document.createElement('p');
titleElement.textContent = 'Gucci Gucci Sweater';
innerContainerElement.appendChild(titleElement);
// дээр элементүүдийг createElement-ээр үүсгээрэй.
// өгөгдсөн класс болон id-г ашиглан дизайн өгөөрэй.

mainContainer.appendChild(divContainer);
console.log(divContainer.parentElement);
console.log(divContainer.parentNode);
// divContainer хэдэн хүүхэдтэй вэ?
console.log(divContainer.childElementCount);
console.log(divContainer.children.length); 
console.log(divContainer);