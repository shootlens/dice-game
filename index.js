var randomNumber1 = Math.floor(Math.random() *6) +1;

var randomImage = "dice" +randomNumber1+ ".jpeg";

var randomImageSource = "images/" +randomImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomImage2 = "dice" +randomNumber2+ ".jpeg";

var randomImageSource2 = "images/" +randomImage2;


document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
