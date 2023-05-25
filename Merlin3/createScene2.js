var allMeshes;
var myCamera;
var myCamera1;
var myScene;
var sceneInstru;
var clicked = 0;
var numKeys = 0;
var keys = [0,0,0,0];
//var soundsReady = 0;
//var sceneNum;
var Light0;
var Light1;
var Point0;


function deleteWorld(){
	allMeshes = myScene.meshes;
	//var i = allMeshes.length;
	console.log("Starting meshes = " + allMeshes.length);
	myScene.dispose();
	allMeshes = myScene.meshes;
	console.log("Remaining meshes = " + allMeshes.length);
};

function createScene(){
	
	// create dummy camera
	myScene = new BABYLON.Scene(engine);
	sceneInstru = new BABYLON.SceneInstrumentation(myScene);
	var dummyCamera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), myScene);
	

		if (sceneNum === 0){
			
			
			loadScene1();
			
			
	/*
			BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
				
				
					myScene.executeWhenReady(function () {
						
						myCamera = myScene.getCameraByName("Camera");
						myScene.activeCamera = myCamera;
						myScene.activeCamera.speed = 0.05;
						myScene.activeCamera.attachControl(canvas);
		
						console.log("This Scene is " + (sceneNum +1));
				// data on meshes sent to console
						allMeshes = myScene.meshes;
						console.log("Total Meshes = " + allMeshes.length);
				// load sound for scene 1		
						
						createSound1();
						
						
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
					
					var start = myScene.getMeshByName("Cube")
					
					start.actionManager = new BABYLON.ActionManager(myScene);
					start.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
					BABYLON.ActionManager.OnPickTrigger, 
					function (evt) {
						console.log("Action Manager start triggered");
						BABYLON.Engine.audioEngine.unlock();
						sceneNum = sceneNum + 1;
						theIntro.play();
						theIntro.onended = function(){
							//console.log("Cube Clicked");
							deleteWorld();
							createScene();
						}
					}));
		
					}) // end executeWhenReady
			*/	
		}; //end scene 0 code




		if (sceneNum === 1){
			
			loadScene2();
		/*	
			myScene.onKeyboardObservable.add((kbInfo) => {
			  //console.log(kbInfo.type, kbInfo.event)
			  if(event.keycode === 85){Light0.intensity = Light0.intensity + 1};
			  console.log(Light0.intensity);
			})
		*/	
		/*	
			window.addEventListener("keydown",function (event) {
				//canvas.focus();
				if(keycode === 85){Light0.intensity = Light0.intensity + .1};
			})
		*/	
			
			
		/*	
			BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
			
				
					
					
                myScene.executeWhenReady(function () {
					
					//console.log("Reached Again");
					
					myCamera1 = myScene.getCameraByName("Camera");
					myScene.activeCamera = myCamera1;
					myScene.activeCamera.speed = 0.2;
					myScene.activeCamera.attachControl(canvas);
					//sceneNum = sceneNum + 1;
					
					console.log("This Scene is " + (sceneNum + 1));
				// 	data on meshes sent to console
					allMeshes = myScene.meshes;
					console.log("Total Meshes = " + allMeshes.length);
				//	soundsReady = 0;
				// load sound for scene 2
					createSound2();
			
				});//end executeWhenReady
		*/		
				
				
		} // end scene 1 code
		
		
		if (sceneNum === 2){
			
			loadScene3();
			
			
			
		/*	
			BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
			
				
					
					
                myScene.executeWhenReady(function () {
					
					//console.log("Reached Again");
					
					myCamera1 = myScene.getCameraByName("Camera");
					myScene.activeCamera = myCamera1;
					myScene.activeCamera.speed = 0.2;
					myScene.activeCamera.attachControl(canvas);
					//sceneNum = sceneNum + 1;
					
					console.log("This Scene is " + (sceneNum + 1));
				// 	data on meshes sent to console
					allMeshes = myScene.meshes;
					console.log("Total Meshes = " + allMeshes.length);
				//	soundsReady = 0;
				// load sound for scene 2
					createSound2();
			
				});//end executeWhenReady
		*/		
				
				
		} // end scene 1 code



		// Once the scene is loaded, just register a render loop to render it
		engine.runRenderLoop(function() {
		divFps.innerHTML = engine.getFps().toFixed() + " fps";
		divDCs.innerHTML = sceneInstru.drawCallsCounter.current.toString() + " DCs";
		myScene.render();
		});
 


} //end createScene


 window.addEventListener("keyup", onKeyUp);
	   
	   
		function onKeyUp(event) {
			//aLamp = myScene.getLightByName("Hemi");
			//aLamp.intensity = aLamp.intensity + 0.2;
			//console.log("key pressed = " + event.keyCode + "  intensity = " + aLamp.intensity);
			
			if(sceneNum === 1){
				switch(event.keyCode){
				
					case 85:
						//aLamp.intensity = aLamp.intensity + 0.2;
						console.log("key pressed = " + event.keyCode + "  intensity = " + Light0.intensity);
						console.log("key pressed = " + event.keyCode + "  intensity = " + Light1.intensity);
						panel.isVisible = true;
					break;
						
					case 68:
						//aLamp.intensity = aLamp.intensity - 0.2;
						console.log("key pressed = " + event.keyCode + "  intensity = " + Light0.intensity);
						panel.isVisible = false;
					break;
				
				};
			}
		};


/*
window.addEventListener("click", function (evt) {
	// Pick an object
		var pickResult = myScene.pick(evt.clientX, evt.clientY);
	
		if (pickResult.hit)
		{
			var object = pickResult.pickedMesh.name;
			var theTrigger = pickResult.pickedMesh;
			//console.log(object);
		}
		
		switch(object) {
			
			case "Cube1" :
				if(sceneNum === 0){
					
					sceneNum = sceneNum + 1;
				//unlock the audio  engine in Browsers to let audio play - no micro symbol
					BABYLON.Engine.audioEngine.unlock();
					theIntro.play();
					theIntro.onended = function(){
						//console.log("Cube Clicked");
						deleteWorld();
						createScene();
					}
				}	
				else {
					
					//console.log("Scene = " + (sceneNum + 1));
					if(clicked === 0){
						clicked = 1;
						theMagic1.play();
						theMagic1.onended = function(){
							//console.log("Cube Clicked");
							//deleteWorld();
							//createScene();
						}
					}
				}
				
					break;
					
			case "aDoor1" :
						console.log("Door Clicked");
						//.theDoor.play();
					break;
					
			
			default:
					break;
		}
		
	});
	
	*/