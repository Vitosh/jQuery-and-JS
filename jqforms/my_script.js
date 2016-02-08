$(document).ready(function(e) {
	$('form').on('change', function() {
	
		$('#message').empty();
		$('#summary').empty();
		$('hr').remove();
		
		var choice =$(this).serializeArray();
		var bg = 0;
		var nl = 0;
		var es  = 0;

		$.each(choice, function(i, item){
			$("#message").append(i+1 + ". " + item.name + ": " + item.value + "<p>");
							
			switch (item.name) {
				case "Bulgarian":
					bg++;
					break;
				case "Dutch":
					nl++;
					break;
				case "Spanish":
					es++;
					break;
			}
		});

		var hr_line = "<hr/>";
		$('#summary').before(hr_line);  

		$("#summary").append("You have selected " + bg + " Bulgarian cities."+"<p>"+"You have selected " + nl + " Dutch cities."+"<p>"+"You have selected " + es + " Spanish cities."+"<p>");
		});
});