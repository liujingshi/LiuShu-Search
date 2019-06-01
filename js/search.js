//<input type="radio" name="type" value="baidu" title="百度" checked>
var radio1 = '<input type="radio" name="type" lay-filter="radio" value="';
var radio2 = '" title="';
var radio3 = '" ';
var radio4 = '>';

var form = null;

hideTip();

layui.use('form', function () {
    form = layui.form;
    for (var type in url) {
        var radioElement = radio1 + type + radio2 + url[type].name + radio3;
        if (url[type].checked) {
            radioElement += "checked";
        }
        radioElement += radio4;
        $("#radio").append(radioElement);
    }
    form.render();
    form.on('radio(radio)', function (data) {
        var name = url[data.value].name;
        $("input[name='keyword']").attr('placeholder', '在' + name + '上搜索');
    });
});

var keyword = "";

$("#search").submit(function () {
    search.keyword.value = keyword;
    var type = search.type.value;
    window.open(url[type].url + keyword);
    hideTip();
    return false;
});

$("input[name='keyword']").bind('input propertychange', function () {

    keyword = search.keyword.value;
    if (keyword == "") {
        hideTip();
    } else {
        var type = search.type.value;
        tip[type](keyword);
    }

});

function gotoTis(text) {
    keyword = text;
    $("#search").submit();
}

$(window).keydown(function (event) {

    if (window.event) {
        var key = window.event.keyCode;
        var $child = $("#uptip, #downtip").children();
        var $now = $("#uptip, #downtip").find('.xz');
        if (key == 40) {
            if ($now.length == 0 || $now.html() == $child.eq($child.length - 1).html()) {
                $child.removeClass('xz');
                $child.eq(0).addClass('xz');
                keyword = $child.eq(0).html();
            } else {
                var $next = $now.next();
                $child.removeClass('xz');
                $next.addClass('xz');
                keyword = $next.html();
            }
        }
        if (key == 38) {
            if ($now.length == 0 || $now.html() == $child.eq(0).html()) {
                $child.removeClass('xz');
                $child.eq($child.length - 1).addClass('xz');
                keyword = $child.eq($child.length - 1).html();
            } else {
                var $next = $now.prev();
                $child.removeClass('xz');
                $next.addClass('xz');
                keyword = $next.html();
            }
        }
    }

});

