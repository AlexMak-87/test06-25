// Находим элементы
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

const heading1 = document.querySelector("h1");
const heading2 = document.querySelector("h2");
const heading3 = document.querySelector("h3");

// Функция для изменения стилей при hover
function addHoverEffect(element, color, scale) {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = color;
        element.style.transform = `scale(${scale})`;
    });

    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = "lightgray";
        element.style.transform = "scale(1)";
    });
}

// Функция для изменения стилей заголовков при клике
function addClickEffect(heading, color, size) {
    heading.addEventListener("click", () => {
        heading.style.color = color;
        heading.style.fontSize = size;
        heading.textContent = heading.textContent + " 👍"; // добавляем emoji
    });
}

// Добавляем hover эффект на каждый div
addHoverEffect(box1, "lightcoral", 1.2);
addHoverEffect(box2, "lightgreen", 1.3);
addHoverEffect(box3, "lightskyblue", 1.4);

// Добавляем click эффект на заголовки
addClickEffect(heading1, "purple", "40px");
addClickEffect(heading2, "teal", "30px");
addClickEffect(heading3, "darkorange", "24px");
