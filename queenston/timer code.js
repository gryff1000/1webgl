
// clearing a timer

var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
}

// creating mushrooms - Temechon

var ENEMIES  = [];
// Creates a shroom in a random lane
var showArrow = function () {
    // The starting position of toads
    var posZ = 100;

    // Get a random lane
    var posX = LANES_POSITIONS[Math.floor(Math.random() * LANE_NUMBER)];

    // Create a clone of our template
    var shroom = TOAD_MODEL.clone(TOAD_MODEL.name);

    shroom.id = TOAD_MODEL.name+(ENEMIES.length+1);
    // Our toad has not been killed yet !
    shroom.killed = false;
    // Set the shroom visible
    shroom.isVisible = true;
    // Update its position
    shroom.position = new BABYLON.Vector3(posX, shroom.position.y/2, posZ);
    ENEMIES.push(shroom);
};

// Creates a clone every 1 seconds
setInterval(showArrow, 1000); 