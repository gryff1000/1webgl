//"diffuse":[0,0,0.1344]


//var theclap;
//var aCBoard;
var takes = 1;
var skeleton;

//var aButton;

var theVolume = 1;
//var anthem,talk;


function createWorld(){

	if (sceneNum === 0){
		
	//change the value of cameraFlag to a value other than 1 to use the free camera from blender
					var cameraFlag = 1;
					
					console.log(cameraFlag);
					
					// which camera is active Arc Rotate or Blender Free Camera
					
					if (cameraFlag == 1){
						var myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, BABYLON.Vector3.Zero(), myScene);
						myCamera.setPosition(new BABYLON.Vector3(-1, 2, -5));
						myCamera.speed = .1;
						myCamera.wheelPrecision = 250;
						myCamera.fov = .8;
						myCamera.lowerRadiusLimit = myCamera.upperRadiusLimit = myCamera.radius;
						myScene.activeCamera = myCamera;
					}
					else {
						var myCamera2 = myScene.getCameraByName("Camera");
						myCamera2.speed = .1;
						myCamera2.wheelPrecision = 250;
						myCamera2.fov = 1;
						myScene.activeCamera = myCamera2;
					}
					
					//var plane =  BABYLON.Mesh.CreateGround("ground", 10,10,2,myScene);
					
					// Then attach the activeCamera to the canvas.
					myScene.activeCamera.attachControl(canvas);
	
	
		
		BABYLON.SceneLoader.Append("", "trump_new1j.babylon", myScene);
		
		myScene.executeWhenReady(function () {
			
			// check materials only once
			var meshMats = myScene.materials;
			for (i=0; i<meshMats.length; i++){
				meshMats[i].name.checkReadyOnlyOnce = true;
			};
		
			// make all meshes unpickable
			var allMeshes = myScene.meshes;
			for (i=0; i<allMeshes.length; i++){
				allMeshes[i].isPickable = false;
			};
			
			skeleton = myScene.getSkeletonById(0);
			//myScene.stopAnimation(skeleton);
			myScene.beginAnimation(skeleton,1,60,false, 1);
			
		});
		
		// Once the scene is loaded, register a render loop
		engine.runRenderLoop(function() {
		divFps.innerHTML = engine.getFps().toFixed() + " fps";
		   myScene.render();
		});
	//});    
	} // end if sceneNum = 0

			
} // end createWorld function

