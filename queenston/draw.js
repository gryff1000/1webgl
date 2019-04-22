// cannon smoke particle : http://babylonjs-playground.azurewebsites.net/#FTS2B#0
// cannon smoke particle2 : http://www.babylonjs-playground.com/#UGCZT#1


var allBarrows, allSarrows, allAarrows, allBoats, allNarrows, allRarrows; 
var counter = 10;
var interval;
var hilite


var setScene = function(){
	var theTrees = createTrees();
	var theArrows = hideArrows();
	var theBoats = hideBoats();
	var theMenu = createMenu();
	var theSoldiers = createSoldiers();
	//hilite.isVisible = true;
	//hilite.setEnabled(true);
	//hilite.isPickable = true;
	console.log(hilite.position);
};

function reSet(){
	
	var theBoats = hideBoats();
	var theSoldiers = createSoldiers();
	hilite.position = new BABYLON.Vector3(-7,10.0,25.99);
};

function createMenu(){

	//Creation of background buttons
	var plane1 = myScene.getMeshByName("buttons");
	plane1.position = new BABYLON.Vector3(0,10.0,26);
	plane1.parent = myCamera;
	plane1.isVisible = true;
	plane1.freezeWorldMatrix = true;
	plane1.isPickable = false;
	
	// create hiliter button
	hilite = myScene.getMeshByName("hiliter");
	hilite.position = new BABYLON.Vector3(-7,10.0,25.99);
	console.log(hilite.position);
	hilite.parent = myCamera;
	var matHilite = myScene.getMaterialByName("menu1.hilite");
	matHilite.alpha = 0.0;
	hilite.enableEdgesRendering(); 
	hilite.edgesWidth = 5.0;
	hilite.edgesColor = new BABYLON.Color4(0, 1, 0, 1); 
	hilite.parent = myCamera;
	hilite.isVisible = true;
	
	
	//------------end button setup-------------------
	
	
	var whichLine = 0;
	var butClick = 0;
	var clicks = 0;
	var delay;
	var actionNum;
	
	
	var clearDelay = function(){
		clearInterval(delay);
		hilite.isPickable = true;
		hilite.setEnabled(true);
		//console.log("reached");
	};
	
	var choose = function(){
		//console.log(text[clicks]);
		hilite.setEnabled(false);
		hilite.isPickable = false;
		var theTextline = text[clicks];
		var textFields = theTextline.split("~");
		//var theText = textFields[1];
		//console.log(theText);
		talk.innerHTML = textFields[1];
		//actionNum = parseInt(textFields[0]);
		
		//console.log(textFields[0].substring(0, 3));
		
		console.log(textFields[0].substring(0, 3));
		
		if(textFields[0] === "T0"){
		//console.log("reached2");
			//hilite.isPickable = false;
			//hilite.setEnabled(false);
			
			delay = setInterval(clearDelay, 5000);
		}
		
		
		if(textFields[0].substring(0, 3) === "MOV"){
		//console.log("reached3");
			//hilite.isPickable = false;
			//hilite.setEnabled(false);
			showNorton(textFields[0]);
			delay = setInterval(clearDelay, 5000);
		}
		
		
		if(textFields[0] < "9") {
			//hilite.isPickable = false;
			hilite.isPickable = false;
			actionNum = parseInt(textFields[0]);
			showBrock(actionNum,1);
			
			//delay = setInterval(clearDelay, 5000);
			
		}
		
		if(textFields[0] === "END") {
			reSet();
			butClick =0;
			clicks = 0;
			whichLine = 0;
			hilite.isPickable = true;
			hilite.setEnabled(true);
			theTextline = text[clicks];
			textFields = theTextline.split("~");
			talk.innerHTML = textFields[1];	
			
			
			//delay = setInterval(clearDelay, 5000);
			
		}
		
		talk.style.display = 'block';
		
		butClick = butClick + 1;
		clicks = clicks + 1;
		//delay = setInterval(clearDelay, 8000);
		//console.log(text[clicks]);
		if(butClick === lines[whichLine]){
			hilite.position.x = hilite.position.x + 2;
			whichLine = whichLine + 1;
			butClick = 0;
		}
	}
	
	
	
	var control = function(mesh1) {
							
		// events done in sequence 
			mesh1.actionManager = new BABYLON.ActionManager(myScene);
					
		// menu action
			mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, choose))
	}
	
	
	control(hilite);
	return;
};


//function showBrock(which, button){
function showBrock(which,button){
//console.log(which);
var theArrows = [];
var noClear = 0;

switch (which)

{

	case 0:
	
		theArrows = allAarrows;
		//console.log("arrows - " + theArrows.length);
		counter = theArrows.length -1;
		//talk.innerHTML = "Brock's Advance";
		talk.style.display = 'block';
		//console.log(counter);
		noClear = 1;
	
	break;
	
	case 1:
	
		theArrows = allBoats;
		//console.log("arrows - " + theArrows.length);
		counter = theArrows.length -1;
		//talk.innerHTML = "Brock's Advance";
		talk.style.display = 'block';
		//console.log(counter);
	
	break;
	
	case 2:
	
		theArrows = allAarrows;
		//console.log("arrows - " + theArrows.length);
		counter = theArrows.length -1;
		//talk.innerHTML = "Brock's Advance";
		talk.style.display = 'block';
		//console.log(counter);
	
	break;
	
	case 3:
		//var theArrows.length = 0;// clear the array
		theArrows = allBarrows;
		//console.log("arrows - " + theArrows.length);
		counter = theArrows.length -1;
		//talk.innerHTML = "Brock's Advance";
		talk.style.display = 'block';
		
		break;
		
	case 4:
		//var theArrows.length = 0;// clear the array
		theArrows = allRarrows;
		//console.log("arrows - " + theArrows.length);
		counter = theArrows.length -1;
		//talk.innerHTML = "Brock's Advance";
		talk.style.display = 'block';
		
		break;	
		
	case 5: 
		//var theArrows.length = 0;// clear the array
		theArrows = allNarrows;
		//console.log("arrows - " + theArrows.length);
		counter = theArrows.length -1;
		//talk.innerHTML = "Sheaffe's Advance";
		talk.style.display = 'block';
		break;
		
	case 6: 
		//var theArrows.length = 0;// clear the array
		theArrows = allSarrows;
		//console.log("arrows - " + theArrows.length);
		counter = theArrows.length -1;
		//talk.innerHTML = "Sheaffe's Advance";
		talk.style.display = 'block';
		break;
	case 9: 
		//var theArrows.length = 0;// clear the array
		//theArrows = allSarrows;
		//console.log("arrows - " + theArrows.length);
		//counter = theArrows.length -1;
		//talk.innerHTML = "Sheaffe's Advance";
		talk.style.display = 'block';
		break;
   
	default:
		break;
};

var showArrow = function () {
		//console.log(counter);
		//interval = 1500 * theArrows.length;
		hilite.isPickable = false;
		hilite.setEnabled(false);
	if (counter < 0){ 
		clearInterval(timer);
		hilite.isPickable = true;
		hilite.setEnabled(true);
		if (noClear === 0){
			for(i=0; i < theArrows.length; i++ )
			{
				theArrows[i].setEnabled(false);
			};
			noClear = 0
		};
			//talk.style.display = 'none';
			//button.isPickable = true;
			//counter = 9;
			var numSoldier = "MOV" + which;
			showNorton(numSoldier);
	}
	else {
		theArrows[counter].setEnabled(true);
		counter = counter - 1; 
	}
};

// Creates an arrow every 1.5 seconds
	var timer = setInterval(showArrow, 1500);

};



function showNorton(soldier){

switch (soldier)

{

	case "MOV0":
		var us_soldier1 = myScene.getMeshByName("usSvr");
		us_soldier1.setEnabled(true);
		us_soldier1.isVisible = true;
		//console.log("reached4");
	
		break;
		
	case "MOV1":
	
		break;
		
	case "MOV2":
		var us_soldier1 = myScene.getMeshByName("ussoldier00");
		us_soldier1.setEnabled(true);
		us_soldier1.isVisible = true;
		//console.log("reached4");
		break;	
		
	case "MOV3":
		var brock = myScene.getMeshByName("ukBrock1");
		brock.setEnabled(true);
		brock.isVisible = true;
		//console.log("reached4");
		
		break;
		
	case "MOV4":
		var wool = myScene.getMeshByName("ussoldier01");
		wool.setEnabled(true);
		wool.isVisible = true;
		//console.log("reached4");
		
		break;	
	
	case "MOV5":
		var norton = myScene.getMeshByName("mohawk");
		norton.setEnabled(true);
		norton.isVisible = true;
		//console.log("reached4");
		
		break;
	
	case "MOV6":
		var sheaffe = myScene.getMeshByName("ukSheaffe");
		sheaffe.setEnabled(true);
		sheaffe.isVisible = true;
		//console.log("reached4");
		
		break;
		
	case "MOV7":
		var lightcom = myScene.getMeshByName("uksoldier00");
		lightcom.position = new BABYLON.Vector3(1.4387,0.4197,-0.198);
		lightcom.rotation = new BABYLON.Vector3(0,1.5708,0);
		//sheaffe.isVisible = true;
		//console.log("reached4");
		
		break;
		
	case "MOV8":
		var lightcom = myScene.getMeshByName("uksoldier00");
		lightcom.position = new BABYLON.Vector3(0.7483,0.4197,-2.6421);
		lightcom.rotation = new BABYLON.Vector3(0,-3.1416,0);
		var grencom = myScene.getMeshByName("uksoldier01");
		grencom.position = new BABYLON.Vector3(1.0152,0.4197,-2.6421);
		grencom.rotation = new BABYLON.Vector3(0,-3.1416,0);
		//sheaffe.isVisible = true;
		//console.log("reached4");
		
		break;
		
	case 6: 
		
		break;
	case 9: 
		
		break;
   
	default:
		break;
};

}






// billboard the trees
function createTrees() {

var theRTree = myScene.getMeshByName("rtree52");
	//console.log(theRTree);
		var allRTrees =theRTree.instances;
		theRTree.billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y;
		for (i=0; i < allRTrees.length; i++){
		allRTrees[i].billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y; 
		}
		
		var theFTree = myScene.getMeshByName("ftree21");
		var allFTrees =theFTree.instances;
		theFTree.billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y;
		for (i=0; i < allFTrees.length; i++){
		allFTrees[i].billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y; 
		}
		
		var theYTree = myScene.getMeshByName("ytree18");
		var allYTrees =theYTree.instances;
		theYTree.billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y;
		for (i=0; i < allYTrees.length; i++){
		allYTrees[i].billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y; 
		}


};//end draw the trees

//hide the arrows
function hideArrows() {
	
	// brock arrows
	var bArrow = myScene.getMeshByName("b_arrow10");
	allBarrows = bArrow.instances;
	//console.log(allBarrows.length);
	bArrow.setEnabled(false);
	for (i=0; i < allBarrows.length; i++){
		allBarrows[i].setEnabled(false);
	}

	// hide sheaffe arrows
	var sArrow = myScene.getMeshByName("s_arrow14");
	allSarrows = sArrow.instances;
	//console.log(allBarrows.length);
	sArrow.setEnabled(false);
	for (i=0; i < allSarrows.length; i++){
		allSarrows[i].setEnabled(false);
	}

	
	// hide norton arrows
	var nArrow = myScene.getMeshByName("n_arrow14");
	allNarrows = nArrow.instances;
	//console.log(allBarrows.length);
	nArrow.setEnabled(false);
	for (i=0; i < allNarrows.length; i++){
		allNarrows[i].setEnabled(false);
	}
	
	// hide us attack arrows
	var aArrow = myScene.getMeshByName("us_arrow03");
	allAarrows = aArrow.instances;
	//console.log(allBarrows.length);
	aArrow.setEnabled(false);
	for (i=0; i < allAarrows.length; i++){
		allAarrows[i].setEnabled(false);
	}
	
	// hide us redan arrows
	var rArrow = myScene.getMeshByName("us_arrow25");
	allRarrows = rArrow.instances;
	//console.log(allRarrows.length);
	rArrow.setEnabled(false);
	for (i=0; i < allRarrows.length; i++){
		allRarrows[i].setEnabled(false);
	}
	
};//end hide arrows

//hide lost boats
	function hideBoats() {
		var aBoat = myScene.getMeshByName("us_boat05");
		allBoats = aBoat.instances;
		aBoat.setEnabled(false);
		for (i=0; i < allBoats.length; i++){
			allBoats[i].setEnabled(false);
		}
};//end hide boats




	//var end = allBarrows.length -1;
	//console.log("end = " + end);


function createSoldiers(){
console.log("reached");
	var moveSoldiersUS = myScene.getMeshByName("usMoveSoldiers");
	var usAllSoldiers = moveSoldiersUS.getChildren();
	//console.log(usAllSoldiers.length);
	for (i=0; i < usAllSoldiers.length; i++){
		usAllSoldiers[i].isVisible = true;
		usAllSoldiers[i].setEnabled(false);
		//console.log(usAllSoldiers[i].name);
	};
	
	var moveSoldiersUK = myScene.getMeshByName("ukMoveSoldiers");
	var ukAllSoldiers = moveSoldiersUK.getChildren();
	console.log(ukAllSoldiers.length);
	for (i=0; i < ukAllSoldiers.length; i++){
			var aPosition = ukAllSoldiers[i].position;
			//ukAllSoldiers[i].setEnabled(false);
			console.log(ukAllSoldiers[i].name + " =" + ukAllSoldiers[i].position);
	};
		
	var ukGeneral = myScene.getMeshByName("ukCommanders");
	var ukAllGeneral = ukGeneral.getChildren();
	console.log(ukAllGeneral.length);
	for (i=0; i < ukAllGeneral.length; i++){
			ukAllGeneral[i].isVisible = true;
			ukAllGeneral[i].setEnabled(false);
			console.log(ukAllGeneral[i].name);
	};
}
	

function showSheaffe(){

	//var end = allBarrows.length -1;
	//console.log("end = " + end);
	var showArrow = function () {
		//console.log(counter);
		counter = counter - 1; 
		if (counter < 0){ 
			clearInterval(timer);
			for(i=0; i < allSarrows.length; i++ )
			{
				allSarrows[i].setEnabled(false);
			}
			
		}
		else {
			allSarrows[counter].setEnabled(true);
		}
};

// Creates an arrow every 1.5 seconds

var timer = setInterval(showArrow, 1500);

};











