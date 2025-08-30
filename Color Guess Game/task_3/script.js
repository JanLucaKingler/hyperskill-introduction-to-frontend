const rgbColorEl = document.getElementById("rgb-color");
const restartButtonEl = document.getElementById("restart");
const statusTextEl = document.getElementById("status");
const blocks = document.querySelectorAll(".color-block");

let correctColor = "";

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
    statusTextEl.textContent = "Start Guessing!";
    correctColor = getRandomColor();
    rgbColorEl.textContent = correctColor.toUpperCase();

    const correctIndex = Math.floor(Math.random() * blocks.length);

    blocks.forEach((block, index) => {

        block.style.display = "inline-block";

        if (index === correctIndex) {
            block.style.backgroundColor = correctColor;
        } else {
            let randomColor;
            do {
                randomColor = getRandomColor();
            } while (randomColor === correctColor);
            block.style.backgroundColor = randomColor;
        }


        block.onclick = () => {
            const clickedColor = block.style.backgroundColor.replace(/\s+/g, '');
            const targetColor = correctColor.replace(/\s+/g, '');

            if (clickedColor === targetColor) {
                statusTextEl.textContent = "Correct!";
                blocks.forEach(b => {
                    b.style.display = "inline-block";
                    b.style.backgroundColor = correctColor;
                });
            } else {
                statusTextEl.textContent = "Try Again!";
                block.style.display = "none";
            }
        };
    });
}

restartButtonEl.addEventListener("click", startGame);
document.addEventListener("DOMContentLoaded", startGame);
