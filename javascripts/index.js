var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)
// list = `<h2 id="friends">Friends</h2>`
for (i=0; i< friends.length;  i++)
{
    console.log(friends[i])
    list += `<div class="card" id="${i}"><h4>${friends[i]}</h4></div>`
}   

document.getElementById('friends').innerHTML = list