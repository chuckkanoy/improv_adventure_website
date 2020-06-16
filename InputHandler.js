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

    //clear local storage
    clearStorage();

    //assign variables in local storage
    localStorage.setItem("player", player);
    localStorage.setItem("pres", pres);
    localStorage.setItem("vp", vp);
    localStorage.setItem("treasurer", treasurer);
    localStorage.setItem("secretary", secretary);
    localStorage.setItem("web", web);
    localStorage.setItem("pc", pc);
    localStorage.setItem("em", em);

    //verify the input before sending to a new page
    verify();

}

//verify the information given
function verify() {
    displayModal("Is the following information correct?<br>Your name: " + player + "<br>President: " + pres + "<br>Vice President: " + vp + "<br>Treasurer: " + treasurer + "<br>Secretary: " + secretary +
        "<br>Web Master: " + web + "<br>Publicity Coordinator: " + pc + "<br>Equipment Manager: " + em);
}

function clearStorage() {
    localStorage.removeItem("player");
    localStorage.removeItem("pres");
    localStorage.removeItem("vp");
    localStorage.removeItem("treasurer");
    localStorage.removeItem("secretary");
    localStorage.removeItem("web");
    localStorage.removeItem("pc");
    localStorage.removeItem("em");
}