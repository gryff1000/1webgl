//"diffuse":[0,0,0.1344]


var theclap;
var aCBoard;
var takes = 1;
//var ended = 1;
var skeleton;
var aMelon;
var aButton;
//var loaded = 0;
var theVolume = 1;
var soundsReady = 0;
var myCamara0, myCamara1, myCamara2;
var start,take1,music,cut,ooh,take2,clap1,clap2,talk;


function createWorld(){

	if (sceneNum === 0){
		// add this line to set a default camera otherwise issues with appending
		//myScene.createDefaultCameraOrLight();
		myCamera0 = new BABYLON.FreeCamera("Camera0",new BABYLON.Vector3(0,1,50),myScene);
		//myCamera0 = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 1, 0, BABYLON.Vector3.Zero(), myScene);
		//myCamera0.setPosition(new BABYLON.Vector3(2, 1.5, -3.0));
		myCamera0.speed = .1;
		myCamera0.wheelPrecision = 250;
		myCamera0.fov = .725;
		myCamera0.minZ =.01;
		myScene.activeCamera = myCamera0;
		
		myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 1, 0, BABYLON.Vector3.Zero(), myScene);
		myCamera.setPosition(new BABYLON.Vector3(2, 1.5, -3.0));
		myCamera.speed = .1;
		myCamera.wheelPrecision = 250;
		myCamera.fov = .725;
		myCamera.minZ =.01;
		
		
		
		//BABYLON.SceneLoader.loggingLevel = BABYLON.SceneLoader.DETAILED_LOGGING;
	
		
		createAudio();
		
		// load babylon files
		BABYLON.SceneLoader.Append("", "chair.babylon", myScene);
		
		BABYLON.SceneLoader.Append("", "wingy3.babylon", myScene);
		myScene.executeWhenReady(function () {
			// if mobile device increase light intensity
			if( isMobile.any() ){ 
				var myLight = myScene.getLightByName("Hemi.top");
				myLight.intensity = 3;
				var myWall = myScene.getMaterialByName("dk14_34b.blue");
				myWall.diffuseColor = new BABYLON.Color3(0.0,0.0,0.25);
				
			};
		
			// create additional cameras from blender
			//myCamera1 = myScene.getCameraByName("Camera1");
			//myCamera2 = myScene.getCameraByName("Camera2");
			
			// create and hide replay button
			aButton = myScene.getMeshByName("Button");
			//aButton.setEnabled(false);
			
			//set start camera position
			//myCamera0.position.z = 50;
			
			// get the melon mesh so it can be hidden later
			//aMelon = myScene.getMeshByName("melon");
			
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
			
			aButton.isPickable = true;
			
			skeleton = myScene.getSkeletonById(0);
			myScene.stopAnimation(skeleton);
			
			//theclap = myScene.getMeshByName("clapper");
			//myScene.beginAnimation(theclap, 1, 2, false, 1);
			
			// get clapboard material for uvMap changes
			//aCBoard = myScene.getMaterialByName("clapboard2.clapper");
			
			//once action manager called on aButton (Start): reset scene, and move uvs on clapboard, enable the melon, and call audio start
			var doStuff = function(){
				//var ended = 1;
				var takes = 1;
				//console.log("reached");
				//aButton.setEnabled(false);
				aButtonMat = myScene.getMaterialByName("chair.button");
				aButtonMat.diffuseTexture.vOffset = .5;
				//aMelon.setEnabled(true);
				aButton.setEnabled(false);
				console.log("reached");
				myScene.activeCamera = myCamera;
				myScene.beginAnimation(skeleton,1,60,true, 1);
				start.play();
				
			};
			
			aButton.actionManager = new BABYLON.ActionManager(myScene);
			aButton.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, doStuff));
			
			//console.log(soundsReady);
			//if all sounds loaded enable the start-replay button and make it pickable
			
			
			if(soundsReady > 0) {
				aButton.setEnabled(true);
				aButton.isPickable = true;
				console.log(soundsReady);
			}
			
		});
		
		// Once the scene is loaded, register a render loop
		engine.runRenderLoop(function() {
		divFps.innerHTML = engine.getFps().toFixed() + " fps";
		   myScene.render();
		});
	//});    
	} // end if sceneNum = 0

			
} // end createWorld function

