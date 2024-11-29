document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    if (!validateStep2()) return;

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newpassword').value;
    const role = "user"; 
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const data = { name, surname, email, password, role, gender }; 

    await submitRegistration(data);
});

async function submitRegistration(data) {
    try {
        const response = await fetch('http://185.198.152.96:8000/Registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Ответ сервера:', result);

        if (response.ok) {
            alert('Регистрация выполнена успешно!');
            localStorage.setItem('token', result.token); 
            window.location.href = 'http://127.0.0.1:5500/Web-Frontend-6-assignment-main/loginpage.html';
        } else {
            alert(result.detail || 'Произошла ошибка');
        }

    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    }
}

function validateStep2() {
    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.textContent = "");

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Пожалуйста, введите ваше имя.";
        isValid = false;
    }

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!emailInput.validity.valid) {
        emailError.textContent = "Пожалуйста, введите действительный адрес электронной почты.";
        isValid = false;
    }

    const newpasswordInput = document.getElementById("newpassword");
    const newpasswordError = document.getElementById("newpasswordError");
    if (newpasswordInput.value.trim() === "") {
        newpasswordError.textContent = "Пожалуйста, введите новый пароль.";
        isValid = false;
    }

    const surnameInput = document.getElementById("surname");
    const surnameError = document.getElementById("surnameError");
    if (surnameInput.value.trim() === "") {
        surnameError.textContent = "Пожалуйста, введите вашу фамилию.";
        isValid = false;
    }

    const genderError = document.getElementById("genderError");
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderError.textContent = "Пожалуйста, выберите пол.";
        isValid = false;
    }

    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (newpasswordInput.value !== passwordInput.value) {
        passwordError.textContent = "Пароли не совпадают.";
        isValid = false;
    }

    return isValid;
}
