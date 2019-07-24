var skeleton0;
var skeletonMeshes = new Array(0,1,2,3,4);
var lights = new Array(0,1);
var bulbs = new Array(0,1, 2);
var camSensor;
var theBook;
var objects;
var found = 0;
var allTriggers;
var startCamera;
var myCamera2;
var aButton;
var allMerrick;

function createWorld(){
	engine.stopRenderLoop();
	//engine.dispose();
	//myScene.dispose();
	
	
if (sceneNum === 0){
		startCamera = new BABYLON.FreeCamera("start",new BABYLON.Vector3(0,1,195),myScene);
		myScene.activeCamera = startCamera;
		
		
		BABYLON.SceneLoader.Append("", "menu6.babylon", myScene);
		BABYLON.SceneLoader.Append("", "whitechapel03c.babylon", myScene);
				myScene.executeWhenReady(function () {
				
// xxxxxxxxxxxxxxx		

				var allMats = myScene.materials; 
				//console.log("materials = " + allMats.length);
				//for (i = 0; i < allMats.length; i++){
				//allMats[i].maxSimultaneousLights = 5;
				//}
			
				
				//skeleton0 = myScene.getSkeletonById(0)
				//myScene.beginAnimation(skeleton0, 1, 3, false);
				
				/*
				var theCams = myScene.cameras;
				console.log("num Cams = " + theCams.length);
				var myCamera2 = theCams[0];
				*/
			
			createAudio(); // error now and again - audio issue change howler? Use Babylon 4.1 instead

			
				// create and hide replay button
			aButton = myScene.getMeshByName("Button");
			//aButton.setEnabled(false);
			
			//hide merrick for now
			var aMerrick = myScene.getMeshByName("merrick");
			allMerrick = aMerrick.getChildren();
			for (i=0; i<allMerrick.length; i++){
				allMerrick[i].setEnabled(false);
			};
				
				
			myCamera2 = myScene.getCameraByName("menu_Cam");
			//myCamera2 = myScene.getCameraByName("Camera");
			//console.log("cam position = " + myCamera2.position);
			myCamera2.position.x = -15;
			myCamera2.rotation.y = Math.PI/2;
			myCamera2.maxZ = 100;
			myCamera2.speed = .1;
			myCamera2.checkCollisions = true;
			//myScene.activeCamera = myCamera2;
			//myScene.activeCamera.attachControl(canvas);
			
			
			
			camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, myScene);
			camSensor.scaling = new BABYLON.Vector3(1, .1, 1);
			camSensor.position = new BABYLON.Vector3(0.0, 0.5, 0.0);
			camSensor.checkCollisions = true;
			camSensor.isPickable = false;
			camSensor.parent = myCamera2;
			myCamera2.minZ = .05;
			//myCamera2.position.z = -8;
			myCamera2.attachControl(canvas, true);
			//console.log(myCamera2.position,camSensor.position);
			
			
			
	//}
			allMeshes = myScene.meshes;
			for (i = 0; i < allMeshes.length; i++){
				allMeshes[i].isPickable = false;
			}
					
				
			//once action manager called on aButton (Start): hide button, set button texture for replay, play audio, reset scene, and move uvs on clapboard, enable the melon, and call audio start
			var doStuff = function(){
				//var ended = 1;
				var takes = 1;
				aButton.setEnabled(false);
				var aButtonMat = myScene.getMaterialByName("menu6.button");
				aButtonMat.diffuseTexture.vOffset = .5;
				theStart.play();
			};
			
			aButton.actionManager = new BABYLON.ActionManager(myScene);
			aButton.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, doStuff));
			
			//console.log(soundsReady);
			//if all sounds loaded enable the start-replay button and make it pickable
			if(soundsReady > 5) {
				aButton.setEnabled(true);
				aButton.isPickable = true;
				//console.log("entered");
			}
				
				
				
				var aTriggers = myScene.getMeshByName("Triggers");
				allTriggers = aTriggers.getChildren();
				//console.log("Triggers = " + allTriggers.length);
				for(i = 0; i < allTriggers.length; i++){
				//allTriggers[i].checkCollisions = true;
				allTriggers[i].isVisible = false;
				//console.log("Triggers = " + allTriggers[i].name);
				}
				
				
							
				
				
				//var myMesh = allTriggers[0];
					
						camSensor.actionManager = new BABYLON.ActionManager(myScene);
						
						let inAction0 = new BABYLON.ExecuteCodeAction(
							{
								trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, 
								parameter: { 
									mesh: allTriggers[0]
								}
							},
							(evt) => {
								//sphere.material.diffuseColor = new BABYLON.Color3(1,1,0)
								//myMesh.isVisible = false;
								//console.log("entered");
								theSounds.play(0, 34.5, 2.7);
							}
						);

						let outAction0 = new BABYLON.ExecuteCodeAction(
							{
								trigger: BABYLON.ActionManager.OnIntersectionExitTrigger, 
								parameter: { 
									mesh: allTriggers[0]
								}
							},
							(evt) => {
								//sphere.material.diffuseColor = new BABYLON.Color3(0,0,1)
								//myMesh.isVisible = true;
								//console.log("left");
								var aRand0 = Math.floor(Math.random() * 9);
								theSounds.play(0,soundArray[aRand0][0], soundArray[aRand0][1]);
								
								//theSounds.play(0, 23.0, 7.9);
							}
						);
						
						let inAction1 = new BABYLON.ExecuteCodeAction(
							{
								trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, 
								parameter: { 
									mesh: allTriggers[1]
								}
							},
							(evt) => {
								//sphere.material.diffuseColor = new BABYLON.Color3(1,1,0)
								//myMesh.isVisible = false;
								//console.log("entered");
								theSounds.play(0, 34.5, 2.7);
							}
						);

						let outAction1 = new BABYLON.ExecuteCodeAction(
							{
								trigger: BABYLON.ActionManager.OnIntersectionExitTrigger, 
								parameter: { 
									mesh: allTriggers[1]
								}
							},
							(evt) => {
								//sphere.material.diffuseColor = new BABYLON.Color3(0,0,1)
								//myMesh.isVisible = true;
								//console.log("left");
								var aRand0 = Math.floor(Math.random() * 9);
								theSounds.play(0,soundArray[aRand0][0], soundArray[aRand0][1]);
								
								//theSounds.play(0, 23.0, 7.9);
							}
						);
				
			camSensor.actionManager.registerAction(inAction0);
			camSensor.actionManager.registerAction(outAction0);
			camSensor.actionManager.registerAction(inAction1);
			camSensor.actionManager.registerAction(outAction1);	
				
				
				
			var aMenu = drawMenu(myScene);
			drawObject(myScene);
				


				

			}); // end when ready
				
			// Once the scene is loaded, just register a render loop to render it
			engine.runRenderLoop(function() {
			divFps.innerHTML = engine.getFps().toFixed() + " fps";
			myScene.render();
			});
		};// end scenNum = 0
			
} // end createWorld function
