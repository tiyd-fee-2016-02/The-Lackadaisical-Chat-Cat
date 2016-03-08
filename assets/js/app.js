$(function () {
  'use strict';
  var userInput = $("input");

  $('input').keyup(function(e) {
    if(e.which === 13) {

      for(var i = 0; i < userInput.length; i++){

        if (userInput[i].value == ""){
          $("ul").append("<li class='response'>An empty box? Seems like a great place to lie down... If you want something useful to happen you should actually input something.</li>")
          return;
        }

      $("ul").append("<li>" + userInput[i].value + "</li>")
      console.log(userInput[0].value);


      if (userInput[i].value.toLowerCase() == "hello"){
        $("ul").append("<li class='response'>Im 2 busy 2 teach u how 2 use dis app rite meow, please use @help if you don't know what you are doing.</li>")
      }
      else if (userInput[i].value.toLowerCase() == "goodbye"){
        $("ul").append("<li class='response'>I gues itz tiem 2 go 2 sleep</li>")
      }
      else if (userInput[i].value.toLowerCase() == "@help"){
        $("ul").append("<li class='response'>Available Commands for the Lackadaisical Cat:<br><br>@help brings up the help menu.  You really should know this since you already typed it in.<br><br>@calc will perform math operations on your input.  Please limit to standard addition subraction multiplication and division<br><br>@bg will change the background to your chosen color.  Please attempt to keep your colors as normal as possible or you might throw some crazy errors.<br><br>@github will take your chosen user name and show the name location and image for the profile.</li>")
      }
      else if (userInput[i].value.toLowerCase() == "who let the dogs out?"){
        $("ul").append("<li class='response'>Dogs? Really? Get off my site.</li>")
      }
      else if (userInput[i].value.toLowerCase() === "help"){
        $("ul").append("<li class='response'>yeah... you do need some help... you forgot the @ sign...</li>")
      }
      else if (userInput[i].value.toLowerCase().includes("@calc")){
        var time = userInput[i].value.toLowerCase().replace("@calc", "")
        $("ul").append("<li class='response'>" + time + " = " + eval(time) + "</li>")
      }
      else if (userInput[i].value.toLowerCase().includes("@bg")){
        var background = userInput[i].value.toLowerCase().replace("@bg", "")
        $('.container').css("background-color", background)
      }
      else if (userInput[i].value.toLowerCase().includes("@github")){
        var user = userInput[i].value.toLowerCase().replace("@github ", "")
        $.getJSON("http://api.github.com/users/" + user, function(data){
          console.log(data);
          $("ul").append("<li class='response'>" + data.name + "<br><br>" + data.location + "<br><br>" + "<img src="+data.avatar_url+">" + "</li>")
      });

      }
      else{
        $("ul").append("<li class='response'>Type @help 4 hints u hooman</li>")
      }


    }

    $(this).val("")
    }
  });

});
