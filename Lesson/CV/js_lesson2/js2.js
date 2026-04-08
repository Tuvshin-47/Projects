const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const resultText = document.getElementById("resultText");

addBtn.addEventListener("click", function() {  
    let value1 = parseFloat(n1.value);
    let value2 = parseFloat(n2.value);
    let sum = Number(value1) + Number(value2);
    

    if(!isNaN(sum)) {
        resultText.innerHTML = "Result: " + sum;
        resultText.style.color = "green";
    } else {
        resultText.innerHTML = "Please enter valid numbers.";
    }
});