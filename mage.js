//Party invite einholen
send_party_request("Porkchop")

setInterval(function(){
	
var charHp = parent.character ["hp"]
var charMaxHp = parent.character ["max_hp"]
var charMp = parent.character ["mp"]
var charMaxMp = parent.character ["max_mp"]	
var hpPot = "hpot0"
var mpPot = "mpot0"
var partyLeader = parent.party["Porkchop"]
var leaderTarg = get("mob")
var actualTarg = get_target(character)
let getGold = parent.character["gold"]
let minGold = 10000
var sellableLoot = ["ringsj","hpbelt","hpamulet"]
let getInventory = character.items

  if(!actualTarg){
  returnToFarm(partyLeader)} else if(!actualTarg || actualTarg != leaderTarg) {
      changeTarget(leaderTarg)} else if(actualTarg == leaderTarg && can_attack(actualTarg)){
                                            attackMode(actualTarg)}
async function returnToFarm(farm){
       if(!is_in_range(farm) && !smart.moving){
       await smart_move(farm)
           changeTarget(leaderTarg)
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
           character.real_x+(targ.real_x-character.real_x)+120,
           character.real_y+(targ.real_y-character.real_y)+120
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
       if (charHp < charMaxHp * 0.50 && charHp != charMaxHp){
       use_hp_or_mp("use_hp")
       await sleep(100)}}
       
   async function useMpPot(){
       if(charMp < charMaxMp * 0.05 && charMp != charMaxMp){
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
   
   //Zeugs zum Merchant

handleGoldItems(getGold,minGold,sellableLoot,getInventory)  
   
  async function handleGoldItems(gold,mingold,items,inventory){
	   if(gold > mingold){
		   send_gold("Porkshop",mingold)}
        for(let i of inventory){
			if(i != null){
        if (items.includes(i.name)){
			  let getItemLoc = locate_item(i.name)
			   send_item("Porkshop",getItemLoc,9999)}}}}	
	
	
	
   //Equipment managen
   
       
       //Alles an Loot aufheben
       loot();
   
       //Movement
       

	
	

},1000/4); // Loops every 1/4 seconds.
