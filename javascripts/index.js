var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

for (i=0; i< friends.length;  i++)
{
    console.log(friends[i])
    list += `<div class="card" id="${i}"><h4>${friends[i]}</h4></div>`
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

document.getElementById('friends').innerHTML = list