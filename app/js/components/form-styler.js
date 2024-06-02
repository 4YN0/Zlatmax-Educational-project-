//= ../../../node_modules/jquery-form-styler/dist/jquery.formstyler.min.js

$(function () {

    $('.user-nav__callback-select').styler(); // header phone dropdown

    $('#phone-list .jq-selectbox__select').on('click', function () {
        $('#phone-list .jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });

    $('#phone-list .jq-selectbox li').on('click', function () {
        $('#phone-list .jq-selectbox__trigger-arrow').removeClass('jq-selectbox__trigger-arrow--active')
    });


    $('.shop-sort__select').styler(); // shop sort dropdown

    $('#shop-sort .jq-selectbox__select').on('click', function () {
        $('#shop-sort .jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });

    $('#shop-sort .jq-selectbox li').on('click', function () {
        $('.jq-selectbox__trigger-arrow').removeClass('jq-selectbox__trigger-arrow--active')
    });
});