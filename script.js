var spells=[{gestures:"C-D-P-W", spellName:"Dispel magic"},{gestures:"C-S-W-W-S", spellName:"Summon elemental"},{gestures:"C-(w", spellName:"Magic mirror"},{gestures:"D-F-F-D-D", spellName:"Lightning bolt"},{gestures:"D-F-P-W", spellName:"Cure heavy wounds"},{gestures:"D-F-W", spellName:"Cure light wounds"},{gestures:"D-P-P", spellName:"Amnesia"},{gestures:"D-S-F", spellName:"Confusion"},{gestures:"D-S-F-F-F-C", spellName:"Disease"},{gestures:"D-W-F-F-(d", spellName:"Blindness"},{gestures:"D-W-S-S-S-P", spellName:"Delayed effect"},{gestures:"D-W-W-F-W-C", spellName:"Raise dead"},{gestures:"D-W-W-F-W-D", spellName:"Poison"},{gestures:"F-F-F", spellName:"Paralysis"},{gestures:"F-P-S-F-W", spellName:"Summon troll"},{gestures:"F-S-S-D-D", spellName:"Fireball"},{gestures:"P", spellName:"Shield"},{gestures:"(p", spellName:"Surrender"},{gestures:"P-D-W-P", spellName:"Remove enchantment"},{gestures:"P-P-(w-(s", spellName:"Invisibility"},{gestures:"P-S-D-D", spellName:"Charm monster"},{gestures:"P-S-D-F", spellName:"Charm person"},{gestures:"P-S-F-W", spellName:"Summon ogre"},{gestures:"P-W-P-F-S-S-S-D", spellName:"Finger of death"},{gestures:"P-W-P-W-W-C", spellName:"Haste"},{gestures:"S-D", spellName:"Missile"},{gestures:"S-F-W", spellName:"Summon goblin"},{gestures:"S-P-F", spellName:"Anti-spell"},{gestures:"S-P-F-P-S-D-W", spellName:"Permanency"},{gestures:"S-P-P-C", spellName:"Time stop"},{gestures:"S-S-F-P", spellName:"Resist cold"},{gestures:"S-W-D", spellName:"Fear"},{gestures:"S-W-W-C", spellName:"Fire storm"},{gestures:"W-D-D-C", spellName:"Lightning bolt"},{gestures:"W-F-P", spellName:"Cause light wounds"},{gestures:"W-F-P-S-F-W", spellName:"Summon giant"},{gestures:"W-P-F-D", spellName:"Cause heavy wounds"},{gestures:"W-P-P", spellName:"Counter-spell"},{gestures:"W-S-S-C", spellName:"Ice storm"},{gestures:"W-W-F-P", spellName:"Resist heat"},{gestures:"W-W-P", spellName:"Protection from evil"},{gestures:"W-W-S", spellName:"Counter-spell"}];
var reverseSpells=[{gestures:"C-D-D-W",spellName:"Lightning bolt"},{gestures:"C-F-F-F-S-D",spellName:"Disease"},{gestures:"C-P-P-S",spellName:"Time stop"},{gestures:"C-S-S-W",spellName:"Ice storm"},{gestures:"C-W-F-W-W-D",spellName:"Raise dead"},{gestures:"C-W-W-P-W-P",spellName:"Haste"},{gestures:"C-W-W-S",spellName:"Fire storm"},{gestures:"D-D-F-F-D",spellName:"Lightning bolt"},{gestures:"D-D-S-P",spellName:"Charm monster"},{gestures:"D-D-S-S-F",spellName:"Fireball"},{gestures:"(d-F-F-W-D",spellName:"Blindness"},{gestures:"D-F-P-W",spellName:"Cause heavy wounds"},{gestures:"D-S",spellName:"Missile"},{gestures:"D-S-S-S-F-P-W-P", spellName:"Finger of death"},{gestures:"D-W-F-W-W-D",spellName:"Poison"},{gestures:"D-W-S",spellName:"Fear"},{gestures:"F-D-S-P",spellName:"Charm person"},{gestures:"F-F-F",spellName:"Paralysis"},{gestures:"F-P-S",spellName:"Anti-spell"},{gestures:"F-S-D",spellName:"Confusion"},{gestures:"P",spellName:"Shield"},{gestures:"(p",spellName:"Surrender"},{gestures:"P-F-S-S",spellName:"Resist cold"},{gestures:"P-F-W",spellName:"Cause Light wounds"},{gestures:"P-F-W-W",spellName:"Resist heat"},{gestures:"P-P-D",spellName:"Amnesia"},{gestures:"P-P-W",spellName:"Counter spell"},{gestures:"P-S-S-S-W-D",spellName:"Delayed effect"},{gestures:"P-W-D-P",spellName:"Remove enchantment"},{gestures:"P-W-W",spellName:"Protection from evil"},{gestures:"(s-(w-P-P",spellName:"Invisibility"},{gestures:"S-W-W",spellName:"Counter-spell"},{gestures:"S-W-W-S-C",spellName:"Summon elemental"},{gestures:"(w-C",spellName:"Magic mirror"},{gestures:"W-D-S-P-F-P-S",spellName:"Permanency"},{gestures:"W-F-D",spellName:"Cure light wounds"},{gestures:"W-F-S",spellName:"Summon goblin"},{gestures:"W-F-S-P",spellName:"Summon ogre"},{gestures:"W-F-S-P-F",spellName:"Summon troll"},{gestures:"W-F-S-P-F-W",spellName:"Summon giant"},{gestures:"W-P-D-C",spellName:"Dispel magic"},{gestures:"W-P-F-D",spellName:"Cure heavy wounds"}]
var spellsAlpha = [{"gestures": "D-P-P","spellName": "Amnesia"},{"gestures": "S-P-F","spellName": "Anti-spell"},{"gestures": "D-W-F-F-(d","spellName": "Blindness"},{"gestures": "W-P-F-D","spellName": "Cause heavy wounds"},{"gestures": "W-F-P","spellName": "Cause light wounds"},{"gestures": "P-S-D-D","spellName": "Charm monster"},{"gestures": "P-S-D-F","spellName": "Charm person"},{"gestures": "D-S-F","spellName": "Confusion"},{"gestures": "W-W-S","spellName": "Counter-spell"},{"gestures": "W-P-P","spellName": "Counter-spell"},{"gestures": "D-F-P-W","spellName": "Cure heavy wounds"},{"gestures": "D-F-W","spellName": "Cure light wounds"},{"gestures": "D-W-S-S-S-P","spellName": "Delayed effect"},{"gestures": "D-S-F-F-F-C","spellName": "Disease"},{"gestures": "C-D-P-W","spellName": "Dispel magic"},{"gestures": "S-W-D","spellName": "Fear"},{"gestures": "P-W-P-F-S-S-S-D","spellName": "Finger of death"},{"gestures": "S-W-W-C","spellName": "Fire storm"},{"gestures": "F-S-S-D-D","spellName": "Fireball"},{"gestures": "P-W-P-W-W-C","spellName": "Haste"},{"gestures": "W-S-S-C","spellName": "Ice storm"},{"gestures": "P-P-(w-(s","spellName": "Invisibility"},{"gestures": "W-D-D-C","spellName": "Lightning bolt"},{"gestures": "D-F-F-D-D","spellName": "Lightning bolt"},{"gestures": "C-(w","spellName": "Magic mirror"},{"gestures": "S-D","spellName": "Missile"},{"gestures": "F-F-F","spellName": "Paralysis"},{"gestures": "S-P-F-P-S-D-W","spellName": "Permanency"},{"gestures": "D-W-W-F-W-D","spellName": "Poison"},{"gestures": "W-W-P","spellName": "Protection from evil"},{"gestures": "D-W-W-F-W-C","spellName": "Raise dead"},{"gestures": "P-D-W-P","spellName": "Remove enchantment"},{"gestures": "S-S-F-P","spellName": "Resist cold"},{"gestures": "W-W-F-P","spellName": "Resist heat"},{"gestures": "P","spellName": "Shield"},{"gestures": "C-S-W-W-S","spellName": "Summon elemental"},{"gestures": "W-F-P-S-F-W","spellName": "Summon giant"},{"gestures": "S-F-W","spellName": "Summon goblin"},{"gestures": "P-S-F-W","spellName": "Summon ogre"},{"gestures": "F-P-S-F-W","spellName": "Summon troll"},{"gestures": "(p","spellName": "Surrender"},{"gestures": "S-P-P-C","spellName": "Time stop"}];
var spellDefinitions = {"Amnesia":"If the subject of this spell is a wizard, next turn he must repeat identically the gestures he made in the current turn, including stabs. If the subject is a monster it will attack whoever it attacked this turn. If the subject is simultaneously the subject of any of confusion, charm person, charm monster, paralysis or fear then none of the spells work.","Anti-spell":"On the turn following the casting of this spell, the subject cannot include any gestures made on or before this turn in a spell sequence and must restart a new spell from the beginning of that spell sequence. The spell does not affect spells which are cast on the same turn nor does it affect monsters.","Blindness":"For the next 3 turns not including the one in which the spell was cast, the subject is unable to see. If he is a wizard, he cannot tell what his opponent's gestures are, although he must be informed of any which affect him (e.g. summons spells, missile etc cast at him) but not counter- spells to his own attacks. Indeed he will not know if his own spells work unless they also affect him (e.g. a fire storm when he isn't resistant to fire.) He can control his monsters (e.g. 'Attack whatever it was that just attacked me'). Blinded monsters are instantly destroyed and cannot attack in that turn.","Cause heavy wounds":"This has the same effect as cause light wounds but inflicts three points of damage instead of two.","Cause light wounds":"The subject of this spell is inflicted with two points of damage. Resistance to heat or cold offers no defence. A simultaneous cure light wounds will serve only to reduce the damage to 1 point. A shield has no effect.","Charm monster":"Except for cancellation with other enchantments, this spell only affects monsters (excluding elementals). Control of the monster is transferred to the caster of the spell (or retained by him) as of this turn, i.e. the monster will attack whosoever its new controller dictates from that turn onwards including that turn. Further charms are, of course, possible, transferring as before. If the subject of the charm is also the subject of any of: amnesia, confusion, charm person, fear or paralysis, none of the spells work.","Charm person":"Except for cancellation with other enchantments, this spell only affects humans. The subject is told which of his hands will be controlled at the time the spell hits, and in the following turn, the caster of the spell writes down the gesture he wants the subject's named hand to perform. This could be a stab or nothing. If the subject is only so because of a reflection from a magic mirror the subject of the mirror assumes the role of caster and writes down his opponent's gesture. If the subject is also the subject of any of amnesia, confusion, charm monster, paralysis or fear, none of the spells work.","Confusion":"If the subject of this spell is a wizard, next turn he writes down his gestures as usual and after exposing them, rolls 2 dice to determine which gesture is superseded due to his being confused. The first die indicates left hand on 1-3, right on 4-6. The second roll determines what the gesture for that hand shall be replaced with: 1=C, 2=D, 3=F, 4=P, 5=S, 6=W. If the subject of the spell is a monster, it attacks at random that turn. If the subject is also the subject of any of: amnesia, charm person, charm monster, paralysis or fear, none of the spells work.","Counter-spell":"Gestures W-P-P or W-W-S. Any other spell cast upon the subject in the same turn has no effect. In the case of blanket spells, which affect more than one person, the subject of the counter-spell alone is protected.\n\nFor example, a fire storm spell could kill off a monster but not if a counter-spell were cast on the monster in the same turn. Everyone else would be affected as usual by the fire storm unless they had their own protection. The counter-spell will cancel all the spells cast at the subject for that turn (including remove enchantment and magic mirror) except dispel magic and finger of death. It will combine with another spell of its own type for the same effect as if it were alone. The counter-spell will also act as a shield on the final gesture in addition to its other properties, but the shield effect is on the same subject as its other effect.","Cure heavy wounds":"This spell is similar to cure light wounds in effect but two points of damage are cured. Note that only one point is cured if only one point of damage has been sustained and the spell has no effect if the subject is completely undamaged.\n\nThis spell will also cure any diseases the subject might have at the time.","Cure light wounds":"If the subject has received damage then he is cured by one point as if that point had not been inflicted.\n\nThus, for example, if a wizard was at ten points of damage and was hit simultaneously by a cure light wounds and a lightning bolt he would finish that turn on fourteen points rather than fifteen (or nine if there had been no lightning bolt).\n\nThe effect is not removed by a dispel magic or remove enchantment.","Delayed effect":"This spell only works if cast upon a wizard. The next spell he completes, provided it is on this turn or one of the next 3 is 'banked' until needed, i.e. it fails to work until its caster desires. This next spell which is to be banked does not include the actual spell doing the banking. The spell must be written down to be used by its caster at the same time that he writes his gestures. Note that spells banked are those cast by the subject not those cast at him. If he casts more than one spell at the same time he chooses which is to be banked. Remember that P is a shield spell, and surrender is not a spell. A wizard may only have one spell banked at any one time.","Disease":"The subject of this spell immediately contracts a deadly (non-contagious) disease which will kill him at the end of 6 turns counting from the one upon which the spell is cast. The malady is cured by remove enchantment or cure heavy wounds or dispel magic in the meantime.","Dispel magic":"This spell acts as a combination of counter-spell and remove enchantment, but its effects are universal rather than limited to the subject of the spell. It will stop any spell cast in the same turn from working (apart from another dispel magic spell which combines with it for the same result), and will remove all enchantments from all beings before they have effect. In addition, all monsters are destroyed although they can attack that turn. Counter-spells and magic mirrors have no effect. The spell will not work on stabs or surrenders. As with a counter-spell it also acts as a shield for its subject.","Fear":"In the turn following the casting of this spell, the subject cannot perform a C, D, F or S gesture. This obviously has no effect on monsters. If the subject is also the subject of amnesia, confusion, charm person, charm monster or paralysis, then none of the spells work.","Finger of death":"Kills the subject stone dead. This spell is so powerful that it is unaffected by a counter-spell although a dispel magic spell cast upon the final gesture will stop it. The usual way to prevent being harmed by this spell is to disrupt it during casting using, for example, an anti-spell.","Fire storm":"Everything not resistant to heat sustains 5 points of damage that turn. The spell cancels wholly, causing no damage, with either an ice storm or an ice elemental. It will destroy but not be destroyed by a fire elemental. Two fire storms act as one.","Fireball":"The subject of this spell is hit by a ball of fire and sustains five points of damage unless he is resistant to fire. If at the same time an ice storm prevails, the subject of the fireball is instead not harmed by either spell, although the storm will affect others as normal. If directed at an ice elemental, the fireball will destroy it before it can attack, but has no other effect on the creatures.","Haste":"For the next 3 turns, the subject (but not his monsters if a wizard) makes an extra set of gestures due to being speeded up. This takes effect in the following turn so that instead of giving one pair of gestures, 2 are given, the effect of both being taken simultaneously at the end of the turn. Thus a single counter-spell from his adversary could cancel 2 spells cast by the hastened wizard on 2 half-turns if the phasing is right. Non-hastened wizards and monsters can see everything the hastened individual is doing. Hastened monsters can change target in the extra turns if desired.","Ice storm":"Everything not resistant to cold sustains 5 points of damage that turn. The spell cancels wholly, causing no damage, with either a fire storm or a fire elemental, and will cancel locally with a fireball. It will destroy but not be destroyed by an ice elemental. Two ice storms act as one.","Invisibility":"This spell is similar to blindness only the subject of the spell becomes invisible to his opponent and his monsters. All spells he creates, though not gestures, can be seen by his opponent and identified. The subject cannot be attacked by any monsters although they can be directed at him in case he becomes visible prematurely. Wizards can still stab and direct spells at him, with the same hope. Any monster made invisible is destroyed due to the unstable nature of such magically created creatures.","Lightning bolt":"Gestures D-F-F-D-D or W-D-D-C. The subject of this spell is hit by a bolt of lightning and sustains five points of damage. Resistance to heat or cold is irrelevant. There are two gesture combinations for the spell, but the shorter one may be used only once per day (i.e. per battle) by any wizard. The longer one may be used without restriction. A shield spell offers no defence.","Magic mirror":"Any spell cast on a subject protected by this spell is reflected back upon the caster of that spell. The magic mirror protects only during the turn in which it was cast. The protection includes spells like missile and lightning bolt but does not include attacks by monsters or stabs from wizards.\n\nThe mirror does not affect spells which are cast upon oneself (e.g. spells from this section and the Summonning section). The mirror is countered totally if either a counter-spell or dispel magic are cast on the subject in the same turn as the mirror. The mirror has no effect on spells which affect more than one person (such as fire storm). Two mirrors cast at one subject simultaneously combine to form a single mirror.","Missile":"This spell creates a material object of hard substance which is hurled towards the subject of the spell and causes him one point of damage. The spell is thwarted by a shield in addition to the usual counter-spell, dispel magic and magic mirror (the latter causing it to hit whoever cast it instead).","Paralysis":"If the subject of the spell is a wizard, then on the turn the spell is cast, after gestures have been revealed, the caster selects one of the wizard's hands and on the next turn that hand is paralyzed into the position it is in this turn. If the wizard already had a paralyzed hand, it must be the same hand which is paralyzed again. Certain gestures remain the same but if the hand being paralyzed is performing a C, S or W it is instead paralyzed into F, D or P respectively, otherwise it will remain in the position written down (this allows repeated stabs). A favourite ploy is to continually paralyze a hand (F-F-F-F-F-F etc.) into a non-P gesture and then set a monster on the subject so that he has to use his other hand to protect himself, but then has no defence against other magical attacks. If the subject of the spell is a monster (excluding elementals which are unaffected) it simply does not attack in the turn following the one in which the spell was cast. If the subject of the spell is also the subject of any of amnesia, confusion, charm person, charm monster or fear, none of the spells work.","Permanency":"This spell only works if cast upon a wizard. The next spell he completes, provided it is on this turn or one of the next 3, and which falls into the category of 'Enchantments' (except anti-spell, disease, poison, or time-stop) will have its effect made permanent. This means that the effect of the extended spell on the first turn of its duration is repeated eternally. For example, a confusion spell will be the same gesture rather than re-rolling the dice, a charm person will mean repetition of the chosen gesture, etc. If the subject of the permanency casts more than one spell at the same time eligible for permanency, he chooses which has its duration extended. Note that the person who has his spell made permanent does not necessarily have to make himself the subject of the spell. A permanency spell cannot increase its own duration, nor the duration of spells saved by a delayed effect (so if both a permanency and delayed effect are eligible for the same spell to be banked or extended, a choice must be made, the losing spell being neutralized and working on the next spell instead).","Poison":"This is the same as the disease spell except that cure heavy wounds does not stop its effects.","Protection from evil":"For this turn and the following 3 turns the subject of this spell is protected as if using a shield spell, thus leaving both hands free. Concurrent shield spells offer no further protection and compound protection from evil spells merely overlap offering no extra cover.","Raise dead":"The subject of this spell is usually a recently-dead (not yet decomposing) human corpse though it may be used on a dead monster. When the spell is cast, life returns to the corpse and all damage is cured. All enchantments are also removed (as per the spell) so any diseases or poisons will be neutralized and all other enchantments removed. If swords, knives, or other implements of destruction still remain in the corpse when it is raised, they will of course cause it damage as usual. The subject will be able to act normally immediately after the spell is cast. On the turn a monster is raised it may attack. Wizards may begin gesturing on the turn following their return from the dead.\n\nThis is the only spell which affects corpses. It therefore cannot be stopped by a counter-spell. A dispel magic spell will prevent its effect, since dispel magic affects all spells no matter what their subject.\n\nIf the spell is cast on a live individual, the effect is that of a cure light wounds recovering five points of damage, or as many as have been sustained if less than five. Note that any diseases the live subject might have are not cured.","Remove enchantment":"Terminates the effects of all Enchantment Spells that have been cast on the subject including those that are cast on the subject at the same time as the remove enchantment. Effects which have already passed are not reversed. For example, the victim of a blindness spell would not be able to see what their opponent's gestures were on the the blindness is removed. Note that all enchantments are removed and the caster may not pick and choose. Remove enchantment also destroys any monster upon which it is cast, although the monster can attack in that turn. Wizards suffer no adverse effects from this spell, aside from the removal of their enchantments.","Resist cold":"The effects of this spell are identical to resist heat but resistance is to cold (ice storm and ice elementals) and it destroys ice elementals if they are the subject of the spell but doesn't affect fire elementals.","Resist heat":"The subject of this spell becomes totally resistant to all forms of heat attack (fireball, fire storm and fire elementals). Only dispel magic or remove enchantment will terminate this resistance once started (although a counter-spell will prevent it from working if cast at the subject at the same time as this spell). A resist heat cast directly on a fire elemental will destroy it before it can attack that turn, but there is no effect on ice elementals.","Shield":"This spell protects the subject from all attacks from monsters (that is, creatures created by a summonning spell), from missile spells, and from stabs by wizards. The shield will block any number of such attacks but lasts for only one round. The shield protects the subject on the turn in which it is cast.","Summon elemental":"This spell creates either a fire elemental or an ice elemental at the discretion of the person upon whom the spell is cast after he has seen all the gestures made that turn. Elementals must be cast at someone and cannot be 'shot off' harmlessly at some inanimate object.\n\nThe elemental will, for that turn and until destroyed, attack everyone who is not resistant to its type (heat or cold), causing three points of damage per turn. The elemental takes three points of damage to be killed but may be destroyed by spells of the opposite type (e.g. fire storm, resist cold or fireball will kill an ice elemental), and will also neutralize the canceling spell. Elementals will not attack on the turn they are destroyed by such a spell. An elemental will also be engulfed and destroyed by a storm of its own type but, in such an event, the storm is not neutralized although the elemental still does not attack in that turn. Two elementals of the opposite type will also destroy each other before attacking, and two of the same type will join together to form a single elemental of normal strength. Note that only wizards or monsters resistant to the type of elemental, or who are casting a spell which has the effect of a shield do not get attacked by the elemental. Casting a fireball upon yourself when being attacked by an ice elemental is no defence! (Cast it at the elemental...)","Summon giant":"This spell is the same as summon goblin but the giant created inflicts and is destroyed by four points of damage rather than one.","Summon goblin":" This spell creates a goblin under the control of the subject upon whom the spell is cast (or if cast on a monster, the subject monster's controller, even if the monster later dies or changes loyalty). The goblin can attack immediately and its victim can be any any wizard or other monster the controller desires, stating which at the time he writes his gestures. It does one point of damage to its victim per turn and is destroyed after one point of damage is inflicted upon it.\n\nThe summoning spell cannot be cast at an elemental, and if cast at something which doesn't exist, the spell has no effect.","Summon ogre":"This spell is the same as summon goblin but the ogre created inflicts and is destroyed by two points of damage rather than one.","Summon troll":"This spell is the same as summon goblin but the troll created inflicts and is destroyed by three points of damage rather than one.","Surrender":" This is not a spell and consequently cannot be cast at anyone. The wizard making these gestures, irrespective of whether they terminate spells or not, surrenders and the contest is over. The surrendering wizard is deemed to have lost unless his gestures completed spells which killed his opponent. Two simultaneous surrenders count as a draw. It is a skill for wizards to work their spells so that they never accidentally perform 2 P gestures simultaneously. Wizards can be killed as they surrender if hit with appropriate spells or attacked physically, but the 'referees' will cure any diseases, poisons etc immediately after the surrender for them.","Time stop":"The subject of this spell immediately takes an extra turn, on which no-one can see or know about unless they are harmed. All non-affected beings have no resistance to any form of attack, e.g. a wizard halfway through the duration of a protection from evil spell can be harmed by a monster which has had its time stopped. Time-stopped monsters attack whoever their controller instructs, and time-stopped elementals affect everyone, resistance to heat or cold being immaterial in that turn."};

var theTable = document.getElementById("spells_table");
generate_table(theTable, spells);

var tables = [ spells, reverseSpells, spellsAlpha];
var options = [];
options.push(document.getElementById("option_forward"));
options.push(document.getElementById("option_backward"));
options.push(document.getElementById("option_spell"));
options.push(document.getElementById("option_rules"));

(function init(){
	var rules    = document.getElementById("rules");
	var closeBtn = document.getElementById("spell_close");
	var content  = document.getElementById("content_wrapper");
	var spellDef = document.getElementById("spell_definition");

	// routing options if user refreshes with hash in url
	window.onload = function (event) {
		window.onhashchange();
	};

	// normal routing
	window.onhashchange = function() {
		if (window.location.hash == "#rules") {
			rules.style.display    = "block";
			content.style.display  = "none";
			closeBtn.style.display = "none";
			return;
		}
		content.style.display  = "block";
		rules.style.display = "none";
		spellDef.style.display = "none";
		closeBtn.style.display = "none";
	}

	// set up click events for menu
	options[3].onclick = function(){
		window.location.hash = "rules";
	};
	for(var i = 0; i < options.length-1; ++i){
		options[i].onclick = function(i){ return function(){optionPress(i)}; }(i);
	}

	closeBtn.onclick = function(){
		content.style.display  = "block";
		rules.style.display = "none";
		spellDef.style.display = "none";
		closeBtn.style.display = "none";
	}

})();

function optionPress(num){
	for(var i = 0; i < options.length; ++i){
		options[i].className="option"
	}
	options[num].className+=" option_selected";
	generate_table(theTable, tables[num]);
}

function showSpellDef(name, text){
	//clear the previous def
	var rules    = document.getElementById("rules");
	var content  = document.getElementById("content_wrapper");
	var spellDef = document.getElementById("spell_definition");
	var closeBtn = document.getElementById("spell_close");

	while (spellDef.firstChild) {
		spellDef.removeChild(spellDef.firstChild);
	}

	// set up new one
	var defTitle = document.createElement('h2');
	defTitle.appendChild(document.createTextNode(name));
	var defText = document.createElement('p');

	//find newlines in text and insert <br> elements
	var found;
	while ((found = text.indexOf("\n")) !== -1){
		var line = text.substring(0,found);
		defText.appendChild(document.createTextNode(line));
		defText.appendChild(document.createElement('br')); // add line break between lines
		text = text.slice(found+1);
	}
	defText.appendChild(document.createTextNode(text));

	spellDef.appendChild(defTitle);
	spellDef.appendChild(defText);

	content.style.display  = "none";
	rules.style.display = "none";
	spellDef.style.display = "block";
	closeBtn.style.display = "block";

}

function generate_table(table, spellData){
	// clear table
	while (table.firstChild) {
		table.removeChild(table.firstChild);
	}

	// add sorted spells
	for(var i = 0; i < spellData.length; ++i){
		var tr = document.createElement('tr');
		var td_gesture   = document.createElement('td');
		var td_spellName = document.createElement('td');

		td_gesture.appendChild(document.createTextNode(spellData[i].gestures));
		td_spellName.appendChild(document.createTextNode(spellData[i].spellName));

		tr.appendChild(td_gesture);
		tr.appendChild(td_spellName);

		// click event for spell definitions
		tr.onclick = function(i){ return function(){ showSpellDef(spellData[i].spellName, spellDefinitions[spellData[i].spellName]); }; }(i);

		table.appendChild(tr);
	}
}

