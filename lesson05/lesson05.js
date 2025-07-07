// Данные из предыдущего урока:
let titleProject = "оЦеНкА стОимОсти";
let screenPrice = 5000;
let service1 = "SEO оптимизация";
let servicePrice1 = 8000;
let service2 = "Настройка рекламы";
let servicePrice2 = 12000;
let percentage = 15;

// 1. Функция, которая считает стоимость всех услуг (function expression)
const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();
console.log("Стоимость всех услуг:", allServicePrices);

// 2. Функция, которая считает полную стоимость проекта (function declaration)
function getFullPrice() {
    return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice();
console.log("Полная стоимость проекта:", fullPrice);

// 3. Функция, которая форматирует название проекта (первый символ заглавный, остальные строчные)
function getTitle() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}
titleProject = getTitle();
console.log("Название проекта (отформатированное):", titleProject);

// 4. Функция для расчёта суммы после вычета процента подрядчику
function getServicePercentPrices() {
    return Math.round(fullPrice - (fullPrice * percentage / 100));
}
let servicePercentPrice = getServicePercentPrices();
console.log("Стоимость после вычета процента подрядчику:", servicePercentPrice);

// 5. Функция, которая рассчитывает скидку для клиента и выводит в консоль
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

// Вызов последней функции
getRollbackMessage();
