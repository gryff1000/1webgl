var music;
var isPlaying = true;

function playMusic(num){

	if (num == 0)
	{
	music = new Howl({  
		urls: ['sn_clip.mp3'],
		autoplay: true,  
		loop: true, 
		volume: 0.2,
		onplay: function(){},
	});
	
	music.play();
	}
	if (num == 1)
	{
	music.loop(false);
	//Howler.mute();
	music.stop();
	divPick.innerHTML = num;
	}
} //end playMusic function

function stopMusic(){

if(isPlaying){
	music.stop();
}
else{
	music.play();
}
isPlaying = !isPlaying;
}