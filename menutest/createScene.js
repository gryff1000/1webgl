//var minHand;
//var hourHand;

function createWorld(){
	engine.stopRenderLoop();
	//engine.dispose();
	//myScene.dispose();
	
	
if (sceneNum === 0){
		var dummyCamera = new BABYLON.FreeCamera("dummy",new BABYLON.Vector3(0,0,200),myScene);
		
		
		
		BABYLON.SceneLoader.Append("", "menu5a.babylon", myScene);
		BABYLON.SceneLoader.Append("", "cubes.babylon", myScene);
		//BABYLON.SceneLoader.Load("", "menu5a.babylon", engine, function (myScene) {
				myScene.executeWhenReady(function () {
				
				
				
				
				/*
					//change the value of cameraFlag to a value other than 1 to use the free camera from blender
					var cameraFlag = 1;
					
					// which camera is active Arc Rotate or Blender Free Camera
					
					if (cameraFlag === 0){
						var myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), myScene);
						myCamera.setPosition(new BABYLON.Vector3(0, 2, -5));
						myCamera.speed = 1;
						myCamera.wheelPrecision = 250;
						myCamera.fov = .8;
						
						myScene.activeCamera = myCamera;
						myCamera.attachControl(canvas, true);
						//console.log("myCamera= " + myCamera.position);
					}
					else {
					
					*/
						myCamera2 = myScene.getCameraByName("menu_Cam");
						
						myCamera2.maxZ = 100;
						myCamera2.speed = .2;
						myCamera2.checkCollisions = true;
						myScene.activeCamera = myCamera2;
						
						camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, myScene);
						camSensor.scaling = new BABYLON.Vector3(1, .1, 1);
						camSensor.position = new BABYLON.Vector3(0.0, 0.5, 0.0);
						camSensor.checkCollisions = true;
						camSensor.isPickable = false;
						camSensor.parent = myCamera2;
						myCamera2.minZ = .05;
						myCamera2.position.z = -6;
						myCamera2.attachControl(canvas, true);
						console.log(myCamera2.position,camSensor.position);
					//}
					allMeshes = myScene.meshes;
					for (i = 0; i < allMeshes.length; i++){
					allMeshes[i].isPickable = false;
					}
					
					var aMenu = drawMenu(myScene);
					var theObjects = drawObject(myScene);
					//var theBoard = drawBoard(myScene);
					
					/*
					var menuMeshes = myScene.meshes; 
					for (i=0; i<menuMeshes.length; i++){
						//console.log(menuMeshes[i].position);
						//menuMeshes[i].position.z = .20;
						//menuMeshes[i].position.y = 0.08;
						//menuMeshes[i].scaling = new BABYLON.Vector3(.3,.3,1);
						menuMeshes[i].parent = myCamera2;
						console.log(menuMeshes[i].position);
					}	
					*/
					
					//var bPack = myScene.getMeshByName("backpack");
					
					//bPack.isPickable = true;
					
					//var logData = function(){
					/*
						window.addEventListener("click", function (evt) {
							// Pick an object
							var pickResult = myScene.pick(evt.clientX, evt.clientY);
	
							if (pickResult.hit)
							{
								var object = pickResult.pickedMesh.name;
								console.log(Math.round(pickResult.pickedPoint.x *40));
							}
						});
						*/
					//};
					
					// On pick interpolations to play sound
					//var pickData = function(mesh1) {
										
					// events done in sequence 
						//mesh1.actionManager = new BABYLON.ActionManager(myScene);
						//mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, logData))
						
					//};
		
		
					//pickData(bPack);
					
					
					/*
					var aFloor = myScene.getMeshByName("floor");
					aFloor.isPickable = false;
					var theCubes = aFloor.getChildren();
					for (i=0; i<theCubes.length; i++){
						theCubes[i].isPickable = true;
						//console.log(theCubes[i].name);
					}
					*/
					/*
					var theSound = new Howl({  
						urls: ['5sounds.mp3'],
						
						autoplay: false,  
						loop: false, 
						volume: 1,
						
						onplay: function(){
						theCubes[0].isPickable = false;
						
						},
						
						onend:  function() {
							theCubes[0].isPickable = true;
		
						},
		
		
						sprite: {
							1: [0, 4824],
							2: [5000, 6552],
							3: [12000, 1170],
							4: [14000, 8748],
							5: [23000, 7848]
						}
		
		
					});
					*/
					/*
					var close = function(){
						theCubes[0].isPickable = false;
					//theSound.unload();
					};
					
					var wait = function(){
						theSound.play(3);
					//theSound.unload();
					};
					*/
					/*
					var random = 0;
					var numSounds = 1;
					var allPlay = function() {
						if (random === 0 && numSounds < 6){
								theSound.play(numSounds);
								numSounds = numSounds + 1;
						}
						else {
							random = 1;
							//ended = 1;
							theSound.play(4);
							theSound.play(5);
							setTimeout(function () {theSound.play(3);}, 8700);
						}
					};
					
					
					// On pick interpolations to play sound
					var playRandom = function(mesh1) {
										
					// events done in sequence 
						mesh1.actionManager = new BABYLON.ActionManager(myScene);
						mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, allPlay))
						
					};
		
		
					playRandom(theCubes[0]);
					*/
					//myScene = myScene;
					
					
				});
				
				// Once the scene is loaded, just register a render loop to render it
                    engine.runRenderLoop(function() {
                    myScene.render();
                    });
		};
//};










			
} // end createWorld function