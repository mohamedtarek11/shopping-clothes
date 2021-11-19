$(function (){

'use strict';

$('#navbar li a').click(function (e) {

e.preventDefault();

$('html,body').animate({

    scrollTop: $('#' + $(this).data('scroll')).offset().top

},1000);

});
});
//products

$(document).ready(function(){

    $('.single_box').tilt({

        maxTilt:10,
        glare:true,
        scale:1.2,
        maxGlare:.5,
    })
    })
    $(document).ready(function(){
        
        $('.box:not(:first-child)').tilt({
            glare:true,
            scale:.5,
        })
        }) 
//scroll To top

$(window).scroll(function()
{
    var scrollToTop  = $('.scroll-to-top');

    if($(window).scrollTop() >= 500) {

        scrollToTop.fadeIn(400);

    } else {

        scrollToTop.fadeOut(400);
    }
});
   //click on scroll to top to go up

$('.scroll-to-top').click(function(event){

    event.preventDefault();

    $('html,body').animate({

        scrollTop:0

        },500);

});





















