const display = document.getElementById('display');
const btnOne = document.getElementById('btn1');
let cart = 0;

function addToCart(){
    cart+=1;
    display.textContent = `${cart}`;
    console.log(`Cart: ${cart}`);
}



