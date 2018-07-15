var anthem, talk;


//1.  anthem
anthem = new Howl({
			urls: ['us_anthem2.mp3'],
			autoplay: true,
			loop: false,
			volume: theVolume,
			
			onload: function() {
				//soundLoad();
			},
			
			
			onplay: function() {
				//myScene.beginAnimation(skeleton,1,60,false, 1);
			},
			onend:  function() {
				ended = 1;
				talk.play();
			},
});

// fake news
talk = new Howl({  
		urls: ['kneel_disgrace3.mp3'],
		autoplay: false,  
		loop: false, 
		volume: theVolume,
		
		onload: function() {},
		onplay: function(){
			myScene.beginAnimation(skeleton,61,120,false, 1);
		},
		
		onend:  function() {
			if(ended === 1){
				ended = 2;
			}
			else{
			}
		
		},
		
});

