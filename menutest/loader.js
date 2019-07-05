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

   // canvas = document.getElementById("renderCanvas");
	
    // Check support
    if (!BABYLON.Engine.isSupported()) {
        window.alert('Browser not supported');
    } else {
        // Babylon
        
        canvas = document.getElementById("renderCanvas");
        engine = new BABYLON.Engine(canvas, true);
		myScene = new BABYLON.Scene(engine);
		
		
		createWorld();
		
//------------------------actions-----------------------------------------------------------		

    // Resize window
		
    window.addEventListener("resize", function () {
        engine.resize();
    });
		
	
	
		/*
	window.addEventListener("click", function (evt) {
	// Pick an object
		var pickResult = myScene.pick(evt.clientX, evt.clientY);
	
		if (pickResult.hit)
		{
			var object = pickResult.pickedMesh.name;
			//console.log(object);
		}
		
		switch(object) {
			
			case "cube1" :
					var object1 = myScene.getMeshByName("music");
					object1.isVisible = false;
					var object2 = myScene.getMeshByName("textures");
					object2.isVisible = false;
					object3 = myScene.getMeshByName("play");
					object3.isVisible = false;
					divMusic.style.display = 'none';
					divTexts.style.display = 'none';
					//music.play('line0');
					playIntro();
					break;
				
			case "cube2" :
					divMusic.style.display = 'block';
					divTexts.style.display = 'none';
					break;
				
			
			default:
					break;
			}
		
	});
		*/

    };

};

