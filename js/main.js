$(document).on('click', 'a', function (event) {
    event.preventDefault();
});
// $(".content__call").on("click", function () {
//     $("#request ").toggleClass("content__visible");
// });
// $(".content__modal--link").on("click", function () {
//     $("#request ").addClass("content__visible");
// });
// $(".js__thank").on("click", function () {
//     $("#thank ").removeClass("content__visible");
//     $("#request ").addClass("content__visible");
// });
//
// $(".js__close").on("click", function () {
//     $("#request ").addClass("content__visible");
// });
jQuery(document).ready(function ($) {
    $('.pop').magnificPopup({
        type: 'inline',
        mainClass: 'my-mfp-zoom-in',
    });
});
$(".js__close").on("click",function () {
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
});
$(".thank__button").on("click",function () {
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
});