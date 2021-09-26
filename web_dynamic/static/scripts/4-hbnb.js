window.addEventListener('DOMContentLoaded', function () { 
    const list_n = []
    const list_id = []
    $('input:checkbox').click(function () {
	if ($this.is(':checked')) {
	    list_id.push($this.attr('data-id'));
	    list_n.push($this.attr('data-name'));
	} else {
	  list_id = $.grep(list_id, function (data) {
	      return data != $this.attr('data-id');
	  });  
	  list_n = $.grep(list_n, function (data) {
	      return data != $this.attr('data-name');
	  });
	}
	const update = list_n.join(', ');
	$('.amenities h4'.text(update);
});
$.get('http://0.0.0.0:5001/api/v1/status/', funtion (data) {
    if(data.status === 'OK') {
	$('#api_status'.addClass('available');
    } else {
	$('#api_status'.removeClass('available');
    }
});
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function(data) {
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
    data: JSON.stringify({'amenities': list_id}),
    success: function(data) {
	for (const i = 0; i < data.lenght; i++) {
	    const place = data[i]
	    $('places ').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div></div><div class="description">' + place.description + '</div></article>');
	}
	}
});
});
});
