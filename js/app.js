
$(function(){
  var welcomeSection = $('.welcome-section'),
  enterButton = welcomeSection.find('.enter-button');

  setTimeout(function(){
    welcomeSection.removeClass('content-hidden');
  },800);
  enterButton.on('click',function(e){
    e.preventDefault();
    welcomeSection.fadeOut();
  })
})

$(document).ready(function(){
  $(".more-button").click(function(){
    $("#wrap").removeClass("hidden"),
    $(".wrapper").fadeOut(300)
  })
})