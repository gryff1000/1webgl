var items;
//var uvZero = [1,0,1,.125, .875,.125,.875,0]; original settings
var uvZero = [0.125,0.875
,0.125,1
,0.0,1
,0.0,0.875];

var uvArray = [];
var whichObj;
var isOpen =false;
var thePics;
var isOpen1 = 0;
var isComplete = 0;
var bPack01;
var theSigns;

function drawMenu(myScene) {
	
	//var isOpen = false;
	//var uvZero = [1,0,1,.125, .875,.125,.875,0];
	
	//backpack background
	var bPack00 = myScene.getMeshByName("bpack00");
	bPack00.parent = myCamera2;	
	bPack00.isPickable = false;
	
	//backpack icon
	bPack01 = myScene.getMeshByName("bpack01"); 
	//bPack01.position.z = -.226;
	//bPack01.positionY = .05;
	//console.log("bPack01 = " + bPack01.getAbsolutePosition());
	bPack01.isPickable = true;
	bPack01.parent = myCamera2;	
	
	//handle backpack background
	var backPack = myScene.getMeshByName("backpack");
	backPack.setEnabled(false);
	backPack.isPickable = false;
	backPack.parent = myCamera2;
	
	
	var allSigns = myScene.getMeshByName("signs");
	theSigns = allSigns.getChildren();
	//console.log("length = " + theSigns.length);
	
	for(i = 0; i < theSigns.length; i++){
		//console.log("order " + i + " = " + theSigns[i].name);
		theSigns[i].isPickable = true;
		//console.log("reached");
	};
	
	
	thePics = myScene.getMeshByName("pictur0");
	thePics.setEnabled(false);
	thePics.isPickable = true;
	thePics.parent = myCamera2;
	var picMat = thePics.material;
	//console.log("Name = " + picMat.name);
	picMat.diffuseTexture.uOffset = 0.5;
	//thePics.setEnabled(true);
	
	
	var picsOpen = function(){
		if(isOpen1 === 0){
			//console.log("clicked1");
			thePics.setEnabled(true);
			isOpen1 = 1;
		}
		else { //close backpack
			thePics.setEnabled(false);
			//console.log("clicked2");
			
			isOpen1 = 0;
		}
		//isOpen1 = !isOpen1;
	};
	
	
	var openPics = function(mesh1) {
								
		// events done in sequence 
			mesh1.actionManager = new BABYLON.ActionManager(myScene);
			mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, picsOpen))
		};
	
	//openPics(thePics);

	
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
	
	items[0].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[0]);
		items[0].isPickable = true;
		isComplete ++;
		//console.log(isComplete);
	
	// temp
	//items[3].setEnabled(true);
	
	//open close backpack
	var openPack = function(){
		if(!isOpen){
			//console.log("clicked open");
			backPack.setEnabled(true);
			for (i = 0; i < items.length; i++){
				items[i].setEnabled(true);
			};
		}
		else { //close backpack
			backPack.setEnabled(false);
			//console.log("clicked closed");
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

function drawObject(myScene) {


var isDown = false;
var isMoved = false;
var canDrag = false;
var startingPoint;
var currentMesh;
 
 
var onPointerUp = function(evt)
{isMoved = false;
//myCamera2.attachControl(canvas, true);
}
 
 /*------------objects----------------------------------
 
 object01 - arsenic bottle
 object02 - Doctor T
 object03 - miller court
 object04 - elephant man
 object05 - hanbury street
 object06 - mitre square
 object07 - merrick
 object08 - dorset street
 object09 - F&D row
 pictures
 
 from console 
 
order 0 = object10  draw.js:46:3 brick lane
order 1 = object09  draw.js:46:3 flower and dean
order 2 = object08  draw.js:46:3 dorset street
order 3 = object07  draw.js:46:3 merrick sign
order 4 = object01  draw.js:46:3 hanbury street
order 5 = object03  draw.js:46:3 mitre square
order 6 = object05  draw.js:46:3 mjk card
order 7 = object06  draw.js:46:3 arsenic
order 8 = object04  draw.js:46:3 mjk door

        
 
 */
 
var onPointerDown = function (evt) {
	
	isDown = true;
	var pickInfo = myScene.pick(myScene.pointerX, myScene.pointerY);
	//if(pickInfo.pickedMesh.name.length > 6) return;
	if (pickInfo.hit) {
		var theMesh = pickInfo.pickedMesh;
		var whichObject = pickInfo.pickedMesh.name.substring(0,1); 
		//console.log("which type = " + whichObject);
		
		if(whichObject === "p"){
			thePics.setEnabled(false);
		}
		
		if(whichObject === "o") {
		
		var whichItem = Number(pickInfo.pickedMesh.name.substring(6));
		//console.log("The Item = " + whichItem);
		
		switch(whichItem) {
		
			case 10 :	
				//Brick lane
				theSounds.play(0, 12.000, 1.600);
				theMesh.isPickable = false;
				break;
		
			case 9 :	
				//F&D Row
				theStreets.play(0, 0.0, 16.00);
				theMesh.isPickable = false;
				break;
		
			case 8 :	
				//dorset
				theStreets.play(0, 16.50, 16.260);
				theMesh.isPickable = false;
				break;
		
			case 7 :	
				//merrick
				//console.log(whichItem);
				thePics.rotation.z = 0;
				var picMat = thePics.material;
				picMat.diffuseTexture.uOffset = 0.0;
				picMat.diffuseTexture.vOffset = 0.0;
				thePics.setEnabled(true);
				isOpen1 = 1;
				showIcon(whichItem);
				theSounds.play(0, 12.000, 1.600);
				theMesh.isPickable = false;
				break;
		
			case 6 :	
				//poison bottle
				//console.log(whichItem + " in hanbury");
				thePics.rotation.z = 0;
				//var picMat = thePics.material;
				//picMat.diffuseTexture.uOffset = 0.25;
				//picMat.diffuseTexture.vOffset = 0.0;
				//thePics.setEnabled(true);
				//isOpen1 = 1;
				theMesh.setEnabled(false);
				showIcon(whichItem);
				theSounds.play(0, 12.000, 1.600);
				theMesh.isPickable = false;
				break;
		
			case 5 :
				// the card
				//console.log(whichItem);
				thePics.rotation.z = 0;
				var picMat = thePics.material;
				picMat.diffuseTexture.uOffset = 0.0;
				picMat.diffuseTexture.vOffset = 0.5;
				thePics.rotation.z = -Math.PI/2;
				thePics.setEnabled(true);
				isOpen1 = 1;
				theMesh.setEnabled(false);
				showIcon(whichItem);
				theSounds.play(0, 12.000, 1.600);
				theMesh.isPickable = false;
				break;
			
			case 4 :
				//	mary jane kelly		
				//if(isOpen1 === 0){
					//console.log(whichItem + "  clicked3");
					thePics.rotation.z = 0;
					var picMat = thePics.material;
					picMat.diffuseTexture.uOffset = 0.75;
					picMat.diffuseTexture.vOffset = 0.0;
					thePics.setEnabled(true);
					isOpen1 = 1;
					showIcon(whichItem);
					theSounds.play(0, 14.000, 9.200);
					theMesh.isPickable = false;
				break;
				
			case 3 :	
			// mitre square - eddowes and liz stride
				//console.log(whichItem + " in mitre square");
				thePics.rotation.z = 0;
				var picMat = thePics.material;
				picMat.diffuseTexture.uOffset = 0.25;
				picMat.diffuseTexture.vOffset = 0.0;
				thePics.setEnabled(true);
				isOpen1 = 1;
				showIcon(whichItem);
				showIcon(whichItem - 1);
				theSounds.play(0, 14.000, 9.200);
				theMesh.isPickable = false;
				break;
				
			case 2 :	
				// dorset street
				//console.log("dorset street");
				/*
				var picMat = thePics.material;
				picMat.diffuseTexture.uOffset = 0.0;
				picMat.diffuseTexture.vOffset = 0.5;
				thePics.rotation.z = -Math.PI/2;
				thePics.setEnabled(true);
				isOpen1 = 1;
				*/
				theSounds.play(0, 14.000, 9.200);
				theMesh.isPickable = false;
				break;
				
			case 1 :
				//annie chapman
				//console.log(whichItem);
				thePics.rotation.z = 0;
				var picMat = thePics.material;
				picMat.diffuseTexture.uOffset = 0.5;
				picMat.diffuseTexture.vOffset = 0.0;
				thePics.setEnabled(true);
				isOpen1 = 1;
				showIcon(whichItem);
				theSounds.play(0, 12.000, 1.600);
				theMesh.isPickable = false;
				break;
			
			case 0 :
				thePics.setEnabled(false);
				isOpen1 = 0;
				break;
			
			default :
				console.log("not found");
			break;
		
		}
	}
		
	else if (whichObject === "i")
	{
		var whichItem = Number(pickInfo.pickedMesh.name.substring(5));
		//console.log("The Item = " + whichItem);
		//console.log("do nothing for now");
		//console.log("From 2nd Switch = " + whichItem);
		switch(whichItem) {
		
			case 0 :
			console.log("Polly Nichols");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			thePolly.play();
			
			break;
		
			case 1 :
			console.log("Annie Chapman");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			theChapman.play();
			break;
			
			case 2 :
			console.log("Liz Stride");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			theStride.play();
			break;
			
			case 3 :
			console.log("Catherine Eddows");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			theEddowes.play();
			break;
			
			case 4 :
			console.log("Mary Jane Kelly");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			theMjk.play();
			break;
			
			case 5 :
			console.log("Dr. T?");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			theTumble.play();
			break;
			
			case 6 :
			console.log("Arsenic");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			thePoison.play();
			break;
			
			case 7 :
			console.log("Joseph Merrick");
			for(i =0; i < items.length; i++){
				items[i].isPickable = false;
			};
			theMerrick.play();
			break;
		
		}
	}
	
		
	}
	//else {console.log("missed");}
}
 

function showIcon(whichItem){

	if(whichItem > 0){
		items[whichItem].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[whichItem]);
		//console.log("whichItem = " + whichItem);
		items[whichItem].isEnabled(true);
		items[whichItem].isPickable = true;
		isComplete ++;
		//console.log(isComplete);
	}
}; 
 

 
 
 var onPointerUp = function() { isDown = false};	
	

canvas.addEventListener("pointerdown", onPointerDown, false);
canvas.addEventListener("pointerup", onPointerUp, false);	
//canvas.addEventListener("pointermove", onPointerMove, false);		
	



}









