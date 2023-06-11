function loadScene3(){
	
		//sceneNum = 2;

		BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
						
				//console.log("Scene loads from Scene folder =  " +(sceneNum+1)); 		
				myScene.executeWhenReady(function () {
					
					myCamera2 = myScene.getCameraByName("Camera2");
					myScene.activeCamera = myCamera2;
					myScene.activeCamera.speed = 0.1;
				
			/*	code for arc rotate camera
				
					myCamera.lowerBetaLimit = 1.0;
					myCamera.upperBetaLimit = 1.5
					myCamera.lowerAlphaLimit = 1.0;
					myCamera.upperAlphaLimit = 2.5
					myCamera.lowerRadiusLimit = 50;
					myCamera.upperRadiusLimit = 150;
			*/	
					
					//myScene.activeCamera.attachControl(canvas);

					console.log("This Scene is " + (sceneNum +1));
					
			// data on meshes sent to console
					allMeshes = myScene.meshes;
					//console.log("Total Meshes = " + allMeshes.length);
					
			// use Mix Material to texture the island		
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
					//myScene.fogColor = new BABYLON.Color3(.5509,0.5509,0.509);
					myScene.fogColor = new BABYLON.Color3(.2509,0.2509,0.3);
			
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
					createSound3();
					
					//theMagic1.play();
					theMagic1.onended = function(){
						//console.log("Cube Clicked");
						//deleteWorld();
						//createScene();
					}
					
					

				}) // end executeWhenReady
				
};
