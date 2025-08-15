let sumPoints = 0;

let secondQuestion = prompt("перевод слова 'cat'? ['кошка']/['собака']"  ).toLowerCase();
if(secondQuestion === 'кошка'){
    alert("Верно");
    sumPoints += 10;
} else {
    alert("Неправильно")
}

alert(`Ваш результат: ${sumPoints}`);