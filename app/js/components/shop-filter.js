$('#price-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#price-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#manufacture-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#manufacture-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#steel-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#steel-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#handle-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#handle-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#garda-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#garda-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#gilding-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#gilding-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#lenght-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#lenght-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#bladelenght-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#bladelenght-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#width-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#width-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


$('#rating-heading').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});

$('#rating-heading .shop-filter__heading--close').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('shop-filter__heading--close')
});


// mobile filters open/close //

$('.shop-filter__btn').on('click', function() {
    $('.shop-filter').toggleClass('shop-filter--active');
    $('.shop__results').toggleClass('shop__results--active');
    $('.shop__items').toggleClass('shop__items--grid-1-сard');
});


    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.shop-filter').addClass('shop-filter--fixed');
        } else {
            $('.shop-filter').removeClass('shop-filter--fixed');
        }
    });




