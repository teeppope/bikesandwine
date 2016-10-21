$(document).ready(function(){

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 95  
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
		if( target === '#about'){
			$('.about').css("background-color","gold");
		} else{
			$('.about').css("background-color","rgb(225,225,225)").delay(1000);
		}
	});

});