var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

var AayushPandey = [["Aayush Pandey","Hii",1212443],["Avikal Shukla", "Hello", 1223435],["Aayush Pandey", "How are you", 1324355],["Avikal Shukla", "I am good.", 1243545]]
var AryanGupta = [["Aryan Gupta","Hey",1212443],["Avikal Shukla", "Hii", 1223435],["Aryan Gupta", "How are you", 1324355],["Avikal Shukla", "I am fine.", 1243545]]

for (i=0; i< friends.length; i++)
{
    console.log(friends[i])
    list += `<div class=row-8> 
    <button class="card" id="${i}" onclick="openClick(event)" value="${friends[i]}">${friends[i]}</button><br>
    </div>`
}
document.getElementById('chatTitle').innerHTML = friends[0]
document.getElementById('friends').innerHTML = list

if(window[friends[0].split(" ").join("")] ==  null){
    window[friends[0].split(" ").join("")] = []
    chat(window[friends[0].split(" ").join("")])
}

function openClick(e) {
    var cards = document.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
            cards[i].className = cards[i].className.replace(" active", "");
        }
    e.currentTarget.className += " active";
    document.getElementById('chatTitle').innerHTML = e.currentTarget.getAttribute('value')
    console.log(e.currentTarget.getAttribute('value').split(" ").join(""))
    chat(window[e.currentTarget.getAttribute('value').split(" ").join("")])
}

function chat(name){
    var list = ''
    console.log(list)

    for (i=0; i < name.length; i++)
    {
        console.log(name[i][0]==localStorage.getItem("name"))
        if(name[i][0]==localStorage.getItem("name")){
            list += `<div class="chats col-md-3 offset-md-9 chat-bubble chat-bubble--right" id="${i}"><h4>${name[i][1]}</h4></div>`
        }
        else{
            list += `<div class="chats col-md-3 chat-bubble chat-bubble--left" id="${i}"><h4>${name[i][1]}</h4></div>`
        }

    }
    document.getElementById("chatBody").innerHTML = list
}

// var aayush = JSON.parse(localStorage.getItem('AayushPandey'))
// console.log(aayush)

// localStorage.setItem("AayushPandey", JSON.stringify(AayushPandey))
// localStorage.setItem("AryanGupta", JSON.stringify(AryanGupta))


function chatUser(){
    var  friendChat = 
    console.log(friendChat)
    var AayushPandey = JSON.parse(localStorage.getItem("AayushPandey"))
    if(AayushPandey ==  null){
        AayushPandey = []
    }
    AayushPandey.push(["Avikal Shukla", document.getElementById("inbox").value, Date.now()])
    console.log("Avikal Shukla", document.getElementById("inbox").value, Date.now())
    localStorage.setItem("AayushPandey", JSON.stringify(AayushPandey))
    console.log(AayushPandey)
    // location.replace("/home/celticlab/Desktop/Chat-App/public/index.html")
}
document.getElementById("inbox").innerHTML = AayushPandey
