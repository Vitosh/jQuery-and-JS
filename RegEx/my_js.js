$(document).ready(function () {


    $("#my_btn").click(function(){
        var my_text = $('#my_text_input').text();
        var my_regex = new RegExp('\\'+ $('#my_input').val());  //'\\d{5}'
        var my_result;
        var arr_result = [];

        while ((my_result = my_regex.exec(my_text)) != null){
            arr_result.push(my_result[0]);
            my_text = my_text.slice(my_result.index + my_result[0].length);
        }

        for (counter = 0; counter < arr_result.length; counter++) {
            $("#my_div_result").append(arr_result[counter] + "<br>");
        }
    });

    $("#my_btn_clear").click(function() {
        $("#my_div_result").empty();
    });
});