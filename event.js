//class for each event in game
class Event {
    constructor(title, message, options) {
            this.title = title;
            this.message = message;
            this.options = [];
            for (var i in options) {
                this.options.push(options[i]);
            }
        }
        //prints different elements of event
    toString() {
        return this.title;
    }
}