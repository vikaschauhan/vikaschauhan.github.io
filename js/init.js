(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space



$(document).bind("contextmenu", function(event) {
    event.preventDefault();
    $("ul.contextMenu")
        .show()
        .css({top: event.pageY + 15, left: event.pageX + 10});
});
$(document).click(function() {
  isHovered = $("ul.contextMenu").is(":hover");
  if (isHovered == false){
    $("ul.contextMenu").fadeOut("fast");
  }
});