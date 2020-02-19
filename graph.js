class Graph {
    //constructor indicating the number of vertices
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
        this.currentVertex = null;
    }

    //add a vertex to graph
    addVertex(v) {
        //initialize adjacency list with null
        this.AdjList.set(v, []);

        //initialize current vertex if not set
        if (this.currentVertex == null)
            this.currentVertex = v;
    }

    //add edge to graph
    addEdge(v, w) {
        //get list for vertex v and add vertex to show edge between v and w
        this.AdjList.get(v).push(w);

        //add edge from w to v
        this.AdjList.get(w).push(v);
    }

    //transition from vertex to vertex
    transition(dest) {
        var inGraph = false;
        for (var i in this.AdjList.get(this.currentVertex)) {
            inGraph = i == dest;
        }
        if (inGraph) {
            this.currentVertex = dest;
        } else {
            console.log("Destination did not appear in adjacent list for vertex");
        }
    }

    printGraph() {
        //get list of vertices
        var keys = this.AdjList.keys();

        //iterate through vertices
        for (var i of keys) {
            //get adjacency list for vertex
            var values = this.AdjList.get(i);
            var string = "";

            //iterate over adjacency list and concatenate to string
            for (var j of values) {
                string += j + " ";
            }

            //print vertex and it's adjacency list
            console.log(i + ": " + string + "\n");
        }
    }
}
//generate events
var intro = new Event("Welcome to the improv, where things are about to get a little strange.<br>Let's start with a little warmup. Bunny Bunny", ["Bunny Bunny", "Toki Toki", "Do nothing"]);
//Test Graph

//generate a graph
var g = new Graph(5);
var vertices = ['one', 'two', 'three', 'four', 'five'];

//add vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

//add edges
g.addEdge('one', 'two');
g.addEdge('one', 'five');
g.addEdge('two', 'four');
g.addEdge('three', 'five');

g.printGraph();