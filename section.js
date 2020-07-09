class Section {
    constructor(title, message, options) {
        this.title = title;
        this.message = message;
        this.options = [];
        for (var i in options) {
            this.options.push(options[i]);
        }
    }

    addOptions(optionsUsed) {
        for (var i = 0; i < optionsUsed.length; i++) {
            this.options.push(optionsUsed[i]);
        }
    }

    toString() {
        return this.title;
    }
}