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


/*
$(window).on('hashchange',function(){ 
    var str = window.location.href;

    var res = str.split("/");

    console.log(res[4]);

    // $('#nav-menu .menu li a').css('color', '#969696');

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

    // $("#nav-menu .menu li").hover(function(){
    //     $("#nav-menu .menu li a").css("color", "#8DAF4C");
    //     }, function(){
    //     $(this).css("color", "#969696");
    // });
});

$(document).ready(function() { 
    var str = window.location.href;

    var res = str.split("/");

    console.log(res[4]);

    // $('#nav-menu .menu li a').css('color', '#969696');

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

    // $("#nav-menu .menu li a").hover(function(){
    //     $(this).css("color", "#8DAF4C");
    //     }, function(){
    //     $(this).css("color", "#969696");
    // });
});

*/

$(window).on('hashchange',function(){ 
  /* Remove active class */
  $('.menu a[ng-href^="#/portfolio"]').removeClass('active');
  $('.menu a[ng-href^="#/company"]').removeClass('active');
  $('.menu a[ng-href^="#/services"]').removeClass('active');
  $('.menu a[ng-href^="#/plan-by-us"]').removeClass('active');
  $('.menu a[ng-href^="#/plan-by-others"]').removeClass('active');
  $('.menu a[ng-href^="#/contact"]').removeClass('active');

  /* Add active class */
  $('.menu a[ng-href^="#/' + $(location).attr('href').split("/")[4] + '"]').addClass('active');
});

$(document).ready(function() { 
/* Remove active class */
  $('.menu a[ng-href^="#/portfolio"]').removeClass('active');
  $('.menu a[ng-href^="#/company"]').removeClass('active');
  $('.menu a[ng-href^="#/services"]').removeClass('active');
  $('.menu a[ng-href^="#/plan-by-us"]').removeClass('active');
  $('.menu a[ng-href^="#/plan-by-others"]').removeClass('active');
  $('.menu a[ng-href^="#/contact"]').removeClass('active');

  /* Add active class */
  $('.menu a[ng-href^="#/' + $(location).attr('href').split("/")[4] + '"]').addClass('active');
});
  


