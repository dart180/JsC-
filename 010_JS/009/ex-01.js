let numberPeople = Number.parseInt(prompt("Сколько человек ужинало: "));
let amountDinner = Number.parseFloat(prompt("Введите стоимость ужина: "));
let tips = Number.parseFloat(prompt("Введите процент чаевых: "));
if(isNaN(numberPeople)
|| isNaN(amountDinner)
|| isNaN(tips)
|| numberPeople <= 0
|| amountDinner <= 0 
|| tips < 0
) {
    alert("ошибка ввода данных");
} else {
    let result = ((amountDinner + amountDinner * tips/100)/numberPeople).toFixed(2);
    alert(`Стоимость ужина на каждого человека ${result}`);
}