function github() {
  "use strict";

  var user = userInput[i].value.toLowerCase().replace("@github ", "")
  $.getJSON("http://api.github.com/users/" + user, function(data){
    window.setTimeout(function(){
    $("ul").append("<li class='response'>" + data.name + "<br><br>" + data.location + "<br><br>" + "<img src="+data.avatar_url+">" + "</li>")}, 1500)
  });


}
