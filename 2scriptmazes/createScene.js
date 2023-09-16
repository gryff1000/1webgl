function createMaze(){

	engine.stopRenderLoop();
	//engine.dispose();
	//myScene.dispose();


				if (sceneNum === 1){
				
					BABYLON.SceneLoader.Append("", "script_maze03.babylon", myScene);
			
					myScene.executeWhenReady(function () {
                    
					//change the value of cameraFlag to a value other than 1 to use the free camera from blender
					var cameraFlag = 0;
					
					// which camera is active Arc Rotate or Blender Free Camera
					
					//if (cameraFlag == 1){
						var myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3(0, 1, 0), myScene);
						
						myCamera.setPosition(new BABYLON.Vector3(2, 10, -45));
						myCamera.speed = .1;
						myCamera.wheelPrecision = 10;
						myCamera.fov = .8;
						
						myCamera.lowerRadiusLimit = 10;
						myCamera.upperRadiusLimit = 45;
						
					//	myScene.activeCamera = myCamera;
					
					//}
					//else {
						var myCamera2 = myScene.getCameraByName("Camera");
						
						var camBall = myScene.getMeshByName("camSphere");
						camBall.parent = myCamera2;
						
						let xPos = 4* (xSize/2)-2;
						let yPos = -4*(ySize/2)+2;
						myCamera2.position = new BABYLON.Vector3(xPos,1.8,yPos);
						myCamera2.rotation.y = Math.PI/1.5;
						myCamera2.maxZ = 200;
						myCamera2.speed = .1;
						myCamera2.checkCollisions = true;
						
						myScene.activeCamera = myCamera2;
					//}
					
					myScene.clearColor = new BABYLON.Color3(0.5,0.3,0.3);
					 
					 //make gravity weak to walk upstairs
					myScene.gravity = new BABYLON.Vector3(0, -0.05, 0);
					
					
					
					// only use this light for arc rotate camera
					var aLight = myScene.getLightByName("Light");
					aLight.intensity =0.1
					
					var aLight2 = myScene.getLightByName("Light2");
					aLight2.intensity = .1;
					
					var myLight = myScene.getLightByName("Point");
					myLight.position.y = .5;
					myLight.intensity =.2;
					myLight.range = 7;
					
					myLight.parent = myCamera2;
				
					// Then attach the activeCamera to the canvas.
					myScene.activeCamera.attachControl(canvas);
					
					var theEnd = myScene.getMeshByName("endMaze");
					thePos = (xSize/2) *4 -2;
					theEnd.position.z = thePos;
					theEnd.position.x = -thePos;
					
					var aFloor = myScene.getMeshByName("floor");
					aFloor.scaling.x= xSize * 4;
					aFloor.scaling.z= ySize * 4;
					aFloor.material.diffuseTexture.uScale = xSize;
					aFloor.material.diffuseTexture.vScale =ySize;
					
					var aRoof = myScene.getMeshByName("roof");
					aRoof.scaling.x= xSize * 4;
					aRoof.scaling.z= ySize * 4;
					aRoof.material.diffuseTexture.uScale = xSize;
					aRoof.material.diffuseTexture.vScale =ySize;
					
					
					
					//is this needed or just a check?
					var count = 0;
					
					
					// position of the centre of top left corner cell (cell_00)
					var cent_zero_x = -xSize*2 + 2;
					var cent_zero_y = ySize*2 - 2;
					
					//draw the cell walls
					
					//call maze creation function
					theCells = newMaze(xSize,ySize);
					//now draw the maze and position it
		/*			
				for(i =0; i<8; i++){
						for(j=0; j<8; j++){
							console.log(theCells[i][j]);
						}
					};
		*/			
					let tempCells = theCells[0][0];
					//console.log(tempCells);
					tempCells[0] = 1;
					theCells[0][0] = tempCells;
					
					var theMaze = drawMaze(xSize,ySize,0,theCells,myScene);
					
					
					// create the buttons
					var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
					var UiPanel = new BABYLON.GUI.StackPanel();
					advancedTexture.addControl(UiPanel);

					const button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Camera");
					button1.width = "100px"
					button1.height = "40px";
					button1.top = "-10px";
					//button1.top = "10px";
					button1.left = "0px";
					button1.color = "yellow";
					button1.cornerRadius = 20;
					button1.background = "green";
					button1.fontSize = 20;
					button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
							
					advancedTexture.addControl(button1);  
					
					
					button1.onPointerUpObservable.add(function() {
						if (cameraFlag === 0){
							cameraFlag =1;
							console.log(cameraFlag);
							aLight.intensity = 1;
							myScene.activeCamera.detachControl(canvas);
							myScene.activeCamera = myCamera;
							myScene.activeCamera.attachControl(canvas);
							
						}
						else {
							cameraFlag= 0;
							console.log(cameraFlag);
							aLight.intensity = 0.1;
							myScene.activeCamera.detachControl(canvas);
							myScene.activeCamera = myCamera2;
							myScene.activeCamera.attachControl(canvas);
							
						}
		
					});
			
			
					
					
					//get total meshes and vertices
					var vertTotal = 0;
					allMeshes = myScene.meshes;
					divAllMeshs.innerHTML = allMeshes.length + " Total meshes";
					for (var i=0; i<allMeshes.length; i++){
						if (allMeshes[i].getTotalVertices() > 0){
							vertTotal = vertTotal + allMeshes[i].getTotalVertices()
						}
					}
					divVerts.innerHTML = vertTotal + " Total vertices";
					
                    // Once the scene is loaded, just register a render loop to render it
                    engine.runRenderLoop(function() {
						// for testimg only
						divFps.innerHTML = engine.getFps().toFixed() + " fps";
						divDCs.innerHTML = sceneInstru.drawCallsCounter.current.toString() + " DCs";
						//console.log(myCamera2.position);
                        myScene.render();
                    });
                });
            };
// end if sceneNum =1



			
} // end createWorld function