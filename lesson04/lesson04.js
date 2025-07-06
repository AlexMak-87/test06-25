// let x = 11;

// if(x > 10) {
//     console.log('Условие верно')
// } else {
//     console.log('Условие не верно')
// }



// let a =5
// let b ='10'
// let res = a + +b

// console.log(a.toString());
// console.log(res);
// console.log(typeof a);
// console.log(typeof b);

// console.log(a+b);

// alert('Заражение компьютера')
 
// let age = +prompt('Укажите Ваш возраст'); // 15+10=25
//     let a = 10;
//     let res = age + a;
//     console.log(res);
//     console.log(typeof age);


let titleProject = prompt("Название проекта?");
console.log("Название проекта:", titleProject);

let screensValue = prompt("Какой тип экрана необходим: шаблонные, с уникальным дизайном, с анимациями");
console.log("Типы экранов:", screensValue);

let responsive = prompt("Нужна ли респонсивность? Введите 'да' или 'нет':"); // Вывод сообщения
let booleanValue = responsive.toLowerCase() === 'да';

let service1 = prompt("Какой нужен сервис?");
console.log("Какой нужен сервис?:", service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log("Сколько это будет стоить?:", servicePrice1);

let service2 = prompt("Какой ещё нужен сервис?");
console.log("Какой ещё нужен сервис?:", service2);

let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");
console.log("Сколько будет стоить этот второй сервис?:", servicePrice2)

let screenPrice = 1000;
let percentage = 10;
let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;

let servicePercentPrice = Math.round(+fullPrice - (+fullPrice / 100 * +percentage));

console.log(servicePercentPrice)

if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%")
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%")
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена")
} else if (fullPrice === 0) {
    console.log("Цена равна нулю. Скидка невозможна.")
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так")
} else {
    console.log("Некорректное значение цены");
}