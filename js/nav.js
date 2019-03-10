$(document).ready(() => {
	const welcomeScreenHeight = $('section.welcome-page')[0].clientHeight;
	$(window).scroll((evt) => {
		if (window.pageYOffset >= welcomeScreenHeight) {
			$('nav').addClass("over-dark");
			$('nav a').addClass('text-dark');
		} else {
			$('nav').removeClass("over-dark");
			$('nav a').addClass('text-light');
		}
	});
})