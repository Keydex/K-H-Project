$("#menu-icon").click(function(){$(".mobile-menu").toggle(),console.log(".mobile-menu toggle")}),$(window).resize(function(){var width=$(this).width();width>640&&$(".mobile-menu").hide()}),$(".mobile-menu a").click(function(){$(".mobile-menu").hide()}),$(window).on("hashchange",function(){var str=window.location.href,res=str.split("/");console.log(res[4]),$(".menugray").css("color","#969696"),"plan-by-others"==res[4]?(console.log("Enters If"),$("#plan-by-others").css("color","#8DAF4C")):"contact"==res[4]?($("#contact").css("color","#8DAF4C"),console.log("contact test enter")):"plan-by-us"==res[4]?$("#plan-by-us").css("color","#8DAF4C"):"services"==res[4]?$("#services").css("color","#8DAF4C"):"company"==res[4]?$("#company").css("color","#8DAF4C"):"portfolio"==res[4]&&$("#portfolio").css("color","#8DAF4C")}),$(document).ready(function(){var str=window.location.href,res=str.split("/");console.log(res[4]),$(".menugray").css("color","#969696"),"plan-by-others"==res[4]?(console.log("Enters If"),$("#plan-by-others").css("color","#8DAF4C")):"contact"==res[4]?($("#contact").css("color","#8DAF4C"),console.log("contact test enter")):"plan-by-us"==res[4]?$("#plan-by-us").css("color","#8DAF4C"):"services"==res[4]?$("#services").css("color","#8DAF4C"):"company"==res[4]?$("#company").css("color","#8DAF4C"):"portfolio"==res[4]&&$("#portfolio").css("color","#8DAF4C")}),$(document).ready(function(){$(".homeimage").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear"})});