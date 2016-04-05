$(document).ready(function () {
    var str_cls = "cls";
    var str_id = "id";
    var str_el = "el";
    var str_color = "";

    $("#div_click_r").click(function(){
        str_color = "red";
        color_me(str_color);
    });

    $("#div_click_b").click(function(){
        str_color = "aqua";
        color_me(str_color);
    });

    $("#div_click_w").click(function(){
        str_color = "white";
        color_me(str_color);
    });

    function color_me(str_color){
        var element = $("#id_textarea_1").val();
        var str_selection = $('input[name=type_of_input]:checked', '#id_form_1').val();

        if (str_selection === str_cls){
            element = "'." + element + "'";
            eval("$(" + element + ").css({ 'background-color' : '" + str_color + "' })");
        }

        if (str_selection === str_id){
            element = "'#" + element + "'";
            eval("$(" + element + ").css({ 'background-color' : '" + str_color + "' })");
        }

        if (str_selection === str_el){
            element = "'" + element + "'";
            eval("$(" + element + ").css({ 'background-color' : '" + str_color + "' })");
        }

    };

});