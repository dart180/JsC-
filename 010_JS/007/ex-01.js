let numberPeople = Number(prompt("Сколько человек ужинало: "));
let amountDinner = Number(prompt("Введите стоимость ужина: "));
let tips = Number(prompt("Введите процент чаевых: "));
let result = (amountDinner + amountDinner * tips/100)/numberPeople;
alert(`Стоимость ужина на каждого человека ${result}`);