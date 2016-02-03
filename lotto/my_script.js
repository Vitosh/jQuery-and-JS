$(document).ready(function(){
	
	$(function() {
		print_msg();
	});
	
	var calc = function() {
		var factorial = function(val) {
			if ($.isNumeric(val)) {
				val = parseInt(val);
				if (val < 0) {
					return "invalid value";
				} else if (val === 1 || val === 0) {
					return 1;
				} else {
					return val * factorial(val - 1);
				}
			}
			return "value passed is not valid";
			};
			return {
				factorial: factorial
			};
	}();
			
	$("#lbig").bind("change paste keyup", function() {
		print_msg();
	});		
	
	$("#lsmall").bind("change paste keyup", function(){
		print_msg();
	});			
	
	$("#lplay").bind("change paste keyup", function(){
		print_msg();
	});		
	
	function print_msg() {
		var my_result_order = "";
		var my_result_no_order = "";
		var my_result_combinations = "";
		var my_chances = "";
		
		var small = $("#lsmall").val();
		var big = $("#lbig").val();
		var play = $("#lplay").val();
		
		my_result_order = (calc.factorial(big))/(calc.factorial(big-small));
		my_result_no_order = my_result_order/calc.factorial(small);
		my_result_combinations =  calc.factorial(play)/(calc.factorial(small)*calc.factorial(play-small));
		my_chances = (my_result_combinations/my_result_no_order);
		my_chances = parseFloat(my_chances.toFixed(10));
		
		if (isNaN(my_result_order)) {
			my_result_order = "Awaiting input ...";
			my_result_no_order = "Awaiting input ...";
		}
		
		if (isNaN(my_result_combinations)){
			my_result_combinations = "Awaiting ... ";
		}
		
		$("#my_results_order_significant").html('').append(my_result_order.toLocaleString());
		$("#my_results_order_any").html('').append(my_result_no_order.toLocaleString());		
		$("#my_combinations").html('').append(my_result_combinations.toLocaleString());
		$("#my_chances").html('').append(my_chances.toLocaleString());
	};			
});