const openModalButton = document.getElementById('openModal');
const modalWindow = document.getElementById('myModal');
const closeModalButton = document.getElementsByClassName('closeButton')[0];

openModalButton.addEventListener('click', function(){
    modalWindow.style.display = 'block';
});

closeModalButton.addEventListener('click', function(){
    modalWindow.style.display = 'none';
});

modalWindow.addEventListener('click', function(event){
    if(event.target == modalWindow){
        modalWindow.style.display = 'none';
    }
})