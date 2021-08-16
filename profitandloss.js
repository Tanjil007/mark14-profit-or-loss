const initialPrice = document.querySelector('#initial-price');
const stockQuantity = document.querySelector('#stock-price');
const currentPrice = document.querySelector('#current-price');
const submitButton = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');



function submitHandler() {
    let ip = Number(initialPrice.value);
    let sq = Number(stockQuantity.value);
    let crrp = Number(currentPrice.value);
    if(ip>0 && sq>0 && crrp>0) {
        calculateProfitAndLoss(ip, sq, crrp);
    }
    else {
        outputBox.innerText = `Please enter valid number`
    }
};

submitButton.addEventListener('click', submitHandler)

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {

        //loss logic
        let loss = (initial - current) * quantity;
        console.log(loss);
        let lossPercentage = (loss / (initial * quantity)) * 100;
        outputBox.style.color = 'red';
        showMessage(`Yay!! Your Loss is ${loss} and Loss Percentage is ${lossPercentage}%`);

    } else if (initial < current) {
        //profit logic
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / (initial * quantity)) * 100;
        outputBox.style.color = 'green';
        showMessage(`Yay!! Your Profit is ${profit.toFixed(2)} and profit Percentage is ${profitPercentage.toFixed(2)}%`);
    } else {
        //other logic
        outputBox.style.color = '#f3f3f3'
        showMessage('No pain no gain and no gain no pain');
    }
};



function showMessage(message) {
    outputBox.innerText = message;
}