var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

for (i=0; i< friends.length;  i++)
{
    console.log(friends[i])
    list += `<button class="card" id="${i}" onclick="openClick(event)"><h4>${friends[i]}</h4></button><br>`
}

function openLink(e, info) {    
    var i, content, links;
    content = document.getElementsByClassName("fadeIn");
    for (i = 0; i < content.length; i++) {  
    content[i].style.display = "none";
    }
    links = document.getElementsByClassName("demo");
    for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    e.currentTarget.className += " active";
    }
    document.getElementById("current").click();

function openClick(e) {
    // document.getElementById('friends').style.display = "block";
    e.currentTarget.className += " active";
    // document.getElementById('friends').click();
  }

document.getElementById('friends').innerHTML = list

var chat = JSON.parse(localStorage.getItem('chat'))

var chat = [["Himanshu","Hi",1212443],["Avikal", "Hello", 1223435],["Himanshu", "How are you", 1324355],["Avikal", "I am good.", 1243545]]

localStorage.setItem("chat", JSON.stringify(chat))