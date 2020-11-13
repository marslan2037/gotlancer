$(document).ready(function() {
    $(".mobile-search-button").on("click", function() {
        var parent_element = $(this).parent();  
        parent_element.addClass("have-single-column have-only-search-bar");
    })

    $(".mobile-search-close-button").on("click", function() {
        var parent_element = $(this).parent();
        parent_element.removeClass("have-single-column have-only-search-bar");
    })

    $(".mobile-menu-button").on("click", function() {
        var parent_element = $(this).parent();
        parent_element.addClass("have-mobile-menu-open");
    })

    $(".mobile-menu-close-button").on("click", function() {
        var parent_element = $(this).parent().parent();
        console.log(parent_element)
        parent_element.removeClass("have-mobile-menu-open");
    })

    $(".mobile-messages-search-button").on("click", function() {
        var parent_element = $(this).parent();
        parent_element.addClass("have-mobile-messages-search-open");
    })
    $(".mobile-messages-search-close-button").on("click", function() {
        var parent_element = $(this).parent();
        var grand_parent_element = parent_element.parent();
        grand_parent_element.removeClass("have-mobile-messages-search-open");
    })

    $(".mobile-messages-back-button").on("click", function() {
        $(".m-contact-list").addClass("force-display");
        $(".m-message-detail").addClass("force-hide");
    })
})