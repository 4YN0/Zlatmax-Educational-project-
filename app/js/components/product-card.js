$(function(){
    $('.btn-addto__comparison').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('btn-addto__comparison--active')
    })

    $('.btn-addto__favorites').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('btn-addto__favorites--active')
    })
});