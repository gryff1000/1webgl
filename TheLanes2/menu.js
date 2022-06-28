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
var theCount = 1;

function createMenu(myScene) {
	
	//var isOpen = false;
	//var uvZero = [1,0,1,.125, .875,.125,.875,0];
	
	//backpack background
	var bPack00 = myScene.getMeshByName("bpack00");
	bPack00.parent = myCamera3;	
	bPack00.isPickable = false;
	
	//backpack icon
	bPack01 = myScene.getMeshByName("bpack01"); 
	//bPack01.position.z = -.226;
	//bPack01.positionY = .05;
	//console.log("bPack01 = " + bPack01.getAbsolutePosition());
	bPack01.isPickable = true;
	bPack01.parent = myCamera3;	
	
	//handle backpack background
	var backPack = myScene.getMeshByName("backpack");
	backPack.setEnabled(false);
	backPack.isPickable = false;
	backPack.parent = myCamera3;

//----------------------------------------------------------------------	
/*	
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
	thePics.parent = myCamera3;
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
*/
//-----------------------------------------------------------------------------	
	
	//handle backpack items sets them to empty and no clicks allowed
	var allItems = myScene.getMeshByName("allitems");
	items = allItems.getChildren();
	//items.reverse();
	for (i = 0; i < items.length; i++){
		uvArray[i] = items[i].getVerticesData(BABYLON.VertexBuffer.UVKind);
		//console.log(uvArray);
		items[i].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);
		items[i].setEnabled(false);
		// set value to true to activate book item
		items[i].isPickable = false;
		items[i].parent = myCamera3;
		//console.log(items[i].name);
	};
	
	items[0].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[0]);
		//items[0].isPickable = true;
		isComplete ++;
		//console.log(isComplete);
	
	// temp
	//items[3].setEnabled(true);
	
	//open close backpack
	var openPack = function(){
		if(!isOpen){
			//console.log("clicked open");
			backPack.setEnabled(true);
			items[0].setEnabled(true);
			items[0].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[0]);	
			
		
			for (i = 1; i < items.length; i++){
				items[i].setEnabled(true);
				//use next line to show all icons
				//items[i].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);	
			};
			
		/*	backPack.onPointerUpObservable.add(function() {
				if(isUnlocked === 0){
				   isUnlocked =1;
				   console.log("unlocked = " + isUnlocked);
				   BABYLON.Engine.audioEngine.unlock(); 
				}
			});
		*/
			
		//use next line to show a specific icon - change the value in brackets
		//items[7].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[7]);	
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
		theCount = 1;
	};
	
	var openBPack = function(mesh1) {
								
		// events done in sequence 
			mesh1.actionManager = new BABYLON.ActionManager(myScene);
			mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, openPack))
		};
		
		
		
	
	openBPack(bPack01);
	//end open close backpack


	
	var readBook = function(){
		
		items[theCount].setEnabled(true);
		
		items[theCount].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[theCount]);
		theCount = theCount + 1;
		if(theCount === 8) {theCount = 0};
		console.log("reached = " + theCount);
		
	};

	var readStory = function(mesh2){
		mesh2.actionManager = new BABYLON.ActionManager(myScene);
		mesh2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, readBook))
	};

	//var theBook = items[0];
	//console.log("the name = " + theBook.name);
	readStory(items[0]);


return;
};
