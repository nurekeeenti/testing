const readMoreBtns = document.querySelectorAll('.readMoreBtn');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const extraContent = btn.nextElementSibling; 
        const isVisible = extraContent.style.display === 'block';
        extraContent.style.display = isVisible ? 'none' : 'block';
        btn.textContent = isVisible ? 'Read More' : 'Read Less';
    });
});

const ratingCards = document.querySelectorAll('.card');

ratingCards.forEach(card => {
    const stars = card.querySelectorAll('.star');
    const ratingText = card.querySelector('.rating-text');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.dataset.value;
            const championName = star.dataset.champion;

            stars.forEach(s => {
                s.classList.remove('active');
            });

            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }

            ratingText.textContent = `You rated ${championName} ${rating} star(s)`;
        });
    });
});

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const showTimeBtn = document.getElementById('showTimeBtn');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    themeToggleBtn.textContent = themeToggleBtn.textContent === 'Dark Theme' ? 'Light Theme' : 'Dark Theme';
});

showTimeBtn.addEventListener('click', function() {
    alert(new Date().toLocaleTimeString());
});

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; 
    sound.play();
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Enter task');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center fade-in';
    
    listItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="btn btn-success btn-sm complete-btn">Complete</button>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
    playSound('addSound');

    listItem.querySelector('.complete-btn').addEventListener('click', () => {
        listItem.querySelector('span').style.textDecoration = 'line-through';
        playSound('completeSound'); 
    });

    listItem.querySelector('.delete-btn').addEventListener('click', () => {
        listItem.remove();
        playSound('deleteSound');
    });
}
function playExerciseSound1() {
    const audio = new Audio('Sounds/sound1.mp3');
    audio.play();
}


function playExerciseSound2() {
    const audio = new Audio('Sounds/sound2.mp3');
    audio.play();
}


function playExerciseSound3() {
    const audio = new Audio('Sounds/sound3.mp3');
    audio.play();
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric',
        hour12: true
    });
    dateTimeElement.textContent = `Current Date and Time: ${formattedDate}`;
}

setInterval(displayDateTime, 1000);







