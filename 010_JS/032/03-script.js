// получаем ссылку на элемент и кнопку
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

// Добавляем обработчик события клика на кнопку
animateBtn.addEventListener("click", function(){
    // Анимируем изменение цвета фона
    box.style.transition = "background-color 5s ease-in-out";
    box.style.backgroundColor = "blue";

    // анимируем изменения размера
    setTimeout(() => {
        box.style.transition = "width 3s ease-in-out, height 2s ease-in-out";
        box.style.width = "300px";
        box.style.height = "600px";
    }, 1000)
})