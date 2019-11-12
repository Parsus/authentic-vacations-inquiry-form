(function ($) {
	$('.transportation-picker').selectpicker();

	$('.av-form-inquiry').submit(function (event) {
		event.preventDefault();

		var $form = $(this).serialize();

		$.post('./thank-you.html', {data: $form});

	});



})(jQuery);