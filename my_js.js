$(document).ready(function () {
    $("#header").click(function() {
        console.log($("#main").attr("class"));
        if ($("#main").attr("class") == "show_div_red") {
            $("#main").attr("class","show_div_green");
        } else {
            $("#main").attr("class","show_div_red");
        }
    });
});