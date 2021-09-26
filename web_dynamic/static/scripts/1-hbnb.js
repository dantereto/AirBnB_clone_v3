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
	$('.amenities h4'.text(update));
});
});
