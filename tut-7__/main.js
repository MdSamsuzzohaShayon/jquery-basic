$(document).ready(function () {
    $(".content-box").click(function () {
        $(this).animate({
            width: '500px',
            // DEFAULT VALUE PLUS EXTRA VALUE SETTING
            //height: '+=100px'
            height: '400px'
        }, 3000).animate({
            fontSize: '30px' 
        }, 3000).fadeOut();


        $("button").click(function(){
            $('.content-box').stop(true, true);
        });

    });





    //ANIMATING OPACITY
    /*
    $('.content-after').show().animate({
        opacity: '1',
    },3000);*/


});