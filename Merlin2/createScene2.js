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


function deleteWorld(){
	//console.log("Reached");
	//soundsReady = 0;
	//console.log(myScene.meshes.length);
	//engine.stopRenderLoop();
	//engine.dispose();
	//blueCube.dispose();
	allMeshes = myScene.meshes;
	//for(i =0; i<allMeshes.length; i++){
	//	console.log(allMeshes[i].name);
	//};
	var i = allMeshes.length;
	console.log("Total = " + i);
	//while(i>0) {
		//const mesh = myScene.getMeshByName("Cube");
	//		allMeshes[i].dispose();
	//		i = i-1;
	//		console.log(i);
	//}
	myScene.dispose();
	allMeshes = myScene.meshes;
	console.log("Remaining = " + allMeshes.length);
	//engine.runRenderLoop();
	//engine.dispose();
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