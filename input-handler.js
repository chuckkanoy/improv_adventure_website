var pres = "",
    vp = "",
    treasurer = "",
    secretary = "",
    web = "",
    pc = "",
    em = "";

function gatherInfo() {
    player = document.getElementById("player").value;
    pres = document.getElementById("president").value;
    vp = document.getElementById("vp").value;
    treasurer = document.getElementById("treasurer").value;
    secretary = document.getElementById("secretary").value;
    web = document.getElementById("webmaster").value;
    pc = document.getElementById("pc").value;
    em = document.getElementById("em").value;

    if (player === "HAX") {
        console.log("You got them cheats!");
        localStorage.setItem("cheats", "Cheats:\nThis is a cheat\nThis is a cheat too");
    }

    localStorage.removeItem("player_data");
    localStorage.setItem("player_data", JSON.stringify({ "player": player, "pres": pres, "vp": vp, "treasurer": treasurer, "secretary": secretary, "web": web, "pc": pc, "em": em }));

    verify();
}

//verify the information given
function verify() {
    displayModal("Is the following information correct?<br>Your name: " + player + "<br>President: " + pres + "<br>Vice President: " + vp + "<br>Treasurer: " + treasurer + "<br>Secretary: " + secretary +
        "<br>Web Master: " + web + "<br>Publicity Coordinator: " + pc + "<br>Equipment Manager: " + em);
}