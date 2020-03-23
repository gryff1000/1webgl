var soundsReady = 0;
var theVolume = 0.7;
var played = 0;
var soundArray;
//var theStart, thePhone;

function createAudio(){

	
	theStart = new BABYLON.Sound("theStart", "silence5.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	
	//theIntro = new BABYLON.Sound("theIntro", "intro.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });

	thePhone = new BABYLON.Sound("thePhone", "sg_talk04b.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });
	
	
	
	function soundReady() {
        soundsReady++;
		if(soundsReady > 2){
		
			theStart.play();
			//console.log("sounds ready = " + soundsReady);
		}
		
		
		theStart.onended = function(){
			//console.log("start ended");
			//audioFlag = 0;
			//theMonitor.isPickable = true;
			if (audioFlag === 1 ) {
				theIntro.play();
			}
			else {
				
			 theMonitor.isPickable = false;
			 audioFlag = 0;
			 thePhone.play();
			 theScreen.diffuseTexture.uOffset = 0.063;
				
			}
			
		};
		
		theIntro.onended = function(){
			audioFlag = 0;
			theMonitor.isPickable = true;
			
			
		};
		
		thePhone.onended = function(){
			
		theScreen.diffuseTexture.uOffset = 0.0;
		
		console.log("ended");
		audioFlag = 0;
		theMonitor.isPickable = true;
		divCredits.innerHTML = "So what now, I wonder? To The Fleshmarket Close?";
	};

		

	

	};

};
