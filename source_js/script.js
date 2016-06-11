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

$('#contact').click(function() {
	$('.menugray').css('color', '#969696');
	$('#contact').css('color', '#8DAF4C');
});

$('#company').click(function() {
	$('.menugray').css('color', '#969696');
	$('#company').css('color', '#8DAF4C');
});

$('#services').click(function() {
	$('.menugray').css('color', '#969696');
	$('#services').css('color', '#8DAF4C');
});

$('#portfolio').click(function() {
	$('.menugray').css('color', '#969696');
	$('#portfolio').css('color', '#8DAF4C');
});

$('#plan-by-us').click(function() {
	$('.menugray').css('color', '#969696');
	$('#plan-by-us').css('color', '#8DAF4C');
});

$('#plan-by-others').click(function() {
	$('.menugray').css('color', '#969696');
	$('#plan-by-others').css('color', '#8DAF4C');
});

$('#logoClick').click(function() {
	console.log("Clicked Logo");
	$('.menugray').css('color', '#969696');
});