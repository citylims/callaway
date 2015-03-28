$('.club-hover').hover(
  function() {
    $(this).next().fadeIn();
  },
  function() {
    $(this).next().fadeOut();
  }
);

setInterval(function() {
  $('#ticker-message').fadeOut(50, function() {
    var $this = $(this);
    $this.text($this.text() == "Find the iron that's right for you. Get Fit!" ? 'FREE SHIPPING On All Orders Over $100' : "Find the iron that's right for you. Get Fit!");
    $this.fadeIn(500);  $('.fa-cog').toggleClass('fa-twitter');
  });
}, 5000);
