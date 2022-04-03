// scene parameters
	//babylon
	var camSensor;
	var theCamera;
	var scene;
	var mat1b, mat1r, mat1g;
	
	//div tags
	var el;
	var win; 
	
	//door & gate data
	var nextColour = ["RED", "BLUE"];
	var positionsb = [-59.9937,0,13.4698,-35.9986,0,16.0705,-46.7542,0,-23.9898,-20.024,0,0.0103,-12.0169,0,-7.8548,11.9905,0,-29.4574,39.8731,0,-24.0029,54.6002,0,23.9948];
	var rotationsb = [0,0,0,0,0,0,0,-1.5708,0,0,-1.5708,0,0,0,0,0,0,0,0,-1.5708,0,0,-1.5708,0];
	var positionsr = [-60,0,-29.6,-19.952,0,23.9998,-44.13,0,0.0064,-12.0168,0,16.1219,11.995,0,-7.8636,27.7924,0,0.0129,59.9895,0,-10.5624];
	var rotationsr = [0,0,0,0,-1.5708,0,0,-1.5708,0,0,-0,0,0,0,0,0,-1.5708,0,0,0,0];
	var bdoors = ["bd0","bd1","bd2","bd3","bd4","bd5","bd6","bd7"];
	var rdoors = ["rd0","rd1","rd2","rd3","rd4","rd5","rd6"];
	var gateCount;
	


window.onload = function () {

    var canvas = document.getElementById("renderCanvas");
	var divFPS = document.getElementById("fps");
	var divOutput = document.getElementById("output");

	el = document.getElementById("item");
	el.style.display ='none';
	
	el2 = document.getElementById("win");
	el2.style.display ='none';
	
	gateCount = 0;
	
    // Check support
    if (!BABYLON.Engine.isSupported()) {
        window.alert('Browser not supported');
    } else {
        // Babylon
        var engine = new BABYLON.Engine(canvas, true);
		
        // --------------------
        scene = createScene(engine);
        // --------------------

        
			
        };

		function onKeyUp(evt) {
    //var currentEnding = -1;
    switch (evt.keyCode) {
        case 77 : //'M'
		//var el = document.getElementById("item");
            if ( el.style.display === 'none' ) {
				el.style.display = 'block';
			}
			else  {el.style.display = 'none';}
			break;
			
        case 90 : //'Z'
            //currentEnding = 1;
            break;
			
        case 69 : //'E'
            //currentEnding = 2;
            break;
    }
	}	
		
		
        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
		
		//add KB listener
		window.addEventListener("keyup", onKeyUp);
		
		
		
		
    }






