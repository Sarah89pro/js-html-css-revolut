$(document).ready(function() {

    //Dropdown Menu

    //REFS
    var dropDown = $(".with-dropdown");
    var dropMenus = dropDown.children(".dropdown-menu");
    var dropLinks = dropDown.children("a");


    //On click show/hide menu
    dropLinks.click(function(event) {
        var actualMenu = $(this).next(".dropdown-menu");

        dropMenus.not(actualMenu).hide();

        actualMenu.toggle();
    });

    //On hover show/hide menu
    /*dropLinks.hover(function(event) {
        var actualMenu = $(this).next(".dropdown-menu");

        dropMenus.not(actualMenu).hide();

        actualMenu.toggle();
    });*/


    
    //end doc ready
});