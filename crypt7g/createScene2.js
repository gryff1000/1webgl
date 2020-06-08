
var aLamp;
var myCamera2;
var allLids;
//var openLids = [0,0,0,0,0,0,0,1,1];
var openLids = [1,1,0,0,0,1,0,1,1];
var counter = 0;

function createWorld(){
	engine.stopRenderLoop();
	//engine.dispose();
	//myScene.dispose();
	
	
if (sceneNum === 0){
		startCamera = new BABYLON.FreeCamera("start",new BABYLON.Vector3(0,1,195),myScene);
		myScene.activeCamera = startCamera;
		
		BABYLON.SceneLoader.Append("", "crypt03.babylon", myScene);
			myScene.executeWhenReady(function () {
				
				
			var cameraFlag = 1;
					
					// which camera is active Arc Rotate or Blender Free Camera
					
					if (cameraFlag == 1){
						myCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, BABYLON.Vector3.Zero(), myScene);
						myCamera.setPosition(new BABYLON.Vector3(0, 5.5, -7.4));
						myCamera.speed = .1;
						myCamera.wheelPrecision = 250;
						myCamera.fov = .8;
						myCamera.lowerRadiusLimit = 12;
						myCamera.upperRadiusLimit = 12;
						
						myScene.activeCamera = myCamera;
						
					
					}
					else {
						var myCamera2 = myScene.getCameraByName("Camera");
						myCamera2.speed = .1;
						//myCamera2.setPosition(new BABYLON.Vector3(0, 1.5, -4));
						myScene.activeCamera = myCamera2;
					}
			
			// Then attach the activeCamera to the canvas for testing.
			//myScene.activeCamera.attachControl(canvas);
			
	//}
			allMeshes = myScene.meshes;
			for (i = 0; i < allMeshes.length; i++){
				allMeshes[i].isPickable = false;
			}
			
			
					
			var theLids = myScene.getMeshByName("lids");
			allLids = theLids.getChildren();
			for(i =0; i < allLids.length; i++){
				allLids[i].isPickable = true;
				//Set to change cursor
				allLids[i].enablePointerMoveEvents = true;
				if (openLids[i] === 1) {
					myScene.beginAnimation(allLids[i], 30, 31, false);
				}
			};
			
			
		myScene.onPointerMove = function(evt, pickResult) {
				if (pickResult.hit) {
					canvas.style.cursor = "url('hand02.png') 12 12, auto";
				}
		};
			
		myScene.onPointerDown = () => {
			   // isDown = true;
			var pickInfo = myScene.pick(myScene.pointerX, myScene.pointerY);
			
			if (pickInfo.hit) {
				var theMesh = pickInfo.pickedMesh;
				var whichObject = parseInt(pickInfo.pickedMesh.name.substring(4)); 
				//console.log("The Item = " + whichObject);
				
				switch(whichObject) {
				
					case 0 :
					
						var tempLids = []; 
						tempLids = [0,1,3,4];			
						changeLids(tempLids);
						
						break;
				
				
					case 1 :
						
						var tempLids = [];
						tempLids = [0,1,2];	
						changeLids(tempLids);
						
						break;
				
					case 2 :	
						
						var tempLids = [];
						tempLids = [1,2,4,5];	
						changeLids(tempLids);
						
						break;
						
					case 3 :	
					
						var tempLids = [];
						tempLids = [0,3,6];	
						changeLids(tempLids);
						
						break;
				
					case 4 :	
							
						var tempLids = [];
						tempLids = [1,3,4,5,7];	
						changeLids(tempLids);

						break;
							
					case 5 :	
						
						var tempLids = [];
						tempLids = [2,5,8];	
						changeLids(tempLids);
						
						break;
						
					case 6 :	
						
						var tempLids = [];
						tempLids = [3,4,6,7];	
						changeLids(tempLids);
						
						break;
						
					case 7 :	
						
						var tempLids = [];
						tempLids = [6,7,8];	
						changeLids(tempLids);
						
						break;
						
					case 8 :	
						
						var tempLids = [];
						tempLids = [4,5,7,8];	
						changeLids(tempLids);
						
						break;
				
					default :
						console.log("not found");
					
					break;
					
					}//end switch
			
			}; // end if(PickInfo)
		
	};	//end onPointerDown				
			
	});	// end when ready
	
	
	//var count = 0;
	
}; // end sceneNum

//var actives = myScene.getActiveMeshes();
//       console.log(actives.length);
				
			// Once the scene is loaded, just register a render loop to render it
			engine.runRenderLoop(function() {
			divFps.innerHTML = engine.getFps().toFixed() + " fps";
			//count = 0:
			myScene.render();
			
			});
};// end create world = 0


function changeLids(tempLids) {

	for(i=0; i < tempLids.length; i++)
	{
		if(openLids[tempLids[i]] === 1){
			myScene.beginAnimation(allLids[tempLids[i]], 31, 61, false);
			openLids[tempLids[i]] = 0;
			//console.log(openLids[tempLids[i]]);
		}
		else {
		myScene.beginAnimation(allLids[tempLids[i]], 1, 31, false);
			openLids[tempLids[i]] = 1;
			//console.log(openLids[tempLids[i]]);
		
		}
		
		//console.log(
	}
	
		divIntro.innerHTML = "";
		
	    var sum = openLids.reduce(function(a, b){
			return a + b;
		}, 0);
		if(sum === 0) {
			console.log("YOU WIN!!!");
			divWin.innerHTML = "YOU WIN!!!";
		
		}
	
	/*console.log("---------------------------");
	for(i = 0; i < openLids.length; i++){
		console.log(openLids[i]);
	}
	//console.log(openLids.length);
	*/

}



// When a key is pressed

 window.addEventListener("keyup", onKeyUp);
	   
	   
		function onKeyUp(event) {
			aLamp = myScene.getLightByName("Hemi");
			//aLamp.intensity = aLamp.intensity + 0.2;
			//console.log("key pressed = " + event.keyCode + "  intensity = " + aLamp.intensity);
			switch(event.keyCode){
			
				case 85:
					aLamp.intensity = aLamp.intensity + 0.2;
					//console.log("key pressed = " + event.keyCode + "  intensity = " + aLamp.intensity);
				break;
					
				case 68:
					aLamp.intensity = aLamp.intensity - 0.2;
					//console.log("key pressed = " + event.keyCode + "  intensity = " + aLamp.intensity);
				break;
			
			};
		};


