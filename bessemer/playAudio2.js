var ended = 0;
var theVolume = 1;
var soundsReady = 0;
var id;


function createAudio(){
	
	opening = new Howl({
			urls: ['country1.mp3'],
			
			autoplay: false,
			loop: false,
			volume: theVolume,
			onload: function() {
				soundReady();
			},
			onplay: function() {
				openingPlay();
				myScene.beginAnimation(skeleton,1,60,true, 1);
				myCamera.useAutoRotationBehavior = true;
				myCamera.autoRotationBehavior.idleRotationSpeed = 0.12;
				//id = setInterval(setRot, 1875);
				
			},
			onend:  function() {
				openingEnd();
				//myScene.beginAnimation(skeleton,1,2,false, 1);
				//myCamera.useAutoRotationBehavior = false;
			},
	}); //end create howl function
	

	
	function soundReady() {
        soundsReady++;
		if(soundsReady === 1)opening.play();
	}

	function openingPlay(){
	
		myScene.beginAnimation(skeleton,1,60,true, 1);
		myCamera.useAutoRotationBehavior = true;
		//myCamera.autoRotationBehavior.idleRotationSpeed = 0.23;
		id = setInterval(setRot, 7500);
	
	}
	
	function openingEnd() {
		clearInterval(id);
		myScene.beginAnimation(skeleton,1,2,false, 1);
		myCamera.useAutoRotationBehavior = false;
		myScene.activeCamera.attachControl(canvas);
	}
	
	function setRot(){
		myCamera.autoRotationBehavior.idleRotationSpeed = -myCamera.autoRotationBehavior.idleRotationSpeed
		//console.log("switch");
	}
	
	
}; // end create audio