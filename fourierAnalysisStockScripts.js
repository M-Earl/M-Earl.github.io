function smallSidebarOpenClose() {
	if (document.getElementById("smallSidebar").style.maxHeight == "25rem")
	{
		document.getElementById("smallSidebar").style.maxHeight = "0rem";
		document.getElementById("smallSidebar").style.marginBottom = "0rem";
	}
	else
	{
		document.getElementById("smallSidebar").style.maxHeight = "25rem";
		document.getElementById("smallSidebar").style.marginBottom = "0.6rem";
	}
}

$(document).ready(function() {

	$('.fadein').each( function(i){

		var bottomObjectAdjusted = $(this).position().top + $(this).outerHeight() - 250;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, fade it it */
		if( bottomWindow > bottomObjectAdjusted ){

			$(this).animate({'opacity':'1'},500);

		}

	}); 
	
	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fadein').each( function(i){

            var bottomObjectAdjusted = $(this).position().top + $(this).outerHeight() - 200;
            var bottomWindow = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottomWindow > bottomObjectAdjusted ){

                $(this).animate({'opacity':'1'},500);

            }

        }); 

    });
	
	if ($(window).width() < 767) {
		$('.fadein').each( function(i){
			$(this).animate({'opacity':'1'},500);
		});
	}
});

$(function(){
	$("#header").load("header.html");
});

$(function(){
	$("#footer").load("footer.html");
});