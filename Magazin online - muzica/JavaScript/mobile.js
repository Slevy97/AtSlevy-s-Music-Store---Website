var is_open = false;

$(document).ready(function() {
    
    $("#open-mobile").click(function() {
        
        $(".menu-item").toggle();
        
        if (is_open) {
            
            $("main").css("padding-top", "40px");
            is_open = false;
            
        } else {
            
            $("main").css("padding-top", "240px");
            is_open = true;
        }
    });
    
    $(window).resize(function() {
        
        if ($("#open-mobile").css("display") == "none") {
            
            $("main").css("padding-top", "120px");
            $(".menu-item").css("display", "block");
            
        } else {
            
            $("main").css("padding-top", "40px");
            $(".menu-item").css("display", "none");
            is_open = false;
        }
    });
});