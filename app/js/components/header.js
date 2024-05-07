$(function () {

    $('#menu-knives a').on('click', function (event) {
        event.preventDefault();

        $('#menu-knives .header-bottom__menu-link').toggleClass('header-bottom__menu-link--active');

        $('.header-bottom__menu-link--active').not($('#menu-knives .header-bottom__menu-link')).removeClass('header-bottom__menu-link--active');
        

        $('.menu-nav--knives').toggleClass('menu-nav--show');

        $('.menu-nav').not($('.menu-nav--knives')).removeClass('menu-nav--show');
        });

});


$(function () {

    $('#menu-blades a').on('click', function (event) {
        event.preventDefault();

        $('#menu-blades .header-bottom__menu-link').toggleClass('header-bottom__menu-link--active');

        $('.header-bottom__menu-link--active').not($('#menu-blades .header-bottom__menu-link')).removeClass('header-bottom__menu-link--active');


        $('.menu-nav--blades').toggleClass('menu-nav--show');

        $('.menu-nav').not($('.menu-nav--blades')).removeClass('menu-nav--show');
    });

});


$(function () {

    $('#menu-souvenires a').on('click', function (event) {
        event.preventDefault();

        $('#menu-souvenires .header-bottom__menu-link').toggleClass('header-bottom__menu-link--active');

        $('.header-bottom__menu-link--active').not($('#menu-souvenires .header-bottom__menu-link')).removeClass('header-bottom__menu-link--active');


        $('.menu-nav--souvenires').toggleClass('menu-nav--show');

        $('.menu-nav').not($('.menu-nav--souvenires')).removeClass('menu-nav--show');
    });

});


$(function () {

    $('#menu-flashlights a').on('click', function (event) {
        event.preventDefault();

        $('#menu-flashlights .header-bottom__menu-link').toggleClass('header-bottom__menu-link--active');

        $('.header-bottom__menu-link--active').not($('#menu-flashlights .header-bottom__menu-link')).removeClass('header-bottom__menu-link--active');


        $('.menu-nav--flashlights').toggleClass('menu-nav--show');

        $('.menu-nav').not($('.menu-nav--flashlights')).removeClass('menu-nav--show');
    });

});


$(function () {

    $('#menu-other a').on('click', function (event) {
        event.preventDefault();

        $('#menu-other .header-bottom__menu-link').toggleClass('header-bottom__menu-link--active');

        $('.header-bottom__menu-link--active').not($('#menu-other .header-bottom__menu-link')).removeClass('header-bottom__menu-link--active');


        $('.menu-nav--other').toggleClass('menu-nav--show');

        $('.menu-nav').not($('.menu-nav--other')).removeClass('menu-nav--show');
    });

});



    