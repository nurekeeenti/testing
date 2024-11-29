document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    console.log('Форма отправлена'); // Проверка, вызывается ли обработчик

    // Остальная часть вашего кода...
});


document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Получаем значения email и password из формы
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('newpassword').value.trim();

    let isValid = true;

    // Очищаем предыдущие ошибки
    document.querySelectorAll('.error').forEach(el => el.textContent = "");

    // Проверка на пустое поле email
    if (email === "") {
        document.getElementById('nameError').textContent = "Пожалуйста, введите вашу почту";
        isValid = false;
    }

    // Проверка на пустое поле пароля
    if (password === "") {
        document.getElementById('surnameError').textContent = "Пожалуйста, введите пароль";
        isValid = false;
    }

    // Если есть ошибки, отменяем отправку
    if (!isValid) return;

    // Данные для отправки на сервер
    const data = { email, password };

    try {
        // Отправляем данные на сервер для авторизации
        const response = await fetch('http://185.198.152.96:8000/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            // Логин успешен, сохраняем токен и перенаправляем на главную страницу
            localStorage.setItem('token', result.token);
            alert('Вход выполнен успешно!');
            window.location.href = 'index.html';
        } else {
            // Отображаем сообщение об ошибке от сервера
            alert(result.detail || 'Ошибка входа: неверный email или пароль');
        }
    } catch (error) {
        // Логирование и сообщение об ошибке в случае сбоя сети или другой ошибки
        console.error('Ошибка:', error);
        alert('Произошла ошибка при попытке входа. Попробуйте снова позже.');
    }
});


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращает перезагрузку страницы
    // Здесь вы можете добавить свою логику проверки и отправки данных
    const email = document.getElementById('email').value;
    const password = document.getElementById('newpassword').value;
    console.log("Email:", email, "Password:", password);
});



document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановить стандартное поведение формы

    // Здесь можно добавить валидацию полей (по желанию)
    
    // Выводим сообщение об успешном входе
    alert('Login successful');

    // Переход на страницу champions.html
    window.location.href = 'profilepage.html'; 
});

