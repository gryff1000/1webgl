

function drawMaze(x,y,num,theCells,newScene) {

//var harch = newScene.getMeshByName("wallh_text");

	var hwall = newScene.getMeshByName("wallh_text");
	//hwall.setEnabled(false);
	var vwall = newScene.getMeshByName("wallv_text");
	//vwall.setEnabled(false);
	var varch = newScene.getMeshByName("arch_v");
	//varch.setEnabled(false);
	var harch = newScene.getMeshByName("arch_h");
	//harch.setEnabled(false);
	var hparch = newScene.getMeshByName("arch_hp");
	//hparch.setEnabled(false);
	var hlock = newScene.getMeshByName("lock_h");
	//hlock.setEnabled(false);
	var vparch = newScene.getMeshByName("arch_vp");
	//vparch.setEnabled(false);
	//var vlock = newScene.getMeshByName("lock_v");
	//vlock.setEnabled(false);
	//var lever = newScene.getMeshByName("lever");
	//lever.setEnabled(false);
	//var stairs = newScene.getMeshByName("stairs");
	//stairs.setEnabled(false);
	//var agate = newScene.getMeshByName("gate_v");
	//agate.setEnabled(false);
	//var aGrid = newScene.getMeshByName("grid");
	
	
	// delete this later
	var count =0;

// create ground plane the size of maze
	ground[num] = BABYLON.Mesh.CreateGround("ground" + num, (xSize*4), (ySize*4), 0, newScene);
	ground[num].checkCollisions = true;
	ground[num].material = new BABYLON.StandardMaterial("ground" + num, newScene);
	ground[num].material.diffuseTexture = new BABYLON.Texture("gravel1.png", newScene);
	ground[num].material.diffuseTexture.uScale =9;
	ground[num].material.diffuseTexture.vScale =9;
	
// create roof plane the size of each maze	
	var roof = newScene.getMeshByName("roof");
	roof.scaling = new BABYLON.Vector3(x,1,y);
	var sky = roof.createInstance("sky_" + num);
	sky.parent = ground[num];
	sky.material.diffuseTexture.uScale =9;
	sky.material.diffuseTexture.vScale =9; 
	
	
// place doors to stairs in the multi array  of cells by switching certain values to 1 for each maze
	switch (num) {
	
		case 0: // maze1 - left bottom only one door
			var aCell = theCells[lastrow][lastcol];
			aCell[1] = 2;
			//var port = agate.createInstance("agate_" + num);
			//port.position = new BABYLON.Vector3(-4, 0, -22);
			//port.rotation.y = Math.PI/2;
			aCell[2] = 0;
			break;
			
		case 1:// maze 2 - bottom right
		
			var aCell = theCells[lastrow][firstcol];
			aCell[3] = 2;
			var aCell = theCells[firstrow][lastcol];
			aCell[0] = 2;
			break;
			
		case 2: // maze - top right
			
			var aCell = theCells[firstrow][firstcol];
			aCell[3] = 2;
			var aCell = theCells[lastrow][lastcol];
			aCell[2] = 2;
			break;
			
		case 3: // maze top left - only one door
		
			var aCell = theCells[firstrow][lastcol];
			aCell[1] = 2;
			var aCell = theCells[lastrow][firstcol];
			aCell[2] = 2;
			break;
			
		default:
			break;
	
	};
	
	var bwCount = 0;
	var lCount = 0;

//draw the cell walls
					// outer loop - go down columns
					for (i = 0; i < ySize; i++){
					
						var vPosz  = cent_zero_y - i*4
						//then inner loop - go across columns for each row
						for (j= 0; j < xSize; j++) {
							var hPosz = cent_zero_x + j*4;
							// get each cell from the cell array
							var aCell = theCells[i][j];
							
							// now draw the 4 walls for each cell 0 = top, 1 = right, 2 = bottom, 3 = left
							for (k =0; k < aCell.length; k++){
							
								switch (k) {
								
								case 0:
									
									if(aCell[k] == 0){ // create solid horizontal wall at top of cell
										var newHWall = hwall.createInstance("hwall_" +num + "_" + i + j);
										newHWall.position = new BABYLON.Vector3(hPosz, 0, vPosz+2);
										count = count + 1;
									}
									
									else if ((aCell[k] == 1)){ 	// else create a horizontal arch at top of cell
										var newHWall = harch.createInstance("harch_" +num + "_" + i + j);
										newHWall.position = new BABYLON.Vector3(hPosz, 0, vPosz+2);
									}
									else {
										//var newHWall = hparch.createInstance("hparch_" +num + "_" + i + j);
										//newHWall.position = new BABYLON.Vector3(hPosz, 0, vPosz+2);
										//var newHLock = hlock.createInstance("hlock_" +num + "_" + i + j);
										//newHLock.parent = newHWall;
										
										
									}
									
									
									newHWall.checkCollisions =true;
									newHWall.parent = ground[num];	
									break;
									
								case 1:
									
									if (aCell[k] == 0){ // create a solid vertical wall at right of cell
										var newVWall = vwall.createInstance("vwall_" +num + "_" + i + j);
										newVWall.position = new BABYLON.Vector3(hPosz+2, 0, vPosz);
										count = count + 1;
									}
									else if (aCell[k] == 1){	// create a vertical arch
										var newVWall = varch.createInstance("varch_" +num + "_" + i + j);
										newVWall.position = new BABYLON.Vector3(hPosz+2, 0, vPosz);
									}
									else {
										//var newVWall = vparch.createInstance("vparch_" +num + "_" + i + j);
										//newVWall.position = new BABYLON.Vector3(hPosz+2, 0, vPosz);
										//var newVLock = vlock.createInstance("vlock_" +num + "_" + i + j);
										//newVLock.parent = newVWall;
										//var newVLever = lever.createInstance("lever_" +num + "_" + i + j);
										//newVLever.parent = newVWall;
										//var newVGate = drawGates(x, y, num, newVWall, newScene);
										
										//newVGate[0].parent = newVWall;
										//newVGate[1].parent = newVWall;
									}
									newVWall.checkCollisions =true;
									newVWall.parent = ground[num];
									break;
									
								case 2: 
								if (i == lastrow) {	// only draw bottom wall if it is the last row
									if (aCell[k] == 0){ //create a solid horizontal wall at bottom of cell
											var newHWall = hwall.createInstance("hwall_" +num + "_" + i + j);
											newHWall.position = new BABYLON.Vector3(hPosz, 0, vPosz-2);
											count = count + 1;
									} 
									else if (aCell[k] == 1){	//create a solid horizontal arch at bottom of cell
										var newHWall = harch.createInstance("harch_" +num + "_" + i + j);
										newHWall.position = new BABYLON.Vector3(hPosz, 0, vPosz-2);
										//newHWall.parent = ground[num];
									}
									else {
										//var newVWall = vparch.createInstance("vparch_" +num + "_" + i + j);
										//newVWall.position = new BABYLON.Vector3(hPosz, 4, vPosz-14);
										//var newVLock = vlock.createInstance("vlock_" +num + "_" + i + j);
										//newVLock.parent = newVWall;
										//var newVLever = lever.createInstance("lever_" +num + "_" + i + j);
										//newVLever.parent = newVWall;
										//var newVGate = drawGates(x, y, num, newVWall, newScene);
										
										//newVGate[0].parent = newVWall;
										//newVGate[1].parent = newVWall;
									}
									newHWall.checkCollisions =true;
									newHWall.parent = ground[num];
									bwCount = bwCount + 1;
								}
									break;
								case 3:
								if (j == firstrow) {	// only draw left wall if it is the first column	
									if(aCell[k] == 0){	// create a solid vertical wall at left of cell
										var newVWall = vwall.createInstance("vwall_" +num + "_" + i + j);
										newVWall.position = new BABYLON.Vector3(hPosz-2, 0, vPosz);
										count = count + 1;
									}
									else if (aCell[k] == 1)	{// create a solid vertical arch at left of cell
										var newVWall = varch.createInstance("varch_" +num + "_" + i + j);
										newVWall.position = new BABYLON.Vector3(hPosz-2, 0, vPosz);
									}
									else{
										//var newVWall = vparch.createInstance("vparch_" +num + "_" + i + j);
										//newVWall.position = new BABYLON.Vector3(hPosz-2, 0, vPosz);
										
									
									}
									newVWall.checkCollisions =true;
									newVWall.parent = ground[num];
									lCount = lCount + 1;
									
								}
									break;	
								
								default:
								
									break;
								
								};
							}; //end k loop
							
						}; // end j loop
						
					}; // end i loop
					
					// move the maze into position
					var xPosition = xSize*2 + 8;
					var zPosition = xSize*2 + 8;
					//add y position if maze is not square
					if(num ==0) ground[num].position = new BABYLON.Vector3(-xPosition, 4*num, -zPosition);
					if(num ==1) ground[num].position = new BABYLON.Vector3(xPosition, 4*num, -zPosition);
					if(num ==2) ground[num].position = new BABYLON.Vector3(xPosition, 4*num, zPosition);
					if(num ==3) ground[num].position = new BABYLON.Vector3(-xPosition, 4*num, zPosition);
};					//end draw the cell walls


function drawStairs (x,y,num,newScene) {
	var rotY = (Math.PI/2)*num
	var ramp = newScene.getMeshByName("newslide");
	ramp.setEnabled(false);
	ramp.isVisible = true;
	var aRamp = ramp.createInstance("ramp" + num);
	aRamp.checkCollisions = true;
	aRamp.isVisible = false;
	var wall_st = newScene.getMeshByName("st_wall");
	wall_st.setEnabled(false);
	var aWall = wall_st.createInstance("wall_st" + num);
	aWall.checkCollisions = true;
	var steps = newScene.getMeshByName("stairs");
	steps.setEnabled(false);
	var theSteps = steps.createInstance("theSteps" + num);
	theSteps.checkCollisions = false;
	theSteps.isVisible = true;
	var arch = newScene.getMeshByName("arch_vp");
	arch.setEnabled(false);
	anArch1 = arch.createInstance("arch1" + num);
	anArch1.position = new BABYLON.Vector3(-8,0, 0);
	anArch1.checkCollisions = true;
	anArch2 = arch.createInstance("arch2" +num );
	anArch2.checkCollisions = true;
	anArch2.position = new BABYLON.Vector3(8,4, 0);
	var aVGate = newScene.getMeshByName("gate_v");
	aVGate.setEnabled(false); 
	var theVGate1 = aVGate.createInstance("theVGate1" +num);
	theVGate1.checkCollisions = true;
	var theVGate2 = aVGate.createInstance("theVGate2" +num);
	theVGate2.checkCollisions = true;
	var locks = newScene.getMeshByName("lock_v");
	locks.setEnabled(false);
	var aLock = locks.createInstance("lock1" +num );
	
	var aVLever = newScene.getMeshByName("lever");
	aVLever.setEnabled(false); 
	var theVLever = aVLever.createInstance("theVLever" + num);
	
	//aLock.scaling = new BABYLON.Vector3(4,4,4);
	theVLever.parent = anArch1;
	aLock.parent = anArch1;
	theVGate1.parent = anArch1;
	theVGate2.parent = anArch2;
	aWall.parent = aRamp;
	theSteps.parent = aRamp;
	anArch1.parent = aRamp;
	anArch2.parent = aRamp;
	
	switch (num) {
	
		case 0:
			aRamp.rotation.y = rotY;
			aRamp.position = new BABYLON.Vector3(0, 0, (-(x+2)*4 + 2));
			break;
			
		case 1:
			aRamp.rotation.y = -rotY ;
			aRamp.position = new BABYLON.Vector3(((x+2)*4 - 2), 4, 0);
			break;
		
		case 2:
			aRamp.rotation.y = rotY ;
			aRamp.position = new BABYLON.Vector3(0, 8, ((x+2)*4 - 2));
			break;
			
		case 3:
			aRamp.rotation.y = -rotY ;
			aRamp.position = new BABYLON.Vector3(-((x+2)*4 - 2), 12, 0);	
		break;
		
		default:
			break;
			
	}	

// On pick interpolations to open/close gate
	var control = function(mesh1, mesh2, mesh3) {
							
	// events done in sequence 
		mesh1.actionManager = new BABYLON.ActionManager(newScene);
				
	// gate action
		mesh1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh2, "position.y", +2.3, 2500))
		.then(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh2, "position.y", 0.0, 2500))
		mesh1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh3, "position.y", +0.0, 250))
		.then(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh3, "position.y", 2.3, 2500))
	//lever action
		mesh1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh1, "rotation.z", Math.PI/12, 500))
		.then(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh1, "rotation.z", 0, 250));
		mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, playGate));
					
		}
		
		control(theVLever, theVGate1, theVGate2);
		

	
	
//get all the tower parts and move them to top of last staircase
	var theTower = newScene.getMeshByName("theTower");
	theTower.position = new BABYLON.Vector3(-((x+2)*4 - 2), 16, -8);
	
	var towerDoor = newScene.getMeshByName("fdoor1");
	var dknob = newScene.getMeshByName("dknob");
	var outside = newScene.getMeshByName("outside");
	var aLight = newScene.getLightByName("Hemi");
	aLight.includedOnlyMeshes = [outside];
	aLight.setEnabled(true); 
	

// On pick interpolations to open door
	var openDoor = function(mesh1,mesh2) {
			mesh1.actionManager = new BABYLON.ActionManager(newScene);
			//knob action
			mesh1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh1, "position.x", -0.6000, 250))
			// gate action
			mesh1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh2, "rotation.y", -Math.PI/4, 2500))
			//play sound	
			mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, playDoor));
		};
		
	openDoor(dknob,towerDoor);
	
	
	return; //end door creation
}



function drawHound(name,  scene) {
	BABYLON.SceneLoader.ImportMesh(null, "", "hound1c_rigged1c.babylon", myScene, function (newMeshes, particleSystems, skeletons) {
		var theDog = myScene.getMeshByName("hound");
		theDog.setEnabled(false);
		//var teeth1 = myScene.getMeshByName("teeth_back.L1");
		//var teeth2 = myScene.getMeshByName("teeth.L1");
		//var eyes = myScene.getMeshByName("eyes");
		if(name> 0){
			
			var myDog = theDog.clone("theDog"+name);

			//var myEyes = eyes.clone("eyes"+name);
			//var myTeeth1 = teeth1.clone("teeth1"+name);
			//var myTeeth2 = teeth2.clone("teeth2"+name);

			//myTeeth1.parent = myDog;
			//myTeeth2.parent = myDog;
			//myEyes.parent = myDog;
			
			var dogLight = new BABYLON.PointLight("dogLight", new BABYLON.Vector3(0, 0, 0), myScene);
			dogLight.parent = myDog;
			dogLight.position.y = .8;
			dogLight.position.z = -.5;
			
			dogLight.diffuse = new BABYLON.Color3(0, 1, 0);
			dogLight.specular = new BABYLON.Color3(0, .6, 0);
			dogLight.range = 2;
			dogLight.intensity = 2;
			dogLight.includedOnlyMeshes = [myDog];
			
			myDog.scaling = new BABYLON.Vector3(0.85, 0.85, 0.85);
			//myDog.scaling = new BABYLON.Vector3(1.75, 1.75, 1.75);
			myDog.position.x = -.5;
			myDog.position.z = 199.4; //new BABYLON.Vector3(3, -2, 0);
			//myDog.rotation.y = Math.PI/2;

			//myDog.rotation.y = dRotations[name-1]*Math.PI/4;
			
		}
		else {
		
		//theDog.setEnabled(false);
		
		}
	
	});
}	










/*
function drawGates(x,y,num,whichWall, newScene) {
		tempcount = tempcount + 1;
		console.log(tempcount);
		var aVGate = newScene.getMeshByName("gate_v");
		aVGate.setEnabled(false); 
		var theVGate = aVGate.createInstance("theVGate" +num);
		
		theVGate.parent = whichWall;
		var aVLever = newScene.getMeshByName("lever");
		aVLever.setEnabled(false); 
		var theVLever = aVLever.createInstance("theVLever" + num);

		theVLever.parent = whichWall;
		
		//if(tempcount == 2){
		//theVGate.scaling = new BABYLON.Vector3(10,10,10);
		//theVLever.scaling = new BABYLON.Vector3(10,10,10);
		//}

// On pick interpolations to open/close gate
		var control = function(mesh1, mesh2) {
							
			// events done in sequence 1st click prints object data, 2nd click sets wireframe value
			mesh1.actionManager = new BABYLON.ActionManager(newScene);
				
			// gate action
			mesh1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh2, "position.y", +2.3, 2500))
			.then(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh2, "position.y", 0.1, 2500));
			//lever action
			mesh1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh1, "rotation.z", Math.PI/12, 500))
			.then(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, mesh1, "rotation.z", 0, 500));
			//mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, playGate));
					
		}
		
		control(theVLever, theVGate);
		//control(theLever2, theDoor2);


//var aGate = [theVGate, theVLever];
//return aGate;
return;
};
*/










