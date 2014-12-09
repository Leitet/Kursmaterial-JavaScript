"use strict";

var MessageBoard = {

    messages: [],
    textField: null,
    messageArea: null,

    init:function(e)
    {
	
		    MessageBoard.textField = document.getElementById("inputText");
            MessageBoard.messageArea = document.getElementById("messagearea");
    
            // Add eventhandlers    
            document.getElementById("inputText").onfocus = function(e){ this.className = "focus"; }
            document.getElementById("inputText").onblur = function(e){ this.className = "blur" }
            document.getElementById("buttonSend").onclick = function(e) {MessageBoard.sendMessage(); return false;}
    
            MessageBoard.textField.onkeypress = function(e){ 
                                                    if(!e) var e = window.event;
                                                    
                                                    if(e.keyCode == 13 && !e.shiftKey){
                                                        MessageBoard.sendMessage();                                              
                                                        return false;
                                                    }
                                                }
    
    },
    sendMessage:function(){
        
        if(MessageBoard.textField.value == "") return;
        
        var mess = new Message(MessageBoard.textField.value, new Date());
        var messageID = MessageBoard.messages.push(mess)-1;
    
        MessageBoard.renderMessage(messageID);
        
        MessageBoard.textField.value = "";
        
        document.getElementById("nrOfMessages").innerHTML = MessageBoard.messages.length;
    
    },
    renderMessages: function(){
        // Remove all messages
        MessageBoard.messageArea.innerHTML = "";
     
        // Renders all messages.
        for(var i=0; i < MessageBoard.messages.length; ++i){
            MessageBoard.renderMessage(i);
        }        
        
        document.getElementById("nrOfMessages").innerHTML = MessageBoard.messages.length;
    },
    renderMessage: function(messageID){
        // Message div
        var div = document.createElement("div");
        div.className = "message";
        
        // Close button
        var aClose = document.createElement("a");
        aClose.href="#";
       
		
        var imgClose = document.createElement("img");
        imgClose.src="pic/delete.png";
        imgClose.alt="Close";
        
        aClose.appendChild(imgClose);
        div.appendChild(aClose);
       
        // Clock button
        var aClock = document.createElement("a");
        aClock.href="#";

        
        var imgClock = document.createElement("img");
        imgClock.src="pic/clock.png";
        imgClock.alt="Show creation time";
        
        aClock.appendChild(imgClock);
        div.appendChild(aClock);
       
        // Message text
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();        
        div.appendChild(text);
            
        // Time
        var spanDate = document.createElement("span");
        spanDate.appendChild(document.createTextNode(MessageBoard.messages[messageID].getDateText()))

        div.appendChild(spanDate);        
        
        var spanClear = document.createElement("span");
        spanClear.className = "clear";

        div.appendChild(spanClear);       


        aClose.onclick = function() {
            MessageBoard.removeMessage(messageID);        
            return false;
        }

        aClock.onclick = function(){
            MessageBoard.showTime(messageID);
            return false;           
        }
        
        MessageBoard.messageArea.appendChild(div);       
    },
    removeMessage: function(messageID){
		if(window.confirm("Vill du verkligen radera meddelandet?")){
        
			MessageBoard.messages.splice(messageID,1); // Removes the message from the array.
        
			MessageBoard.renderMessages();
        }
    },
    showTime: function(messageID){
         
         var time = MessageBoard.messages[messageID].getDate();
         
         var showTime = "Inlägget skapades "+time.toLocaleDateString()+" klockan "+time.toLocaleTimeString();

         alert(showTime);
    }
}

window.onload = MessageBoard.init;