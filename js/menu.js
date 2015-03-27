$(document).ready(function(){
  $("#sticker").sticky({topSpacing:0});
});
$(function() {
  $('#club-hover').hover(function() {
    $('#club-hover').next().fadeIn();
},
function() {
  $('#club-hover').next().fadeOut();
});
});
$(function() {
  $('#ball-hover').hover(function() {
    $('#ball-hover').next().fadeIn();
},
function() {
  $('#ball-hover').next().fadeOut();
});
});
$(function() {
  $('#acc-hover').hover(function() {
    $('#acc-hover').next().fadeIn();
},
function() {
  $('#acc-hover').next().fadeOut();
});
});

setInterval(function() {
    $('#ticker-message').fadeOut(50, function() {
        var $this = $(this);
        $this.text($this.text() == "Find the iron that's right for you. Get Fit!" ? 'FREE SHIPPING On All Orders Over $100' : "Find the iron that's right for you. Get Fit!");
        $this.fadeIn(500);
        $('.fa-cog').toggleClass('fa-twitter');
    });
}, 5000);
