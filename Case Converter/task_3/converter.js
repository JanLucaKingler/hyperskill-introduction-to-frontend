const upperCaseEl = document.getElementById("upper-case");
const lowerCaseEl = document.getElementById("lower-case");
const properCaseEl = document.getElementById("proper-case");
const sentenceEl = document.getElementById("sentence-case");
const textAreaEl = document.getElementById("text-input");
const saveTextFileEl = document.getElementById("save-text-file");

upperCaseEl.addEventListener("click", function () {
    textAreaEl.value = textAreaEl.value.toUpperCase();
});

lowerCaseEl.addEventListener("click", function () {
    textAreaEl.value = textAreaEl.value.toLowerCase();
});

properCaseEl.addEventListener("click", function () {
    textAreaEl.value = textAreaEl.value
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
});

sentenceEl.addEventListener("click", function () {
    textAreaEl.value = textAreaEl.value
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
});

saveTextFileEl.addEventListener("click", function () {
    download("text.txt", textAreaEl.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
