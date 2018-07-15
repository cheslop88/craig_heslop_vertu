$(document).ready(function() {
    $(".tabs-item").on("click", function () {
        var active_tab = $(this).attr("href");
        $('.tabs-item').removeClass('tabs-item--active');
        $(".tab-content-container__tab").hide();
        $(active_tab).show();
        $(this).addClass('tabs-item--active');
    });
    $( ".colorPicker button" ).click(function() {
        $(".colorPicker button").html("");
        $(".colorPicker img").attr("src","https://www.bristolstreetversa.com/images/colour_swatches/Grand-Tourneo-Connect/" + $(this).attr("value") +".png");
        $(this).html('<i class="fas fa-check"></i>');
    });
    $( ".accessible__button--smaller" ).click(function() {
        $('body').css('font-size', '14px');
    });
    $( ".accessible__button--larger" ).click(function() {
        $('body').css('font-size', '18px');
    });
    $( ".accessible__button--normal" ).click(function() {
        $('body').css('font-size', '16px');
    });
    $( ".accessible__button--dark" ).click(function() {
        $('#test-id').attr('href', 'assets/css/main_dark.css');
    });
    $( ".accessible__button--light" ).click(function() {
        $('#test-id').attr('href', 'assets/css/main.css');
    });
});