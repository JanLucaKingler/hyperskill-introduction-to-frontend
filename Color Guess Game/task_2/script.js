const rgbColorEl = document.getElementById("rgb-color");
const restartButtonEl = document.getElementById("restart");
const blocks = document.querySelectorAll(".color-block");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColors() {
    const targetColor = getRandomColor();
    rgbColorEl.innerHTML = targetColor.toUpperCase();

    const correctIndex = Math.floor(Math.random() * blocks.length);

    blocks.forEach((block, index) => {
        if (index === correctIndex) {

            block.style.backgroundColor = targetColor;
        } else {

            let randomColor;
            do {
                randomColor = getRandomColor();
            } while (randomColor === targetColor);
            block.style.backgroundColor = randomColor;
        }
    });
}

restartButtonEl.addEventListener("click", changeColors);
document.addEventListener("DOMContentLoaded", changeColors);
