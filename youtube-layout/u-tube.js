$(document).ready(function(){

    //SIMPLE TOGGLE
   /* $("#menu_toggle").click(function(){
        $("#side-nav").toggle(1000,function(){
            alert('hi there');
        });
    });*/


    $("#menu_toggle").click(function(){
       //TO SEE FADE OUT EFFECT WE NEED TO MAKE SURE THE DISPLAY IS BLOCK IN CSS
        // $("#side-nav").fadeOut();
        // $("#side-nav").fadeIn();
        // $("#side-nav").fadeToggle(1000);
        
        //DOWN THE OPECITY
        // $("#side-nav").fadeTo(1000, 0.5);
        
        // $("#side-nav").fadeTo(1000, 0.5, function(){
        //     alert("hi there");
        // });


        //SLIDE ANIMATION
        //$("#side-nav").slideUp(1000);
        //$("#side-nav").slideDown(1000);
        $("#side-nav").slideToggle(1000);
    });

    $(".info-title").click(function(){
        $(".info-content").slideToggle("slow", function(){
            alert("Hi there");
        });
    });


});