$(document).ready(function () {
    var counter = 1;
    $("#my_adder").click(function(){
        var js_random = (Math.random() + 1).toString(36).substr(2,counter);
        counter++;
        $("#my_list").append("<li>"+ js_random +"</li>");
    });
    $("#my_remover").click(function(){
        $("#my_list li:last-child").remove();
        counter--;
    });
});