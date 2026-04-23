// Подгрузка текущего года в футер
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Функционал гамбургер-меню
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Обработка формы контактов
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Получение значений полей
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Валидация
    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля формы.');
        return;
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return;
    }

    // Имитация отправки формы (в реальном проекте здесь был бы AJAX запрос)
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');

    // Очистка формы после отправки
    contactForm.reset();
});

// Обработка формы карьеры
const careerForm = document.getElementById('careerForm');

if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Получение значений полей
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const position = document.getElementById('position').value;
        const message = document.getElementById('message').value.trim();
        const portfolio = document.getElementById('portfolio').value.trim();

        // Валидация
        if (!name || !email || !position || !message) {
            alert('Пожалуйста, заполните все обязательные поля формы.');
            return;
        }

        // Проверка email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Пожалуйста, введите корректный адрес электронной почты.');
            return;
        }

        // Имитация отправки формы (в реальном проекте здесь был бы AJAX запрос)
        alert('Спасибо за ваше резюме! Мы рассмотрим вашу кандидатуру и свяжемся с вами.');

        // Очистка формы после отправки
        careerForm.reset();
    });
}