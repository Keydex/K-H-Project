$('.homeimage').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear'
});

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

// $('#contact').click(function() {
// 	$('.menugray').css('color', '#969696');
// 	$('#contact').css('color', '#8DAF4C');
// });

// $('#company').click(function() {
// 	$('.menugray').css('color', '#969696');
// 	$('#company').css('color', '#8DAF4C');
// });

// $('#services').click(function() {
// 	$('.menugray').css('color', '#969696');
// 	$('#services').css('color', '#8DAF4C');
// });

// $('#portfolio').click(function() {
// 	$('.menugray').css('color', '#969696');
// 	$('#portfolio').css('color', '#8DAF4C');
// });

// $('#plan-by-us').click(function() {
// 	$('.menugray').css('color', '#969696');
// 	$('#plan-by-us').css('color', '#8DAF4C');
// });

// $('#plan-by-others').click(function() {
// 	$('.menugray').css('color', '#969696');
// 	$('#plan-by-others').css('color', '#8DAF4C');
// });

// $('#logoClick').click(function() {
// 	console.log("Clicked Logo");
// 	$('.menugray').css('color', '#969696');
// });

$(window).on('hashchange',function(){ 
    var str = window.location.href;

    var res = str.split("/");

    console.log(res[4]);

    $('.menugray').css('color', '#969696');

    if(res[4]=="plan-by-others"){
    	console.log("Enters If");
    	$('#plan-by-others').css('color', '#8DAF4C');
    }
    else if(res[4]=="contact"){
    	$('#contact').css('color', '#8DAF4C');
    	console.log("contact test enter");
    }
    else if(res[4]=="plan-by-us"){
    	$('#plan-by-us').css('color', '#8DAF4C');
    }
    else if(res[4]=="services"){
    	$('#services').css('color', '#8DAF4C');
    }
    else if(res[4]=="company"){
    	$('#company').css('color', '#8DAF4C');
    }
    else if(res[4]=="portfolio"){
    	$('#portfolio').css('color', '#8DAF4C');
    }
});

$(document).ready(function() { 
    var str = window.location.href;

    var res = str.split("/");

    console.log(res[4]);

    $('.menugray').css('color', '#969696');

    if(res[4]=="plan-by-others"){
    	console.log("Enters If");
    	$('#plan-by-others').css('color', '#8DAF4C');
    }
    else if(res[4]=="contact"){
    	$('#contact').css('color', '#8DAF4C');
    	console.log("contact test enter");
    }
    else if(res[4]=="plan-by-us"){
    	$('#plan-by-us').css('color', '#8DAF4C');
    }
    else if(res[4]=="services"){
    	$('#services').css('color', '#8DAF4C');
    }
    else if(res[4]=="company"){
    	$('#company').css('color', '#8DAF4C');
    }
    else if(res[4]=="portfolio"){
    	$('#portfolio').css('color', '#8DAF4C');
    }
});





