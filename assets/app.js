(function ($) {
	$('.transportation-picker').selectpicker();

	$('input[name="notSureYet"').change(function () {
		if ($('input[name="notSureYet"').is(":checked")) {
			$('select[name="nights"').val("");
		}
	});

	$('select[name="nights"').change(function () {
		if ($('input[name="notSureYet"').is(":checked") && $('select[name="nights"').val() != "") {
			$('input[name="notSureYet"').prop('checked',false);
		}
	});

})(jQuery);