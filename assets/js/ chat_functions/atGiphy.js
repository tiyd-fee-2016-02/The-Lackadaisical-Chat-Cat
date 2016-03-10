function atGiphy() {
  "use strict";

  var userInput = $("input");
  for(var i = 0; i < userInput.length; i++){

  var gif = userInput[i].value.toLowerCase().replace("@giphy ", "", "", "", "", "", "", "", "", "")
    // $("ul").append("<li class='response'><img src=http://api.giphy.com/v1/gifs/search?q=" + gif + "?&api_key=dc6zaTOxFJmzC&limit=1&fmt=html></li>")
  $.getJSON("http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=1", function(data){
    console.log(data.data[0].images.original.url);
    $(".place-holder").prepend("<li class='response'><img src=" + data.data[0].images.original.url + "></li>")
    // window.setTimeout(function(){
    // $("ul").append("<li class='response'>" + data.name + "<br><br>" + data.location + "<br><br>" + "<img src="+data.avatar_url+">" + "</li>")}, 1500)
  });

}
}
