
function createWorld(){
	myScene = new BABYLON.Scene(engine);
	
	// create a dummy camera otherwise error no camera in scene.
	dummyCam = new BABYLON.FreeCamera("dummy",new BABYLON.Vector3(0,10,-100),myScene);
	BABYLON.SceneLoader.Append("", "skydome01.babylon", myScene);
	BABYLON.SceneLoader.Append("", "flannan3a5.babylon", myScene);
	//BABYLON.SceneLoader.Append("", "cube2.babylon", myScene);
	myScene.executeWhenReady(function () {
	
	var skymat = myScene.getMaterialByName("skydome01.world");
	skymat.backFaceCulling = false;
	
	/*
		 var environment = myScene.createDefaultEnvironment({
        skyboxSize: 1500
		});
		environment.setMainColor(new BABYLON.Color3(0.05, 0.05, 0.05));
	*/
		var myCam = myScene.getCameraByName("Camera.walk");
		console.log(myCam.name + "  = " + myCam.position);
		myCam.speed = .5;
		//myScene.activeCamera = myCam;
		//myScene.activeCamera.attachControl(canvas);
		
		myScene.clearColor = new BABYLON.Color3(.0509,0.0509,0.0509);
			myScene.fogDensity = .005;
			myScene.fogColor = new BABYLON.Color3(.5509,0.5509,0.509);
		
		
		myScene.activeCamera = myCam;
		myScene.activeCamera.attachControl(canvas);
			
		var ground = myScene.getMeshByName("Landscape1a");
		console.log(ground.name + " = " + ground.position);
		
		var theSea = myScene.getMeshByName("sea");
		
		// Create mix material
		var mix = new BABYLON.MixMaterial("mix", myScene);
		//console.log(theSea.name + " = " + theSea.position);
		
		// Setup mix texture 1
		///////My PG Link :  https://www.babylonjs-playground.com/#1W8W1W
		
		mix.mixTexture1 = new BABYLON.Texture("flannan_splat6.png", myScene);
		mix.diffuseTexture1 = new BABYLON.Texture("rock_grass1baked.png", myScene);
		mix.diffuseTexture2 = new BABYLON.Texture("rock2baked.png", myScene);
		mix.diffuseTexture3 = new BABYLON.Texture("grass4baked.png", myScene);
		mix.diffuseTexture4 = new BABYLON.Texture("grass4.png", myScene);

		mix.diffuseTexture1.uScale = mix.diffuseTexture1.vScale = 30;
		mix.diffuseTexture2.uScale = mix.diffuseTexture2.vScale = 30;
		mix.diffuseTexture3.uScale = mix.diffuseTexture3.vScale = 30;
		//mix.diffuseTexture3.vScale = 40;
		mix.diffuseTexture4.uScale = mix.diffuseTexture4.vScale = 1;
		
		ground.material = mix;
/*	
		// Skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 2000.0, myScene);
	skybox.position.y = 5;
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", myScene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("skybox2/sea01", myScene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
*/		
	});	// end executeWhenReady

	engine.runRenderLoop(function() {
		divFps.innerHTML = engine.getFps().toFixed() + " fps";
		myScene.render();
	});		
}; // end createWorld function