//class for each event in game
class Event {
    constructor(message, options) {
            this.message = message;
            this.options = [];
            for (var i in options) {
                this.options.push(options[i]);
            }
        }
        //prints different elements of event
    toString() {
        console.log(this.message);
        for (var i in this.options) {
            console.log(this.options[i]);
        }
    }
}

//generate events
var e = new Event("An Event", ["Run", "Stay", "Fly away"]);