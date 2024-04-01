var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var Dice1 = "dice" + randomNumber1 +".png";
var randomDice = "images/" + Dice1;

document.querySelector("img");
image1 = document.querySelector("img");
image1.setAttribute("src",randomDice);

var randomNumber2 = Math.random()*6;
randomNumber2 =Math.floor(randomNumber2)+1;
console.log(randomNumber2);


// var Dice2 = "dice" + randomNumber2 +".png";
// var randomDice1 = "image/" + Dice2;
// document.querySelector("img")[1];
// image2 = document.querySelector("img")[1];
// image2.setAttribute("src",randomDice1);
var dice2 ="images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2)


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML= "Player 2 Wins";
}

else {
  document.querySelector("h1").innerHTML = "Draw";
}



// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);