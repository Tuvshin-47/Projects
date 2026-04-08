console.log('DOM - Query Selector');

// querySelector
const myId = document.querySelector('#my-id');

console.log(myId);
myId.style.fontSize = '25px';
myId.textContent = 'My Id';

// query гэдэг классын утгыг font size-ийг нь өөрчилж
// текстийн өнгийг нь өөрчлөөрэй.


// p tag-нуудыг нь сонгож аваад харуулахдаа текстийг нь 
// orange, font size-ийг 35px, background Color улаан болгоорой


// querySelectorAll
const queries = document.querySelectorAll('.query');
console.log(queries);

