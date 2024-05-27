$(function () {
    $('.intro-block__slider-inner').on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span>/<span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
        .slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true,
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 1);
        });
});
