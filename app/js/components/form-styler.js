//= ../../../node_modules/jquery-form-styler/dist/jquery.formstyler.min.js

$(function () {

    $('.user-nav__callback-select').styler();

    $('.jq-selectbox__select').on('click', function () {
        $('.jq-selectbox__trigger-arrow').toggleClass('jq-selectbox__trigger-arrow--active')
    });

    $('.jq-selectbox li').on('click', function () {
        $('.jq-selectbox__trigger-arrow').removeClass('jq-selectbox__trigger-arrow--active')
    });

});