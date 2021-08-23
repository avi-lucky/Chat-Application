var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)
// list = `<h2 id="friends">Friends</h2>`
for (i=0; i< friends.length;  i++)
{
    console.log(friends[i])
    list += `<div class="row-8" id="${i}"></div>`
    list += `<h4>${friends[i]}</h4>`
}   

document.getElementById('friends').innerHTML = list