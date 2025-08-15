// Доступ к символам
let str = "JavaScript"
console.log(str[0]); // выведем J
console.log(str.charAt(1)); // тоже что и str[1], выведем a

// методы преобразования
str = "JavaScript";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// поиск подстроки
console.log(str.indexOf("Script")); // выведет 4
console.log(str.lastIndexOf("a")); // выведет 3
console.log(str.includes("Java")); // выведет true

// обрезка строки
console.log(str.substring(0, 4)); //выведет Java
console.log(str.slice(-6)); //выведет Script
console.log(str.slice(4)); // выведет Script

// trimStart, trim, trimEnd
str = "   Hello, world!   ";
console.log(str.trimStart());  //"Hello, world!   "
console.log(str.trimEnd());  //"   Hello, world"
console.log(str.trim());  //"Hello, world!"

// методы преобразования
// split
str = "JavaScript is awesome";
console.log(str.split(" ")); // получим массив из отдельных строк ["JavaScript", "is", "awesome"]

// replace
str = "JavaScript";
console.log(str.replace("Java", "Type")); // "TypeScript"
