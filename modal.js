const button = document.getElementById("adc-tzeet");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");
const overlay = document.getElementById("overlay");

button.onclick = function () {
    modal.show();
    overlay.style.display = "block";
}

buttonClose.onclick = function () {
    modal.close();
    overlay.style.display = "none";
}