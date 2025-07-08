// Функция для проверки на число (из прошлого ДЗ)
function checkIsNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// Главная функция игры
const gameBotFunction = function () {
    // 1. Генерация случайного числа
    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let mysteryNumber = randomGenerate(1, 100); // Загаданное число
    let tries = 5; // Количество попыток

    console.log("Загаданное число для отладки:", mysteryNumber); // Чтобы тестировать

    // 2. Рекурсивная функция игры
    function getResult() {
        let userAnswer = prompt("Угадайте число от 1 до 100:");

        if (userAnswer === null) {
            alert("Вы завершили игру");
            return;
        }

        userAnswer = userAnswer.trim();

        // Проверка, что введено именно число
        while (!checkIsNumber(userAnswer) || userAnswer === "") {
            userAnswer = prompt("Введите корректное число от 1 до 100:");
            if (userAnswer === null) {
                alert("Вы завершили игру");
                return;
            }
            userAnswer = userAnswer.trim();
        }

        let answerNum = parseFloat(userAnswer);

        // 3. Сравниваем с загаданным числом
        if (answerNum < mysteryNumber) {
            alert(`Загаданное число больше. Осталось попыток: ${tries}`);
        } else if (answerNum > mysteryNumber) {
            alert(`Загаданное число меньше. Осталось попыток: ${tries}`);
        } else {
            let playAgain = confirm("Поздравляем! Вы угадали число. Хотите сыграть ещё раз?");
            if (playAgain) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100); // Заново загадываем число
                console.log("Новое загаданное число для отладки:", mysteryNumber);
                getResult(); // начинаем заново
                return;
            } else {
                alert("Спасибо за игру!");
                return;
            }
        }

        // 4. Вычитаем попытку и проверяем, есть ли они ещё
        tries--;

        if (tries > 0) {
            getResult(); // если попытки есть, продолжаем игру
        } else {
            let tryAgain = confirm("Попытки закончились. Хотите попробовать снова?");
            if (tryAgain) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                console.log("Новое загаданное число для отладки:", mysteryNumber);
                getResult(); // заново запускаем
            } else {
                alert("Вы завершили игру");
                return;
            }
        }
    }

    // Запускаем игру
    getResult();
};

// Запускаем весь процесс
gameBotFunction();
