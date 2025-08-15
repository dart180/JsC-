// получаем ссылку на кнопку и контейнер списка
const addListBtn = document.getElementById("addListBtn");
const listContainer = document.getElementById("listContainer");

// // добавляем обработчик события клика на кнопку
// addListBtn.addEventListener("click", function (){
//     // Создаем новый элемент списка
//     const listItem = document.createElement("li");
//     listItem.textContent = "Новый элемент списка";

//     // добавляем элемент в контейнер списка
//     listContainer.appendChild(listItem);

// });
// анонимные функции удобны когда функция используется один раз
// добавляем обработчик события клика на кнопку
addListBtn.addEventListener("click", function (){
    for (let i = 0; i < 5; i++){   
         // Создаем новый элемент списка
        const listItem = document.createElement("li");
        listItem.textContent = `${i + 1}-й элемент списка`;

        // добавляем элемент в контейнер списка
        listContainer.appendChild(listItem);}
});