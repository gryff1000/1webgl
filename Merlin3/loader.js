// my window size = 1920 x 945


// The babylon engine
var engine;
// The current scene
var myScene;
// The HTML canvas
var canvas;
var sceneNum = 0;
//changethge first in the array to a "START" button
var theScenes = new Array("scene01/walls02e8.babylon", "scene02/myTunnels.babylon", "scene03/new_isle01.babylon", "scene04/endButton01.babylon");
var myCamera2;
//for(i=0; i<theScenes.length; i++){
//	console.log(theScenes[i]);	
//}
//var blueCube;
//var allMeshes;
//--------------------Scene 0 variables---------------------------------
//var mySkeleton = [];
//var book;
//var theLight;
//var theDog;
//var sceneNum = 1; 
//var theScenes = new Array("scene01.babylon", "scene02.babylon");

//--------------------Scene 1 variables---------------------------------

/*var xSize = 6;
var ySize = 6;
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
var exitNum = 0;

*/
window.onload = function () {

    canvas = document.getElementById("renderCanvas");
	//talk = document.getElementById("words");
	
	//delete this line for final- for testing only
	divFps = document.getElementById("fps");
	divDCs = document.getElementById("DCs");
	divAllMeshs = document.getElementById("meshes");
	divVerts = document.getElementById("verts");
	divWords = document.getElementById("words");
	divKeys = document.getElementById("Keys");
	
    // Check support
    if (!BABYLON.Engine.isSupported()) {
        window.alert('Browser not supported');
    } else {
        // Babylon
        
        engine = new BABYLON.Engine(canvas, true);
		//myScene = new BABYLON.Scene(engine);
		
		//count();
		
		//sceneNum = sceneNum + 1;
		createScene();
	};
		
//------------------------actions-----------------------------------------------------------		

    // Resize window
		
    window.addEventListener("resize", function () {
        engine.resize();
    });
		
	
/*	
	// When a key is pressed
		window.addEventListener('keydown',function(event){
			
			
			if (event.keyCode === 73 && sceneNum ==1)
			{
				
				switch (exitNum) {
				
					case 0:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(26, 5.8, -12);
						console.log(camera.position.x);
						camera.rotation.y = 0;
						exitNum = exitNum +1;
					break;
				
					case 1:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(11, 9.8, 26 );
						console.log(camera.position.x);
						camera.rotation.y = Math.PI * 1.5;
						exitNum = exitNum +1;
					break;
					
					case 2:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(-26, 13.8, 10 );
						console.log(camera.position.x);
						camera.rotation.y = -Math.PI;
						exitNum = exitNum +1;
					break;
					
					case 3:
						var camera = myScene.getCameraByName("Camera");
						camera.position = new BABYLON.Vector3(-11, 1.8, -26);
						console.log(camera.position.x);
						camera.rotation.y = Math.PI/2
						exitNum = 0;
					break;
					
					default:
					break;
				
				}
			  
			}

		});

*/	
/*	
	//When click event is raised
		
	window.addEventListener("click", function (evt) {
	// Pick an object
		var pickResult = myScene.pick(evt.clientX, evt.clientY);
	
		if (pickResult.hit)
		{
			var object = pickResult.pickedMesh.name;
			console.log(object);
		}
		
		switch(object) {
			
			case "Cube" :
		
					//object3 = myScene.getMeshByName("falling");
					//object4 = myScene.getMeshByName("2play");
					//object4.isVisible = false;
					
					//playTalk(object3);
					
					console.log("Cube Clicked");
					deleteWorld();
					
					break;
			
			default:
					break;
		}
		
	});
*/

    //}

};

