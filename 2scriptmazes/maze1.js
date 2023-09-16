/*
The maze is generated using a recursive backtracker method.

Steps:
1. Set up necessary arrays
2. Make the initial cell the current cell and mark it as visited - top left corner used though it can be set to random
3. While there are unvisited cells do:
a.)  If the current cell has any neighbours which have not been visited then
b.)  Randomly pick one of the unvisited neighbours and 
c.)  Push the current cell to the stack then
d.)  Remove the wall between the current cell and the chosen cell and
e.)  Make the chosen cell the current cell and mark it as visited
f.)  But if there are no unvisited neighbours and the stack is not empty then
g.)  Pop a cell from the stack and make it the current cell and do neighbour search
4. Repeat from 3 until no unvisted cells and stack is empty 

*/


function newMaze(x, y) { // x and y are maze dimension

    // Establish variables and starting grid
    var totalCells = x*y;
    var cells = new Array();
    var unvis = new Array();
    for (var i = 0; i < y; i++) {
        cells[i] = new Array();
        unvis[i] = new Array();
        for (var j = 0; j < x; j++) {
            cells[i][j] = [0,0,0,0];
            unvis[i][j] = true;
        }
    }
    
	
    // Set a random position to start from or set the start cell as top corner.
    //var currentCell = [Math.floor(Math.random()*y), Math.floor(Math.random()*x)];
	var currentCell = [0,0];
    var path = [currentCell];
    unvis[currentCell[0]][currentCell[1]] = false;
    var visited = 1;
	
	//wall counter used to monitor creation output in console
	//totwalls = 0;
    
	
    // Loop through all available cell positions
    while (visited < totalCells) {
        // Determine neighboring cells
        var potential = [[currentCell[0]-1, currentCell[1], 0, 2],      // top
		[currentCell[0], currentCell[1]+1, 1, 3],               		// right
		[currentCell[0]+1, currentCell[1], 2, 0],               		// bottom
		[currentCell[0], currentCell[1]-1, 3, 1]];              		// left

		var neighbors = new Array();
        
		
        // Determine if each neighboring cell is in game grid, and whether it has already been checked
        for (var l = 0; l < 4; l++) {

			if (potential[l][0] > -1 &&     // Is the y value of the neighbor inside the maze?

				potential[l][0] < y &&      // Is the y value of the neighbor inside the maze?

				potential[l][1] > -1 &&     // Is the x value of the neighbor inside the maze?

				potential[l][1] < x &&      // Is the x value of the neighbor inside the maze?

				unvis[potential[l][0]][potential[l][1]]) // Has the neighbor already been visited?

				{ neighbors.push(potential[l]); }

		}
        
        // If at least one active neighboring cell has been found
        if (neighbors.length) {
            // Choose one of the neighbors at random
            next = neighbors[Math.floor(Math.random()*neighbors.length)];
            
            
			// Remove the wall between the current cell and the chosen neighboring cell
            cells[currentCell[0]][currentCell[1]][next[2]] = 1;// a value of 1 indicates a connection 
            cells[next[0]][next[1]][next[3]] = 1;// a value of 1 indicates a connection 
            
            
			// Mark the neighbor as visited, and set it as the current cell
            unvis[next[0]][next[1]] = false;
            visited++;
            currentCell = [next[0], next[1]];
            path.push(currentCell);
        }
        
		// Otherwise go back up a step and keep going
        else {
            currentCell = path.pop();
        }
		
    }
	//console.log("Top Row = " + cells[0][0]);
	//cells[0][0] = [1,0,1,0];
	//for(i=0; i<cells.length; i++){
	//	console.log("First Cell = " +cells[i][0]);
	//};
    return cells; // to be used to draw the mesh
}
    
