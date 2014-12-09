define(["Message", "Mustache"], function(Message, Mustache) {

    var messages =  [];
    var textField = null, messageArea = null;

    
    textField = document.getElementById("inputText");
    messageArea = document.getElementById("messagearea");

    // Add eventhandlers    
    document.getElementById("inputText").onfocus = function(e){ this.className = "focus"; }
    document.getElementById("inputText").onblur = function(e){ this.className = "blur" }
    document.getElementById("buttonSend").onclick = function(e) {sendMessage(); return false;}

    textField.onkeypress = function(e){ 
        if(!e) var e = window.event;
        
        if(e.keyCode == 13 && !e.shiftKey){
            sendMessage();                                              
            return false;
        }
    }

    
    function sendMessage(){
        
     /*   if(textField.value == "") return;
        
        var mess = new Message(textField.value, new Date());
        var messageID = messages.push(mess)-1;
    
        renderMessage(messageID);
        
        textField.value = "";
        
        document.getElementById("nrOfMessages").innerHTML = messages.length;*/


        var lielements = document.querySelectorAll("#test li");
        Array.forEach.call(lielements, function(li){

            console.log(li.innerHTML);

        });

    
    }


    function renderMessages(){
        // Remove all messages
        messageArea.innerHTML = "";
     
        // Renders all messages.
        for(var i=0; i < messages.length; ++i){
            renderMessage(i);
        }        
        
        document.getElementById("nrOfMessages").innerHTML = messages.length;
    }

    function renderMessage(messageID){
        
        
        var message = document.createElement("div");
        message.setAttribute("class", "message");

        // Read, parse and render from html-code in index.html
        var template = document.querySelector('#templateMessage').innerHTML;
        Mustache.parse(template); 
          
        var view = {
            text: messages[messageID].getHTMLText(),
            time: messages[messageID].getDateText()
        };

        message.innerHTML = Mustache.render(template, view);        
       
       
        message.querySelector(".close").addEventListener("click", function(e) {
            removeMessage(messageID);        
            e.preventDefault();
        });

        message.querySelector(".showTime").addEventListener("click", function(e){
           showTime(messageID);
           e.preventDefault();
        });
        
         messageArea.appendChild(message);
        
    }
    
    function removeMessage(messageID){
        if(window.confirm("Vill du verkligen radera meddelandet?")){
        
            messages.splice(messageID,1); // Removes the message from the array.
        
            renderMessages();
        }
    }

    function showTime(messageID){
         
         var time = messages[messageID].getDate();
         
         var showTime = "Inlägget skapades "+time.toLocaleDateString()+" klockan "+time.toLocaleTimeString();

         alert(showTime);
    }




});
