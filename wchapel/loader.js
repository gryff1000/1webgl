// my window size = 1920 x 945


// The babylon engine
var engine;
// The current scene
var myScene;
// The HTML canvas
var canvas;
//--------------------Scene shared variables here---------------------------------
var sceneNum = 0;
var myScene;
var ended = 0;
//--------------------end shared variables---------------------------------


window.onload = function () {

    // Check support
    if (!BABYLON.Engine.isSupported()) {
        window.alert('Browser not supported');
    } 
	else {
        // Babylon
        
        canvas = document.getElementById("renderCanvas");
        engine = new BABYLON.Engine(canvas, true);
		myScene = new BABYLON.Scene(engine);
		divFps = document.getElementById("fps");
		
		createWorld();
		
//------------------------actions-----------------------------------------------------------		

		// Resize window
		
		window.addEventListener("resize", function () {
			engine.resize();
		});
	
    }; // end else

}; // end onload

