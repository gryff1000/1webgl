
// x : 32.0003 m | y = 1.697 m | z = 1.93 m
// new Vector3(32.0003, -10, 1.697);




var hidden = 1;
var items = [];
var menuDeck = [];
var uvZero = [0.125,0.875
,0.125,1
,0.0,1
,0.0,0.875];

var uvArray = [];
var isOpen1 = 1;
var panel;

function loadScene2(){
	
		//sceneNum = 2;

		BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
		//BABYLON.SceneLoader.Append("", "scene02/new_menu7.babylon", myScene);
						
				//console.log("Scene loads from Scene folder =  " +(sceneNum+1)); 		
				myScene.executeWhenReady(function () {
					
					document.getElementById("Keys").style.display = "none";
					
	// set camera parameters
					myCamera2 = myScene.getCameraByName("Camera");
					myCamera2.speed = 0.05;
					myScene.activeCamera = myCamera2;
					
					
	// set lantern parameters		
					Light0 = myScene.getLightByName("Light00");
					Light1 = myScene.getLightByName("Light01");
					Point0 = myScene.getLightByName("Point00");
					Light0.intensity = .3;
					Light1.intensity = .1;
					Point0.intensity = 3;
					Point0.range = 10;
					Point0.diffuse = new BABYLON.Color3(1, 1, 0);
					
					Point0.parent = myCamera2;
				
					var theLamp = myScene.getMeshByName("aLamp");
					//console.log(theLamp.position);
					
					theLamp.checkCollisions = true;
					
					
					drawMenu(myScene);
					//console.log(uvArray[1]);
					
					
					myScene.onKeyboardObservable.add((kbInfo) => {
					  //console.log(kbInfo.type, kbInfo.event)
					  if(event.keycode === 85){
						  Light0.intensity = 0.5; //Light0.intensity + 0.5;
						  console.log(Light0.intensity);
					  };
					})
					
				
	// get door meshes	and wall to create action managers		
					var aDoor01 = myScene.getMeshByName("aDoor1");
					var aDoor03 = myScene.getMeshByName("aDoor3");
					var aDoor04 = myScene.getMeshByName("aDoor4");
					var aDoor05= myScene.getMeshByName("aDoor5");
					aDoor05.isPickable = false;
					var theWall5= myScene.getMeshByName("walls_door5");
					theWall5.isPickable = false;
					//var hidden =1;
					
					
					
	// create an action manager to oopen door 01 click		
					aDoor01.actionManager = new BABYLON.ActionManager(myScene);
					aDoor01.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("Door1 Action Manager trigger");
						if(keys[2] === 1){
						aDoor01.isPickable = false;
						sceneNum = sceneNum + 1;
						let animation1 = myScene.beginAnimation(aDoor01, 0, 40, false, 0.5);
						theDoor.play();
						theDoor.onended = function(){
							document.getElementById("Keys").style.display = "none";
							deleteWorld();
							createScene();
						}}
						else {
							divWords.innerHTML = "You need the proper key";
							document.getElementById("words").style.display = "block";
							const myTimeout = setTimeout(clearInfo, 5000);
						}
					}));
					
					
	// create an action manager to open door 03		
					aDoor03.actionManager = new BABYLON.ActionManager(myScene);
					aDoor03.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("Door3 Action Manager trigger");
						let animation1 = myScene.beginAnimation(aDoor03, 0, 40, false, 0.5);
						theDoor.play();
					}));
					
	// create an action manager to open door 04		
					aDoor04.actionManager = new BABYLON.ActionManager(myScene);
					aDoor04.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("Door4 Action Manager trigger");
						aDoor04.isPickable = false;
						let animation1 = myScene.beginAnimation(aDoor04, 0, 40, false, 0.5);
						theDoor.play();
					}));
					
	// create an action manager to open door 05		
					aDoor05.actionManager = new BABYLON.ActionManager(myScene);
					aDoor05.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("Door5 Action Manager trigger");
						if(hidden === 1){
							console.log("reached");
							//door5Parent.position = new BABYLON.Vector3(32.0003, 1.93, 1.697);
							aDoor05.isPickable = false;
							let animation1 = myScene.beginAnimation(aDoor05, 0, 40, false, 0.5);
							theDoor.play();
						}
					}));
					
	// create an action manager to lift wall
					theWall5.actionManager = new BABYLON.ActionManager(myScene);
					theWall5.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("Wall5 Action Manager trigger");
						//if(hidden === 1){
							theGear.play();
							//console.log("reached");
							aDoor05.isPickable = true;
							let animation1 = myScene.beginAnimation(theWall5, 0, 40, false, 0.5);
							
						//}
					}));
	
	
					
	// create an action manager to pick up key00			
					var aKey0 = myScene.getMeshByName("key00");
					
					aKey0.actionManager = new BABYLON.ActionManager(myScene);
					aKey0.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						
						//console.log("You have " + numKeys + " keys");
						keys[0] = 1;
						//console.log(keys);
						console.log("aKey0 Clicked");
						if(numKeys ===0){
							divWords.innerHTML = "You find a key";
							numKeys++;
							divKeys.innerHTML = "You have " + numKeys + " key";
						}
						else {
							divWords.innerHTML = "And another key";
							numKeys++;
							divKeys.innerHTML = "You have " + numKeys + " keys";
						}
						
						aKey0.setEnabled(false);
	// set tab in the menu
						if(isOpen1 ===1){items[1].setEnabled(false);}
						//items[1].setEnabled(false);
						items[1].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[1]);
	// make secret door "pickable"			
						theWall5.isPickable = true;
						document.getElementById("words").style.display = "block";
						document.getElementById("Keys").style.display = "block";
						
						const myTimeout = setTimeout(clearInfo, 5000);
					}));
					
					
	// create an action manager to pick up key01		
					var aKey1 = myScene.getMeshByName("key01");
				
					aKey1.actionManager = new BABYLON.ActionManager(myScene);
					aKey1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						console.log("You have " + numKeys + " keys");
						keys[1] = 1;
						//console.log(keys);
						console.log("aKey1 Clicked");
						if(numKeys ===0){
							divWords.innerHTML = "You find a key";
							numKeys++;
							divKeys.innerHTML = "You have " + numKeys + " key";
						}
						else {
							divWords.innerHTML = "And another key";
							numKeys++;
							divKeys.innerHTML = "You have " + numKeys + " keys";
						}
						
						aKey1.setEnabled(false);
	// set tab in the menu
						items[2].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[2]);
						if(isOpen1 ===1){items[2].setEnabled(false);}
						
						document.getElementById("words").style.display = "block";
						document.getElementById("Keys").style.display = "block";
						
						const myTimeout = setTimeout(clearInfo, 5000);
						
					}));
					
	// create an action manager to pick up key02
					var aKey2 = myScene.getMeshByName("key02");
					
					aKey2.actionManager = new BABYLON.ActionManager(myScene);
					aKey2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
						//console.log("You have " + numKeys + " keys");
						keys[2] = 1;
						//console.log(keys);
						console.log("aKey2 Clicked");
						//divKeys.innerHTML = "You have " + numKeys + " keys";
						if(numKeys ===0){
							divWords.innerHTML = "You find a key";
							numKeys++;
							divKeys.innerHTML = "You have " + numKeys + " key";
						}
						else {
							divWords.innerHTML = "And yet another key";
							numKeys++;
							divKeys.innerHTML = "You have " + numKeys + " keys";
						}
	// set tab in the menu			
						aKey2.setEnabled(false);
						
						if(isOpen1 ===0){items[3].setEnabled(false);}
						
						items[3].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[3]);
						
						//numKeys++;
						//divKeys.innerHTML = "You have " + numKeys + " keys";
						document.getElementById("words").style.display = "block";
						document.getElementById("Keys").style.display = "block";
						
						const myTimeout = setTimeout(clearInfo, 5000);
						
					}));
					
				
					
					myScene.activeCamera.attachControl(canvas);
			
	// give the lantern a glow		
					var theGlass = myScene.getMeshByName("glass");
					
					const hl = new BABYLON.HighlightLayer("hl1", myScene);
					hl.intensity = 4;
					hl.addMesh(theGlass, BABYLON.Color3.Yellow());
				
					//console.log("This Scene is " + (sceneNum +1));
					
	// data on meshes sent to console
					allMeshes = myScene.meshes;
					
			//calculate and display total vertices and meshes			
					let vertTotal = 0;
					allMeshes = myScene.meshes;
					//divAllMeshs.innerHTML = allMeshes.length + " Total meshes";
					for (var i=0; i<allMeshes.length; i++){
						if (allMeshes[i].getTotalVertices() > 0){
							vertTotal = vertTotal + allMeshes[i].getTotalVertices()
						}
					}
					divAllMeshs.innerHTML = allMeshes.length + " Total meshes";
					divVerts.innerHTML = vertTotal + " Total vertices";
					
	// load sound for scene 2		
					createSound2();
					
	// create GUI for images
	
					const adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

					panel = new BABYLON.GUI.StackPanel();
					panel.width = "220px";
					panel.top = "-25px";
					panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
					panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
					panel.isVisible = false;
					adt.addControl(panel);

					const header = new BABYLON.GUI.TextBlock();
					header.text = "Lighten Scene";
					header.height = "30px";
					header.color = "white";
					//header.isVisible  = false;
					//header.isEnabled = false;
					panel.addControl(header);
					//header.isEnabled = false;

					const slider = new BABYLON.GUI.Slider();
					slider.minimum = 0;
					slider.maximum = 1;
					slider.borderColor = "black";
					slider.color = "gray";
					slider.background = "white";
					slider.value = 1;
					slider.height = "20px";
					slider.width = "200px";
					//slider.isEnabled = false;
					slider.onValueChangedObservable.add((value) => {
						if (Light0) {
							Light0.intensity = value;
							console.log(value);
							console.log("Intensity = " + Light0.intensity);
							Light1.intensity = value/3;
							console.log("Intensity1 = " + Light1.intensity);
						}
					});
					panel.addControl(slider);
									 
					//var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
/*
					var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "scene02/textures/map01.jpg");
					button.width = "256px";
					button.height = "256px";
					//button.cornerRadius = 1;
					button.thickness = 10;
					//button.top = "200px";
					button.left = "-50px";
					button.color = "black";
					button.background = "black";
					button.isVisible =false;
					button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
					button.onPointerUpObservable.add(function() {
						button.isVisible =false;
						//theLamp.position.y = theLamp.position.y -0.5;
						//theLamp.position.z =  -0.25// theLamp.position.z - 0.5;
						//console.log("Y = " + theLamp.position.y);
						//console.log("Z + " + theLamp.position.z);
						
						
					});
					advancedTexture.addControl(button);    
*/	
				}) // end executeWhenReady
				
				
				function clearInfo() {
					//document.getElementById("demo").innerHTML = "Happy Birthday!"
					document.getElementById("words").style.display = "none";
				}
				
	//function to create menu			
				function drawMenu(myScene){
		
					let allItems = myScene.getMeshByName("allitems");
					items = allItems.getChildren();
					//console.log("Cards =" + items.length);
					//allCards.reverse();
					for(i=0; i<(items.length); i++){
						//allCards[i].setEnabled(false);
						uvArray[i] = items[i].getVerticesData(BABYLON.VertexBuffer.UVKind);
						//console.log(uvArray);
						items[i].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);
					
						items[i].parent = myCamera2;
						items[i].position.y = items[i].position.y -0.01;
						items[i].setEnabled(false);
						
						isOpen1 = 1;
						
						
		//				console.log(items[i].name);
					};
		/*			
					for(i=0; i<uvArray.length; i++){
						console.log(uvArray[i]);
					};
		*/			
					
					items[0].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[0]);
					
					allBack = myScene.getMeshByName("background");
					menuDeck = allBack.getChildren();
					for(i=0; i<menuDeck.length; i++){
						//console.log(menuDeck[i].name);
						menuDeck[i].parent = myCamera2;
						menuDeck[i].position.y = menuDeck[i].position.y -0.01;
					};
					
					menuDeck[0].setEnabled(false);
					
				
					var openPack = function(){
						
						//console.log("back pack clicked");
						//console.log(isOpen1);
						
						if(isOpen1 === 0){
						
							for (i = 0; i < (items.length); i++){
								items[i].setEnabled(false);
							};
							menuDeck[0].setEnabled(false);
							isOpen1 = 1;
						}
						else{
							for (i = 0; i < (items.length); i++){
									items[i].setEnabled(true);
									
							};
							menuDeck[0].setEnabled(true);
							isOpen1 = 0;
						}
					
					
					};
					
					var openBPack = function(mesh1) {
								
					// events done in sequence 
						mesh1.actionManager = new BABYLON.ActionManager(myScene);
						mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, openPack))
					};
		
		
		
	
					openBPack(menuDeck[2]);
					//end open close backpack
				
				};
				
};