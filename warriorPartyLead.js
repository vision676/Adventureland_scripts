var party = ["Porkmage","Porkheal","Porkshop"]

handlingParty(party)

function handlingParty(party){
	for (const p of party){
	start_character(p,p)}
}

    setTimeout(on_party_request,10000)
   function on_party_request(name){
	if(name == "Porkmage" || "Porkshop" || "Porkheal"){
		accept_party_request(name)}
		}
setInterval(function(){
	
    //Charakterwerte abrufen, für verschiedene Funktionen
   var charHp = parent.character ["hp"]
   var charMaxHp = parent.character ["max_hp"]
   var charMp = parent.character ["mp"]
   var charMaxMp = parent.character ["max_mp"]
   var hpPotIdx = character.items.indexOf("hpot0")
   var mpPotIdx = character.items.indexOf("mpot0")
   var hpPot = "hpot0"
   var mpPot = "mpot0"
   let getGold = parent.character["gold"]
   let minGold = 10000
   let getInventory = character.items
   var charLvl = character ["level"]
   var currentMap = get_map()
   var sellableLoot = ["ringsj","hpbelt","hpamulet"]
   
handleGoldItems(getGold,minGold,sellableLoot,getInventory)  
   
  async function handleGoldItems(gold,mingold,items,inventory){
	   if(gold > mingold){
		   send_gold("Porkshop",mingold)}
        for(let i of inventory){
			if(i != null){
        if (items.includes(i.name)){
			  let getItemLoc = locate_item(i.name)
			   send_item("Porkshop",getItemLoc,9999)}}}}
	   
   
   const currentFarmMob = "crab"
   set("mob",currentFarmMob)
   var actualTarg = get_target(character)
   
       if(!actualTarg){
  returnToFarm(currentFarmMob)} else if(actualTarg != currentFarmMob) {
      changeTarget(currentFarmMob)} else if(can_attack(actualTarg)){
                                            attackMode(actualTarg)}

   
   async function returnToFarm(farm){
       if(!is_in_range(farm) && !smart.moving){
       await smart_move(farm)
           changeTarget(farm)
  }}

   async function changeTarget (targ){
       if(actualTarg != targ){
       actualTarg = get_nearest_monster({type:targ})
      change_target(actualTarg)
      attackMode(actualTarg)
   }else if (actualTarg == targ){
       attackMode(targ)}}

   async function attackMode (targ){
       if(can_attack(targ) && !smart.moving){
       attack(targ)}
       else if (!can_attack(targ) && !smart.moving){
           move
           (
           character.real_x+(targ.real_x-character.real_x)+38,
           character.real_y+(targ.real_y-character.real_y)+38
           )
       }else if (can_attack(targ)){
           attack(targ)
       }}
       
   //Respawn wenn Charakter down ist
       if (character.rip == true){
           respawn("respawn")}
       
  
   
   
   //HP und MP Management Funktionen
	
	useHpPot()
	useMpPot()
	
	
   async function useHpPot(){
       if (charHp < charMaxHp * 0.30 && charHp != charMaxHp){
       use_hp_or_mp("use_hp")
       await sleep(100)}}
       
   async function useMpPot(){
       if(charMp < charMaxMp * 0.20 && charMp != charMaxMp){
       use_hp_or_mp("use_mp")
       await sleep(100)}}
       
//Pot Management
	
	      buyPots(500,0)
          buyPots(0,500)
	
       async function buyPots (hpAm,mpAm){
		   if(quantity(hpPot) < 1){
		   var destination = find_npc("fancypots")
		   if(!smart.moving){
           smart_move(destination,)}
                 buy(hpPot,hpAm)
           await sleep (100)}
		     if(quantity(mpPot) < 1){
		   var destination = find_npc("fancypots")
		   if(!smart.moving){
           smart_move(destination,)}
                 buy(mpPot,mpAm)
           await sleep (100)}}
   
   //Merchant Sachen senden


   
       
       //Alles an Loot aufheben
       loot();
   
       //Movement

                    
   },1000/4);// Loops every 1/4 seconds.
