$(document).ready(function(){
    $("#hover").hover(function() {
        $(this).hide();
    });

    $("#click").click(function() {
        $(this).hide();
    });

    $("#double-click").dblclick(function() {
        $(this).hide();
    });

    $("#leave").mouseout(function() {
        $(this).hide();
    });



    //NAVBAR SETTING OR TOGGLE BETWEEN HIDE AND SHOW NAVBAR
    let menuTrigger = false;
    $(document).keypress(function(e){
        if(e.which == 13){  
            if(menuTrigger === false){
                $("nav").fadeIn(500);
                menuTrigger = true;
            }

            else if(menuTrigger === true){
                $("nav").fadeOut(500);
                menuTrigger = false;
            }
        }
    });



});