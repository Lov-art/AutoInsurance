// $(window).on('load', function () {
// 	$('#wrap_preloader').delay(500).fadeToggle(500);
// });


$('.form-input[type=tel]').mask('+38 (000) 000 00 00');

$(document).ready(function () {
	$(".swipe-down").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		console.log(top);
		$('body,html').animate({ scrollTop: top }, 2200);
	});
});