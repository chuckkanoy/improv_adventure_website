//declare variables
var pres = "",
    vp = "",
    treasurer = "",
    secretary = "",
    web = "",
    pc = "",
    em = "";

//take in information and display it
function gatherInfo() {
    pres = document.getElementById("president").value;
    vp = document.getElementById("vp").value;
    treasurer = document.getElementById("treasurer").value;
    secretary = document.getElementById("secretary").value;
    web = document.getElementById("webmaster").value;
    pc = document.getElementById("pc").value;
    em = document.getElementById("em").value;

    document.cookie = "pres=" + pres + ";vp=" + vp + ";treasurer=" + treasurer + ";secretary=" + secretary + ";web=" + web + ";pc=" + pc + ";em=" + em;
    if (verify()) {
        window.location.href = "playing.html";
    }
}

//verify the information given
function verify() {
    var verified = confirm("Is the following information correct?\nPresident: " + pres + "\nVice President: " + vp + "\nTreasurer: " + treasurer + "\nSecretary: " + secretary +
        "\nWeb Master: " + web + "\nPublicity Coordinator: " + pc + "\nEquipment Manager: " + em);
    return verified;
}