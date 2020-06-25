class Setup {
    //constructor indicating the number of vertices
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
        this.currentVertex = null;
    }

    //add a vertex to graph
    addInitial(v) {
        //initialize adjacency list with null
        this.AdjList.set(v, []);

        //initialize current vertex if not set
        if (this.currentVertex == null)
            this.currentVertex = v;
    }
}