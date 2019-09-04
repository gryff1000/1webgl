var soundsReady = 0;
var theVolume = 0.5;

function createAudio(){

	theVoice = new BABYLON.Sound("theVoice", "voice.mp3", myScene, soundReady, { loop: false, autoplay: false, volume: theVolume  });

	function soundReady() {
			soundsReady++;
			if(soundsReady > 0){
			
				
			};
			
			theVoice.onended = function(){
				console.log("ended");
					//for (i=0; i < 1000000; i++){
						//stopMotion();
					//};
			};//theSounds ended
	};
};