function atSpotify() {
  "use strict"

  var userInput = $("input");
  for(var i = 0; i < userInput.length; i++){

  var user = userInput[i].value.toLowerCase().replace("@Spotify ", "")
    $.getJSON("", function(data){

}
