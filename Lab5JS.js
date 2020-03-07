// JavaScript source code
//Juan Diego Solorzano 18151
//Laboratorio 5

document.body.style.backgroundColor = "#E8E8E8";

//Titulo
let title = document.createElement('h1');
let titletxt = document.createTextNode("JS Chat");
title.appendChild(titletxt);
title.style.font = "italic bold 50px arial,serif";
title.style.textAlign = "center";
document.body.appendChild(title);

//Display para el mensaje
let box = document.createElement('textarea');
box.style.backgroundColor = "gray";
box.style.height = "50px";
box.style.width = "970px";
box.style.marginLeft = "450px"
box.style.textAlign = "right";
box.style.padding = "700px 30px 0 0px";
box.style.fontSize = "xx-large";
document.body.appendChild(box);

//Area para ingresar mensaje en parte inferior
let inputChat = document.createElement('input');
inputChat.style.backgroundColor = "white";
inputChat.style.height = "50px";
inputChat.style.width = "700px";
inputChat.style.marginLeft = "450px"
inputChat.style.fontSize = "large";
inputChat.style.overflow = "auto";
inputChat.maxLength = 140;                  //Maximo 140 caracteres
document.body.appendChild(inputChat);

//Boton para enviar mensaje
let enterButton = document.createElement('button');
enterButton.style.backgroundColor = "white";
enterButton.style.height = "50px";
enterButton.style.width = "285px";
enterButton.style.marginLeft = "10px"
let bttnT = document.createTextNode("Enter");
enterButton.appendChild(bttnT);
enterButton.style.fontSize = "large";
document.body.appendChild(enterButton);

enterButton.onclick = enterMessage;

//Ingresa el mensaje si presiona enter
inputChat.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        enterMessage();
    }
})
 
//Ingresa mensaje al textarea
function enterMessage(){
    var inVal = inputChat.value;
    if (inVal != ""){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let bt = document.createTextNode(inVal + " - " + time + "\n");
    box.appendChild(bt);
    inputChat.value = "";
    box.scrollTop = box.scrollHeight;       //Scroll se mantiene abajo
    }
}