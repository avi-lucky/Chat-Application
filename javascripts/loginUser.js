function logIn() {
    localStorage.setItem("name", document.getElementById("name").value)
    location.replace("/home/celticlab/Desktop/Chat-App/public/index.html")
}