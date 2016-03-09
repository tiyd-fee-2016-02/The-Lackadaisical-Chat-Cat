$(function () {
  'use strict';
  var userInput = $("input");

  $('input').keyup(function(e) {
    if(e.which === 13) {

      for(var i = 0; i < userInput.length; i++){
        if (userInput[i].value == ""){
          $(".place-holder").prepend("<li class='response'>An empty box? Seems like a great place to lie down... If you want something useful to happen you should actually input something.</li>")
          return;
        }
        $(".place-holder").prepend("<li>" + userInput[i].value + "</li>")
        // console.log(userInput[0].value);
        if (userInput[i].value.toLowerCase() == "hello"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>Im 2 busy 2 teach u how 2 use dis app rite meow, please use @help if you don't know what you are doing.</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase() == "goodbye"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>I gues itz tiem 2 go 2 sleep</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase() == "@help"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>Available Commands for the Lackadaisical Cat:<br><br>@help brings up the help menu.  You really should know this since you already typed it in.<br><br>@calc will perform math operations on your input.  Please limit to standard addition subraction multiplication and division<br><br>@bg will change the background to your chosen color.  Please attempt to keep your colors as normal as possible or you might throw some crazy errors.<br><br>@github will take your chosen user name and show the name location and image for the profile.</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase() == "who let the dogs out?"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>Dogs? Really? Get off my site.</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase() === "help"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>yeah... you do need some help... you forgot the @ sign...</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase() == "who are you?"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>I r majestic lackadaisical chat kat, bow 2 mah majesty and gimme a fish.</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase() == "how are you?"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>I'm tird, u wouldnt happen 2 has cardboard box 4 me 2 nap in wud u?</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase() == "what are you?"){
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>Is not obvious? I'm Kat.</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase().includes("@calc")){
          var time = userInput[i].value.toLowerCase().replace("@calc", "")
          window.setTimeout(function(){
          $(".place-holder").prepend("<li class='response'>" + time + " = " + eval(time) + "</li>")}, 1500)
        }
        else if (userInput[i].value.toLowerCase().includes("@bg")){
          var background = userInput[i].value.toLowerCase().replace("@bg", "")
          $('.container').css("background-color", background)
        }
        else if (userInput[i].value.toLowerCase().includes("@github")){
            atGithub();
        }
        else if (userInput[i].value.toLowerCase().includes("@giphy")){
            atGiphy();
        }
        else{
          $(".place-holder").prepend("<li class='response'>Type @help 4 hints u hooman</li>")
        }
      }
    $(this).val("")
    }
  });
});
