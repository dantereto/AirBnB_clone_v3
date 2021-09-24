window.addEventListener('DOMContentLoaded', function () { 
    list_n = []
    list_id = []
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
});
