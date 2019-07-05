var items;
//var uvZero = [1,0,1,.125, .875,.125,.875,0]; original settings
var uvZero = [0.125,0.875
,0.125,1
,0.0,1
,0.0,0.875];

var uvArray = [];
var whichObj;
var isOpen =false;

function drawMenu(myScene) {
	
	//var isOpen = false;
	//var uvZero = [1,0,1,.125, .875,.125,.875,0];
	
	//backpack background
	var bPack00 = myScene.getMeshByName("bpack00");
	bPack00.parent = myCamera2;	
	bPack00.isPickable = false;
	
	//backpack icon
	var bPack01 = myScene.getMeshByName("bpack01"); 
	//bPack01.position.z = -.226;
	//bPack01.positionY = .05;
	console.log("bPack01 = " + bPack01.position);
	bPack01.isPickable = true;
	bPack01.parent = myCamera2;	
	
	//handle backpack background
	var backPack = myScene.getMeshByName("backpack");
	backPack.setEnabled(false);
	backPack.isPickable = false;
	backPack.parent = myCamera2;
	

	
	//handle backpack items sets them to empty and no clicks allowed
	var allItems = myScene.getMeshByName("allitems");
	items = allItems.getChildren();
	items.reverse();
	for (i = 0; i < items.length; i++){
		uvArray[i] = items[i].getVerticesData(BABYLON.VertexBuffer.UVKind);
		//console.log(uvArray);
		items[i].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);
		items[i].setEnabled(false);
		items[i].isPickable = false;
		items[i].parent = myCamera2;
	};
	

	
	//open close backpack
	var openPack = function(){
		if(!isOpen){
			console.log("clicked");
			backPack.setEnabled(true);
			for (i = 0; i < items.length; i++){
				items[i].setEnabled(true);
			};
		}
		else { //close backpack
			backPack.setEnabled(false);
			console.log("clicked");
			for (i = 0; i < items.length; i++){
				//items[i].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);
				items[i].setEnabled(false);
			};
		}
		isOpen = !isOpen;
	};
	
	var openBPack = function(mesh1) {
								
		// events done in sequence 
			mesh1.actionManager = new BABYLON.ActionManager(myScene);
			mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, openPack))
		};
	
	openBPack(bPack01);
	//end open close backpack
	

return;
};

function drawBoard(myScene){
	var board = myScene.getMeshByName("board");
	board.isPickable = true;
	var aFloor = myScene.getMeshByName("floor");
	
	
}

/* use for each code below to set up action manager for objects to be clicked

var boxes = []
	
	for (var i = 0; i < 10; ++i) {
		var b = BABYLON.MeshBuilder.CreateBox("b" + i, { width: 1, height: 1 }, scene);
		b.position.x += i * 1.2;
		boxes.push(b);
	}
	boxes.forEach(function (b) {
		b.actionManager = new BABYLON.ActionManager(scene);
	
		b.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (evt) {
			if(buildMode) b.visibility = 0;
	   	}));
		   
		b.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (evt) {
			if(buildMode) b.visibility = 1;
	   	}));
	})


*/




function drawObject(myScene) {

	var allObjects = myScene.getMeshByName("objects");
	var objects = allObjects.getChildren();
	objects.reverse(); 
	for (i = 0; i < objects.length; i++){
		objects[i].isPickable = true;
	}

var isDown = false;
var isMoved = false;
var canDrag = false;
var startingPoint;
var currentMesh;
 
 
 var getGroundPosition = function () {
	var aFloor =myScene.getMeshByName("floor");
	// Use a predicate to get position on the ground
	var pickinfo = myScene.pick(myScene.pointerX, myScene.pointerY, function (mesh) { 
		//console.log(pickinfo.hit);
		return mesh == aFloor; 
	});
	if (pickinfo.hit) {
		console.log(pickinfo.pickedPoint);
		return pickinfo.pickedPoint;
	}
}
 
 
var onPointerUp = function(evt)
{isMoved = false;
myCamera2.attachControl(canvas, true);
}


/*
var onPointerMove = function(evt){
	
	var pickInfo = myScene.pick(myScene.pointerX, myScene.pointerY);
	if (pickInfo.pickedMesh !== null && pickInfo.pickedMesh.name.substring(0,1) === "b"){
		myCamera2.detachControl(canvas);
		isMoved = true;
		console.log(pickInfo.pickedMesh.name + " = "+ "can be dragged");
		startingPoint = getGroundPosition(); 
		console.log("Start = " + startingPoint);	
	}	
	else {
		isMoved = false;
		myCamera2.attachControl(canvas, true);
	}
	
} 

*/
 
var onPointerDown = function (evt) {
	//if (evt.button !== 0) {
	//return;
	//}

 
	isDown = true;
	var pickInfo = myScene.pick(myScene.pointerX, myScene.pointerY);
	if (pickInfo.hit) {
		console.log(pickInfo.pickedMesh.name);
		var whichItem = pickInfo.pickedMesh.name.substring(0,1);
		if (whichItem ==="o"){
			whichObj = Number(pickInfo.pickedMesh.name.substring(6));
			console.log(whichObj + "  " + whichItem);
			items[whichObj].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[whichObj]);
			items[whichObj].isPickable = true;
			pickInfo.pickedMesh.setEnabled(false);
		};
		
		if (whichItem ==="i"){
			whichObj = Number(pickInfo.pickedMesh.name.substring(4));
			console.log(whichObj + "  " + whichItem);
			items[whichObj].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);
			items[whichObj].isPickable = false;
			//pickInfo.pickedMesh.setEnabled(false);
		}
		
		if (whichItem ==="b"){
			whichObj = pickInfo.pickedMesh.name.substring(0);
			console.log(whichObj);
			
			//isMoved = true;	
			
			
		/*	
			var objPos = pickInfo.pickedMesh.position;
			console.log(objPos.x);
			var getGroundPosition = function () {
				// Use a predicate to get position on the ground
				var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { 
				console.log(pickinfo);
				return mesh == aFloor; });
				if (pickinfo.hit) {
					console.log(pickinfo.pickedPoint);
					return pickinfo.pickedPoint;
					
				}
				
	}
			
			//items[whichObj].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);
			//items[whichObj].isPickable = false;
			//pickInfo.pickedMesh.setEnabled(false);
			*/
		}
		
		
	}
	//else {console.log("missed");}
}
 
var onPointerUp = function() { isDown = false};	
	

canvas.addEventListener("pointerdown", onPointerDown, false);
canvas.addEventListener("pointerup", onPointerUp, false);	
//canvas.addEventListener("pointermove", onPointerMove, false);		
	
/*

	//var clickObject = function(meshes1,value){
	function clickObject(mesh1){
		//whichObj = value;
		//console.log(whichObj);
		//mesh1 = meshes1[value];
		//mesh2 = meshes2[value];
		mesh1.actionManager = new BABYLON.ActionManager(myScene);
		//mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, objOver)),
		mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, objClick))
		//mesh2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, objClick))
	};
*/
//clickObject(objects[0]);
//clickObject(objects,1);

//console.log(whichObj);
//whichObj = Number(objects[1].name.substring(6));
/*
window.addEventListener("click", function (evt) {
	// Pick an object
		var pickResult = myScene.pick(evt.clientX, evt.clientY);
	
		if (pickResult.hit)
		{
			var theObject = pickResult.pickedMesh.name;
			whichObj = Number(theObject.substring(6));
			console.log(whichObj);
			clickObject(objects[whichObj]);
			console.log(objects[whichObj].name);
		}
		
		switch(theObject) {
			
			case "cube1" :
					var object1 = myScene.getMeshByName("music");
					object1.isVisible = false;
					var object2 = myScene.getMeshByName("textures");
					object2.isVisible = false;
					object3 = myScene.getMeshByName("play");
					object3.isVisible = false;
					divMusic.style.display = 'none';
					divTexts.style.display = 'none';
					//music.play('line0');
					playIntro();
					break;
				
			case "cube2" :
					divMusic.style.display = 'block';
					divTexts.style.display = 'none';
					break;
				
			
			default:
					break;
			}
		
	});
	*/
}









