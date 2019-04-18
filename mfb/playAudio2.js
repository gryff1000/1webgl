function createAudio(){


	start = new BABYLON.Sound("start", "start2.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	take1 = new BABYLON.Sound("take1", "mfb1b.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	clap1 = new BABYLON.Sound("clap1", "clap1.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	music = new BABYLON.Sound("music", "intro_mfb2.mp3", myScene, soundReady, { loop: false, volume: theVolume });
	ooh =new BABYLON.Sound("ooh", "ooo3.mp3", myScene, soundReady, { loop: false, volume: theVolume });
	cut = new BABYLON.Sound("cut", "cut3.mp3", myScene, soundReady, { loop: false, volume: theVolume });
	take2 = new BABYLON.Sound("take2", "mfb2b.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	clap2 = new BABYLON.Sound("clap2", "clap2.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	talk = new BABYLON.Sound("dktalk", "dklines2.mp3", myScene, soundReady, { loop: false, volume: theVolume  });
	
	function soundReady() {
        soundsReady++;
		
		
	start.onended = function(){
		setCamera(1);
	};
	
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
			myScene.beginAnimation(theclap, 2, 31, false, 1);
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
			myScene.beginAnimation(theclap, 2, 30, false, 1);
			break;	
		
		case 8:
			//hide melon, and call dk talk animation
			aMelon.setEnabled(false);
			myScene.activeCamera = myCamera2;
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
