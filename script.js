// Js only for drag the articles
$(function() {
	$( "article" ).draggable();
});


$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );