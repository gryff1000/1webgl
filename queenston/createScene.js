function createWorld(){

	//engine.stopRenderLoop();
	//engine.dispose();
	//myScene.dispose();

if (sceneNum === 0){

	// load babylon files
	BABYLON.SceneLoader.Append("./", "menu1.babylon", myScene);
	
	//BABYLON.SceneLoader.Append("./", "q8_base_b276_1b.babylon", myScene, function (myScene){
	BABYLON.SceneLoader.Append("./", "q8_base_b276_1d.babylon", myScene);
	
	//var theArrows = hideArrows();
	//var theMenu = createMenu();
	myScene.executeWhenReady(function () {
		/*
		var reSet = function(){
			var theTrees = createTrees();
			var theArrows = hideArrows();
			var theBoats = hideBoats();
			var theMenu = createMenu();
			var theSoldiers = createSoldiers();
		};
		*/
		setScene();
		
		
		/*
		var theTrees = createTrees();
		var theArrows = hideArrows();
		var theBoats = hideBoats();
		var theMenu = createMenu();
		var theSoldiers = createSoldiers();
		*/
		//no meshes actually move so freeze world matrix for all meshes enabled - remove with exporter 4.4.2?
		var land_meshes1 = myScene.meshes;
		for (i=0; i<land_meshes1.length; i++){
			land_meshes1[i].name.freezeWorldMatrix = true;
			land_meshes1[i].name.isPickable = true; //?????
		}
		
		
		//check textures only once for all materials
		var mesh_mats = myScene.materials;
		for (i=0; i<mesh_mats.length; i++){
			mesh_mats[i].name.checkReadyOnlyOnce = true;
		};
		
		//disable the curtain
		var aCurtain = myScene.getMeshByName("curtain");
		aCurtain.setEnabled(false);
	
	//});
	
});
		
	
	
    
	// Attach camera to canvas inputs
    //change the value of cameraFlag to a value other than 1 to use the free camera from blender
	var cameraFlag = 1;
					
	// which camera is active Arc Rotate or Blender Free Camera
					
	if (cameraFlag == 1){
		myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, BABYLON.Vector3.Zero(), myScene);
		myCamera.setPosition(new BABYLON.Vector3(0, 4, -11.5));
		myCamera.speed = .1;
		myCamera.wheelPrecision = 250;
		//myCamera.lowerRadiusLimit = myCamera.upperRadiusLimit = myCamera.radius;
		//myCamera.lowerBetaLimit = myCamera.upperBetaLimit = .75;
		myCamera.fov = .8;
		//myCamera.alpha = Math.PI/2;
		//myCamera.beta = .75;
		myCamera.attachControl(canvas, true);
					
	}
	else {
		var myCamera2 = myScene.getCameraByName("Camera");
		myCamera2.speed = .1;
		myScene.activeCamera = myCamera2;
	}
	
	
	// limit rotation Dad72 code
	myScene.registerBeforeRender(function () {		            
		if (myCamera.beta < .75)
			myCamera.beta = .75;
		else if (myCamera.beta > (Math.PI / 2) * 0.66)
			myCamera.beta = (Math.PI / 2) * 0.66;       
	});
	
    // Once the scene is loaded, register a render loop
    engine.runRenderLoop(function() {
	divFps.innerHTML = engine.getFps().toFixed() + " fps";
       myScene.render();
    });
//});    
} // end if sceneNum = 0

/*

if (sceneNum === 1){

} // end if sceneNum = 1


if (sceneNum === 2) {


} //end if sceneNum = 3

*/

			
} // end createWorld function