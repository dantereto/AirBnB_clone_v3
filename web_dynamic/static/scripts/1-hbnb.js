window.addEventListener('load', function () {
	const amenity_n = {};
	$('input[type=checkbox]').change(function () {
		if ($(this).prop('checked')) {
			amenity_n[$(this).attr('data-id')] = $(this).attr('data-name');
		} else if (!$(this).prop('checked')) {
			delete amenity_n[$(this).attr('data-id')];
		}
		if (Object.keys(amenity_n).length === 0) {
			$('div.amenities h4').html('&nbsp');
		} else {
			$('div.amenities h4').text(Object.values(amenity_n).join(', '));
		}
	});
});
