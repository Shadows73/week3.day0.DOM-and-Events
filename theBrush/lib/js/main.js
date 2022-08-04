let body = document.querySelector("body");
console.log(body);
let myImage = document.getElementById("rengar");
body.onclick = function() {
    myImage.src = "assets/rengar.png";
    alert("You've been deleted")
}

