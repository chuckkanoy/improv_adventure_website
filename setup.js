class Setup {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
        this.currentVertex = null;
    }

    addInitial(v) {
        this.AdjList.set(v, []);

        if (this.currentVertex == null)
            this.currentVertex = v;
    }
}