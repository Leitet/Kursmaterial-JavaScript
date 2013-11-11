function Animal(name){
	this.name = name;	
	
	var that = this;
	
	var privateFunction = function(){
		//this.scream(); Fungerar inte. Felaktighet i standarden.
		that.scream();	
		
	}
	
	
	privateFunction();
}

Animal.prototype.scream = function(){
	alert("Wooooaaaa s�ger "+this.name);
}

Animal.prototype.getName = function(){
	return name;	
}


new Animal("Olof");