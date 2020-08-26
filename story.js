var player = JSON.parse(localStorage.getItem("player_data")).player;
var pres = JSON.parse(localStorage.getItem("player_data")).pres;
var vp = JSON.parse(localStorage.getItem("player_data")).vp;
var treasurer = JSON.parse(localStorage.getItem("player_data")).treasurer;
var secretary = JSON.parse(localStorage.getItem("player_data")).secretary;
var web = JSON.parse(localStorage.getItem("player_data")).web;
var pc = JSON.parse(localStorage.getItem("player_data")).pc;
var em = JSON.parse(localStorage.getItem("player_data")).em;

function reassign(from, to) {
    if (from == undefined || from == "") {
        return to;
    }
    return from;
}

player = reassign(player, "YOU");
pres = reassign(pres, "DENT, PRESI DENT");
vp = reassign(vp, "CLAMPY HAMS");
treasurer = reassign(treasurer, "MONEY BAGZ");
secretary = reassign(secretary, "SECRET TERRY");
web = reassign(web, "WEB MASTER MIXER");
pc = reassign(pc, "TEE PUBLIC");
em = reassign(em, "MAN \"i got that thang on me\" AGER");

function parseChunk(chunk) {
    chunk = chunk.replace("PLAYER", player);
    chunk = chunk.replace("PRES", pres);
    chunk = chunk.replace("VP", vp);
    chunk = chunk.replace("TREASURER", treasurer);
    chunk = chunk.replace("SECRETARY", secretary);
    chunk = chunk.replace("PC", pc);
    chunk = chunk.replace("WEB", web);
    chunk = chunk.replace("EM", em);
    chunk = chunk.replace("\n", "<br>");
    return chunk;
}

function makeImage(source, width, height) {
    return "<img src = \"" + source + "\" style=\"width:" + width + "px; height:" + height + "px;\">";
}

function generateStory() {
    //EVENTS
    //ENDING EVENTS
    var end = new Section("End", "", ["", "", ""]);
    var good_ending = new Section("Oh happy day!", "If you're reading this, then that means you've found one of the good endings of the game. Of course, a good ending versus a bad ending" +
        "but this an ending that I personally find to be good. Do with that what you will.<br><br>Oh and have some cake!<br><br><img src = \"https://www.kingarthurflour.com/sites/default/files/recipe_legacy/14-3-large.jpg\" style=\"width:300px; height:200px;\">", [end]);
    var bad_ending = new Section("Uh oh...", "Sadly (or maybe gladly if you know what you're doing) you've found one of the bad endings of the game. I'm in no place to tell you what a " +
        "good or bad ending is, as I'm only a website and have no actual control over anything. I'm sorry I had to break your immersion like that, but what did you expect? This is a bad ending after all." +
        "<br><br>Should you need consoling, there is an image of a small dog to comfort you. May they bring you peace in these uncertain times.<br><br><img src = \"https://i.chzbgr.com/full/8321541/h7CD41756/adorable-puppies\" style=\"width:300px; height:300px;\">", [end]);
    var and_scene = new Section("And Scene", pres + " calls the scene right there. " + web + " looks on with pride at the impressive improvisational sight and claps, slowly rising from their chair." +
        em + " joins in with the clapping followed by " + secretary + ", " + treasurer + ", " + " and " + vp + ". Pretty soon, everyone, including people who were just in the scene, begins clapping. Clapping " +
        " becomes dancing. Ya'll boogying.<br><br>It's a good time.<br><br>" + pres + ": Well that was fun! What do you guys think, should we do another scene or call it there?", [end]);
    //events for hammer
    var h_weapon12 = new Section("No", "You're not cool. You're <b><font size=\"+2\">R</font><font size=\"+1\">a</font>d<font size=\"+3\">i</font><font size=\"+1\">c</font><font size=\"-1\">a</font><font size=\"+2\">l</font></b><br>*guitar riff plays*<br><br>But seriously, you can't use it as a weapon. That's blue.<br><br><br>" +
        "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><small>da ba di da ba di</small>", [good_ending]);
    var h_weapon11 = new Section("Yes", "Well that's rude, and I WILL NOT STAND FOR THIS DISRESPECT.", [bad_ending]);
    var h_weapon2 = new Section("You can't tell me <b>ANYTHING</b>!", "How dare you?<br><br>You know what?<br><h1>YOU'RE OUT.</h1>", [bad_ending]);
    var h_weapon1 = new Section("I don't remember", "You think you're cooler than me?", [h_weapon11, h_weapon12]);
    var h_weapon = new Section("Use it as a weapon", "What did I tell you?", [h_weapon1, h_weapon2]);
    var h_build = new Section("Build", "Oh now there's an exciting idea!<br><br>You, " + treasurer + ", and " + pc + " walk out onto an open clearing and are scratching your heads to " +
        "figure out what you want to build.<br>" + pc + ": Hmmmmm, we could build a house.<br>" + treasurer + ": We could even build Rome.<br>" + pc + ": That's true. What do you think we" +
        " should do, " + player + "?<br><br>You think of something and consider it as a possibility. What do you decide to build?");
    var h_build1 = new Section("House", treasurer + ": Oh heck yeah! That sounds freaking amazing.<br><br>As everyone gets to building, there is yet another dilemma...<br>" +
        "You're not sure what <i>kind</i> of house you should make. In fact, none of you are sure what to build.<br><br>" + pc + ": We could literally build any type of house we want to." +
        treasurer + ": Yeah. Maybe a bird house. Or, sorry, a tree house?<br>" + vp + ": Or your mom's house. Ha ha ha.<br>" + treasurer + ": " + vp + ", when did you get here!?<br><br>" +
        "As the commotion begins to unfold, you find that it's up to you to make the decision...");
    var h_build11 = new Section("Tree House", treasurer + ": Yet another good idea from the brilliant, " + player + "! You seem to know all the right decisions.<br><br> " +
        "And with that, the three (well now I guess four) of you are ready to begin working on a wonderful treehouse of your very own. " + treasurer + " starts working on the base of the " +
        "treehouse while " + pc + " works on the walls. At the same time as all that is going on, " + vp + " is hoisting you up onto the upper trunk of the tree.<br><br>" + pc + ": Wait, " + treasurer +
        " we're already up on the tree. Did you remember to build the doors?<br>" + treasurer + ": Yeah, I drew one right here.<br>" + pc + ": You drew one. Well tell me this, bucko, how" +
        "are we supposed to get through a drawn door?<br>" + treasurer + ": Well that's easy, you just turn the han...<br>" + vp + ": The handle?<br>" + treasurer + ": The handle.<br>" +
        pc + ": wait, when did you get up here?<br>The Handle: My how the turns have tabled.<br>" + pc + ": What is happening?", [good_ending]);
    h_build12 = new Section("Bird House", treasurer + ": Caw Caw!<br>" + pc + ": What are you doing?<br>" + treasurer + ": I think it's pretty obvious that I'm calling a bird...<br>" +
        pc + ": We haven't built the birdhouse yet!<br>" + player + ": They're right, " + treasurer + ", though your bird calling is magnificent and will without a doubt bring in a tremendous " +
        "tenant.<br>" + treasurer + " blushing: I'm glad you like my bird calls.<br><br>You all begin building a birdhouse. " + treasurer + " is flapping their arms around to truly simulate the " +
        "\"bird's arrival\"." + pc + " is manifesting the birdhouse through telekinesis. You, my friend, are merely taking in the wonders of the events taking place. How did you get so lucky to have " +
        "this team be yours for the bird house building.<br><br>After a good while of conjuring up the bird house, " + pc + " collapses backwards.<br><br>" + treasurer + ": Are you good, " + pc + "? " +
        "<br>" + pc + ": It is done.<br><br>" + treasurer + " and yourself turn to face the marvelous spectacle that is the picture perfect bird house. Tears well up in your eyes. It's the most beautiful " +
        "thing you've ever seen. Oh? What's that? A bird is coming to live in this home already?<br><br>" + treasurer + " stands crouched over the bird house, convinced they are the destined bird.", [and_scene]);
    h_build13 = new Section("Your mom's", "Ohhhhhh, that's good. That's really good. Just couldn't resist the temptation, huh?<br><br>I was trying to make this really engaging story and <b><i>OF COURSE</i></b> " +
        "you had to pick the most ridiculous option there.<br><br>You know what? I'm really not that surprised actually.<br><br>I'm not mad, I'm just disappointed.", [bad_ending]);
    h_build2 = new Section("Rome", "Oh come on, silly. Didn't anyone tell you Rome wasn't built in a day<br><br> " + em + ": I OBJECT!<br><br>Wait what? You can't do that. You're in the game and only do what I write " +
        "out.<br><br>" + em + ": Tell that to the words coming out of my mouth!<br>" + secretary + ": Yeah, do that! You writer of things.<br><br>I'm thoroughly confused, so I'm just gonna give the player a bad ending and " +
        "call it there.<br><br>" + em + ": Aw, what? At least give them the good ending for reading this whole dialogue.<br>" + secretary + ": Yeah! At least do that.<br><br><i>Fine.</i>", [good_ending]);
    h_build3 = new Section("A World", "An interesting idea. Maybe too ambitious.<br>" + pc + " pulls out a hammer and begins hitting something that can't be seen.<br><br>" + pc + ": Come on guys help me! I can't " +
        "make this thing on my own.<br><br>Do " + treasurer + " and yourself help them?");
    h_build31 = new Section("No", "The two of you stand there as " + pc + " attempts to bring a world into existence out of thin air on their own. They slowly lose steam. You steadily feel bad for not stepping in to " +
        "help.<br><br>Suddenly, they've done it! There is a world that was pulled from nothing right there in front of you and " + treasurer + "'s eyes. You guys can't believe it.<br><br>" + treasurer + ": Can we visit your " +
        "world, " + pc + "?<br><br>" + pc + " puts on their sunglasses and turns to face the two of you.<br><br>" + pc + ": You wish.", [bad_ending]);
    h_build32 = new Section("Yes", treasurer + " and yourself run over and start hitting invisible things. Time after time your hammers fall and rise.<br><br>" + treasurer + ": Imma make a skyscraper.<br>" +
        pc + ": Nice. I'm gonna make a freaking volcano. We can do whatever we want here!<br><br>You start working on something that you're not even sure quite what it is at first.<br><br>" + pc + ": What are you making over " +
        "there, " + player + "?<br>" + treasurer + " walking up: Is that what I think it is?<br>" + pc + ": That's insane, I thought we were being creative by making these outlandish ideas and here " + player + " is to show us " +
        "how it's done.");
    h_build321 = new Section("Continue", "From your capable hammer, you've creatively thought of a way to put together another universe within our own by smacking dust particles together.<br>It's brilliant.<br>" +
        "<img src = \"https://cdn.mos.cms.futurecdn.net/qWRNTdErRRidiwWoT5dvj.jpg\" style=\"width:300px; height:300px;\">", [good_ending]);
    h3 = new Section("Juggle", "Woahhhhh, you can juggle?");
    h31 = new Section("Yes", "That's so sick.<br><br>This juggling penguin is happy for you and your life of juggling.<br><img src = \"https://media.giphy.com/media/3eE7PuC4qxxVm/giphy.gif\" style=\"width:300px; height:300px;\"><br>Would you like to juggle your hammers with this penguin on a tour?")
    h32 = new Section("No", "You find yourself on a stage. You have 2 hammers in your right hand and 1 in your left. Your hands clam up as you've realized the thing you signed up to do is something you " +
        "never learned. The pressure weighs down on you, causing you to sweat. You look up into the stage lights, take an enormous gulp, and toss one hammer in the air.")
    h311 = new Section("Absolutely", "You and your penguin party like rock stars for the entire tour, juggling simply for the joy it brings the two of you. You're certain that if it were possible for a penguin to smile, your partner would be " +
        "gleaming. The two of you radiate entertainment.<br><br><b>You are stars.</b>", [good_ending]);
    h312 = new Section("Sorry, but no", "You half expect the penguin to cry at your rejection. Your heart races as he stares into your eyes, not showing a lick of emotion.<br><br>Contrary to what you thought, " +
        "the penguin shrugs their little penguin shoulders and waddles off to a limo you hadn't noticed until now.<br><br>Opportunity: Lost.", [bad_ending]);
    h321 = new Section("Continue", "The first hammer flips through the air, and you throw the third one because that's what someone told you would help with juggling. They said, \"Just get em all outta your hands. That's juggling.\"" +
        " you didn't really believe them at the time, so why would you try it in front a crowd of people. That first hammer is falling down towards you now followed by the second and third. Why did you throw them so high?");
    h3211 = new Section("Continue", "You awake in a cold sweat, hearing thudding at the door.<br><br>" + treasurer + ": You want pancakes?<br>" + player + ": Huh?<br>" + treasurer + ": You fell asleep at the party. We're all having post party pancakes!" +
        "<br>" + player + ": Sick! I'll be out in a second.<br><br>You've got pancakes coming!", [good_ending]);
    h4 = new Section("Hammerhead Shark", pc + ", " + treasurer + ", and yourself are on a beach at some vacation paradise. You decide it's a good idea to go swimming and run out into the waves that are crashing on the picturesque shoreline.<br><br>" +
        treasurer + ": Look out, " + player + ", I see a shark fin out there!<br>" + pc + ": Holy cow! I see it too.<br><br>You have to think on your feet quick. Do you keep going or turn around? Be careful.");
    h41 = new Section("Keep going", "After thinking on it for a moment, you go into the shark infested waters. For some reason, you feel completely unafraid. You get closer and closer to the sharks.<br><br>Kyle the Shark: Bro, you just came out here. We're sharks." +
        "<br>CJ the Shark: That's pretty insane. I like your style. What's your name?<br>" + player + ": " + player + "...<br>Kyle: Well dude you're one of us now.<br>" + player + ": Wait really? What about my friends?<br>Kyle: That depends... Do they like " +
        "fish?");
    h411 = new Section("Yes", "Kyle: Well then of course they can join us!<br><br>You wave over " + treasurer + " and " + pc + ", and they look at each other and consider it. They shrug and rush out into the water.<br><br>" +
        "Kyle: You guys are gonna make great sharks!<br>CJ: For real.<br>" + treasurer + ": You really think so? This is our first time being sharks.<br><br>CJ and Kyle both nod their sharkish nod. With that, you guys go out into the depths of the ocean blue, feeling both " +
        "free and fluent. It comes naturally to you to swim through the sea weed.<br><br>This lasts for about five minutes until you realize you're out of breath. CJ and Kyle have the gills for this lifestyle while y'all have plain old lungs. You, " + treasurer + ", and " + pc + " swim up to the surface." +
        "<br><br>" + pc + ": Looks like being a shark isn't in the cards.<br>" + player + ": You know what is?<br>" + pc + ": What?<br>" + player + ": <i>Friendship</i>", [and_scene]);
    h412 = new Section("No", "You shake your head. Kyle shakes his head with a frown.<br><br>Kyle: Well unfortunately they can't join us, but you're more than welcome.");
    h4121 = new Section("Join Sharks", player + ": I think I'll join you guys.<br>Kyle: That's rad. Come on, CJ and I were gonna go swimming through the vast blue waters.<br>" + player + ": That sounds awesome.<br><br>You swim through the ocean, and your abdomen is brushed " +
        "by seaweed as you move. The sharks are moving to quickly ahead of you. It seems like they're built for this. You, however, are not and your lungs prove this as well. You swim up to the surface and realize you've gotten a long way from the shore. You miss your friends " +
        "It'll be dark soon.", [bad_ending]);
    h4122 = new Section("Return to Friends", "You say your goodbyes to your shark bros, and you will truly miss them. When you make it back to your friends, " + pc + " has a tremendous idea.<br>" + pc + ": We should make a sand castle.<br>" + player + ": That sounds totally sick.<br>" +
        treasurer + ": sounds like it's decided then. Let's make the best sand castle we can.<br><br>The three of you build a sand castle complete with a drawbridge, moat, and turrets. It takes a long time, but eventually it's finally complete. Exactly the image you " +
        "pictured in your head.<br><br>You look off into the distance and see the orange glow of the sunset turn to purple. Purple to white speckled black of distant galaxies yet to be explored. Another day, another adventure.", [and_scene]);
    h42 = new Section("Stand Still", "The shark fins speed in your direction. Hesistance can sometimes be a tortorous trait. Right now, this has proven true.<h1>SHARK ATTACK</h1>", [bad_ending]);
    h43 = new Section("Swim Back", "The sharks chase you out of the water, and you run back to " + treasurer + " and " + pc + ".<br><br>" + pc + ": Holy crap, what happened to your leg?<br><br>In all the commotion, so much adrenaline pumped through your body that you didn't feel the bite on your leg.<h3>NEW CHOICE!</h3>" +
        "You didn't feel the tattoo that the shark drew on your leg. It was the rough outline of a shark fin in the water. You couldn't really blame the shark for making it look so rough because they'd never seen their fins from outside the water, so how could they know?<br><br>This bite causes you severe mental anguish. Do you sue?");
    h431 = new Section("Sue", "You all wrap it up at the beach, as you have a big day tomorrow with taking the sharks to court.", [and_scene]);
    h432 = new Section("No Law", "You kind of like the way your little shark tattoo looks, and it's a good reminder of this day at the beach. You definitely want to remember it for the rest of your life. No laser removal necessary...", [good_ending]);
    //fish events
    f1 = new Section("Sushi", "You begin chopping away at seaweed to make your daily sushi. Of course, you need fish to be able to make sushi, so you must source that as soon as possible.<br><br>" + pres + ": I think I can help you with that.<br><br>" + pres + " pulls out a fishing rod " +
        "and drops it in the deep pit of fish in the middle of the room. This pit is on reserve so that you," + pres + ", " + vp + ", and " + secretary + " can create sushi whenever you'd like. Helping prepare is " + vp + " who is rinsing the rice and bringing water to a boil.<br><br>You all seem to know what " +
        "you're doing. How long have you been doing this for?");
    f11 = new Section("1 Year", "From the middle of the room, " + pres + " pulls after they've got a tug on the line. Out from the hole comes a nice looking salmon.<br><br>" + vp + ": Holy cow, or should I say fish?<br>" + secretary + ": Good one! I say, man.<t>*rimshot*");
    f12 = new Section("10 Years", "From the middle of the room, you hear " + pres + " heaving with all their might. You, " + vp + ", and " + secretary + " all walk to the center of the room to see what it is they've caught. It glints from inside the water hole almost as if to greet you. Out from the hole bursts and shiny " +
        "silvery tuna. Its eye looks at you as it wiggles around.<br><br>" + secretary + ": That's a ton o' fish.<br>" + vp + ": Change your tune...a.<br>" + pres + ": You guys are really funny and all, but can you help me move this behemoth?");
    f13 = new Section("Eternity", "You take a moment to look around your almost mythical sushi shack. You all have worked for an eternity to get this setup exactly right in hopes that the <b>big one</b> will come. Suddenly from the center of the room, " + pres + " starts to tug at the fishing pole. The room begins to shake all about. " +
        "Things fall off of walls. From the hole comes a 7 1/2 foot mythical red snapper.<br><br>You all have finally done it.<br>" + vp + " sheds a tear.<br>You gleem with pride.<br>" + secretary + " and " + pres + " play patty cake in excitement.");
    f1_1 = new Section("Continue", "On and on your sushi shack goes.<br>When it ends, everyone knows.<br>It's when you click on that button and decide it does.<br>Go ahead and relax hear just because.<br><br>Yeesh, corny.", [and_scene]);
    //egg branch
    e1 = new Section("Show It Off", parseChunk(`EM: Ohhh, I like the egg you have there.\nPLAYER: Thanks! I got this golden egg from the golden egg store.\nEM: Whaaaaat? That's absolutely bananas.\nPLAYER: No, it's an egg.\nEM: Ahaha, silly goose, this is improve, those MUST be bananas.\nPLAYER: Wha... 
                    How are you doing that?\nEM: MWAHAHAHAHA!\n\nYou pass out from the sheer power of EM. I'm so sorry.`));
    e2 = new Section("Raise It", parseChunk(`To keep the egg warm, you stick it in your armpit. After 20 minutes of incubating in the armpit, your egg begins to crack
                        . A tear leaves your eye as you think you have killed any chance of being the wonderful parent of whatever creature could come from the egg.`));
    e21 = new Section("Continue", parseChunk(`You remember that eggs that go to market usually aren't fertilized, and you forgot you got this bad boy from there. With one of the
                        best smiles ever seen by humans, you cook up a small omelet and gulp it down.`), [good_ending]);
    e22 = new Section("Continue", parseChunk(`Suddenly, you see a scale nose poke out of the crack. The rest of the head pops out, and you realize what it is. This little baby is
                        an alligator. You set aside your deathly fear of reptilians to raise the alligator as your own.`), [good_ending]);
    e23 = new Section("Continue", parseChunk(`Suddenly, you see a beak poke out of the crack. It's a little baby chick. Congratulations. :)`), [good_ending]);
    e24 = new Section("Continue", parseChunk(`A darkness seeps from the crack in the egg. You hear a deep, gurgled laugh emit from the egg. Looking closer, you see two horns and red
                        eyes looking back at you. This creature, whatever it is, is most definitely not friendly.`), [bad_ending]);
    //events for object suggestions
    var hammer = new Section("Hammer", "As a jack of all trades, you pick this ALL POWERFUL tool.<br><br><br><sub><small>(please don't use it as a weapon)</small></sub>", [h_weapon, h_build]);
    var fish = new Section("Fish", "Black! White! Fish!<br>You've taken the LITERAL suggestion of fish. This is gonna be good.<br><br>What business do you have with <i>fish</i>?");
    var egg = new Section("Egg", parseChunk(`You hear the notorious improv suggestion for egg, and you snag the opportunity for some \"clucking\" awesome improv.\nSECRETARY:
                What're you gonna do with an egg?`));
    //events for general suggestion types
    var s_activity = new Section("Activity", player + ": What's an activity you'd do on the weekend?");
    var s_location = new Section("Location", player + ": Give me a non-geographical location!<br>The suggestions flood in from all over the room.");
    var s_object = new Section("Object", player + ": Can I get a suggestion for a household object?<br>The suggestions flood in from all over the room.", [egg, hammer, fish]);
    var base = new Section("Let's Go", pres + " gives announcements about the club, the end of the world, and what have you.<br>Now we're ready to move on to a regular improv game. How about a good old game of montage?<br><br>What kind of suggestion will you get?", [s_object, s_location, s_activity]);
    //events for opening loop
    var intro3 = new Section("Macarena", "You do the macarena.<br>Everyone cheers you on.", [base]);
    var intro2 = new Section("Bunny Bunny", "You bunny bunny over to " + treasurer + " and the game continues over and over.", [base]);
    var intro1 = new Section("Nothing", "You do nothing and everyone looks at you including " + vp + " who runs up and smacks a poster to your forehead.", [base]);
    start = new Section("Beginning", "Welcome to the improv, " + player + ", where things are about to get a little strange.<br>Let's start with a little warmup. Bunny Bunny...", [intro1, intro2, intro3]);

    hammer.addOptions([h3, h4]);
    h_build.addOptions([h_build1]);
    h_build1.addOptions([h_build11]);
    h_build3.addOptions([h_build31, h_build32]);
    h_build32.addOptions([h_build321]);
    h3.addOptions([h31, h32]);
    h31.addOptions([h311, h312]);
    h32.addOptions([h321]);
    h321.addOptions([h3211]);
    h4.addOptions([h41, h42, h43]);
    h41.addOptions([h411, h412]);
    h412.addOptions([h4121, h4122]);
    h43.addOptions([h431, h432]);
    fish.addOptions([f1]);
    f1.addOptions([f11, f12, f13]);
    f11.addOptions([f1_1]);
    f12.addOptions([f1_1]);
    f13.addOptions([f1_1]);
    egg.addOptions([e1, e2]);
    e1.addOptions([bad_ending]);
    eggIntGenerator = Math.floor(Math.random() * Math.floor(3));
    switch (eggIntGenerator) {
        case 0:
            e2.addOptions([e21]);
            break;
        case 1:
            e2.addOptions([e22]);
            break;
        case 2:
            e2.addOptions([e23]);
            break;
        case 3:
            e2.addOptions([e24]);
            break;
    }

    and_scene.addOptions([base]);

    base.removeOptions([s_activity, s_location]);

    var story = new Setup(1);
    story.addInitial(start); //change event to start at different areas
    return story;
}