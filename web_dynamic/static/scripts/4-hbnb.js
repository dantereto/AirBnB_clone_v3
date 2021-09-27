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
	$.ajax({
		type: 'GET',
		url: 'http://0.0.0.0:5001/api/v1/status/',
		dataType: 'json',
		success: function (data) {
			if (data.status === 'OK') {
				$('#api_status').addClass('available');
			} else {
				$('#api_status').removeClass('available');
			}
		}
	});
	$.ajax({
		url: 'http://0.0.0.0:5001/api/v1/places_search',
		dataType: 'json',
		type: 'post',
		contentType: 'application/json',
		data: JSON.stringify({}),
		success: function (data) {
			for (const i = 0; i < data.lenght; i++) {
				const place = data[i]
				$('places ').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div></div><div class="description">' + place.description + '</div></article>');
			}
		}
	});
	$('button').click(function () {
		$.ajax({
			url: 'http://0.0.0.0:5001/api/v1/places_search',
			dataType: 'json',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({ amenities: Object.keys(amenity_n) }),
			success: function (data) {
				for (const i = 0; i < data.lenght; i++) {
					const place = data[i]
					$('places ').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div></div><div class="description">' + place.description + '</div></article>');
				}
			}
		});
	});
});
