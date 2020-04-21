//reassign variables if not defined
function reassign(from, to) {
    if (from == undefined || from == "") {
        return to;
    }
    return from;
}

//check values of the cookie
function checkCookieData(gname, cname, cvalue) {
    if (gname == cname) {
        return cvalue;
    }
    return
}
//story generation through event objects
function generateStory() {

    //declare variables for local use
    var player, pres, vp, treasurer, secretary, web, pc, em;

    //parse cookie
    //parse variables from cookie for use
    const COOKIE = document.cookie;
    var cont = COOKIE.replace(/ /g, "").split(";");
    console.log(cont);
    //break up each piece of the cookie
    for (i = 0; i < cont.length; i++) {
        var separated = cont[i].split("=");
        switch (separated[0]) {
            case "player":
                player = separated[1];
                continue;
            case "pres":
                pres = separated[1];
                continue;
            case "vp":
                vp = separated[1];
                continue;
            case "treasurer":
                treasurer = separated[1];
                continue;
            case "secretary":
                secretary = separated[1];
                continue;
            case "web":
                web = separated[1];
                continue;
            case "pc":
                pc = separated[1];
                continue;
            case "em":
                em = separated[1];
                continue;

        }
    }

    //initialize variables
    player = reassign(player, "YOU");
    pres = reassign(pres, "DENT, PRESI DENT");
    vp = reassign(vp, "CLAMPY HAMS");
    treasurer = reassign(treasurer, "MONEY BAGZ");
    secretary = reassign(secretary, "SECRET TERRY");
    web = reassign(web, "WEB MASTER MIXER");
    pc = reassign(pc, "TEE PUBLIC");
    em = reassign(em, "MAN \"i got that thang on me\" AGER");

    //EVENTS
    //ENDING EVENTS
    var end = new Event("End", "", ["", "", ""]);
    var good_ending = new Event("Oh happy day!", "If you're reading this, then that means you've found one of the good endings of the game. Of course, a good ending versus a bad ending" +
        "but this an ending that I personally find to be good. Do with that what you will.<br><br>Oh and have some cake!<br><br><img src = \"https://www.kingarthurflour.com/sites/default/files/recipe_legacy/14-3-large.jpg\" style=\"width:300px; height:200px;\">", [end]);
    var bad_ending = new Event("Uh oh...", "Sadly (or maybe gladly if you know what you're doing) you've found one of the bad endings of the game. I'm in no place to tell you what a " +
        "good or bad ending is, as I'm only a website and have no actual control over anything. I'm sorry I had to break your immersion like that, but what did you expect? This is a bad ending after all." +
        "<br><br>Should you need consoling, there is an image of a small dog to comfort you. May they bring you peace in these uncertain times.<br><br><img src = \"https://i.chzbgr.com/full/8321541/h7CD41756/adorable-puppies\" style=\"width:300px; height:300px;\">", [end]);
    var and_scene = new Event("And Scene", pres + " calls the scene right there. " + web + " looks on with pride at the impressive improvisational sight and claps, slowly rising from their chair." +
        em + " joins in with the clapping followed by " + secretary + ", " + treasurer + ", " + " and " + vp + ". Pretty soon, everyone, including people who were just in the scene, begins clapping. Clapping " +
        " becomes dancing. Ya'll boogying.<br><br>It's a good time.<br><br>" + pres + ": Well that was fun! What do you guys think, should we do another scene or call it there?", [end]);
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
        pc + ": wait, when did you get up here?<br>The Handle: My how the turns have tabled.<br>" + pc + ": What is happening?", [good_ending]);
    h_build12 = new Event("Bird House", treasurer + ": Caw Caw!<br>" + pc + ": What are you doing?<br>" + treasurer + ": I think it's pretty obvious that I'm calling a bird...<br>" +
        pc + ": We haven't built the birdhouse yet!<br>" + player + ": They're right, " + treasurer + ", though your bird calling is magnificent and will without a doubt bring in a tremendous " +
        "tenant.<br>" + treasurer + " blushing: I'm glad you like my bird calls.<br><br>You all begin building a birdhouse. " + treasurer + " is flapping their arms around to truly simulate the " +
        "\"bird's arrival\"." + pc + " is manifesting the birdhouse through telekinesis. You, my friend, are merely taking in the wonders of the events taking place. How did you get so lucky to have " +
        "this team be yours for the bird house building.<br><br>After a good while of conjuring up the bird house, " + pc + " collapses backwards.<br><br>" + treasurer + ": Are you good, " + pc + "? " +
        "<br>" + pc + ": It is done.<br><br>" + treasurer + " and yourself turn to face the marvelous spectacle that is the picture perfect bird house. Tears well up in your eyes. It's the most beautiful " +
        "thing you've ever seen. Oh? What's that? A bird is coming to live in this home already?<br><br>" + treasurer + " stands crouched over the bird house, convinced they are the destined bird.", [and_scene]);
    h_build13 = new Event("Your mom's", "Ohhhhhh, that's good. That's really good. Just couldn't resist the temptation, huh?<br><br>I was trying to make this really engaging story and <b><i>OF COURSE</i></b> " +
        "you had to pick the most ridiculous option there.<br><br>You know what? I'm really not that surprised actually.<br><br>I'm not mad, I'm just disappointed.", [bad_ending]);
    h_build2 = new Event("Rome", "Oh come on, silly. Didn't anyone tell you Rome wasn't built in a day<br><br> " + em + ": I OBJECT!<br><br>Wait what? You can't do that. You're in the game and only do what I write " +
        "out.<br><br>" + em + ": Tell that to the words coming out of my mouth!<br>" + secretary + ": Yeah, do that! You writer of things.<br><br>I'm thoroughly confused, so I'm just gonna give the player a bad ending and " +
        "call it there.<br><br>" + em + ": Aw, what? At least give them the good ending for reading this whole dialogue.<br>" + secretary + ": Yeah! At least do that.<br><br><i>Fine.</i>", [good_ending]);
    h_build3 = new Event("A World", "An interesting idea. Maybe too ambitious.<br>" + pc + " pulls out a hammer and begins hitting something that can't be seen.<br><br>" + pc + ": Come on guys help me! I can't " +
        "make this thing on my own.<br><br>Do " + treasurer + " and yourself help them?");
    h_build31 = new Event("No", "The two of you stand there as " + pc + " attempts to bring a world into existence out of thin air on their own. They slowly lose steam. You steadily feel bad for not stepping in to " +
        "help.<br><br>Suddenly, they've done it! There is a world that was pulled from nothing right there in front of you and " + treasurer + "'s eyes. You guys can't believe it.<br><br>" + treasurer + ": Can we visit your " +
        "world, " + pc + "?<br><br>" + pc + " puts on their sunglasses and turns to face the two of you.<br><br>" + pc + ": You wish.", [bad_ending]);
    h_build32 = new Event("Yes", treasurer + " and yourself run over and start hitting invisible things. Time after time your hammers fall and rise.<br><br>" + treasurer + ": Imma make a skyscraper.<br>" +
        pc + ": Nice. I'm gonna make a freaking volcano. We can do whatever we want here!<br><br>You start working on something that you're not even sure quite what it is at first.<br><br>" + pc + ": What are you making over " +
        "there, " + player + "?<br>" + treasurer + " walking up: Is that what I think it is?<br>" + pc + ": That's insane, I thought we were being creative by making these outlandish ideas and here " + player + " is to show us " +
        "how it's done.");
    h_build321 = new Event("Continue", "From your capable hammer, you've creatively thought of a way to put together another universe within our own by smacking dust particles together.<br>It's brilliant.<br>" +
        "<img src = \"https://cdn.mos.cms.futurecdn.net/qWRNTdErRRidiwWoT5dvj.jpg\" style=\"width:300px; height:300px;\">", [good_ending]);
    h3 = new Event("Juggle", "Woahhhhh, you can juggle?");
    h31 = new Event("Yes", "That's so sick.<br><br>This juggling penguin is happy for you and your life of juggling.<br><img src = \"https://media.giphy.com/media/3eE7PuC4qxxVm/giphy.gif\" style=\"width:300px; height:300px;\"><br>Would you like to juggle your hammers with this penguin on a tour?")
    h32 = new Event("No", "You find yourself on a stage. You have 2 hammers in your right hand and 1 in your left. Your hands clam up as you've realized the thing you signed up to do is something you " +
        "never learned. The pressure weighs down on you, causing you to sweat. You look up into the stage lights, take an enormous gulp, and toss one hammer in the air.")
    h311 = new Event("Absolutely", "You and your penguin party like rock stars for the entire tour, juggling simply for the joy it brings the two of you. You're certain that if it were possible for a penguin to smile, your partner would be " +
        "gleaming. The two of you radiate entertainment.<br><br><b>You are stars.</b>", [good_ending]);
    h312 = new Event("Sorry, but no", "You half expect the penguin to cry at your rejection. Your heart races as he stares into your eyes, not showing a lick of emotion.<br><br>Contrary to what you thought, " +
        "the penguin shrugs their little penguin shoulders and waddles off to a limo you hadn't noticed until now.<br><br>Opportunity: Lost.", [bad_ending]);
    h321 = new Event("Continue", "The first hammer flips through the air, and you throw the third one because that's what someone told you would help with juggling. They said, \"Just get em all outta your hands. That's juggling.\"" +
        " you didn't really believe them at the time, so why would you try it in front a crowd of people. That first hammer is falling down towards you now followed by the second and third. Why did you throw them so high?");
    h3211 = new Event("Continue", "You awake in a cold sweat, hearing thudding at the door.<br><br>" + treasurer + ": You want pancakes?<br>" + player + ": Huh?<br>" + treasurer + ": You fell asleep at the party. We're all having post party pancakes!" +
        "<br>" + player + ": Sick! I'll be out in a second.<br><br>You've got pancakes coming!", [good_ending]);
    h4 = new Event("Hammerhead Shark", pc + ", " + treasurer + ", and yourself are on a beach at some vacation paradise. You decide it's a good idea to go swimming and run out into the waves that are crashing on the picturesque shoreline.<br><br>" +
        treasurer + ": Look out, " + player + ", I see a shark fin out there!<br>" + pc + ": Holy cow! I see it too.<br><br>You have to think on your feet quick. Do you keep going or turn around? Be careful.");
    h41 = ("Keep going", "After thinking on it for a moment, you go into the shark infested waters. For some reason, you feel completely unafraid. You get closer and closer to the sharks.<br><br>Kyle the Shark: Bro, you just came out here. We're sharks." +
        "<br>CJ the Shark: That's pretty insane. I like your style. What's your name?<br>" + player + ": " + player + "...<br>Kyle: Well dude you're one of us now.")

    //events for object suggestions
    var hammer = new Event("Hammer", "As a jack of all trades, you pick this ALL POWERFUL tool.<br><br><br><sub><small>(please don't use it as a weapon)</small></sub>", [h_weapon, h_build]);
    var fish = new Event("Fish", "Black! White! Fish!<br>You've taken the LITERAL suggestion of fish. This is gonna be good.");
    var egg = new Event("Egg", "You hear the notorious improv suggestion for egg, and you snag the opportunity for some \"clucking\" awesome improv.");
    //events for general suggestion types
    var s_activity = new Event("Activity", player + ": What's an activity you'd do on the weekend?");
    var s_location = new Event("Location", player + ": Give me a non-geographical location!<br>The suggestions flood in from all over the room.");
    var s_object = new Event("Object", player + ": Can I get a suggestion for a household object?<br>The suggestions flood in from all over the room.", [egg, hammer, fish]);
    var base = new Event("Let's Go", pres + " gives announcements about the club, the end of the world, and what have you.<br>Now we're ready to move on to a regular improv game. How about a good old game of montage?<br><br>What kind of suggestion will you get?", [s_object, s_location, s_activity]);
    //events for opening loop
    var intro3 = new Event("Macarena", "You do the macarena.<br>Everyone cheers you on.", [base]);
    var intro2 = new Event("Bunny Bunny", "You bunny bunny over to " + treasurer + " and the game continues over and over.", [base]);
    var intro1 = new Event("Nothing", "You do nothing and everyone looks at you including " + vp + " who runs up and smacks a poster to your forehead.", [base]);
    var start = new Event("Beginning", "Welcome to the improv, " + player + ", where things are about to get a little strange.<br>Let's start with a little warmup. Bunny Bunny...", [intro1, intro2, intro3]);
    //additional options for events
    h_build.addOptions([h_build1]);
    h_build1.addOptions([h_build11]);
    h_build3.addOptions([h_build31, h_build32]);
    h_build32.addOptions([h_build321])
    h3.addOptions([h31, h32]);
    h31.addOptions([h311, h312]);
    h32.addOptions([h321]);
    h321.addOptions([h3211]);
    and_scene.addOptions([base]);
    //initialize game graph
    var story = new Graph(1);
    story.addVertex(h3); //change event to start at different areas
    return story;
}