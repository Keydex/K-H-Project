/* Mobile nav */
$('#menu-icon').click(function() {
  $('.mobile-menu').toggle();
  console.log('.mobile-menu toggle')
});

$(window).resize(function(){
  var width = $(this).width(); 
  if (width > 640) {
    $('.mobile-menu').hide();
  }
});

$('.mobile-menu a').click(function() {
  $('.mobile-menu').hide();
});