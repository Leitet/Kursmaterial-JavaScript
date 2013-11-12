
/* H�r skapar vi en konstruktorfunktion Robot. Detta blir v�r "klass".
 * Observera att i denna fil finns enbart s�dant som h�r till "klassen". Detta f�r att underl�tta
 * f�r oss n�r vi l�ser koden. Sj�lva applikationen k�rs ig�ng i robot_run.js
 */

function Robot(arms, legs){

	// Getters
	this.getArms = function(){return arms;};
	this.getLegs = function(){return legs;};

	// Setters
	this.setArms = function(_arms){arms = _arms || 0;};
	this.setLegs = function(_legs){legs = _legs || 0;};
	// Anropa setters n�r konstruktorn anropas
	this.setArms(arms);
	this.setLegs(legs);

	// Privat
	var killHumans = true;
	
	// Publik
	this.killHumans = false;
		
	// metoden start kommer �t den privata variablen killHumans och inte den publika om inte this anv�nds.
	this.start = function(){
		armYourself();
		
		if(killHumans){
			alert("Pang");
		}
		
	};
	
	// Privata metoder kommer inte �t publika egenskaper
	// D�rf�r l�gger vi en privat medlem (that) som pekar p� (this)
	// Privata medlemmar har �ven den privata metoden �tkomst till.
	// Konceptet heter closures och kommer att f�rklaras n�rmre senare.
	var that = this;
	
	var armYourself = function(){
		//alert("All "+this.getArms()+" arms are armed."); 	// Get tolkningsfel eftersom metoden inte har �tkomst till this.
		alert("All "+that.getArms()+" arms are armed."); 	// All undefined arms are armed);
	};
}

Robot.prototype.pokeHuman = function(){
   return "it was dead. poked it with "+this.getArms()+" arms.";
};
/* toString ska vi ta f�r vana att alltid �verlagra.
 * 
 */
Robot.prototype.toString = function(){
	return "I am a robot with "+this.getArms()+" arms and "+this.getLegs()+" legs.";
};

/*  Value of �r ganska meningsl�s p� en robot, men ska man jobba med objekt som kan ber�knas �r den bra
 * att �verlagra.
 */
Robot.prototype.valueOf = function(){
	return this.getArms() + this.getLegs();	
};

