//class for each event in game
class Event {
    //creates object of Event class
    constructor(title, message, options) {
        this.title = title;
        this.message = message;
        this.options = [];
        for (var i in options) {
            this.options.push(options[i]);
        }
    }

    //adds an option if necessary
    addOptions(optionsUsed) {
        for (i = 0; i < optionsUsed.length; i++) {
            this.options.push(optionsUsed[i]);
        }
    }

    //prints different elements of event
    toString() {
        return this.title;
    }
}