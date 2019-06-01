
function requestTip(url, jsonpCallback, data, success) {
    $.ajax({
        type: "get",
        async: true,
        url: url,
        dataType: "jsonp",
        jsonp: "callbackparam",
        jsonpCallback: jsonpCallback,
        data: data,

        beforeSend: function () {

        },

        success: success,

        complete: function () {

        },

        error: function () {

        }
    });
}

function hideTip() {
    $("#uptip, #downtip").hide();
    $("#uptip, #downtip").html("");
}

function showTip(tips) {
    hideTip();
    var pageHeight = $(window).height();
    var topHeight = $("input[name='keyword']").offset().top;
    var elementHeight = $("input[name='keyword']").height();
    var bottomHeight = pageHeight - topHeight - elementHeight;
    var tip1 = "<div>";
    var tip2 = "</div>";
    if (bottomHeight < 150) {
        for (var i in tips) {
            $("#uptip").prepend(tip1 + tips[i] + tip2);
        }
        $("#uptip").show();
        document.location.href = "#input";
        $("input[name='keyword']").focus();
    } else {
        for (var i in tips) {
            $("#downtip").append(tip1 + tips[i] + tip2);
        }
        $("#downtip").show();
    }
    $("#downtip>div, #uptip>div").each(function () {
        $(this).click(function () {
            gotoTis($(this).html());
            hideTip();
        });
    });
}
