// JavaScript source code
//Juan Diego Solorzano 18151
//Laboratorio 5

document.body.style.backgroundImage = "url('https://cdn.hipwallpaper.com/i/98/9/CBKgYn.jpg')";
//Titulo
let title = document.createElement('h1');
let titletxt = document.createTextNode("JS Chat");
title.appendChild(titletxt);
title.style.font = "italic bold 50px arial,serif";
title.style.textAlign = "center";
title.style.color = "white";
document.body.appendChild(title);

//Display para el mensaje
let box = document.createElement('article');
box.style.backgroundColor = "gray";
box.style.height = "700px";
box.style.width = "1000px";
box.style.marginLeft = "450px"
box.style.overflowY = "scroll";
box.style.fontSize = "  x-large";
box.style.borderRadius = "25px 0 0 0";
document.body.appendChild(box);

//Area para ingresar mensaje en parte inferior
let inputChat = document.createElement('input');
inputChat.style.backgroundColor = "white";
inputChat.style.height = "50px";
inputChat.style.width = "700px";
inputChat.style.marginLeft = "450px"
inputChat.style.paddingLeft = "15px"
inputChat.style.fontSize = "large";
inputChat.style.overflow = "auto";
inputChat.style.borderRadius = "0 0 0 25px";
inputChat.placeholder = "Type here..."
inputChat.maxLength = 140;                  //Maximo 140 caracteres
document.body.appendChild(inputChat);

//Boton para enviar mensaje
let enterButton = document.createElement('button');
enterButton.style.backgroundColor = "white";
enterButton.style.height = "59px";
enterButton.style.width = "280px";
let bttnT = document.createTextNode("Enter");
enterButton.appendChild(bttnT);
enterButton.style.fontSize = "large";
enterButton.style.borderRadius = "0 0 25px 0";
document.body.appendChild(enterButton);

enterButton.onclick = sendMessage;

getMessages();


function getMessages() {


    fetch("http://quetzaluno.space:3000/messages").then(
        response => response.json()).then(
            response => {
                response.map(messg => {
                    let break1 = document.createElement("br");
                    let par = document.createElement("p");
                    par.style.backgroundColor = "white";
                    par.style.wordWrap = "break-word";
                    par.style.paddingLeft = "15px";
                    par.style.paddingRight = "15px";
                    par.style.borderRadius = "25px";
                    par.style.paddingTop = "10px";
                    par.style.paddingBottom = "10px";
                    par.style.marginLeft = "10px";
                    par.style.marginRight = "10px";
                    if (messg.username == "Juan Diego") {
                        par.style.textAlign = "right";
                    }
                    par.append(messg.username);
                    par.append(break1);
                    if (messg.message.includes(".jpg") || messg.message.includes(".png")) {
                        let photos = document.createElement("img");
                        photos.src = messg.message;
                        photos.style.height = "200px";
                        photos.style.width = "200px";
                        par.append(photos);
                    }
                    else {
                        par.append(messg.message);
                    }

                    box.appendChild(par);
                    box.scrollTop = box.scrollHeight;       //Scroll se mantiene abajo
                }
                )
            })
        ;
    
}


async function sendMessage() {
    var inpu = inputChat.value;
    if (inpu != "") {


        var messageS = {
            username: "Juan Diego",
            message: inpu
        }
        let respo = await fetch('http://quetzaluno.space:3000/messages', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(messageS)
        });
        
        inputChat.value = "";
        
    }
    box.innerHTML = "";
    getMessages();
    
}

//Ingresa el mensaje si presiona enter
inputChat.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
})
 
