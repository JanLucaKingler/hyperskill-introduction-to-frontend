const upperCaseEl = document.getElementById("upper-case");
const lowerCaseEl = document.getElementById("lower-case");
const properCaseEl = document.getElementById("proper-case");
const sentenceEl = document.getElementById("sentence-case");
const textArea = document.getElementById("text-input");

upperCaseEl.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
});

lowerCaseEl.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
});

properCaseEl.addEventListener("click", function () {
    textArea.value = textArea.value
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
});

sentenceEl.addEventListener("click", function () {
    textArea.value = textArea.value
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
});ntListener("click", upperCase);
