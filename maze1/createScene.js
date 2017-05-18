function createWorld(){

	engine.stopRenderLoop();
	//engine.dispose();
	myScene.dispose();

if (sceneNum === 0){

BABYLON.SceneLoader.Load("", theScenes[sceneNum], engine, function (newScene) {

                newScene.executeWhenReady(function () {
                    
					// Active Camera comes from .babylon file but don't attach camera to canvas - so no camera motion
                    
					myScene = newScene;
					var myObject = myScene.getMeshByName("falling");
					myScene.stopAnimation(myObject);
					// Different Z cameras to show different parts of the scene.
					var cameraZ = new BABYLON.FreeCamera("cameraZ", new BABYLON.Vector3(0, 1, 100), myScene);
					cameraZ.maxZ = 40;
					
					var cameraZ2 = new BABYLON.FreeCamera("cameraZ2", new BABYLON.Vector3(0, .7, 196.5), myScene);
					
					var cameraZ3 = new BABYLON.FreeCamera("cameraZ3", new BABYLON.Vector3(0, .7, 400), myScene);
					
					var aPoint = new BABYLON.PointLight("aPoint", new BABYLON.Vector3(0, -1, 199), myScene);
					aPoint.diffuse =new BABYLON.Color3(.5,.8,0);
					aPoint.specular = new BABYLON.Color3(.05,.3,0);
					aPoint.range = 8;
					// load the book
					BABYLON.SceneLoader.ImportMesh(null, "", "newbook4_4b1.babylon", myScene, function (newMeshes, particleSystems, skeletons) {
						book = newMeshes[0];
						mySkeleton[0] = skeletons[0];
						book.isVisible = false;
						book.position.z = 49;
						book.position.y = -1.5;
						book.rotation.x = -Math.PI/4
		
						myScene.beginAnimation(mySkeleton[0], 31, 32, false, 1.0);
					});
					

					// load the myrddyn
					BABYLON.SceneLoader.ImportMesh(null, "", "monk3.babylon", myScene, function (newMeshes, particleSystems) {
						var monk = myScene.getMeshByName("monk");
						monk.position.z = 200;

						
					});
					// load the hound 
					var aHound = drawHound(1,myScene);
					
                    // Once the scene is loaded, just register a render loop to render it
                    engine.runRenderLoop(function() {
					// for testimg only
					//divFps.innerHTML = engine.getFps().toFixed() + " fps";
                    myScene.render();
                    });
                });
            }, function (progress) {
                // To do: give progress feedback to user
            }
			
			);
} // end if



if (sceneNum === 1){
				
				BABYLON.SceneLoader.Load("", theScenes[sceneNum], engine, function (newScene) {
                newScene.executeWhenReady(function () {
                    
					//change the value of cameraFlag to a value other than 1 to use the free camera from blender
					var cameraFlag = 0;
					
					// which camera is active Arc Rotate or Blender Free Camera
					
					if (cameraFlag == 1){
						var myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3(0, 1, 0), newScene);
						myCamera.setPosition(new BABYLON.Vector3(2, 10, -45));
						myCamera.speed = .1;
						myCamera.wheelPrecision = 250;
						myCamera.fov = .8;
						
						newScene.activeCamera = myCamera;
					
					}
					else {
						var myCamera2 = newScene.getCameraByName("Camera");
						//real camera start 
						//myCamera2.position = new BABYLON.Vector3((-xSize*4 - 2),1.8,(-6));
						//temp camera start at end of first maze
						myCamera2.position = new BABYLON.Vector3(-11,1.8,(-26));
						myCamera2.rotation.y = Math.PI/1.5;
						myCamera2.maxZ = 15;
						myCamera2.speed = .1;
						myCamera2.checkCollisions = true;
						
						newScene.activeCamera = myCamera2;
					}
					 
					 //make gravity weak to walk upstairs
					newScene.gravity = new BABYLON.Vector3(0, -0.05, 0);
					
					// only use this light for arc rotate camera
					var aLight = newScene.getLightByName("Hemi");
					aLight.setEnabled(false);
					
					var aLight1 = newScene.getLightByName("Hemi2");
					//aLight1.setEnabled(false);
					if(cameraFlag == 0) {
						//aLight.setEnabled(false);
						var myLight = newScene.getLightByName("plight");
						myLight.position.y = .5;
						myLight.parent = myCamera2;
					}
					
					else {
						//aLight.setEnabled(true);
					}
					
					var aLight2 = newScene.getLightByName("Hemi2");
					//aLight2.setEnabled(false);
					
					//myLight.setEnabled = false;
					// Then attach the activeCamera to the canvas.
					newScene.activeCamera.attachControl(canvas);
					
					//var grid = newScene.getMeshByName("grid");
					//grid.checkCollisions = true;
					
					var ground_x = newScene.getMeshByName("ground");
					ground_x.setEnabled(false);
					
					
					// disable the working grid
					var aGrid = newScene.getMeshByName("grid");
					aGrid.setEnabled(false);
					//aGrid.checkCollisions = true;
					
					
					//is this needed or just a check?
					var count = 0;
					
					
					// position of the centre of top left corner cell (cell_00)
					var cent_zero_x = -xSize*2 + 2;
					var cent_zero_y = ySize*2 - 2;
					
					//draw the cell walls
					
					//call maze creation function
					var theCells = newMaze(xSize,ySize);
					//now draw the maze and position it
					var theMaze = drawMaze(xSize,ySize,0,theCells,newScene);
					
					theCells = newMaze(xSize,ySize);
					//now draw the maze and position it
					var theMaze = drawMaze(xSize,ySize,1,theCells,newScene);
					
					theCells = newMaze(xSize,ySize);
					//now draw the maze and position it
					var theMaze = drawMaze(xSize,ySize,2,theCells,newScene);
					
					theCells = newMaze(xSize,ySize);
					//now draw the maze and position it
					var theMaze = drawMaze(xSize,ySize,3,theCells,newScene);
					
					
					// now create the staircases
					var stair0 = drawStairs(xSize,ySize,0,newScene);
					var stair1 = drawStairs(xSize,ySize,1,newScene);
					var stair2 = drawStairs(xSize,ySize,2,newScene);
					var stair3 = drawStairs(xSize,ySize,3,newScene);
					
					myScene = newScene;
					
					
                    // Once the scene is loaded, just register a render loop to render it
                    engine.runRenderLoop(function() {
						// for testimg only
						//divFps.innerHTML = engine.getFps().toFixed() + " fps";
                        myScene.render();
                    });
                });
            }, function (progress) {
                // To do: give progress feedback to user
            });
} // end if sceneNum =1


if (sceneNum === 2) {

			BABYLON.SceneLoader.Load("", theScenes[sceneNum], engine, function (newScene) {
			
					// create a skybox here - loads better
					
					var skybox = BABYLON.Mesh.CreateBox("skyBox", 500.0, newScene);
					var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", newScene);
					skyboxMaterial.backFaceCulling = false;
					//skybox.infiniteDistance = true;
					skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("skybox/skybox", newScene);
					skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
					skyboxMaterial.diffuseColor = new BABYLON.Color3(0.0, 0.0, 0.0);
					skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
					skybox.material = skyboxMaterial;
					//skybox.renderingGroupId = 0;
			
			
			        newScene.executeWhenReady(function () {
                    
					//change the value of cameraFlag to a value other than 1 to use the free camera from blender
					var cameraFlag = 0;
					
					// which camera is active Arc Rotate or Blender Free Camera
					
					if (cameraFlag == 1){
						var myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, BABYLON.Vector3.Zero(), newScene);
						myCamera.setPosition(new BABYLON.Vector3(1, 10, -150));
						myCamera.speed = .1;
						myCamera.wheelPrecision = 100;
						myCamera.fov = .8;
						
						newScene.activeCamera = myCamera;
					
					}
					else {
						var myCamera2 = newScene.getCameraByName("Camera");
						myCamera2.position = new BABYLON.Vector3(-10.3175, 11.4215, -8.7302);
						myCamera2.rotation.y = Math.PI;
						myCamera2.speed = .5;
						myCamera2.maxZ= 500;
						newScene.activeCamera = myCamera2;
					}
					
					
					
					// hide the boundary wall so you don't fall off terrain mesh 
					var wall = newScene.getMeshByName("wall");
					wall.isVisible = false;
					
					
					
					
					playExit();
					
					
					
					
					// Then attach the activeCamera to the canvas.
					newScene.activeCamera.attachControl(canvas);
					
					myScene = newScene;
					
					// get the terrain mesh for the registerBeforeRender function
					var ground = myScene.getMeshByName("Landscape");
					//ground.position.y = -20;
					
					//use this to play audio while recording video - remove later
					//dialog.play();
					
					myScene.registerBeforeRender(function() {
					
						if(cameraFlag == 0){
					
							// Casting a ray to get height
							var ray = new BABYLON.Ray(new BABYLON.Vector3(myCamera2.position.x, ground.getBoundingInfo().boundingBox.maximumWorld.y + 1, myCamera2.position.z),
														new BABYLON.Vector3(0, -1, 0)); // Direction
							var worldInverse = new BABYLON.Matrix();

							ground.getWorldMatrix().invertToRef(worldInverse);

							ray = BABYLON.Ray.Transform(ray, worldInverse);

							var pickInfo = ground.intersects(ray);

							if (pickInfo.hit) {
								myCamera2.position.y = pickInfo.pickedPoint.y + 2;
							}
						}
					});
					
					
                    // Once the scene is loaded, just register a render loop to render it
                    engine.runRenderLoop(function() {
						// for testimg only
						//divFps.innerHTML = engine.getFps().toFixed() + " fps";
                        myScene.render();
                    });
                });
            });

} //end scene 3



			
} // end createWorld function