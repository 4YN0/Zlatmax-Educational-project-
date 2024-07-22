// intro block
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

// catalog slider block
$(function () {

    $('.product-slider__inner').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1310,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});

// new slider block
$(function () {

    $('.new-slider__inner').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});

// product page gallery
$(function () {
    $('.product-page__thumbs').slick({
        asNavFor: '.product-page__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
    });

    $('.product-page__big').slick({
        asNavFor: '.product-page__thumbs',
        draggable: false,
        arrows: false,
        fade: true,
        vertical: false,

        responsive: [
            {
                breakpoint: 1051,
                settings: {
                    draggable: true,
                }
            }
        ]
    });
});