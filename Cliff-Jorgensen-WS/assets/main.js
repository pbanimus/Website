var superApe = "Bitcoin is Better";
var superLame = ["ethereum","eth", "doge","xrp","shib"];
var userGuess = prompt("What is the best crypto currency?");
var userGuessLower = userGuess.toLowerCase();

if (superLame.indexOf(userGuessLower) === -1){
  alert ("congratulations you are a crypto APE");
}
else {
  alert(superApe);
}