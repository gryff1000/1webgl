function loadScene1(){
	
	//sceneNum = sceneNum + 1;

		BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
		BABYLON.SceneLoader.Append("", "scene01/monk06.babylon", myScene);
						
						
				myScene.executeWhenReady(function () {
					
					//myCamera = myScene.getCameraByName("start_cam");
					
					myCamera = myScene.getCameraByName("cellarCam");
					myScene.activeCamera = myCamera;
					myScene.activeCamera.speed = 0.05;
					
					var camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, myScene);
					camSensor.scaling = new BABYLON.Vector3(2, .1, 2);
					camSensor.position = new BABYLON.Vector3(0.0, 1.0, 0.0);
					camSensor.isVisible = false;
					camSensor.checkCollisions = true;
					camSensor.isPickable = false;
					camSensor.parent = myCamera;
				
			
					myScene.activeCamera.attachControl(canvas);

					console.log("This Scene is " + (sceneNum +1));
					
					var light0 = myScene.getLightByName("Area0");
					var light1 = myScene.getLightByName("Area1");
					light1.intensity =0.1;
					
					
					
					// load sound for scene 1		
					createSound1();
					
			// data on meshes sent to console
					allMeshes = myScene.meshes;
					//console.log("Total Meshes = " + allMeshes.length);
					
			
			
			
			//calculate and display total vertices and meshes			
					let vertTotal = 0;
					allMeshes = myScene.meshes;
					divAllMeshs.innerHTML = allMeshes.length + " Total meshes";
					for (i=0; i<allMeshes.length; i++){
						if (allMeshes[i].getTotalVertices() > 0){
							vertTotal = vertTotal + allMeshes[i].getTotalVertices()
						}
					}
					//console.log(vertTotal);
					divVerts.innerHTML = vertTotal + " Total vertices";
					
					
			
					
					var startL = myScene.getMeshByName("doorL")
					var startR = myScene.getMeshByName("doorR")
					var door01 = myScene.getMeshByName("doorInner02");
					var door02 = myScene.getMeshByName("doorInner03");
					var door03 = myScene.getMeshByName("doorInner04");
					var door04 = myScene.getMeshByName("doorInner07");
					var Trigger2 = myScene.getMeshByName("trigger02");
					//console.log(Trigger2.name);
					
					var mySkeleton = myScene.getSkeletonByName("Monk01");
					
					
					camSensor.actionManager = new BABYLON.ActionManager(myScene);
					let outAction2 = new BABYLON.ExecuteCodeAction(
						{trigger: BABYLON.ActionManager.OnIntersectionExitTrigger, parameter: {mesh: Trigger2}},
						(evt) => {
							let animation = myScene.beginAnimation(mySkeleton,0,50,false, 1);
							camSensor.actionManager.unregisterAction(outAction2);
						}
					);
					
					camSensor.actionManager.registerAction(outAction2);
					
					door01.actionManager = new BABYLON.ActionManager(myScene);
					door01.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
					BABYLON.ActionManager.OnPickTrigger,function(evt){
						startL.isPickable = false;
						door02.isPickable = true;
						let animation1 = myScene.beginAnimation(door01, 0, 40, false, 0.5);
						//theIntro.play();
						//theIntro.onended = function(){
						//	console.log("Door	Clicked");
						//	deleteWorld();
						//	createScene();
						//}
						
						
					}));
					
					
					door02.actionManager = new BABYLON.ActionManager(myScene);
					door02.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
					BABYLON.ActionManager.OnPickTrigger,function(evt){
						door02.isPickable = false;
						door03.isPickable = true;
						let animation1 = myScene.beginAnimation(door02, 0, 40, false, 0.5);
						//theIntro.play();
						//theIntro.onended = function(){
							//console.log("Door	Clicked");
							//deleteWorld();
							//createScene();
						//}
						
						
					}));
					
					door03.actionManager = new BABYLON.ActionManager(myScene);
					door03.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
					BABYLON.ActionManager.OnPickTrigger,function(evt){
						door03.isPickable = false;
						door04.isPickable = true;
						let animation1 = myScene.beginAnimation(door03, 0, 40, false, 0.5);
			/*			theIntro.play();
						theIntro.onended = function(){
							console.log("Door	Clicked");
							deleteWorld();
							createScene();
						}
						
			*/			
					}));
					
					door04.actionManager = new BABYLON.ActionManager(myScene);
					door04.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
					BABYLON.ActionManager.OnPickTrigger,function(evt){
						BABYLON.Engine.audioEngine.unlock(); // temp foe cellarCam
						sceneNum = sceneNum + 1;// temp for cellarCam
						door04.isPickable = false;
						document.getElementById("words").style.display = "none";
						//let animation1 = myScene.beginAnimation(door04, 0, 20, false, 0.5);
						theExit02.play();
						let animation1 = myScene.beginAnimation(door04, 0, 20, false, 0.1);
						theExit02.onended = function(){
							console.log("Door	Clicked");
							//let animation1 = myScene.beginAnimation(door04, 0, 20, false, 0.5);
							//animation1.onAnimationEnd = function () {
								console.log("animation ended");
								//deleteWorld();
								//createScene();
								//return;
								
								
							//};
							
							deleteWorld();
							createScene();
						}
						
						
					}));
					
					startL.actionManager = new BABYLON.ActionManager(myScene);
					startL.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
					BABYLON.ActionManager.OnPickTrigger, 
					function (evt) {
						console.log("Action Manager start triggered");
						BABYLON.Engine.audioEngine.unlock();
						sceneNum = sceneNum + 1;
						startL.isPickable = false;
						let animation1 = myScene.beginAnimation(startL, 0, 40, false, 0.5);
						let animation2 = myScene.beginAnimation(startR, 0, 40, false, 0.5);
						document.getElementById("words").style.display = "none";
						//theIntro.play();
						///theIntro.onended = function(){
							//console.log("Cube Clicked");
							//deleteWorld();
							//createScene();
						//}
					}));
					
					

				}) // end executeWhenReady
				
};