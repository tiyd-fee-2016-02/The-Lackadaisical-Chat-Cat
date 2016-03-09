function atGithub() {
  "use strict";

  var userInput = $("input");
  for(var i = 0; i < userInput.length; i++){

  var user = userInput[i].value.toLowerCase().replace("@github ", "")
  $.getJSON("http://api.github.com/users/" + user, function(data){
    window.setTimeout(function(){
    $(".place-holder").prepend("<li class='response'>" + data.name + "<br><br>" + data.location + "<br><br>" + "<img src="+data.avatar_url+">" + "</li>")}, 1500)
  });

}
}
