//var minHand;
//var hourHand;

var theCubes;

function createWorld(){
	engine.stopRenderLoop();
	//engine.dispose();
	myScene.dispose();

if (sceneNum === 0){

		BABYLON.SceneLoader.Load("", "cube.babylon", engine, function (newScene) {
				newScene.executeWhenReady(function () {
				
					//change the value of cameraFlag to a value other than 1 to use the free camera from blender
					var cameraFlag = 1;
					
					// which camera is active Arc Rotate or Blender Free Camera
					
					if (cameraFlag === 0){
						var myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), newScene);
						myCamera.setPosition(new BABYLON.Vector3(0, 2, -5));
						myCamera.speed = 1;
						myCamera.wheelPrecision = 250;
						myCamera.fov = .8;
						
						newScene.activeCamera = myCamera;
						myCamera.attachControl(canvas, true);
						console.log("myCamera= " + myCamera.position);
					}
					else {
						myCamera2 = newScene.getCameraByName("Camera");
						
						myCamera2.maxZ = 100;
						myCamera2.speed = .1;
						myCamera2.checkCollisions = true;
						newScene.activeCamera = myCamera2;
						myCamera2.attachControl(canvas, true);
					}
					
					var aFloor = newScene.getMeshByName("floor");
					aFloor.isPickable = false;
					theCubes = aFloor.getChildren();
					for (i=0; i<theCubes.length; i++){
						theCubes[i].isPickable = true;
						console.log(theCubes[i].name);
					}
					/*
					var playThemAll = new Howl({  
						urls: ['6sounds.mp3'],
						autoplay: false,  
						loop: false, 
						volume: 1,
						
						onplay: function(){
							theCubes[0].isPickable = false;
						},
						
						onend: function() {
							theCubes[0].isPickable = true;
						}
						
					});
					*/
					
					var random = 0;
					var allPlay = function() {
						if (random === 0){
							theCubes[0].isPickable = false;
							playThemAll.play();
							random = 1;
						}
						else {
							ended = 1;
							theSound.play(4);
							theSound.play(5);
							random = 0;
						}
					};
					
		
					var playRandom1 = function(mesh1) {
										
					// events done in sequence 
						mesh1.actionManager = new BABYLON.ActionManager(newScene);
						mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, allPlay))
						
					};
					
		
					
					
					playRandom1(theCubes[0]);
					
					
					
					myScene = newScene;
					
					
				});
				
				// Once the scene is loaded, just register a render loop to render it
                    engine.runRenderLoop(function() {
                    newScene.render();
                    });
		});
}










			
} // end createWorld function