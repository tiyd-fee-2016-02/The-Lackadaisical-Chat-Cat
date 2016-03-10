function atSpotify() {
  "use strict";

  var userInput = $("input");
  for(var i = 0; i < userInput.length; i++){

  var song = userInput[i].value.toLowerCase().replace("@spotify ", "", "", "", "", "", "", "")
  $.getJSON("https://api.spotify.com/v1/search/?q=" + song +"&type=artist", function(data){
    console.log(data.artists.items[0]);
    $("ul").append("<li class='response'><image src=" + data.artists.items[0].images[0].url + ">" + "<br><br>" + "ARTIST - " + data.artists.items[0].name + "<br>" + "GENRE - " + data.artists.items[0].genres[0] + "<br>" +  "FOLLOWERS -" + data.artists.items[0].followers.total + '<iframe src="https://embed.spotify.com/?uri=' + data.artists.items[0].uri + '" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>' + "</li>")

  });

}
}
