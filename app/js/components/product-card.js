$(function(){
    $('.product-card__comparison').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('product-card__comparison--active')
    })

    $('.product-card__favorites').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('product-card__favorites--active')
    })
});