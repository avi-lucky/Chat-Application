var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

for (i=0; i< friends.length; i++)
{
    console.log(friends[i])
    list += `<button class="card" id="${i}" onclick="openClick(event)"><h4>${friends[i]}</h4></button><br>`
}

// function openLink(e, info) {    
//     var i, content, links;
//     content = document.getElementsByClassName("fadeIn");
//     for (i = 0; i < content.length; i++) {  
//     content[i].style.display = "none";
//     }
//     links = document.getElementsByClassName("demo");
//     for (i = 0; i < links.length; i++) {
//     links[i].className = links[i].className.replace(" active", "");
//     }
//     document.getElementById(info).style.display = "block";
//     e.currentTarget.className += " active";
//     console.log(e)
//     }
    // document.getElementById("current").click();

function openClick(e) {
    var i, cards;
    cards = document.getElementsByClassName("card");
    console.log(document.getElementsByClassName("card"))
    for (i = 0; i < cards.length; i++) {
            cards[i].className = cards[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active";
}      
document.getElementById('friends').innerHTML = list

var chat = JSON.parse(localStorage.getItem('chat'))
var list = ''
console.log(list)

for (i=0; i< chat.length; i++)
{
    console.log(chat[i])
    list += `<div class="chats" id="${i}"><h2>${chat[i]}</h2></div>`
}

var chat = [["Himanshu","Hi",1212443],["Avikal", "Hello", 1223435],["Himanshu", "How are you", 1324355],["Avikal", "I am good.", 1243545]]

friends.push(document.getElementById("chat").value)

localStorage.setItem("chat", JSON.stringify(chat))

document.getElementById('chat').innerHTML = list