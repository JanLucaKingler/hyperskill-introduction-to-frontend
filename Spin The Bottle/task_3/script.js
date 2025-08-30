const spinButtonEl = document.getElementById("spin");
const addPlayerButtonEl = document.getElementById("add-player");
const status = document.getElementById("status");
const playerInput = document.getElementById("player-name");
const playerList = document.getElementById("players");

function clickSpin() {
    const listItems = playerList.querySelectorAll("li");

    if (listItems.length === 0) {
        status.innerText = "No players to spin.";
        return;
    }

    status.innerText = "Spinning...";
    setTimeout(() => choosePlayer(listItems), 2000);
}

function choosePlayer(listItems) {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    status.innerText = 'Selected player:' + listItems[randomIndex].innerText;
}

function addPlayer() {
    const name = playerInput.value.trim();

    if (name === "") {
        status.innerText = "Please enter a player name.";
        return;
    }

    const existingNames = Array.from(playerList.querySelectorAll("li")).map(li => li.innerText.toLowerCase());
    if (existingNames.includes(name.toLowerCase())) {
        status.innerText = "Player already exists!";
        return;
    }

    const li = document.createElement("li");
    li.innerText = name;
    playerList.appendChild(li);

    playerInput.value = "";
    playerInput.focus();
    status.innerText = "Spin the bottle!";
}

spinButtonEl.addEventListener("click", clickSpin);
addPlayerButtonEl.addEventListener("click", addPlayer);
