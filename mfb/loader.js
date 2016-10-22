
// The babylon engine
var engine;
// The current scene
var myScene;
// The HTML canvas
var canvas;

var sceneNum = 0;
var divText;

var isMobile;

window.onload = function () {
	
    // Check support
    if (!BABYLON.Engine.isSupported()) {
        window.alert('Browser not supported');
    } 
	else {
        // Babylon is supported
		
		canvas = document.getElementById("renderCanvas");
        engine = new BABYLON.Engine(canvas, true);
		myScene = new BABYLON.Scene(engine);
		divFps = document.getElementById("fps");
		divText = document.getElementById("credits");
		
		isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};
		
		
		
		
		
		
		
		createWorld();
		
//------------------------actions-----------------------------------------------------------		

    // Resize window
		
		window.addEventListener("resize", function () {
			engine.resize();
		});
		
	
		window.addEventListener("keyup", onKeyUp);
		   
		   
			function onKeyUp(event) {
				
				switch (event.keyCode) {
					
						
					case 85 : //'u'
						if(theVolume < 0.94) theVolume = theVolume + 0.1;
						Howler.volume(theVolume);
						console.log(theVolume);
						break;
						
					case 68 : //'d'
						if(theVolume > 0.07) theVolume = theVolume - 0.1;
						Howler.volume(theVolume); 
						console.log(theVolume);
					   break;
					   
					default: 
						break;
				}
				
			}
			
		myScene.onDispose = function () {
			canvas.removeEventListener("keyup", onKeyUp);
		}
		

    }

};

