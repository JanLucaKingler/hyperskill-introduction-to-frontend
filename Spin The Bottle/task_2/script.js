const spinButtonEl = document.getElementById("spin");
const status = document.getElementById("status");
const listElement = document.querySelectorAll("li");

function clickSpin() {
    status.innerText = "Spinning...";
    setTimeout(choosePlayer, 2000);
}

function choosePlayer() {
    const randomIndex = Math.floor(Math.random() * listElement.length);
    status.innerText = listElement[randomIndex].innerText;
}

spinButtonEl.addEventListener("click", clickSpin);
