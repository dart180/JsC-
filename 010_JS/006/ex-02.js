// 1. Преобразование к строке
let numToStr = 10;
let toStr = String(numToStr);
console.log(toStr);
console.log(typeof numToStr);
console.log(typeof toStr);

// 2. Преобразование к числу
let strToNum = '10';
console.log(Number(strToNum));
console.log(Number(11 == 11));

// 3. Преобразование к логическому типу
let strToBool = '';
console.log(Boolean(strToBool));

// 4. Неявное преобразование
let implicitConversion = 10 + "20"
console.log(implicitConversion)

// 5. Неявное преобразование при сравнении
let num = 10
let str = "10"
console.log(num == str);
console.log(num === str);

// непонимание различий между типами данных
let confusionExample = num + str;
console.log(confusionExample);