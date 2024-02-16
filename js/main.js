//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var ChatContainer = document.getElementById('ChatContainer');
var httpRequest = new XMLHttpRequest();

setTimeout(function(){
    
    chatbotSendMessage("hi, how can i help you!");
},1000);




function chatbotSendMessage(messageText){


    if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){

     var result = JSON.parse(httpRequest.responseText);
     
     
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('rounded');
    messageElement.style.float ="left";
    messageElement.style.margin="5px";
    messageElement.style.padding="5px";
    messageElement.style.boxShadow="2px 2px  ";
    messageElement.style.border= "2px solid #fff";

    messageElement.style.background="#5F9EA0";
    
 
 

    messageElement.innerHTML = "<span>chat: </span>"+
    "<span style="+"margin-top: 10px; padding:10px"+">"+ result.response_message +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    
    
    ChatContainer.appendChild(messageElement);
    }
    else{

        //alert('error');
    }


}

function sendMessage(messageText){

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('rounded');
    messageElement.style.float ="right";
    messageElement.style.margin="5px";
    messageElement.style.padding="5px";
    messageElement.style.boxShadow="2px 2px ";
    messageElement.style.border= "2px solid #fff";
    messageElement.style.background="#F8F8FF";
    

    

    messageElement.innerHTML = "<span>You: </span>"+
    "<span style="+"margin-top: 10px; padding:10px"+">"+ messageText+"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    
    ChatContainer.appendChild(messageElement);

    makeRequest(messageText);


}

function makeRequest(messageText){

    //ajax
    
    httpRequest.open('GET','chatbot.php?message='+messageText,true);
    httpRequest.send();
    httpRequest.onreadystatechange = chatbotSendMessage;






}
sendBtn.addEventListener('click',function(e){

    if (textbox.value ==""){
        alert('Please type in a message');
    }
    else{
    let messageText = textbox.value;
    sendMessage(messageText);
    textbox.value ="";
}
});