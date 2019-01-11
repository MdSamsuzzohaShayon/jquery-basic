$(document).ready(function(){
    $(".content-box").click(function(){
        $(this).animate({
            width: '500px',
            // DEFAULT VALUE PLUS EXTRA VALUE SETTING
            height: '+=100px'
        }, 1000);
    });
    $('.content-after').show().animate({
        opacity: '1',
    },3000);
});