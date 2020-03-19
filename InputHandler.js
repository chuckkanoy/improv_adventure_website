//declare variables
var pres = "";

//take in information and display it
function gatherInfo() {
    pres = document.getElementById("president").value;
    document.cookie = 'form/pres=' + pres;
    if (verify()) {
        window.location.href = "playing.html";
    }
}

//verify the information given
function verify() {
    var verified = confirm("Is the following information correct?\nPresident: " + pres + "\nVice President: " + "\nTreasurer: " + "\nSecretary: " +
        "\nWeb Master: " + "\nPublicity Coordinator: " + "\nEquipment Manager: ");
    return verified;
}