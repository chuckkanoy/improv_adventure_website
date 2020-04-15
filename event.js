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
    addOption(option) {
        this.options.push(option);
    }

    //prints different elements of event
    toString() {
        return this.title;
    }
}