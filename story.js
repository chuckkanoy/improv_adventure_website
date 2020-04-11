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

    //read in file?

    //EVENTS
    //ENDING EVENT
    var end = new Event("End", "", ["", "", ""]);
    //events for main game
    //events for hammer
    var h_weapon12 = new Event("No", "<h1>H_WEAPON12</h1><br>You're not cool. You're <h1>R</h1><h2>a</h2><h3>d</h3><h4>i</h4><h5>c</h5><h6>a</h6><h7>l</h7><br>*guitar riff plays*", [end]);
    var h_weapon11 = new Event("Yes", "<h1>H_WEAPON11</h1><br>Well that's rude, and I WILL NOT STAND FOR THIS DISRESPECT.", [end]);
    var h_weapon2 = new Event("You can't tell me <b>ANYTHING</b>!", "<h1>H_WEAPON2</h1><br>How dare you?<br><br>You know what?<br><h1>YOU'RE OUT.</h1>", [end]);
    var h_weapon1 = new Event("I don't remember", "<h1>H_WEAPON1</h1><br>You think you're cooler than me?", [h_weapon11, h_weapon12]);
    var h_weapon = new Event("Use it as a weapon", "<h1>H_WEAPON</h1><br>What did I tell you?", [h_weapon1, h_weapon2]);
    //events for object suggestions
    var hammer = new Event("Hammer", "<h1>HAMMER</h1><br>As a jack of all trades, you pick this ALL POWERFUL tool.<br><br><br><sub><small>(please don't use it as a weapon)</small></sub>", [h_weapon]);
    var fish = new Event("Fish", "<h1>FISH</h1><br>Black! White! Fish!<br>You've taken the LITERAL suggestion of fish. This is gonna be good.", [end]);
    var egg = new Event("Egg", "<h1>EGG</h1><br>You hear the notorious improv suggestion for egg, and you snag the opportunity for some \"clucking\" awesome improv.", [end]);
    //events for general suggestion types
    var s_activity = new Event("Activity", "<h1>S_ACTIVITY</h1><br>" + player + ": What's an activity you'd do on the weekend?", [end]);
    var s_location = new Event("Location", "<h1>S_LOCATION</h1><br>" + player + ": Give me a non-geographical location!<br>The suggestions flood in from all over the room.", [end]);
    var s_object = new Event("Object", "<h1>S_OBJECT</h1><br>" + player + ": Can I get a suggestion for a household object?<br>The suggestions flood in from all over the room.", [egg, hammer, fish]);
    var base = new Event("Clap Clap Clap", "<h1>BASE</h1><br>" + pres + " gives announcements about the club, the end of the world, and what have you.<br>Now we're ready to move on to a regular improv game. How about a good old game of montage?<br><br>What kind of suggestion will you get?", [s_object, s_location, s_activity]);
    //events for opening loop
    var intro3 = new Event("Macarena", "<h1>INTRO3</h1><br>You do the macarena.<br>Everyone cheers you on.", [base]);
    var intro2 = new Event("Bunny Bunny", "<h1>INTRO2</h1><br>You bunny bunny over to " + treasurer + " and the game continues over and over.", [base]);
    var intro1 = new Event("Nothing", "<h1>INTRO3</h1><br>You do nothing and everyone looks at you including " + vp + " who runs up and smacks a poster to your forehead.", [base]);
    var start = new Event("Intro", "<h1>START</h1><br>Welcome to the improv, " + player + ", where things are about to get a little strange.<br>Let's start with a little warmup. Bunny Bunny<br>", [intro1, intro2, intro3]);
    //initialize game graph
    var story = new Graph(1);
    story.addVertex(start); //change event to start at different areas
    return story;
}