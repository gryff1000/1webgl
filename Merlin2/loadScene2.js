function loadScene2(){
	
		//sceneNum = 2;

		//BABYLON.SceneLoader.ShowLoadingScreen = false;

		BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
						
				//console.log("Scene loads from Scene folder =  " +(sceneNum+1)); 		
				myScene.executeWhenReady(function () {
					
					document.getElementById("Keys").style.display = "none";
					
					
					myCamera2 = myScene.getCameraByName("Camera");
					//myCamera2.ellipsoid = new BABYLON.Vector3(0.5, 1.0, 0.5);
					myScene.activeCamera = myCamera2;
					myScene.activeCamera.speed = 0.05;
					//console.log(myCamera2.position);
			/*		
					camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, myScene);
					camSensor.scaling = new BABYLON.Vector3(2, .1, 2);
					camSensor.position = new BABYLON.Vector3(0.0, 2.0, 0.0);
					//camSensor.isVisible = false;
					camSensor.checkCollisions = true;
					camSensor.isPickable = false;
					//camSensor.parent = myCamera2;
			*/	
					
					//var aCamSensor = myScene.getMeshByName("camSensor");
					
					var Light0 = myScene.getLightByName("Light00");
					var Light1 = myScene.getLightByName("Light01");
					var Point0 = myScene.getLightByName("Point00");
					Light0.intensity = .3;
					Light1.intensity = .1;
					Point0.intensity = 3;
					Point0.range = 10;
					Point0.diffuse = new BABYLON.Color3(1, 1, 0);
					
				
					var theLamp = myScene.getMeshByName("aLamp");
					//theLamp.isVisible = false;
					//console.log(theLamp.position)
					//theLamp.parent = camSensor;
					theLamp.checkCollisions = true;
					myCamera2.setParent = theLamp;
					
				
					//myScene.activeCamera.attachControl(canvas);
				
				
		// get active meshes			
					var aDoor01 = myScene.getMeshByName("aDoor1");
					
					
					// create an action manager to trigger sound on door click		
					aDoor01.actionManager = new BABYLON.ActionManager(myScene);
					aDoor01.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("Action Manager trigger");
						if(keys[2] === 1){
						aDoor01.isPickable = false;
						sceneNum = sceneNum + 1;
						theDoor.play();
						theDoor.onended = function(){
							document.getElementById("Keys").style.display = "none";
							deleteWorld();
							createScene();
						}}
						else {
							console.log("You need a different Key");
						}
					}));
					
					
					var newDoor = myScene.getMeshByName("aDoor3");
					//console.log(newDoor.name);
					
					
					var aKey0 = myScene.getMeshByName("key00");
					//var keyNum = parseInt(aKey0.name.substring(3, 5));
					//console.log("Key clicked is " + keyNum);
					
					
					//var numKey = parseInt(keyNum);
					//console.log(keyNum);
					//keys[keyNum] = 1;
					//console.log(keys);
					
					
					
				
					aKey0.actionManager = new BABYLON.ActionManager(myScene);
					aKey0.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						//console.log("Action Manager trigger");
						//const keyNum = parseInt(aKey0.name.substring(3, 5));
						//console.log("Key clicked is 0" + keyNum);
						//keyNum = keyNum + 1;
						aKey0.setEnabled(false);
						keys[0] = 1;
						numKeys++;
						console.log("You have " + numKeys + " keys");
						//divKeys.innerHTML = "You have " + numKeys + " keys";
						//keys[keyNum] = 1;
						
						console.log(keys);
						//aKey1.isPickable = false;
						//sceneNum = sceneNum + 1;
						//theDoor.play();
						//theDoor.onended = function(){
						console.log("aKey0 Clicked");
						//deleteWorld();
						//createScene();
						//aKey0.setEnabled(false);
						divKeys.innerHTML = "You have " + numKeys + " keys";
						divWords.innerHTML = "You find a key";
						aKey1.setEnabled(false);
						document.getElementById("words").style.display = "block";
						document.getElementById("Keys").style.display = "block";
						
						const myTimeout = setTimeout(clearInfo, 5000);
					}));
					
					
					
					var aKey1 = myScene.getMeshByName("key01");
					//var keyNum = parseInt(aKey1.name.substring(3, 5));
					//console.log("Key clicked is " + keyNum);
					//console.log(keyNum);
					//var numKey = parseInt(keyNum);
					//console.log(keyNum);
					//keys[keyNum] = 1;
					//console.log(keys);
					
					
					
				
					aKey1.actionManager = new BABYLON.ActionManager(myScene);
					aKey1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						//console.log("Action Manager trigger");
						//const keyNum = parseInt(aKey0.name.substring(3, 5));
						//console.log(keyNum);
						//console.log("Key clicked is 0" + keyNum);
						//keyNum = keyNum + 1;
						keys[1] = 1;
						numKeys++;
						console.log("You have " + numKeys + " keys");
						
						//divWords.innerHTML = "You find a key";
						//document.getElementById("words").style.display = "block";
						
						console.log(keys);
						//divKeys.innerHTML = "You have " + numKeys + " keys";
						//aKey1.isPickable = false;
						//sceneNum = sceneNum + 1;
						//theDoor.play();
						//theDoor.onended = function(){
						console.log("aKey1 Clicked");
						//deleteWorld();
						//createScene();
						divKeys.innerHTML = "You have " + numKeys + " keys";
						divWords.innerHTML = "You find a key";
						aKey1.setEnabled(false);
						document.getElementById("words").style.display = "block";
						document.getElementById("Keys").style.display = "block";
						
						const myTimeout = setTimeout(clearInfo, 5000);
						
					}));


					var aKey2 = myScene.getMeshByName("key02");
					
					aKey2.actionManager = new BABYLON.ActionManager(myScene);
					aKey2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						
						keys[2] = 1;
						numKeys++;
						console.log("You have " + numKeys + " keys");
						//divKeys.innerHTML = "You have " + numKeys + " keys";
						
						console.log(keys);
						//divKeys.innerHTML = "You have " + numKeys + " keys";
						
						console.log("aKey2 Clicked");
						divKeys.innerHTML = "You have " + numKeys + " keys";
						divWords.innerHTML = "You find a key";
						aKey2.setEnabled(false);
						document.getElementById("words").style.display = "block";
						document.getElementById("Keys").style.display = "block";
						
						const myTimeout = setTimeout(clearInfo, 5000);
						
						//clearInfo();
					}));
					
				
					//console.log(Point0.position)
					
					//myCamera2.parent = aCamSensor;
					//theLamp.parent = aCamSensor;
					
					//Point0.parent = aCamSensor;
					
					myScene.activeCamera.attachControl(canvas);
					
					var theGlass = myScene.getMeshByName("glass");
					
					//theGlass.isVisible = false;
						//console.log("You have " + numKeys + " keys");
						//divKeys.innerHTML = "You have " + numKeys + " keys"
					//theGlass.alpha = 0.5;
					//theGlass.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
					
					//set the glow
					const hl = new BABYLON.HighlightLayer("hl1", myScene);
					hl.intensity = 4;
					hl.addMesh(theGlass, BABYLON.Color3.Yellow());
				
			/*	code for arc rotate camera
				
					myCamera.lowerBetaLimit = 1.0;
					myCamera.upperBetaLimit = 1.5
					myCamera.lowerAlphaLimit = 1.0;
					myCamera.upperAlphaLimit = 2.5
					myCamera.lowerRadiusLimit = 50;
					myCamera.upperRadiusLimit = 150;
			*/	
					
					

					console.log("This Scene is " + (sceneNum +1));
					
			// data on meshes sent to console
					allMeshes = myScene.meshes;
					//console.log("Total Meshes = " + allMeshes.length);
					
			/*		
					createSound3();
					
					theDoor.play();
						theDoor.onended = function(){
							console.log("Door Clicked");
							//deleteWorld();
							//createScene();
						}
			*/		
			// use Mix Material to texture the island	
				/*
					var mix = new BABYLON.MixMaterial("mix", myScene);
		
					mix.mixTexture1 = new BABYLON.Texture("scene03/textures/terrain_map02b.png", myScene);
					
					mix.diffuseTexture1 = new BABYLON.Texture("scene03/textures/sandyCliff01.jpg", myScene);//red;
					mix.diffuseTexture2 = new BABYLON.Texture("scene03/textures/grass1.jpg", myScene);//green
					mix.diffuseTexture3 = new BABYLON.Texture("scene03/textures/new_sand_rock02.jpg", myScene);//blue
					mix.diffuseTexture4 = new BABYLON.Texture("scene03/textures/soil_sand01_diffuseOriginal.jpg", myScene);// alpha
					//set repeat scales
					mix.diffuseTexture1.uScale = mix.diffuseTexture1.vScale = 5;
					mix.diffuseTexture2.uScale = mix.diffuseTexture2.vScale = 5;
					mix.diffuseTexture3.uScale = mix.diffuseTexture3.vScale = 10;
					mix.diffuseTexture4.uScale = 30;
					mix.diffuseTexture4.vScale = 30;
					
					var terrain = myScene.getMeshByName("Landscape_new01");
					terrain.material = mix;
				*/
				/*
			
			// billboard thee trees
					var Trees = myScene.getMeshByName("theTrees");
					var allTrees = Trees.getChildren();
					//console.log(allTrees.length);
					
					for(i=0; i<allTrees.length; i++){
						allTrees[i].parent = null;
						allTrees[i].billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
					};
					
			// create fog			
					myScene.clearColor = new BABYLON.Color3(0.0,0.0,0.0);
					myScene.fogMode = BABYLON.Scene.FOGMODE_EXP;
					myScene.fogDensity = .035;
					myScene.fogColor = new BABYLON.Color3(.5509,0.5509,0.509);
					
				*/	
			//calculate and display total vertices and meshes			
					let vertTotal = 0;
					allMeshes = myScene.meshes;
					divAllMeshs.innerHTML = allMeshes.length + " Total meshes";
					for (var i=0; i<allMeshes.length; i++){
						if (allMeshes[i].getTotalVertices() > 0){
							vertTotal = vertTotal + allMeshes[i].getTotalVertices()
						}
					}
					//console.log(vertTotal);
					divVerts.innerHTML = vertTotal + " Total vertices";
					
			// load sound for scene 1		
					createSound2();
	/*	 moved up in code
			// create an action manager to trigger sound on door click		
				aDoor01.actionManager = new BABYLON.ActionManager(myScene);
				aDoor01.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("Action Manager trigger");
						aDoor01.isPickable = false;
						sceneNum = sceneNum + 1;
						theDoor.play();
						theDoor.onended = function(){
						//console.log("Cube Clicked");
						deleteWorld();
						createScene();
					}
						
					}));
	*/				

				}) // end executeWhenReady
				
				
				function clearInfo() {
					//document.getElementById("demo").innerHTML = "Happy Birthday!"
					document.getElementById("words").style.display = "none";
				}
				
};