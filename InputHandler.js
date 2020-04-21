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
    //constant for cookie expiration
    const TIME = 2;

    //read variables in from HTML document
    player = document.getElementById("player").value;
    pres = document.getElementById("president").value;
    vp = document.getElementById("vp").value;
    treasurer = document.getElementById("treasurer").value;
    secretary = document.getElementById("secretary").value;
    web = document.getElementById("webmaster").value;
    pc = document.getElementById("pc").value;
    em = document.getElementById("em").value;

    //check for hack name
    if (player === "HAX") {
        console.log("You got them cheats, boi");
    }

    //clear cookies before assigning them
    clearCookies();

    //assign variables to cookie for later use
    setCookie("player", player, TIME);
    setCookie("pres", pres, TIME);
    setCookie("vp", vp, TIME);
    setCookie("treasurer", treasurer, TIME);
    setCookie("secretary", secretary, TIME);
    setCookie("web", web, TIME);
    setCookie("pc", pc, TIME);
    setCookie("em", em, TIME);

    //verify the input before sending to a new page
    verify();

}

//verify the information given
function verify() {
    displayModal("Is the following information correct?<br>Your name: " + player + "<br>President: " + pres + "<br>Vice President: " + vp + "<br>Treasurer: " + treasurer + "<br>Secretary: " + secretary +
        "<br>Web Master: " + web + "<br>Publicity Coordinator: " + pc + "<br>Equipment Manager: " + em);
}

//function for creating a cookie
function setCookie(cname, cvalue, exhrs) {
    var d = new Date();
    d.setTime(d.getTime + (exhrs * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function clearCookies() {
    setCookie("player", "", -1);
    setCookie("pres", "", -1);
    setCookie("vp", "", -1);
    setCookie("treasurer", "", -1);
    setCookie("secretary", "", -1);
    setCookie("web", "", -1);
    setCookie("pc", "", -1);
    setCookie("em", "", -1);
}