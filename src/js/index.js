//make image appear in a full size
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
});

  // add Bootstrap's scrollspy  to move nav bar from one side to another
  $('body').scrollspy({
    target: '.navbar',
    offset: 160
});

// smooth scrolling using jquery easing library
$('nav a, .down-button a').bind('click', function () {
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

    // parallax scrolling with stellar.js
  // For example:
$(window).stellar();
// or:
$('#main').stellar();

//appearing of elements in an animated way
 new WOW().init();

