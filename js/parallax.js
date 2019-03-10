$(document).ready(() => {
	var prevScrollPos = window.pageYOffset;
	var framesWithoutMovement = 0;
	window.setInterval(() => {
		const dir = prevScrollPos < window.pageYOffset? -1 
			: prevScrollPos > window.pageYOffset? 1 : 0;			
		if (dir == 0) {
			framesWithoutMovement++;			
		}				
		const delta = prevScrollPos - window.pageYOffset;
		const elems = $('.foreground');
		for( var i = 0; i < elems.length; i++) {
			elems.top = 
		}
		const currTops = $('.foreground').position();
		for(var i = 0; i < currTops.length; i++) {
			currTops[i]= currTops.top + delta;
		}
		$('.foreground').css('top', currTops);
	}, 500);
});