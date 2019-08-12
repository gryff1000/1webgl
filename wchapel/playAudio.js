var soundsReady = 0;
var theVolume = 0.7;
var played = 0;
var soundArray;

function createAudio(){

	/* offset and length values for various sounds in file in seconds - old was milliseconds
	church bell : 0, 5.000
	foghorn : 5.100, 6.600
	scream : 12.000, 1.600
	manwalk : 14.000, 9.200
	womanwalk : 23.000, 7.900
	door : 31.000, 2.800
	hello : 34.500, 2.700
	horse1 : 37.500, 6.650
	horse2 : 44.500, 7.000
*/

	soundArray = [
	  [0.0, 5.000],
	  [5.100, 6.600],
	  [12.000, 1.600],
	  [14.000, 9.200],
	  [23.000, 7.900],
	  [31.000, 2.800],
	  [34.500,2.700],
	  [37.500,6.650],
	  [44.500,7.000],
	];
	
	//console.log(soundArray[0][0] + "  " + soundArray[0][1]);

	theStart = new BABYLON.Sound("theStart", "start.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	thePolly = new BABYLON.Sound("thePolly", "polly_nichols1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	thePoison = new BABYLON.Sound("thePoison", "arsenic1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theTumble = new BABYLON.Sound("theTumble", "tumblety1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theSounds = new BABYLON.Sound("theSounds", "9sounds.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theMusic =  new BABYLON.Sound("theMusic1", "singing1.mp3", myScene, soundReady, { loop: true, autoplay: false, volume: 0.20, spatialSound: true, distanceModel: "linear", maxDistance: 15});
	theMusic2 =  new BABYLON.Sound("theMusic2", "singing2.mp3", myScene, soundReady, { loop: true, autoplay: false, volume: 0.20, spatialSound: true, distanceModel: "linear", maxDistance: 15});
	theEnding = new BABYLON.Sound("theEnd", "ending1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theStreets = new BABYLON.Sound("theStreets", "streets1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theMerrick = new BABYLON.Sound("theMerrick", "merrick1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theStride = new BABYLON.Sound("theStride", "stride1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theMjk = new BABYLON.Sound("theMjk", "mjk1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theEddowes = new BABYLON.Sound("theEddowes", "eddowes1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theChapman = new BABYLON.Sound("theChapman", "chapman1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	
	
	function soundReady() {
        soundsReady++;
		if(soundsReady > 13){
		
			//createAudio2();
		
			aButton.setEnabled(true);
			aButton.isPickable = true;
			//console.log(soundsReady);
			
			var thePub = myScene.getMeshByName("Trigger02");	
			theMusic.setPosition(new BABYLON.Vector3(56, 0, 48));
			theMusic2.setPosition(new BABYLON.Vector3(6, 0, -9));
			//console.log(theMusic.getPosition);
			//theMusic.attachToMesh(thePub);
			//theMusic.maxDistance = 10;
			theMusic.play();
			theMusic2.play();
			//theStart.play();
			//theSounds.play(1,14.0,9.2);
			//theSounds.play(0, soundArray[0][0], soundArray[0][1]);
			//console.log(soundArray[0][0] + "  " + soundArray[0][1]);
			//console.log("sounds ready = " + soundsReady);
		}
		
	// set the fog, and change active camera	
		theStart.onended = function(){
			myScene.clearColor = new BABYLON.Color3(.0509,0.0509,0.0509);
			myScene.fogDensity = .1;
			myScene.fogColor = new BABYLON.Color3(.0509,0.0509,0.0509);
			myScene.activeCamera = myCamera2;
			theSounds.play(0,14,9.2);
			
			myScene.beginAnimation(aMerrick, 0, 40, false, 2,function() {
				//console.log("Animation ended");
				myCamera2.attachControl(canvas, true);
	// move and hide  merrick after animation			
				aMerrick.position = new BABYLON.Vector3(-24.5168,0.25,49.4593);
				aMerrick.rotation.y = 0;
				allMerrick = aMerrick.getChildren();
				for (i=0; i<allMerrick.length; i++){
					allMerrick[i].setEnabled(false);
				};
			});
		};//start ended
	
	// make icons pickable after end of polly
		thePolly.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};
		}
	// make icons pickable after end of arsenic
		thePoison.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};
		};
		
		//make icons pickable after end of theTumble
		theTumble.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};

		};
		
		//make icons pickable after end of theMerrick
		theMerrick.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};

		};
		
		//make icons pickable after end of theStride
		theStride.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};

		};
		
		//make icons pickable after end of theMjk
		theMjk.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};

		};
		
		//make icons pickable after end of theEddowes
		theEddowes.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};

		};
		
		//make icons pickable after end of theEddowes
		theChapman.onended = function(){
			//console.log(isComplete);
			if (isComplete > 7){
				theEnding.play(5);
			}
			else {
				for(i =0; i < items.length; i++){
					items[i].isPickable = true;
				};
			//checkEnd() 
			};

		};
		
		// make icons pickable after end of dialogs
		theEnding.onended = function(){
			//console.log(isComplete);
			for(i=0; i < items.length; i++){
				items[i].isPickable = true;
			};
			
			for(i=0; i < theSigns.length; i++){
				theSigns[i].isPickable = true; 
			}
			
			aButton.setEnabled(true);
			myScene.activeCamera = startCamera;
			myScene.clearColor = new BABYLON.Color3(0.0,0.0,0.0);
			myScene.fogDensity = 0.0;
			myScene.fogColor = new BABYLON.Color3(0.0,0.0,0.0);
			myCamera2.position = new BABYLON.Vector3(-15.0,1.7,0.0);
			myCamera2.rotation.y = Math.PI/2;
			for (i = 1; i < items.length; i++){
				uvArray[i] = items[i].getVerticesData(BABYLON.VertexBuffer.UVKind);
				//console.log(uvArray);
				items[i].setVerticesData(BABYLON.VertexBuffer.UVKind, uvZero);
				items[i].setEnabled(true);
				items[i].isPickable = false;
				//items[i].parent = myCamera2;
			};
			//items[0].setVerticesData(BABYLON.VertexBuffer.UVKind, uvArray[0]);
			//items[0].isPickable = true;
			isComplete = 1;
			
			var bottle = myScene.getMeshByName("object06");
			bottle.setEnabled(true);
			var card = myScene.getMeshByName("object05");
			card.setEnabled(true);
			
			// ******************Need to add here*************************************************
			// *****************Change the camsensor target back for Target 3 ********************
			// *****************otherwise Merrick will not appear again **************************
			/*
			camSensor.actionManager.registerAction(inAction2);
			camSensor.actionManager.registerAction(outAction2);	
			camSensor.actionManager.registerAction(inAction3);	
			
			myScene.beginAnimation(aMerrick, 0, 40, false, 2,function() {
				//console.log("Animation ended");
				myCamera2.attachControl(canvas, true);
				// move and hide  merrick after animation			
				aMerrick.position = new BABYLON.Vector3(-24.5168,0.25,49.4593);
				aMerrick.rotation.y = 0;
				allMerrick = aMerrick.getChildren();
				for (i=0; i<allMerrick.length; i++){
					allMerrick[i].setEnabled(false);
				};
			});
			*/
			//drawMenu(myScene);
			//createWorld();
			//if (isComplete > 7) theEnding.play();
		};
		
	
	}; //end soundReady

}; //end createAudio


