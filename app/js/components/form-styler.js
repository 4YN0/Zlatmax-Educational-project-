//= ../../../node_modules/jquery-form-styler/dist/jquery.formstyler.min.js

$(function () {

    $('.user-nav__callback-select').styler(); // header phone dropdown

    $('#phone-list .jq-selectbox__select').on('click', function () {
        $('#phone-list .jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });


    $('.shop-sort__select').styler(); // shop sort dropdown

    $('#shop-sort .jq-selectbox__select').on('click', function () {
        $('.shop-sort .jq-selectbox__trigger-arrow').toggleClass('shop-sort jq-selectbox__trigger-arrow--active')
    });


    $('.product-page__options-select').styler(); // product page dropdown

    $('.select-steel').on('click', function () {
        $('.select-steel .jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });

    $('.select-handle').on('click', function () {
        $('.select-handle .jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });

    $('.select-garda').on('click', function () {
        $('.select-garda .jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });

    $('.select-treatment').on('click', function () {
        $('.select-treatment .jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });


    $('.product-page__purchase-sum').styler(); // product page sum control
    
});