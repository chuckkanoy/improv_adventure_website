//Modal Boxes: w3 schools ; https://www.w3schools.com/howto/howto_css_modals.asp
var modal, yesButton, noButton, modalMessage;

window.onload = function() {
    // Get the modal
    modal = document.getElementById("myModal");

    // Get the buttons for response
    yesButton = document.getElementById("yes");
    noButton = document.getElementById("no");

    // Get the <p> element for the modal message
    modalMessage = document.getElementById("modal-message");

    //return true if user clicks yes
    yesButton.onclick = function() {
        modal.style.display = "none";
        window.location.href = "playing.html";
    }

    //return false if user clicks no
    noButton.onclick = function() {
        modal.style.display = "none";
    }
}

// When the user clicks on the button, open the modal
function displayModal(message) {
    modal.style.display = "block";
    modalMessage.innerHTML = message;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}