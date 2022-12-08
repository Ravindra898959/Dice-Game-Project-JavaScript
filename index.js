var randomNumbers1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource01 = "images/dice" + randomNumbers1 + ".png"; // random iamge 1-6
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource01);   

var randomNumbers2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource02 = "images/dice" + randomNumbers2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource02);

if (randomNumbers1 > randomNumbers2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS 🚩";
}
else if (randomNumbers2 > randomNumbers1){
    document.querySelector("h1").innerHTML = "🚩 PLAYER 2 WINS ";
}
else {
    document.querySelector("h1").innerHTML = "DRAW!";
}
