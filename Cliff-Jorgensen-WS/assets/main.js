
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
$("button").on("click", function(){
  var person = $(this).attr("data-person");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
  });