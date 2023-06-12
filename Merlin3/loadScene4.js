function loadScene4(){
	
		//sceneNum = 3;

		BABYLON.SceneLoader.Append("", theScenes[sceneNum], myScene);
		myScene.executeWhenReady(function (){
			
			console.log("To be scene " + (sceneNum + 1));
			
			myCamera = myScene.getCameraByName("exitCamera");
			myScene.activeCamera = myCamera;// data on meshes sent to console
			
			
			allMeshes = myScene.meshes;
			//console.log("Total Meshes = " + allMeshes.length);
			
	
	
	
	//calculate and display total vertices and meshes			
			let vertTotal = 0;
			allMeshes = myScene.meshes;
			divAllMeshs.innerHTML = allMeshes.length + " Total meshes";
			for (i=0; i<allMeshes.length; i++){
				if (allMeshes[i].getTotalVertices() > 0){
					vertTotal = vertTotal + allMeshes[i].getTotalVertices()
				}
			}
			//console.log(vertTotal);
			divVerts.innerHTML = vertTotal + " Total vertices";
					
			
		}
)};