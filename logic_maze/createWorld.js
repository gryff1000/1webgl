

var createScene = function (engine) {
	
	var divOutput = document.getElementById("output");
	var nextColour = ["RED", "BLUE"];
	divOutput.innerHTML = "Next Gate : " + nextColour[0];
	var divOutput2 = document.getElementById("output2");
	var thegates = ["gate1","gate2","gate3","gate4"];
	
	var turn = Math.PI/2;
	
    //Load a basic scene 
    var scene = new BABYLON.Scene(engine);
	
	if (BABYLON.Engine.isSupported()) {
            var canvas = document.getElementById("renderCanvas");
			var divFps = document.getElementById("fps");
            var engine = new BABYLON.Engine(canvas, true);
			
			//script to detect mobile/touch device.
			// returns "null" if no mobile/touch device
				var isMobile = {
					Android: function() {
						return navigator.userAgent.match(/Android/i);
					},
					BlackBerry: function() {
						return navigator.userAgent.match(/BlackBerry/i);
					},
					iOS: function() {
						return navigator.userAgent.match(/iPhone|iPad|iPod/i);
					},
					Opera: function() {
						return navigator.userAgent.match(/Opera Mini/i);
					},
					Windows: function() {
						return navigator.userAgent.match(/IEMobile/i);
					},
					any: function() {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
					}
				};
				console.log(isMobile.any()); 
				// end detection code

            BABYLON.SceneLoader.Load("", "lm1g2014_10k.babylon", engine, function (newScene) {
                newScene.executeWhenReady(function () {
					scene = newScene;
					
					//add a TouchCamera if a mobile/touch device is detected
					if( isMobile.any() ){ 
						console.log("load camera mobile");
						var theCamera = newScene.getCameraByName("Camera1"); 
						theCamera.angularSensibility = 50000;
						console.log(theCamera.moveSensibility );
						console.log(theCamera.angularSensibility );
					}
					// if not detected add a Free Camera
					else {
						console.log("load camera free");
					
						//set up the camera created in blender.
						var theCamera = newScene.getCameraByName("Camera");
						theCamera.speed = .4;
						//test basic babylon values
						//var myCamera = new BABYLON.FreeCamera("Free", new BABYLON.Vector3(17.0967,4,0), newScene);
						}
					//end add a TouchCamera if a mobile/touch device is detected
					
					
					// getcamera set speed and maxZ
					//var theCamera = newScene.getCameraByName("Camera"); 
					theCamera.maxZ = 150;
					//theCamera.speed = .4;
					
				
					// create sensor mesh  - parent to  camera
					camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, newScene);
					camSensor.scaling = new BABYLON.Vector3(.4, .1, .4);
					camSensor.position = new BABYLON.Vector3(0.0, 0.5, 0.00);
					camSensor.checkCollisions = true;
					camSensor.parent = theCamera;
					
				
                    // Attach camera to canvas inputs
					newScene.activeCamera = theCamera;
					theCamera.attachControl(canvas, true);
					
					//set the materials for the gates and winBox
					mat1b = newScene.getMaterialByName("lm1g2014_10k.blue_gate");
					mat1b.alpha = 1;
					mat1b.backFaceCulling = false
					mat1r = newScene.getMaterialByName("lm1g2014_10k.red_gate");
					// make the winBox invisible
					mat1g = newScene.getMaterialByName("lm1g2014_10k.green");
					mat1g.alpha = 0;
					archMat = newScene.getMaterialByName("lm1g2014_10k.arch__ceiling_panel1_png");
					archMat.backFaceCulling = false;
					
					// get the door meshes to clone
					var ardoor = newScene.getMeshByName("red_gate");
					var abdoor = newScene.getMeshByName("blue_gate");
					var winBox = newScene.getMeshByName("winbox");
					
					// create an action manager for the win text box
					winBox.actionManager = new BABYLON.ActionManager(scene);
					var trigger2 = {trigger:BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: camSensor};
					var collFunc2 = function(){
						gateCount = gateCount + 1; 
						var divWin = document.getElementById("win");
						var el = document.getElementById("output");
						var el2 = document.getElementById("output2");
						el.style.display = 'none';
						el2.style.display = 'none';
						if (gateCount < 10){
							divWin.innerHTML = "Excellent! You did it using only " + (gateCount) + " gates";
						}
						else if (gateCount > 12){
							divWin.innerHTML = "Not bad. You did it using " + (gateCount) + " gates";
						}
						else {
							divWin.innerHTML = "Well done! You did it using " + (gateCount) + " gates";
						}
						divWin.style.display = 'block';
					}
					var exec2 = new BABYLON.ExecuteCodeAction(trigger2, collFunc2);
					winBox.actionManager.registerAction(exec2);
					
					// create clones
					for(i = 0; i < 8; i++){
						bdoor(i, abdoor,  scene);
					}
					
					for(i = 0; i < 7; i++){
						rdoor(i, ardoor, scene);
					}
					
					//Mesh Interaction check
					scene.registerBeforeRender(function () {
					
					});
					
					
                    // Once the scene is loaded, just register a render loop to render it
                    engine.runRenderLoop(function() {
					divFps.innerHTML = engine.getFps().toFixed() + " fps";
                        scene.render();
                    });
                });
            }, function (progress) {
                // To do: give progress feedback to user
            });
        }
		
		// Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
	
	return scene;
};


var bdoor = function(ndx, abdoor, scene) {
	
	var b = abdoor.clone("bd" + ndx);
	//set material, collisions and position/rotation
	b.material = mat1b;
	b.checkCollisions = true;
	b.rotation = BABYLON.Vector3.FromArray(rotationsb,ndx*3);
	b.position = BABYLON.Vector3.FromArray(positionsb,ndx*3);
    
    // action manager
    b.actionManager = new BABYLON.ActionManager(scene);

    // on collision with camSensor
    var trigger = {trigger:BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: { mesh:camSensor, usePreciseIntersection: true}};
    var collFunc = function(){
	var divOutput = document.getElementById("output");
	divOutput.innerHTML = "Next Gate : " + nextColour[0];
	
	};
	var exec = new BABYLON.ExecuteCodeAction(trigger, collFunc);
	
	b.actionManager.registerAction(exec);
	
	var trigger1 = {trigger:BABYLON.ActionManager.OnIntersectionExitTrigger, parameter: { mesh:camSensor, usePreciseIntersection: true}};
    var collFunc1 = function(){
	
	
		mat1r.alpha = .5;
		mat1r.backFaceCulling =  false;
		mat1b.alpha = 1;
		mat1b.backFaceCulling = true;
		
		for(i=0; i<7; i++){
			var tempmesh = scene.getMeshByName(rdoors[i]);
			tempmesh.checkCollisions = false;
		};
		for(i=0; i<8; i++){
			var tempmesh = scene.getMeshByName(bdoors[i]);
			tempmesh.checkCollisions = true;
		};
		counter();
	};
	var exec1 = new BABYLON.ExecuteCodeAction(trigger1, collFunc1);
	b.actionManager.registerAction(exec1);
    

/* This code used as short cut while testing - allows flipping of gates by clicking on a blue gate

    var onpickAction = new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function(evt) {
            if (evt.meshUnderPointer) {
                var meshClicked = evt.meshUnderPointer;
				mat1r.alpha = 1;
				mat1r.backFaceCulling =  false;
				mat1b.alpha = .5;
				mat1b.backFaceCulling =  false;
				
					for(i=0; i<8; i++){
						var tempmesh = scene.getMeshByName(bdoors[i]);
						tempmesh.checkCollisions = false;
					}
					
					for(i=0; i<7; i++){
						var tempmesh = scene.getMeshByName(rdoors[i]);
						tempmesh.checkCollisions = true;
					}
				}
        });
        
	b.actionManager.registerAction(onpickAction);
*/	
	
};


var rdoor = function(ndx, ardoor, scene) {
	
	var b = ardoor.clone("rd" + ndx);
	b.material = mat1r;
	b.checkCollisions = false;
	b.rotation = BABYLON.Vector3.FromArray(rotationsr,ndx*3);
	b.position = BABYLON.Vector3.FromArray(positionsr,ndx*3);
    
    // action manager
    b.actionManager = new BABYLON.ActionManager(scene);

    // on collision with camSensor
    var trigger = {trigger:BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: { mesh:camSensor, usePreciseIntersection: true}};
    var collFunc = function(){
		var divOutput = document.getElementById("output");
		divOutput.innerHTML = "Next Gate : " + nextColour[1];
	};
	
	var exec = new BABYLON.ExecuteCodeAction(trigger, collFunc);
	
    b.actionManager.registerAction(exec);
	
	var trigger1 = {trigger:BABYLON.ActionManager.OnIntersectionExitTrigger, parameter: { mesh:camSensor, usePreciseIntersection: true}};
    var collFunc1 = function(){
	
		mat1r.alpha = 1;
		mat1r.backFaceCulling =  false;
		mat1b.alpha = .5;
		mat1b.backFaceCulling =  true;
		
		for(i=0; i<7; i++){
			var tempmesh = scene.getMeshByName(rdoors[i]);
			tempmesh.checkCollisions = true;
		};
		for(i=0; i<8; i++){
			var tempmesh = scene.getMeshByName(bdoors[i]);
			tempmesh.checkCollisions = false;
		};
		counter();
	};
	var exec1 = new BABYLON.ExecuteCodeAction(trigger1, collFunc1);
	b.actionManager.registerAction(exec1);

 /* This code used as short cut while testing - allows flipping of gates by clicking on a red gate
 
    var onpickAction = new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function(evt) {
            if (evt.meshUnderPointer) {
                var meshClicked = evt.meshUnderPointer;
                
				mat1r.alpha = .5;
				mat1b.alpha = 1;
				
				for(i=0; i<7; i++){
						var tempmesh = scene.getMeshByName(rdoors[i]);
						tempmesh.checkCollisions = false;
					}
					for(i=0; i<8; i++){
						var tempmesh = scene.getMeshByName(bdoors[i]);
						tempmesh.checkCollisions = true;
					}
            }
        });
    
	b.actionManager.registerAction(onpickAction);
*/	
	
};

function counter(){

	gateCount = gateCount + 1;
	var divOutput2 = document.getElementById("output2");
	divOutput2.innerHTML = "Gates Used : "  + gateCount; 

};
