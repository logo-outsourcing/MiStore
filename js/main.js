$(document).on('click', 'a', function (event) {
    event.preventDefault();
});
jQuery(document).ready(function ($) {
    $('.pop').magnificPopup({
        type: 'inline',
        mainClass: 'my-mfp-zoom-in',
    });
});

$(".thank__button").on("click",function () {
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
});
$(document).mouseleave(function(e){
    if (e.clientY < 10) {
        $('.js-leaves').magnificPopup({
            items: {
                src: '#leaves',
                type: 'inline'
            }
        }).magnificPopup('open');
    }
});
$(document).click(function(e) {
    if (($("#leaves").is(':visible')) && (!$(e.target).closest("#leaves .content__box").length)) {
        $("#leaves").remove();
    }
});
$(".js__close").on("click",function () {
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
});
$(".js-shut").on("click",function () {
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
});