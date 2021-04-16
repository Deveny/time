function openTab(page) {
	$("#tabbox").append("<div class='inlay'></div>",$("<div id='content' class='floortext'></div>").load(page+".html", function() {
		    $(".inlay").last().remove();
		   var n= $(".inlay").length;
		  if(n<1){
		  		$(".work-icon").fadeIn();}                     });
		}).css('top', (parseFloat($(".floortext:last").css('top')) + 50) + 'px').css('left',(parseFloat($(".floortext:last").css('left')) + 50) + 'px')).slideDown();
}
$(".closebtn, .xfloor").click(function() {
	      $(this).closest(".floortext").remove();
	  
function openLink(link,klik){
	
  $("#"+link+"link").css({'top':klik.pageY,'left':klik.pageX,}).toggle();
}

$("#40, #bluepieces, #archivemural, #abtearth, #hoek, #ladders, #lightm, #pub, #hand, #vogel1, #vogel2, #ruim, #flag, #script, #stick, #stone, #sun, #time, #wind, #kapelexp, #kapelv, #kaunas, #zebra").addClass("titler").append("&#160;&#160;").prepend("&#160;&#160;");
	
	  