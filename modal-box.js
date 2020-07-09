//Modal Boxes: w3 schools ; https://www.w3schools.com/howto/howto_css_modals.asp
var modal, yesButton, noButton, modalMessage;

window.onload = function() {
    modal = document.getElementById("myModal");

    yesButton = document.getElementById("yes");
    noButton = document.getElementById("no");

    modalMessage = document.getElementById("modal-message");

    yesButton.onclick = function() {
        modal.style.display = "none";
        window.location.href = "playing.html";
    }

    noButton.onclick = function() {
        modal.style.display = "none";
    }
}

function displayModal(message) {
    modal.style.display = "block";
    modalMessage.innerHTML = message;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}