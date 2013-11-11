/* Konstruktorfunktionen BartBoard anropas med new d� vi vill skapa nya instanser av v�r "BartBoard"-applikation.
 * theText - Den text vi vill ska skrivas ut p� tavlan.
 * divId - id:t p� den divtag som kommer att bli denna instans tavla. 
 */
function Popup(text){
	
	var div = document.createElement("div");
	
	div.className = "popupWindow";
	
	
	var p  = document.createElement("p");
	p.appendChild(document.createTextNode(text));
	div.appendChild(p);
	document.body.appendChild(div);
	
	var button = document.createElement("input");
	button.type = "button";
	button.value = "St�ng";
	div.appendChild(button);
	
	button.onclick = closePopup;
	
	function closePopup(){
				
		document.body.removeChild(div);
		
	}
	
}


/* H�r har jag skrivit den kod som startar hela applikationen. 
 * Jag v�ljer att skapa tv� BartBoards men vi kan skapa hur m�nga som helst. 
 * Testa g�rna men gl�m inte att �ven skapa divtaggar i HTML-koden.
 * Anledningen till att jag manuellt skapar divtaggarna och inte l�ter applikationen g�ra det
 * �r att jag d� l�ttare kan styra var tavlorna kommer att skrivas ut.
  */
window.onload = function(){
	
	var link = document.getElementById("popuplink1");
	
	link.onclick = function(){
		
		new Popup("Du har klickat p� denna l�nk... Intressant");
		return false;
	}
	
	var link = document.getElementById("popuplink2");
	
	link.onclick = function(){
		
		new Popup("Helt annan information");
		return false;
	}
	
	
	 
};
