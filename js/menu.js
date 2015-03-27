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
