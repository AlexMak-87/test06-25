'use strict'


// ✅ 1. Функция для проверки числового значения
function checkIsNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// ✅ 2. Получаем цену экрана с проверками
let screenPrice;

while (true) {
    let userInput = prompt("Сколько стоит экран?");
    
    // Проверяем на нажатие "Отмена"
    if (userInput === null) {
        console.log("Отмена пользователем");
        break;
    }

    // Удаляем пробелы по краям
    userInput = userInput.trim();

    // Проверяем, является ли число валидным
    if (checkIsNumber(userInput)) {
        screenPrice = parseFloat(userInput);
        break; // если число — выходим из цикла
    } else {
        alert("Введите, пожалуйста, корректное число");
    }
}

console.log("Цена экрана:", screenPrice);

// ✅ 3. Функция для получения стоимости дополнительных сервисов с циклом
const getAllServicePrices = function() {
    let sum = 0; // переменная для хранения суммы

    for (let i = 1; i <= 2; i++) {
        let service = prompt(`Какой сервис №${i} вам нужен?`);

        let price;
        while (true) {
            let priceInput = prompt(`Сколько будет стоить "${service}"?`);

            // Если нажали "Отмена"
            if (priceInput === null) {
                console.log("Отмена ввода стоимости");
                price = 0;
                break;
            }

            priceInput = priceInput.trim();

            if (checkIsNumber(priceInput)) {
                price = parseFloat(priceInput);
                break;
            } else {
                alert("Введите корректную цену для сервиса");
            }
        }

        sum += price; // накапливаем сумму
    }

    return sum;
};

let allServicePrices = getAllServicePrices();
console.log("Общая стоимость всех сервисов:", allServicePrices);

// ✅ 4. Считаем полную стоимость проекта
function getFullPrice() {
    return screenPrice + allServicePrices;
}

let fullPrice = getFullPrice();
console.log("Полная стоимость проекта:", fullPrice);

// ✅ 5. Вычитаем процент партнёру
function getServicePercentPrices() {
    let percentage = 15; // например, откат партнёру 15%
    return Math.round(fullPrice - (fullPrice * percentage / 100));
}

let servicePercentPrice = getServicePercentPrices();
console.log("Итоговая стоимость после отката партнёру:", servicePercentPrice);

// ✅ 6. Изменяем название проекта (из прошлого задания)
function getTitle(titleProject) {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}

let titleProject = prompt("Введите название проекта:");
if (titleProject !== null) {
    titleProject = getTitle(titleProject.trim());
}
console.log("Название проекта:", titleProject);

// ✅ 7. Рассчитываем скидку для клиента
function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log("Сделаем скидку 10%");
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        console.log("Сделаем скидку 5%");
    } else if (fullPrice > 0 && fullPrice <= 20000) {
        console.log("Скидка не предусмотрена");
    } else if (fullPrice === 0) {
        console.log("Цена равна 0, уточните расчёт");
    } else {
        console.log("Что-то пошло не так");
    }
}

// Вызов функции расчёта скидки
getRollbackMessage();

