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
    player = document.getElementById("player").value;
    pres = document.getElementById("president").value;
    vp = document.getElementById("vp").value;
    treasurer = document.getElementById("treasurer").value;
    secretary = document.getElementById("secretary").value;
    web = document.getElementById("webmaster").value;
    pc = document.getElementById("pc").value;
    em = document.getElementById("em").value;

    document.cookie = "player=" + player + "; path=/";
    document.cookie = "pres=" + pres + "; path=/";
    document.cookie = "vp=" + vp + "; path=/";
    document.cookie = "treasurer=" + treasurer + "; path=/";
    document.cookie = "secretary=" + secretary + "; path=/";
    document.cookie = "web=" + web + "; path=/";
    document.cookie = "pc=" + pc + "; path=/";
    document.cookie = "em=" + em + "; path=/";
    if (verify()) {
        window.location.href = "playing.html";
    }
}

//verify the information given
function verify() {
    var verified = confirm("Is the following information correct?\nYour name: " + player + "\nPresident: " + pres + "\nVice President: " + vp + "\nTreasurer: " + treasurer + "\nSecretary: " + secretary +
        "\nWeb Master: " + web + "\nPublicity Coordinator: " + pc + "\nEquipment Manager: " + em);
    return verified;
}