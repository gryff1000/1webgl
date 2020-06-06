/*var skeleton0;
var skeletonMeshes = new Array(0,1,2,3,4);
var lights = new Array(0,1);
var bulbs = new Array(0,1, 2);
var camSensor;
var theBook;
var objects;
var found = 0;
var allTriggers;
var startCamera;
var aButton;
var allMerrick;
var aMerrick;
*/
var aLamp;

var myCamera2;
var allLids;
var openLids = [0,1,0,1,0,0,0,0,1];

function createWorld(){
	engine.stopRenderLoop();
	//engine.dispose();
	//myScene.dispose();
	
	
if (sceneNum === 0){
		startCamera = new BABYLON.FreeCamera("start",new BABYLON.Vector3(0,1,195),myScene);
		myScene.activeCamera = startCamera;
		
		
		//BABYLON.SceneLoader.Append("", "menu6.babylon", myScene);
		BABYLON.SceneLoader.Append("", "crypt03.babylon", myScene);
			myScene.executeWhenReady(function () {
				
// xxxxxxxxxxxxxxx
			
			//createAudio(); // error now and again - audio issue change howler? Use Babylon 4.1 instead
				
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
						//console.log ("zero");
						
						changeLids(tempLids);
						
						/*
						for(i=0; i < tempLids.length; i++)
						{
							if(openLids[tempLids[i]] === 1){
								myScene.beginAnimation(allLids[tempLids[i]], 31, 61, false);
								openLids[tempLids[i]] = 0;
								console.log(tempLids[i]);
							}
							else {
							myScene.beginAnimation(allLids[tempLids[i]], 1, 31, false);
								openLids[tempLids[i]] = 1;
								console.log(tempLids[i]);
							
							}
						}
						*/
						break;
				
				
					case 1 :	
						//console.log ("one");
						
						var tempLids = [];
						tempLids = [0,1,2];			
						//console.log ("zero");
						
						changeLids(tempLids);
						
						//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
						break;
				
					case 2 :	
						//console.log("two");
						var tempLids = [];
						tempLids = [1,2,4,5];	
						changeLids(tempLids);
						//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
						break;
						
					case 3 :	
						//console.log ("three");
						var tempLids = [];
						tempLids = [0,3,6];	
						changeLids(tempLids);
						//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
						break;
				
					case 4 :	
							console.log ("four");
							var tempLids = [];
							tempLids = [1,3,4,5,7];	
							changeLids(tempLids);
							//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
							break;
							
					case 5 :	
						//console.log ("five");
						var tempLids = [];
						tempLids = [2,5,8];	
						changeLids(tempLids);
						//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
						break;
						
					case 6 :	
						//console.log ("six");
						var tempLids = [];
						tempLids = [3,4,6,7];	
						changeLids(tempLids);
						//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
						break;
						
					case 7 :	
						//console.log ("seven");
						
						var tempLids = [];
						tempLids = [6,7,8];	
						changeLids(tempLids);
						
						//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
						break;
						
					case 8 :	
						//console.log ("eight");
						var tempLids = [];
						tempLids = [4,5,7,8];	
						changeLids(tempLids);
						
						//myScene.beginAnimation(allLids[whichObject], 31, 61, false);
						break;
				
				
				
				
				
					default :
						console.log("not found");
					break;
					}
			};
		};					
			

//} // end when ready
	//else {console.log("missed");}
});	// end when ready


		
		//if all sounds loaded enable the start-replay button and make it pickable
		//if(soundsReady === 0) {
			
			//console.log("sounds ready");
		//}
				
				


				

}; // end sceneNum
				
			// Once the scene is loaded, just register a render loop to render it
			engine.runRenderLoop(function() {
			divFps.innerHTML = engine.getFps().toFixed() + " fps";
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
	}
	
	for(i = 0; i < openLids.length; i++){
		//console.log(openLids[i]);
	}
	//console.log(openLids.length);
	

}

/*
function createAnimation(startX) {
	//console.log("start = " + (startX-20));
    var anim = new BABYLON.Animation("anim", "position.x", 1.5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keys = [];
	keys.push({frame: 0, value: startX - 20});
	keys.push({frame: 40, value: startX + 30});
	anim.setKeys(keys);
    return anim;                                                             
};
*/


// When a key is pressed

 window.addEventListener("keyup", onKeyUp);
	   
	   
		function onKeyUp(event) {
			console.log("key pressed new");
		};


/*
		window.addEventListener('keydown',function(event){
			
			
			//if (event.keyCode === 73)
			//{
				
				switch (event.keyCode) {
				
					case 85:
						console.log("U")
					break;
				
					case 68:
						console.log("D")
					break;
					
					default:
					console.log(other")
					break;
				
				}
			  
			//}

		});

*/
