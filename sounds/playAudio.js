var playThemAll = new Howl({  
	urls: ['6sounds.mp3'],
	autoplay: false,  
	loop: false, 
	volume: 1,
	
	onplay: function(){
		theCubes[0].isPickable = false;
	},
	
	onend: function() {
		theCubes[0].isPickable = true;
	}
	
});


/*
var playAll = new Howl({  
		urls: ['6sounds.mp3'],
		autoplay: false,  
		loop: false, 
		volume: 1,
		
		onplay: function(){},
		
		onend: function() {
		theCubes[0].isPickable = true;
		ended = 1;
		
		}
		
	});
*/
var theSound = new Howl({  
		urls: ['6sounds.mp3'],
		
		autoplay: false,  
		loop: false, 
		volume: 1,
		
		onplay: function(){},
		
		onend:  function() {
		if(ended === 1){
			theSound.play(3);
			ended = 0;
		}
		else {
		//playAll.play();
		}
		
		},
		
		
		sprite: {
			1: [0, 4824],
			2: [5000, 6552],
			3: [12000, 1600],
			4: [14000, 8748],
			5: [23000, 7848],
			6: [31000, 2800]
		}
		
		
		});








