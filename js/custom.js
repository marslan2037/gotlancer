$(document).ready(function() {
    $(".user-detail").on("click", function() {
        $(".quick-menu").css("display", "block");
    })
    $(".mobile-menu-close-button").on("click", function() {
        $(".quick-menu").css("display", "none");
    })

    $("ul.main-menu li").on("click", function() {
        var current_element = $(this);
        if(current_element.find("ul").hasClass("have-dropdown-open")) {
            current_element.find("ul").removeClass("have-dropdown-open")
            current_element.find("i.fa").removeClass("rotate-reverse")
        } else {
            current_element.find("ul").addClass("have-dropdown-open")
            current_element.find("i.fa").addClass("rotate-reverse")
        }

        // if($("ul.main-menu li ul").hasClass("have-dropdown-open")) {
        //     $("ul.main-menu li ul").removeClass("have-dropdown-open");
        // } else {
        //     $("ul.main-menu li ul").addClass("have-dropdown-open");
        // }
    })

    // $(".mobile-search-button").on("click", function() {
    //     var parent_element = $(this).parent();  
    //     parent_element.addClass("have-single-column have-only-search-bar");
    // })

    // $(".mobile-search-close-button").on("click", function() {
    //     var parent_element = $(this).parent();
    //     parent_element.removeClass("have-single-column have-only-search-bar");
    // })

    // $(".mobile-menu-button").on("click", function() {
    //     var parent_element = $(this).parent();
    //     parent_element.addClass("have-mobile-menu-open");
    // })

    // $(".mobile-menu-close-button").on("click", function() {
    //     var parent_element = $(this).parent().parent();
    //     parent_element.removeClass("have-mobile-menu-open");
    // })

    // $(".mobile-messages-search-button").on("click", function() {
    //     var parent_element = $(this).parent();
    //     parent_element.addClass("have-mobile-messages-search-open");
    // })
    // $(".mobile-messages-search-close-button").on("click", function() {
    //     var parent_element = $(this).parent();
    //     var grand_parent_element = parent_element.parent();
    //     grand_parent_element.removeClass("have-mobile-messages-search-open");
    // })

    // $(".mobile-messages-back-button").on("click", function() {
    //     $(".m-contact-list").addClass("force-display");
    //     $(".m-message-detail").addClass("force-hide");
    // })
})