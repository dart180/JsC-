const btn = document.getElementById("btnCalc");
btn.addEventListener("click", btnCalc);

function btnCalc(){
    const amountDinner = Number(document.getElementById("amountDinner").value);
    const tips = Number(document.getElementById("tips").value);
    const numberPeople = Number(document.getElementById("numberPeople").value);
    let amountTips = amountDinner * tips / 100;
    let totalSum = amountDinner + amountTips;
    let amountForPeople = totalSum/numberPeople;
    const outAmountTips = document.getElementById("amountTips");
    const outTotalAmount = document.getElementById("totalAmount");
    const outAmountInPeople = document.getElementById("amountInPeople");

    if(numberPeople <= 0
    || amountDinner <= 0 
    || tips < 0
    ) {
        alert("ошибка ввода данных");
    } else {
        outAmountTips.textContent = `Чаевые: ${amountTips}`;
        outTotalAmount.textContent = `Общая сумма: ${totalSum}`;
        outAmountInPeople.textContent = `Сумма на человека: ${amountForPeople}`;
    }
}

