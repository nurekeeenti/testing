const circle = document.getElementById('circle1');

document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;
    setTimeout(() => {
        circle.style.left = `${e.pageX - width / 2}px`;
        circle.style.top = `${e.pageY - height / 2}px`;
    }, 20);
});

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const sound = document.getElementById('sound');

playButton.addEventListener('click', () => {
    sound.play();
});

pauseButton.addEventListener('click', () => {
    sound.pause();
});
