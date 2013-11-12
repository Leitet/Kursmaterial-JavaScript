var DOMTester = {
   

    init:function()
    {
	
		// Exempel 1
		/*
		var element = document.getElementById("menu");
		alert("Name of #menu-element: "+element.nodeName);

		var elements = document.getElementsByTagName("li");
		alert("Number of li-elements: "+elements.length);
		
		elements = document.getElementsByTagName("ul");
		alert("Number of ul-elements: "+elements.length);
		
		// H�mtar ut samtliga li-element i den f�rsta ul-taggen
		elements = elements[0].getElementsByTagName("li");
		alert("Number of li-elements: "+elements.length);
		*/
		
		// Exempel 1.1
		
		var elements = document.querySelectorAll("#subcontent a");
		console.log(elements.length);
		
		// Exempel 2
		/*
		var node = document.getElementById("content");
		var ps = node.getElementsByTagName("p");
		
		alert(ps[0].firstChild.nodeValue);
		
		// Observera att vi inte kan anv�nda nodeValue f�r att l�gga till nya taggar i DOMen.
		ps[0].firstChild.nodeValue = "Nu �r <strong>texten</strong> i f�rsta paragrafen �ndrad till det h�r!";
		*/
		
		
		// Exempel 3
		// Vad h�nder om du k�r denna i IE kontra FireFox eller Opera?
		/*
		var ul = document.getElementById("menu").getElementsByTagName("ul")[0];
		
		var tmpString = new String();
		
		for(var i = 0; i < ul.childNodes.length; ++i)
		{
		
		    // if(ul.childNodes[i].nodeType == 1)
			tmpString += ul.childNodes[i].nodeName+"\n";
		}
		
		alert(tmpString);
		*/

		// Exempel 4
		// Observera att IE?7? inte bara �ndrar href-attributet utan �ven l�nktexten. En s�kerhetsdetalj?
		
		// Ett s�tt (�ldre) att s�tta attribut p�. V�ldigt enkelt och trevligt.
		/*
		var node = document.getElementById("subcontent").getElementsByTagName("a")[0];
		node.href = "http://www.hik.se";
		node.class = "link"; // Fungerar inte
		node.className = "link"; // M�ste anv�ndas ist�llet

		// Att g�ra samma sak enligt DOM-standarden.
		node = document.getElementById("subcontent").getElementsByTagName("a")[1];
		node.setAttribute("href", "http://www.sunet.se");
		node.setAttribute("class", "link");
		*/
		
		// Exempel 5
		/*
		var node = document.getElementById("subcontent").getElementsByTagName("ul")[0];
		
		var newNode = node.cloneNode(true);
		
		document.getElementById("subcontent").appendChild(newNode);
		*/
		
		
		// Exempel 6
		/*
		var node = document.getElementById("maincontent");
		
		node.innerHTML += "<h2>En rubrik l�ngst ned p� sidan</h2><p id='myP' >F�ljd av en p-tagg med attributet id satt.</p>";
		
		node  = document.getElementById("myP");
		
		alert(node.firstChild.nodeValue);
		*/


    }

} // End DOMTester


window.onload = DOMTester.init;







