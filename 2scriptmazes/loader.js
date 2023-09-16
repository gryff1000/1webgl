// my window size = 1920 x 945


// The babylon engine
var engine;
// The current scene
var myScene;
// The HTML canvas
var canvas;

var sceneNum = 1;
//var theScenes = new Array("rift1anim6new.babylon", "script_maze01.babylon", "village6.babylon");

//--------------------Scene 1 variables---------------------------------
var xSize = 7;
var ySize = 7;
var theCells = [];
//var myScene = new BABYLON.Scene(engine);
var lastrow = ySize-1;
var lastcol =xSize -1;
var firstcol = 0;
var firstrow = 0;
var halfx = xSize - Math.floor(xSize*.5);
var halfy = ySize - Math.floor(ySize*.5);
var cent_zero_x = -xSize*2 + 2;
var cent_zero_y = ySize*2 - 2;
var ground = [];
var groundNum = 0;
var talk;
var divFps;
var divDCs;
var divAllMeshes;
var divVerts;
var sceneInstru;

var exitNum = 0;


window.onload = function () {

    canvas = document.getElementById("renderCanvas");
	talk = document.getElementById("words");
	
	//delete this line for final- for testing only
	//divFps = document.getElementById("fps");
	
    // Check support
    if (!BABYLON.Engine.isSupported()) {
        window.alert('Browser not supported');
    } 
	else {
		divFps = document.getElementById("fps");
		divDCs = document.getElementById("DCs");
		divAllMeshs = document.getElementById("meshes");
		divVerts = document.getElementById("verts");
		
        engine = new BABYLON.Engine(canvas, true);
		myScene = new BABYLON.Scene(engine);
		sceneInstru = new BABYLON.SceneInstrumentation(myScene);
		
		
		
		createMaze();
		
	}
};
		
//------------------------actions-----------------------------------------------------------		

    // Resize window
		
    window.addEventListener("resize", function () {
        engine.resize();
    });
		

