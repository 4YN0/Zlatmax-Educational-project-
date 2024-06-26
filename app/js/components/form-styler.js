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

    $('.product-page__options-select').each(function () {
        $(this).on('click', function () {
            $(this).find('.jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active');
        });
    });


    $('.product-page__purchase-sum').styler(); // product page sum control
    
});


