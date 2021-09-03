var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

for (i=0; i< friends.length; i++)
{
    console.log(friends[i])
    list += `<div class=row-8> 
    <button class="card" id="${i}" onclick="openClick(event)"  value="${friends[i]}">${friends[i]}</button><br>
    </div>`
}
document.getElementById('chatTitle').innerHTML = friends[0]
document.getElementById('friends').innerHTML = list

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
//     document.getElementById("current").click();

function openClick(e) {
    // var i, table, cards;
    // table = document.getElementsByClassName("chatTable");
    // console.log(e.currentTarget.getAttribute('value'))
    // for (i = 0; i < table.length; i++) {
    //     table[i].style.display = "none";
    // }
    var cards = document.getElementsByClassName("card");
    // console.log(document.getElementsByClassName("card"))
    for (i = 0; i < cards.length; i++) {
            cards[i].className = cards[i].className.replace(" active", "");
        }
        // document.getElementById(user).style.display = "block";
    e.currentTarget.className += " active";
        // console.log(e)
    document.getElementById('chatTitle').innerHTML = e.currentTarget.getAttribute('value')

}
// document.getElementById("friends").click();      

// var aayush = JSON.parse(localStorage.getItem('Aayush Pandey'))
// console.log(aayush)

// var list = ''
// console.log(list)

// for (i=0; i < aayush.length; i++)
// {
//     console.log(aayush[i])
//     list += `<div class="chats" id="${i}"><h4>${aayush[i]}</h4></div>`
// }

var Aayush = [["Aayush Pandey","Hii",1212443],["Avikal Shukla", "Hello", 1223435],["Aayush Pandey", "How are you", 1324355],["Avikal Shukla", "I am good.", 1243545]]
    
var Aryan = [["Aryan Gupta","Hey",1212443],["Avikal Shukla", "Hii", 1223435],["Aryan Gupta", "How are you", 1324355],["Avikal Shukla", "I am fine.", 1243545]]

localStorage.setItem("Aayush Pandey", JSON.stringify(Aayush))
localStorage.setItem("Aryan Gupta", JSON.stringify(Aryan))

// document.getElementById('Aayush Pandey').innerHTML = list
// console.log(list)