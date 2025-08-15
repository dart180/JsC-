// Создание объекта Date, представляющего текущую дату и время
let now = new Date();
console.log(now);

// СОздание объекта Date из строки в формате ISO 8601
let dateStr = new Date("2064-07-10");
console.log(dateStr);

// Создание объета Date из компонентов даты и времени
// месяцы считаются с 0
let dateComponents = new Date(2064, 2, 10, 14, 30, 0);
console.log(dateComponents);

// Создание объекта Date из миллисекунд с начала эпохи Unix
let dateFromMs = new Date(10234);
console.log(dateFromMs);

// Получение года от текущей даты
console.log(now.getFullYear());

// Получение месяца от текущей даты
console.log(now.getMonth());

// Получение дня от текущей даты
console.log(now.getDate()); 

// Получение часов от текущей даты
console.log(now.getHours());

// Получение дня недели текущей даты(0-6)
// 0-воскресенье, 1-понедельник и тд
console.log(now.getDay());
