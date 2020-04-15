function generateStory() {
    //parse variables from cookie for use
    const COOKIE = document.cookie;
    var cont = COOKIE.split(";");
    console.log(cont);
    for (i = 0; i < cont.length; i++) {
        var separated = cont[i].split("=");
        cont[i] = separated[1];
    }
    player = cont[0];
    pres = cont[1];
    vp = cont[2];
    treasurer = cont[3];
    secretary = cont[4];
    web = cont[5];
    pc = cont[6];
    em = cont[7];
    alert(player + "\n" + pres + "\n" + vp + "\n" + treasurer + "\n" + secretary + "\n" + web + "\n" + pc + "\n" + em);

    //read in file? no.

    //EVENTS
    //ENDING EVENTS
    var end = new Event("End", "", ["", "", ""]);
    var good_ending = new Event("Oh happy day!", "If you're reading this, then that means you've found one of the good endings of the game. Of course, a good ending versus a bad ending" +
        "but this an ending that I personally find to be good. Do with that what you will.<br><br>Oh and have some cake!<br><br><img src = \"https://www.kingarthurflour.com/sites/default/files/recipe_legacy/14-3-large.jpg\" style=\"width:300px; height:200px;\">", [end]);
    var bad_ending = new Event("Uh oh...", "Sadly (or maybe gladly if you know what you're doing) you've found one of the bad endings of the game. I'm in no place to tell you what a " +
        "good or bad ending is, as I'm only a website and have no actual control over anything. I'm sorry I had to break your immersion like that, but what did you expect? This is a bad ending after all." +
        "<br><br>Should you need consoling, there is an image of a small dog to comfort you. May they bring you peace in these uncertain times.<br><br><img src = \"https://i.chzbgr.com/full/8321541/h7CD41756/adorable-puppies\" style=\"width:300px; height:300px;\">", [end]);
    //events for main game
    //events for hammer
    var h_weapon12 = new Event("No", "You're not cool. You're <h1>R</h1><h2>a</h2><h3>d</h3><h4>i</h4><h5>c</h5><h6>a</h6><h7>l</h7><br>*guitar riff plays*", [good_ending]);
    var h_weapon11 = new Event("Yes", "Well that's rude, and I WILL NOT STAND FOR THIS DISRESPECT.", [bad_ending]);
    var h_weapon2 = new Event("You can't tell me <b>ANYTHING</b>!", "How dare you?<br><br>You know what?<br><h1>YOU'RE OUT.</h1>", [bad_ending]);
    var h_weapon1 = new Event("I don't remember", "You think you're cooler than me?", [h_weapon11, h_weapon12]);
    var h_weapon = new Event("Use it as a weapon", "What did I tell you?", [h_weapon1, h_weapon2]);
    //events for object suggestions
    var hammer = new Event("Hammer", "As a jack of all trades, you pick this ALL POWERFUL tool.<br><br><br><sub><small>(please don't use it as a weapon)</small></sub>", [h_weapon]);
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
    var start = new Event("Intro", "Welcome to the improv, " + player + ", where things are about to get a little strange.<br>Let's start with a little warmup. Bunny Bunny...", [intro1, intro2, intro3]);
    //initialize game graph
    var story = new Graph(1);
    story.addVertex(start); //change event to start at different areas
    return story;
}