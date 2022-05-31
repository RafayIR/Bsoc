

/*$(document).ready(function () {
    $("#tab-11").click(function () {
        $("#tab-11").addClass("active-1");
        $('#tab-22').removeClass("active-1")
        $('#tab-33').removeClass("active-1")
    });
});

$(document).ready(function () {
    $("#tab-22").click(function () {
        $("#tab-22").addClass("active-1");
        $('#tab-33').removeClass("active-1")

    });
});

$(document).ready(function () {
    $("#tab-33").click(function () {
        $("#tab-33").addClass("active-1");
    });
});*/

function reply_click(clicked_id) {
    if (clicked_id == 'tab-11') {
        $("#tab-11").addClass("active-1");
        $('#tab-22').removeClass("active-1")
        $('#tab-33').removeClass("active-1")

    } else if (clicked_id == 'tab-22') {
        $("#tab-22").addClass("active-1");
        $('#tab-33').removeClass("active-1");

    } else {
        $("#tab-33").addClass("active-1");
        $("#tab-11").addClass("active-1");
        $("#tab-22").addClass("active-1");
    }
}