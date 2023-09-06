let score  = 0;
let scoreHTML = document.getElementById("score");

function increase() {
    scoreHTML.innerHTML = score++;

}

function welcome() {
    let name = prompt("your name")
    document.getElementById("title").innerHTML = name;

}
