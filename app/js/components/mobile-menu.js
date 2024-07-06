$(document).ready(function () {

    $("#burger-btn").on('click', function () {
        $('body').toggleClass('body-lock');
        $('.header-bottom__hidden-menu').toggleClass('header-bottom__hidden-menu--show');
        $('.search-form').toggleClass('search-form--show');
        $('.logo').toggleClass('logo--hide');
        $('.header-bottom--catalog').removeClass('header-bottom--show');
        $('.menu-nav').removeClass('menu-nav--show');
    });
    
    // catalog open

    $("#menu-catalog-mobile").on('click', function () {
        $(".header-bottom--catalog").addClass('header-bottom--show');
    });

    $('#back-catalog').on('click', function () {
        $('.header-bottom--catalog').removeClass('header-bottom--show');
    });

    $('.header-bottom__menu-item--back-category').on('click', function () {
        $('.menu-nav').removeClass('menu-nav--show');
    });
});

