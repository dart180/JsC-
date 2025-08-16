const numbers = [1,2,3,6,7,40,3,-2,6,5,9];

const div2 = el => el % 2 === 0;
function getItems(items, checkItem) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if(checkItem(item)) {
            result.push(item);
        }
    }
    return (result);
}
const result = getItems(numbers, div2);
const result1 = getItems(numbers, el => el % 5 ===0);
const result2 = getItems(numbers, el => el < 0 );

console.log(result2);
// преобразование filter;
const resFilter = numbers.filter(e => e < 0);
console.log(resFilter);

function select(items, logic){
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        result.push(logic(element));
    }
    return result;
}

// const resSelect = select(numbers, e=>e**2);
const resSelect = numbers.map(e => e**2);
console.log(resSelect);