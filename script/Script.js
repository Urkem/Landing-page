$(document).ready(function() {
  $('.navbar li a').click(function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop: $($(this).attr('href')).offset().top - 50 }, 800);
  });
});
