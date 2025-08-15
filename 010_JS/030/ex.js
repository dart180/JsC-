const person = {
    name: "Злата",
    age: 30,
    greet: function() {    // функция в контексте объекта это метод
        console.log(`Привет! Я ${this.name}!`);
    }
};
// содержимое объекта можно менять 
person.name = "Jonn";
console.log(person.greet())

// для сохранения контекста можно использовать стрелочную функцию
person.newLogic = () => console.log("текст");
person.newLogic();

// создание через конструктор
const car = new Object();
car.mark = "Toyota";
car.model = "Corolla"
car.year = 2020;

console.log(car);

// создание через функцию конструктор
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book = new Book("Книга", "Автор книги")
console.log(book);

for(const key in person) {
    const fun = person[key];
    if (typeof fun === "function"){
        fun();
    }
    
}