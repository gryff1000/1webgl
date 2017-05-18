var text = ["I do not understand what happened","I was at the old stone circle on that wild hill, and my world twisted, cracked ...", "And I fell into the crevasse. "];
var talk;

//play start music and credit MacLeod
function playTalk(object){
		talk = document.getElementById("words");
		var linenum = 0;
		// play music
		talk.innerHTML = 'Music by Kevin Macleod @ incompetech.com';
		talk.style.display = 'block';
		var piano = new Howl({
			urls: ['piano1.mp3'],
			autoplay: false,
			loop: false,
			volume: 0.6,
			
			onload: function() {
				piano.play();
				book.isVisible = true;
			},
			
			
			onend: function() {
				dialog.play('line0');
				//open the book
				myScene.beginAnimation(mySkeleton[0], 61, 90, false, 0.5);
			}
		});
		
		
		//piano.play();
		//book.isVisible = true;
		
		
		
		
		//play dialog
		var dialog = new Howl({  
		urls: ['open2.mp3'],
		volume: 0.3,
		loop: false,
		autoplay: false,
		
		onend: function() {
			switch(linenum) {
			
				case 0 :
					dialog.play('line1');
					linenum = 1;
					talk.style.display = 'block';
					talk.innerHTML = text[0];
					//book.isVisible = true;
					//myScene.beginAnimation(mySkeleton[0], 32, 64, false, 1.0);
					break;
			
				case 1 :
					dialog.play('line2');
					linenum = 2;
					talk.innerHTML = text[1];
					break;
					
				case 2 :
					myScene.setActiveCameraByName("Camera0");
					myScene.beginAnimation(object, 0, 120, 2.0)
					talk.innerHTML = text[2];
					linenum = 3;
					dialog.play('line3');
						
					//gameCam = myScene.getCameraByName("Camera0");
					break;
					
				case 3 :
					myScene.setActiveCameraByName("cameraZ");
					dialog.play('line4');
					dialog.stop();
					talk.style.display = 'none';
					object.isVisible = false;
					linenum = 0;
					
					
					
					playWind(2);
					break;
			} //end switch
			
		  }, //end onend function
		
		
		sprite: {
			line0: [18000, 200],
			line1: [15, 3985],
			line2: [4000, 10500],
			line3: [14600, 3500],
			line4: [18000, 200]
		}
		

		}); //end dialog Howl
		
		//dialog.play('line0');
		
} // end playTalk function








function playWind(maxRepeats){

	var repeats = 0;
			
	var sound = new Howl({  
		urls: ['windtunnel1_6x64secs.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 0.4,
		onend: function() {
			repeats = repeats +1;
			var level = Math.random()*0.75;
			sound.volume(level);
			if (repeats < maxRepeats) sound.play();
			else if(sceneNum == 0){
				myScene.setActiveCameraByName("cameraZ2");
				playGwyllt();
				
			}
		}
	});
	
	sound.play();
} //end playWind function

//play dog bark and myrddin words
function playGwyllt(){
	
	var gwyllt = new Howl({  
		urls: ['dog_myrddin.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 0.7,
		onplay: function(){
		talk.innerHTML = "Growl ...... Well, well, well, professor - you seek the gateway  - and that game - has just begun. ";
		talk.style.display = 'block';
		},
		onend: function() {
				myScene.setActiveCameraByName("cameraZ3");
				sceneNum = 1;
				createWorld();
				//talk.innerHTML = "reached";
				talk.style.display = 'none';
		}
	});
	
	gwyllt.play();
} //end dog bark and myrddin words




// play gate sounds
function playGate(){
	var gate = new Howl({  
		urls: ['gears1c.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 0.4,
		});
		
	gate.play();		
}

//play random wind sounds
function playRandom(){
	var random = new Howl({  
		urls: ['windtunnel1_6x64secs.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 0.5,
		onend: function() {
			var level = Math.random()*0.66;
			random.volume(level);
		}
		
		});
random.play();	
}

// old growl - keep for posterity
/*
function playGrowl(){
	var growl = new Howl({  
		urls: ['mygrowl1.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 0.3,
	});

	growl.play();		
}
*/

//creaky_door.mp3 played at end of scene 1
function playDoor(){
	var creak = new Howl({  
		urls: ['creaky_door.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 0.5,
			onend: function() {
				sceneNum = 2;
				createWorld();
			}
		
	});

	creak.play();		
}

// end creaky_door

//gwyllt again played at start of scene 2
function playExit(){		
	var exit = new Howl({  
		urls: ['gwyllt_exit1.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 0.15,
		onplay: function(){
			talk.innerHTML = "Well, professor - you have escaped this time - but you will be back!. ";
			talk.style.display = 'block';
		
		},
		onend: function() {
			talk.style.display = 'none';
		}
	});
	
	exit.play();
} //end playExit function


