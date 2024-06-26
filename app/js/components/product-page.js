$(document).ready(function () {

    // Переключение табов
    
    $('.tab').each(function() {
        $(this).on('click', function() {
            $(this).addClass('tab--active');
            $('.tab').not(this).removeClass('tab--active');
        });
    });

    
    $('#product-descr-btn').on('click', function () {
        $('.product-page__about-descr').addClass('product-page__tab-content--show');
        $('.product-page__tab-content').not('.product-page__about-descr').removeClass('product-page__tab-content--show');
    });

    $('#product-chars-btn').on('click', function () {
        $('.product-page__chars').addClass('product-page__tab-content--show');
        $('.product-page__tab-content').not('.product-page__chars').removeClass('product-page__tab-content--show');
    });

    $('#product-reviews-btn').on('click', function () {
        $('.product-page__reviews').addClass('product-page__tab-content--show');
        $('.product-page__tab-content').not('.product-page__reviews').removeClass('product-page__tab-content--show');
    });

    $('#product-delivery-btn').on('click', function () {
        $('.product-page__delivery').addClass('product-page__tab-content--show');
        $('.product-page__tab-content').not('.product-page__delivery').removeClass('product-page__tab-content--show');
    });

    

    


    // появление блока с ценам на доставку если выбраны оба селекта

    $('#select-country, #select-city').on('change', function () {
        if ($('#select-country').val() && $('#select-city').val()) {
            $('.product-page__delivery-steptwo').addClass('product-page__delivery-steptwo--show');
        }
    });
});