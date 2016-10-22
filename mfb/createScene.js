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
var myBackGrd;

function createWorld(){

	if (sceneNum === 0){
		// add this line to set a default camera otherwise issues with appending
		//myScene.createDefaultCameraOrLight();
		myCamera0 = new BABYLON.FreeCamera("Camera0",new BABYLON.Vector3(0,0,100),myScene);
		
		//BABYLON.SceneLoader.loggingLevel = BABYLON.SceneLoader.DETAILED_LOGGING;
	
		
		createAudio();
		
		// load babylon files
		BABYLON.SceneLoader.Append("", "clapboard2.babylon", myScene);
		BABYLON.SceneLoader.Append("", "dk14_34b.babylon", myScene);
		
		myScene.executeWhenReady(function () {
			
			if( isMobile.any() ){ 
				var myLight = myScene.getLightByName("Hemi.top");
				myLight.intensity = 2;
				var myWall = myScene.getMaterialByName("dk14_34b.blue");
				myWall.diffuseColor = new BABYLON.Color3(0.0,0.0,0.25);
			}
		
			// create additional cameras from blender
			myCamera1 = myScene.getCameraByName("Camera1");
			myCamera2 = myScene.getCameraByName("Camera2");
			
			// create and hide replay button
			aButton = myScene.getMeshByName("Button");
			aButton.setEnabled(false);
			
			myBackGrd = myScene.getMeshByName("background");
			
			myCamera0.position.z = 50;
			
			// get the melon mesh so it can be hidden later
			aMelon = myScene.getMeshByName("melon");
			
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
			myScene.stopAnimation(skeleton);
			
			theclap = myScene.getMeshByName("clapper");
			myScene.beginAnimation(theclap, 1, 2, false, 1);
			
			// get clapboard material for uvMap changes
			aCBoard = myScene.getMaterialByName("clapboard2.clapper");
			
			//once action manager called on aButton (Start): reset scene, and move uvs on clapboard, enable the melon, and call audio start
			var doStuff = function(){
				//var ended = 1;
				var takes = 1;
				//myBackGrd.setEnabled(false);
				aButton.setEnabled(false);
				aButtonMat = myScene.getMaterialByName("clapboard2.button");
				aButtonMat.diffuseTexture.vOffset = .5;
				aMelon.setEnabled(true);
				start.play();
				
			};
			
			aButton.actionManager = new BABYLON.ActionManager(myScene);
			aButton.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, doStuff));
			
			
			//if all sounds loaded enable the start-replay button and make it pickable
			if(soundsReady === 8) {
				aButton.setEnabled(true);
				aButton.isPickable = true;
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

