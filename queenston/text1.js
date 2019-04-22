var text;
var lines;

lines = [4,4,2,3,3,1,1,2]; //15

text = [
"0~4.00 - 6.00am : Initial attack by General Stephen Van Rensselaer. 13 boats with US regular soldiers under the command of Lieutenant-Colonel John Chrystie and US militia forces under the command of Lieutenant-Colonel Solomon Van Rensselaer (a cousin).  But all does not go well #show general US soldier here ",
"MOV0~4.00 - 6.00am : Lt-Col Van Rensselaer's forces are detected immediately and he is shot in the foot. Some of the boats of Lt-Col. Chrystie are caught by the currents and drift downstream.#show general Solomon here",
"1~4.00 - 6.00am : One of Lt-Col.'s boats is sunk by cannon fire, one lands at Vrooman's Point and surrenders to British forces. Lt-Col. Chrystie manages to land on the US side of the river and he walks back to Lewiston. #Mov1 is a blank#", 
"MOV2~4.00 - 6.00am: With the element of surprise gone, the US artillery units join the battle, but despite this, the US military forces that land successfully become bogged down on the riverbank #show US soldier here#",

"3~6.00 - 7.30am : The noise of the battle has been heard at Fort George to the north. By dawn, Major-General Isaac Brock arrives in Queenston with a small military detachment.", 
"MOV7~6.00 - 7.30am : Gen.Brock procedes upto the redan battery for a better view of the battlefield. He orders the Light Company posted on top of the escarpment - protecting the redan cannon battery - down to the village to help deal with the invaders #add attack anim here#",
"4~6.00 - 7.30am : Maj-Gen. Brock does not realize that Captain John Wool has found found a path up the escarpment and Capt. Wool attacks the now unprotected redan battery from the top of the escarpment. ",
"MOV1~6.00 - 7.30am : After spiking the guns, Maj-Gen. Brock and the gun crews retreat down the escarpment to the village of Queenston #add attack anim here# ", 

"T0~7.30 - 8.30am : Assessing the situation Maj-Gen. Brock sends a messenger back to Fort George requesting more soldiers, then reorganizes British forces and attacks the redan battery - twice. He is killed in the second attack by a US sniper. #add attack anim here#",
"T0~7.30 - 8.30am: British soldiers retreat back to the village with the body of their General. #add attack anim here#",

"T0~8.30 - 9.30am: Lieutenant-Colonel John MacDonnell, Brock's aide, now attacks escarpment again. Although the attack goes well, he too is killed.", 
"MOV8~8.30 - 9.30am: A counter-attack by the US military causes all the UK soldiers, disheartened by the loss of their officers, to retreat to Vrooman's Point #add attack anim here#", 
"MOV2~8.30 - 9.30am: The US reinforces its position on the Queenston Heights - to protect from an attack from Chippewa, and establishes defensive positions in Queenston village - to allow for a more orderly landing of US soldiers (though they now only have 6 boats). #add attack anim here#",

"T0~9.30 - 12noon: Lt-Col Van Rensselaer has now been wounded six times and is replaced by militia Brigadier-General Elijah Wadsworth in Queenston village, Lieutanant Colonel Winfield Scott (regular army) takes over command of the soldiers on the escarpment as Wool has been wounded. Brig-Gen. Wadsworth cedes overall command to Lt-Col. Scott despite outranking Scott.", 
"5~9.30 - 12noon: The War Chief of the Mohawk Nation, Chief Joseph Norton, with 200 Mohawk warriors arrives at Vrooman's Point and hears that Maj-Gen. Brock is dead. Half his warriors leave - but Norton and his remaining warriors then move through woods to an old track to the west of Queenston village and ascend the escarpment.", 
"MOV3~9.30 - 12noon: Chief Norton sends a messenger south to Chippewa ,then finally positions his warriors on the south flank of the US forces on the Queenston Heights and begins harassing attacks on the US soldiers south flank. Lt-Col Scott initially responds with bayonet charges - but the Mohawks just disappear back into the woods, move to their left and attack again.  #add attack anim here#",



"6~12noon-1.00pm: Norton continues his attacks, but finally Scott refuses to engage and creates defensive positions as more US soldiers slowly arrive, Sheaffe moves up the same path as Norton(12.30pm reaches top of the escarpment). M-G. SVR hearing renewed firing crosses over - on return rebuffed soldiers refuse to cross. The war cries and the presence of the  Mohawks generate more refusals to cross the river", 

"T0~1.00 - 2.30pm: Sheaffe reorganises his forces several times, US thinks it is a trick, joined by soldiers from Chippawa.",

"T0~2.30 - 4.00pm: Sheaffe advances, Norton's Mohawks on both flanks, US Brig-Gen. Wadsworth orders retreat - US line collapses and Lt.Col. Scott surrenders.",
"END~2.30 - 4.00pm: Sheaffe and his soldiers take almost 1000 US prisoners including Lt.Col. Scott."    
];

//see 2nd book for more info on initial attack 
// first US wave - Three boats, including Chrystie's, were swept downstream by the current. One landed lower down and the other two under Chrystie returned to the American side of the river.

// second wave - As a second wave of six American boats began to cross the river, the crews of three of them, including their two largest, one of which was carrying Lieutenant-Colonel Chrystie, panicked as they came under fire. Chrystie's pilot turned the boat back for shore, despite Chrystie's efforts to restrain him. This later caused controversy when Captain Lawrence, commanding the next boat following, asserted that Chrystie had ordered him to retreat, leading to accusations of cowardice.[25] One of the three remaining boats was sunk by a cannonball and another, carrying Lieutenant-Colonel John Fenwick (formerly the commandant at Fort Niagara), drifted downstream and landed in Hamilton Cove, a hollow about 800 yards downriver, where British troops quickly surrounded Fenwick's men. Three men escaped in the boat, which sank on reaching the American side of the river. Fenwick was wounded in the face by a pistol shot, and the other survivors of his party surrendered.[26] The last boat drifted within easy range of the gun at Vrooman's Point and its occupants surrendered.

//Sheaffe arrives at VP, Canadian militia move back to village with Holcroft's artillery.


//"T0~9.30 - 12noon: Chief Norton sends a messenger south to Chippewa ,then finally positions his warriors on the south flank of the US forces on the Queenston Heights and begins harassing attacks on the US soldiers south flank. Lt-Col Scott initially responds with bayonet charges - but the Mohawks just disappear back into the woods, move to their left and attack again.  #odd line out add attack anim here#",
