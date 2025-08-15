const fs = require('fs');

const product = {
    "id": 123456,
    "name": 'Smartphone',
    "brand": 'samsung',
    "model": 'Galaxy s20',
    "features": {
        "processor": 'Exynos',
        "ram": '8 gb'
    }
};
let jsonString = JSON.stringify(product);

// Асинхронная запись в файл
fs.writeFile('data.json', jsonString, 'utf8', (err) => {
    if(err) {
        console.error("Ошибка при записи файла: ", err);
        return;
    }
    console.log("Файл был успешно записан.");
});

// Асинхронное чтение из файла
fs.readFile('data.json', 'utf-8', (err, data) => {
    if(err) {
        console.error("Ошибка при чтении файла: ", err);
        return;
    }
    const phone = JSON.parse(data);
    console.log("Прочитанный продукт: ", phone);
});