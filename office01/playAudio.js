var soundsReady = 0;
var theVolume = 0.7;
var played = 0;
var soundArray;
//var theStart, thePhone;

function createAudio(){

/*
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
*/	
	//console.log(soundArray[0][0] + "  " + soundArray[0][1]);
	
	theStart = new BABYLON.Sound("theStart", "gunshot1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });

	thePhone = new BABYLON.Sound("thePhone", "sg_talk04b.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	
	
	/*
	thePolly = new BABYLON.Sound("thePolly", "polly_nichols1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	thePoison = new BABYLON.Sound("thePoison", "arsenic1.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theSounds = new BABYLON.Sound("theSounds", "9sounds.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	theMusic =  new BABYLON.Sound("theMusic", "singing1.mp3", myScene, soundReady, { loop: true, autoplay: false, volume: 0.20, spatialSound: true, distanceModel: "linear", maxDistance: 20});
	theMusic2 =  new BABYLON.Sound("theMusic", "singing2.mp3", myScene, soundReady, { loop: true, autoplay: false, volume: 0.20, spatialSound: true, distanceModel: "linear", maxDistance: 20});
	*/
/* offset and length values for various sounds in file in milliseconds
	church bell : 0, 5000
	foghorn : 5100, 6600
	scream : 12000, 1600
	manwalk : 14000, 9200
	womanwalk : 23000, 7900
	door : 31000, 2800
*/


/*
	take1 = new BABYLON.Sound("take1", "mfb1b.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	clap1 = new BABYLON.Sound("clap1", "clap1.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	music = new BABYLON.Sound("music", "intro_mfb2.mp3", myScene, soundReady, { loop: false, volume: theVolume });
	ooh =new BABYLON.Sound("ooh", "ooo3.mp3", myScene, soundReady, { loop: false, volume: theVolume });
	cut = new BABYLON.Sound("cut", "cut3.mp3", myScene, soundReady, { loop: false, volume: theVolume });
	take2 = new BABYLON.Sound("take2", "mfb2b.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	clap2 = new BABYLON.Sound("clap2", "clap2.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	talk = new BABYLON.Sound("dktalk", "dklines2.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
*/	
	
	
	function soundReady() {
        soundsReady++;
		if(soundsReady > 1){
		
		//aButton.setEnabled(true);
		//aButton.isPickable = true;
		//console.log("entered");
		
		//var thePub = myScene.getMeshByName("Trigger02");	
		//theMusic.setPosition(new BABYLON.Vector3(56, 0, 48));
		//theMusic2.setPosition(new BABYLON.Vector3(6, 0, -9));
		//console.log(theMusic.getPosition);
		//theMusic.attachToMesh(thePub);
		//theMusic.maxDistance = 10;
		//theMusic.play();
		//theMusic2.play();
		theStart.play();
		//theSounds.play(1,14.0,9.2);
		//theSounds.play(0, soundArray[0][0], soundArray[0][1]);
		//console.log(soundArray[0][0] + "  " + soundArray[0][1]);
		console.log("sounds ready = " + soundsReady);
		}
		
		
	thePhone.onended = function(){
		//myScene.clearColor = new BABYLON.Color3(.0509,0.0509,0.0509);
		//myScene.fogDensity = .03;
		//myScene.fogColor = new BABYLON.Color3(.0509,0.0509,0.0509);
		//myScene.activeCamera = myCamera2;
		console.log("ended");
	};

		
/*		
	theSounds.onended = function(){
		//theSounds.play(15,14.0,9.2);
		if(played === 0){
			played = 1;
			var aRand0 = Math.floor(Math.random() * 9)
			var aRand1 = Math.floor(Math.random() * 10)
			console.log(aRand0)
			theSounds.play(aRand1,soundArray[aRand0][0], soundArray[aRand0][1]);
		}	
		else {
			//theSounds.play();
			//setCamera(1);
			console.log("played = " + played);
			//played =1;
		
		}
	};
	
*/	
	
/*	
	take1.onended = function(){
		setCamera(2);
	};
	
	clap1.onended = function(){
		setCamera(4);
	};
	
	music.onended = function(){
		//music2.setVolume(.1);
		setCamera(4);
		//divText.style.display = 'none';
		//music.play();
	};
	
	ooh.onended = function(){
		setCamera(5);
	};	
	
	cut.onended = function(){
		setCamera(6);
	};	
	
	take2.onended = function(){
		setCamera(7);
	};
	
	clap2.onended = function(){
		takes = 2;
		setCamera(8);
	};
	
	talk.onended = function(){
		divFps.innerHTML = 0;
		setCamera(0);//ended = 0;
		aButton.setEnabled(true);
	};
}
	
} // end create audio


function setCamera(k){

	switch (k) {
	
		case 0:
			// start:restart camera
			myScene.activeCamera = myCamera0;
			myScene.beginAnimation(theclap, 1, 2, false, 1);
			break;
		
		case 1: 
			// take1 play
			myScene.activeCamera = myCamera1;
			aCBoard.diffuseTexture.vOffset = 0;
			takes = 1;
			take1.play();
			break;
		
		
		case 2: 
			// clap1 play camera same as case1
			aCBoard.diffuseTexture.vOffset = 0;
			takes = 1;
			clap1.play();
			myScene.beginAnimation(theclap, 1, 31, false, 1);
			break;
		
		case 3:
			// start:restart camera, set clap for take 2
			myScene.activeCamera = myCamera0;
			myScene.beginAnimation(theclap, 1, 2, false, 1);
			aCBoard.diffuseTexture.vOffset = .5;
			//divText.style.display = 'block';
			music.play();
			break;
			
		case 4:
			//first dk animation
			myScene.activeCamera = myCamera2;
			//setScene();
			aCBoard.diffuseTexture.vOffset = .5;
			ooh.play();
			myScene.beginAnimation(skeleton, 5, 135, false, 1);
			break;
			
		case 5:
			//jump to director cut!!
			myScene.activeCamera = myCamera0;
			myScene.beginAnimation(theclap, 1, 2, false, 1);
			cut.play();
			break;
			
		case 6:
			// take2.play
			myScene.activeCamera = myCamera1;
			take2.play();
			break;
			
		case 7:// animate clapboard again camera same as Case 6
			takes = 2;
			clap2.play();
			myScene.beginAnimation(theclap, 1, 31, false, 1);
			break;	
		
		case 8:
			//hide melon, and call dk talk animation
			aMelon.setEnabled(false);
			myScene.activeCamera = myCamera2;
			myCamera2.attachControl(canvas, true);
			//setScene();
			talk.play();
			myScene.beginAnimation(skeleton, 173, 723, false, 1);
			break;	
		/*	
		case 9:	//don't need next two cases? 
			myScene.beginAnimation(skeleton, 170, 173, false, 1);
			aMelon.setEnabled(false);
			ended = 1;
			aCBoard.diffuseTexture.vOffset = .5;
			myScene.activeCamera = myCamera1;
			mfb2.play('1');
			break;
			
		case 10:	
			aMelon.setEnabled(false);
			//setCamera(2);
			myScene.activeCamera = myCamera2;
			talk.play();
			myScene.beginAnimation(skeleton, 173, 732, false, 1);
			//console.log(aButton);
			break;
		*/			
	};

};
