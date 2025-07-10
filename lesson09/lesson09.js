const tabMenu = document.querySelectorAll('.tab_link');
const tabContent = document.querySelectorAll('.tab-pane');

console.log(tabMenu);
console.log(tabContent);

tabMenu.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
        // Удаляем классы активности у контента
        tabContent.forEach(tabItem => {
            tabItem.classList.remove('active');
        });
        // Показываем нужный контент
        tabContent[index].classList.add('active');

        // Убираем цвет фона у всех табов
        tabMenu.forEach(link => {
            link.style.backgroundColor = ''; // сбросим цвет
        });
        // Добавляем цвет активному табу
        tabLink.style.backgroundColor = 'lightblue';

        // Находим элемент внутри таба и вставляем номер
        const numberEl = tabLink.querySelector('.number_link');
        if (numberEl) {
            numberEl.textContent = index + 1; // индексация с 1
        }
    });
});
