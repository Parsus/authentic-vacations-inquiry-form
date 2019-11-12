(function ($) {
	$('.transportation-picker').selectpicker();

	$('.av-form-inquiry').submit(function (event) {

		var $form = $(this).serialize();

		$.post('./thank-you.html', {data: $form});

	});



})(jQuery);