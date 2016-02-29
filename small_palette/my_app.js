$(document).ready(function () {
	$('#my_color').change(function(e){	
		$('.' +  $('#my_class').val()).css('background-color', $('#my_color').val());
		e.preventDefault();
	});
})();