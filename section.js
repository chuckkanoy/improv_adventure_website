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

    removeOptions(optionsRemoved) {
        const length = this.options.length;

        for (var i = 0; i < length; i++) {
            if (optionsRemoved.includes(this.options[i])) {
                if (this.options[i + 1])
                    this.options.splice(i, i + 1, this.options[i + 1]);
                else
                    this.options.splice(i, i + 1)

                i = i - 1;
            }
        }
    }

    toString() {
        return this.title;
    }
}