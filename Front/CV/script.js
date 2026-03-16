const inputField = document.getElementById('userName');
const submitBtn = document.getElementById('submitBtn');
const displayArea = document.getElementById('responseArea');

submitBtn.addEventListener('click', function() {
    const name = inputField.value;

    if (name.trim() !== '') {   
        displayArea.innerHTML = `<p style="color: green;">Сайн уу, <strong>${name}</strong>! Өнөөдөр суралцахад сайхан өдөр байна.</p>`;

        inputField.value = "";
    } else {
        displayArea.innerHTML = `<p style="color: red;">Та нэрээ оруулна уу!</p>`;
    }
});