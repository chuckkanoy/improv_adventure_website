//declare variables
var pres, vp, treasurer, secretary, pc, webmaster, equipment;

//take in information and display it
function gatherInfo() {
    pres = document.getElementById("president").value;
    vp = document.getElementById("vp").value;
    treasurer = document.getElementById("treasurer").value;
    secretary = document.getElementById("secretary").value;
    pc = document.getElementById("webmaster").value;
    webmaster = document.getElementById("pc").value;
    equipment = document.getElementById("em").value;

    verify();
}

//verify the information given
function verify() {
    var verified = confirm("Is the following information correct?\nPresident: " + pres + "\nVice President: " + vp + "\nTreasurer: " + treasurer + "\nSecretary: " +
        secretary + "\nWeb Master: " + webmaster + "\nPublicity Coordinator: " + pc + "\nEquipment Manager: " + equipment);
}