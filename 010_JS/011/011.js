let sumPoints = 0;
let firstQuestion = Number.parseInt(prompt("Сколько будет 2*2?"));

if(firstQuestion === 4){
    alert("Правильно!");
    sumPoints += 10;
} else {
    alert("Ответ неверный");
}

let secondQuestion = Number.parseFloat(prompt("сколько килограмм в одном фунте?"));
if(secondQuestion === 0.254){
    alert("Верно");
    sumPoints += 10;
} else {
    alert("Неправильно")
}

alert(`Ваш результат: ${sumPoints}`);