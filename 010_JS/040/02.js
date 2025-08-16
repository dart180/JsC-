// Пример использование try...catch для обработки ошибок
try {
    // попытка выполнения потенциально опасного кода
    console.log(nonExistentVariable); // обращение к несуществующей переменной
} catch (error) {
    // блок перехватывающий и обрабатывающий ошибку
    console.error('Произошла ошибка: ', error.message); // вывод соощениея об ошибке    
} finally {
    // блок который выполнится в любом случае , независимоо от того будет ошибка или нет
    console.log('Блок finally выполнен');
}
// пример использования Throw для генерации ошибок
try {
    // условие при котором будет сгенерирована ошибка
    let condition = false;
    if (!condition){
        throw new Error('Условие не выполнено'); //генерация ошибки
    }
} catch (error) {
    // обработка сгенерированной ошибки
    console.error('Произошла ошибка:', error.message);
}

// Пример создания пользовательского класса ошибок
class CustomError extends Error {
    constructor(message) {
        super(message); // вызов конструктора базового класса Error
        this.name = this.constructor.name; //Назначение имени ошибок
    }
}

// Пример использвоания пользовательского класса ошибок
try {
    // Условие при котором будет сгенерирована пользовательская ошибка
    let anotherCondition=false;
    if(!anotherCondition) {
        throw new CustomError('Специфичная ошибка'); // генерация пользовательской ошибки
    }
} catch (error) {
    // Обработка пользовательской ошибки
    console.error('Произошла ошибка:', error.message);
}