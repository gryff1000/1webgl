// my window size = 1920 x 945


// The babylon engine
var engine;
// The current scene
var myScene;
// The HTML canvas
var canvas;
//--------------------Scene 0 variables---------------------------------
var sceneNum = 0;
var theScenes = new Array("rift1anim6new.babylon", "maze2g.babylon", "village6.babylon");
var talk;
var divFps;
var myCamera;
//--------------------Scene 1 variables---------------------------------
//to be added


window.onload = function () {

    //canvas = document.getElementById("renderCanvas");
	//talk = document.getElementById("words");
	
	//delete this line for final- for testing only
	//divFps = document.getElementById("fps");
	
    // Check support
    if (!BABYLON.Engine.isSupported()) {
        window.alert('Browser not supported');
    } else {
        // Babylon is supported
		
		canvas = document.getElementById("renderCanvas");
		talk = document.getElementById("words");
        divFps = document.getElementById("fps");
        engine = new BABYLON.Engine(canvas, true);
		myScene = new BABYLON.Scene(engine);
		
		
		createWorld();
		
//------------------------actions-----------------------------------------------------------		

    // Resize window
		
    window.addEventListener("resize", function () {
        engine.resize();
    });
		
	
	
	// When a key is pressed
		window.addEventListener('keydown',function(event){
			
			
			if (event.keyCode === 73 && sceneNum ==1)
			{
				
				switch (exitNum) {
				
					case 0:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(26, 5.8, -10);
						camera.rotation.y = 0;
						exitNum = exitNum +1;
					break;
				
					case 1:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(11, 9.8, 26 );
						camera.rotation.y = Math.PI * 1.5;
						exitNum = exitNum +1;
					break;
					
					case 2:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(-26, 13.8, 10 );
						camera.rotation.y = -Math.PI;
						exitNum = exitNum +1;
					break;
					
					case 3:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(-11, 1.8, -26);
						camera.rotation.y = Math.PI/2
						exitNum = 0;
					break;
					
					default:
					break;
				
				}
			  
			}

		});

	
	
	//When click event is raised
		
	window.addEventListener("click", function (evt) {
	// Pick an object
		var pickResult = myScene.pick(evt.clientX, evt.clientY);
	
		if (pickResult.hit)
		{
			var object = pickResult.pickedMesh.name;
		}
		
		switch(object) {
			
			case "2play" :
		
					object3 = myScene.getMeshByName("falling");
					object4 = myScene.getMeshByName("2play");
					object4.isVisible = false;
					
					playTalk(object3);
					
					break;
			
			default:
					break;
		}
		
	});

    }

};

