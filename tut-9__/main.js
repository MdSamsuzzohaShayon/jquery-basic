$(document).ready(function(){
    let page_url = window.location.href;
    let page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
   
   
    // alert(page_id);


    if(page_id == "section3"){
        $("html, body").animate({
            scrollTop: $("#scroll-"+page_id).offset().top
        }, 1000);
    }
});