//translate cookie into usable data
function parseCookie() {
    
}
//reassign variables if not defined
function reassign(from, to) {
    if (from == undefined || from == "") {
        return to;
    }
    return from;
}
//story generation through event objects
function generateStory() {
    //declare variables for local use
    var player, pres, vp, treasurer, secretary, web, pc, em;

    //parse cookie
    //parse variables from cookie for use
    const COOKIE = document.cookie;
    var cont = COOKIE.split(";");
    console.log(cont);
    for (i = 0; i < cont.length; i++) {
        var separated = cont[i].split("=");
        cont[i] = separated[1];
    }
    
    //initialize variables
    //var cont = parseCookie();
    player = cont[0];
    player = reassign(player, "YOU");
    pres = cont[1];
    pres = reassign(pres, "DENT, PRESI DENT");
    vp = cont[2];
    vp = reassign(vp, "CLAMPY HAMS");
    treasurer = cont[3];
    treasurer = reassign(treasurer, "MONEY BAGZ");
    secretary = cont[4];
    secretary = reassign(secretary, "SECRET TERRY");
    web = cont[5];
    web = reassign(web, "WEB MASTER MIXER");
    pc = cont[6];
    pc = reassign(pc, "TEE PUBLIC");
    em = cont[7];
    em = reassign(em, "MAN \"i got that thang on me\" AGER");

    //read in file? no.

    //EVENTS
    //ENDING EVENTS
    var end = new Event("End", "", ["", "", ""]);
    var good_ending = new Event("Oh happy day!", "If you're reading this, then that means you've found one of the good endings of the game. Of course, a good ending versus a bad ending" +
        "but this an ending that I personally find to be good. Do with that what you will.<br><br>Oh and have some cake!<br><br><img src = \"https://www.kingarthurflour.com/sites/default/files/recipe_legacy/14-3-large.jpg\" style=\"width:300px; height:200px;\">", [end]);
    var bad_ending = new Event("Uh oh...", "Sadly (or maybe gladly if you know what you're doing) you've found one of the bad endings of the game. I'm in no place to tell you what a " +
        "good or bad ending is, as I'm only a website and have no actual control over anything. I'm sorry I had to break your immersion like that, but what did you expect? This is a bad ending after all." +
        "<br><br>Should you need consoling, there is an image of a small dog to comfort you. May they bring you peace in these uncertain times.<br><br><img src = \"https://i.chzbgr.com/full/8321541/h7CD41756/adorable-puppies\" style=\"width:300px; height:300px;\">", [end]);
    //events for hammer
    var h_weapon12 = new Event("No", "You're not cool. You're <b><font size=\"+2\">R</font><font size=\"+1\">a</font>d<font size=\"+3\">i</font><font size=\"+1\">c</font><font size=\"-1\">a</font><font size=\"+2\">l</font></b><br>*guitar riff plays*<br><br>But seriously, you can't use it as a weapon. That's blue.<br><br><br>" +
        "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><small>da ba di da ba di</small>", [good_ending]);
    var h_weapon11 = new Event("Yes", "Well that's rude, and I WILL NOT STAND FOR THIS DISRESPECT.", [bad_ending]);
    var h_weapon2 = new Event("You can't tell me <b>ANYTHING</b>!", "How dare you?<br><br>You know what?<br><h1>YOU'RE OUT.</h1>", [bad_ending]);
    var h_weapon1 = new Event("I don't remember", "You think you're cooler than me?", [h_weapon11, h_weapon12]);
    var h_weapon = new Event("Use it as a weapon", "What did I tell you?", [h_weapon1, h_weapon2]);
    var h_build = new Event("Build", "Oh now there's an exciting idea!<br><br>You, " + treasurer + ", and " + pc + " walk out onto an open clearing and are scratching your heads to " +
        "figure out what you want to build.<br>" + pc + ": Hmmmmm, we could build a house.<br>" + treasurer + ": We could even build Rome.<br>" + pc + ": That's true. What do you think we" +
        " should do, " + player + "?<br><br>You think of something and consider it as a possibility. What do you decide to build?");
    var h_build1 = new Event("House", treasurer + ": Oh heck yeah! That sounds freaking amazing.<br><br>As everyone gets to building, there is yet another dilemma...<br>" +
        "You're not sure what <i>kind</i> of house you should make. In fact, none of you are sure what to build.<br><br>" + pc + ": We could literally build any type of house we want to." +
        treasurer + ": Yeah. Maybe a bird house. Or, sorry, a tree house?<br>" + vp + ": Or your mom's house. Ha ha ha.<br>" + treasurer + ": " + vp + ", when did you get here!?<br><br>" +
        "As the commotion begins to unfold, you find that it's up to you to make the decision...");
    var h_build11 = new Event("Tree House", treasurer + ": Yet another good idea from the brilliant, " + player + "! You seem to know all the right decisions.<br><br> " +
        "And with that, the three (well now I guess four) of you are ready to begin working on a wonderful treehouse of your very own. " + treasurer + " starts working on the base of the " +
        "treehouse while " + pc + " works on the walls. At the same time as all that is going on, " + vp + " is hoisting you up onto the upper trunk of the tree.<br><br>" + pc + ": Wait, " + treasurer +
        " we're already up on the tree. Did you remember to build the doors?<br>" + treasurer + ": Yeah, I drew one right here.<br>" + pc + ": You drew one. Well tell me this, bucko, how" +
        "are we supposed to get through a drawn door?<br>" + treasurer + ": Well that's easy, you just turn the han...<br>" + vp + ": The handle?<br>" + treasurer + ": The handle.<br>" +
        pc + ": wait, when did you get up here?<br>The Handle: My how the turns have tabled.<br>" + pc + ": What is happening?");
    h_build.addOption(h_build1);
    h_build1.addOption(h_build11);
    //events for object suggestions
    var hammer = new Event("Hammer", "As a jack of all trades, you pick this ALL POWERFUL tool.<br><br><br><sub><small>(please don't use it as a weapon)</small></sub>", [h_weapon, h_build]);
    var fish = new Event("Fish", "Black! White! Fish!<br>You've taken the LITERAL suggestion of fish. This is gonna be good.");
    var egg = new Event("Egg", "You hear the notorious improv suggestion for egg, and you snag the opportunity for some \"clucking\" awesome improv.");
    //events for general suggestion types
    var s_activity = new Event("Activity", player + ": What's an activity you'd do on the weekend?");
    var s_location = new Event("Location", player + ": Give me a non-geographical location!<br>The suggestions flood in from all over the room.");
    var s_object = new Event("Object", player + ": Can I get a suggestion for a household object?<br>The suggestions flood in from all over the room.", [egg, hammer, fish]);
    var base = new Event("Clap Clap Clap", pres + " gives announcements about the club, the end of the world, and what have you.<br>Now we're ready to move on to a regular improv game. How about a good old game of montage?<br><br>What kind of suggestion will you get?", [s_object, s_location, s_activity]);
    //events for opening loop
    var intro3 = new Event("Macarena", "You do the macarena.<br>Everyone cheers you on.", [base]);
    var intro2 = new Event("Bunny Bunny", "You bunny bunny over to " + treasurer + " and the game continues over and over.", [base]);
    var intro1 = new Event("Nothing", "You do nothing and everyone looks at you including " + vp + " who runs up and smacks a poster to your forehead.", [base]);
    var start = new Event("Intro", "Welcome to the improv, " + player + ", where things are about to get a little strange.<br>Let's start with a little warmup. Bunny Bunny...<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>", [intro1, intro2, intro3]);
    //initialize game graph
    var story = new Graph(1);
    story.addVertex(h_build11); //change event to start at different areas
    return story;
}