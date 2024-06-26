$(function () {

    $('.rating-stars').rateYo({
        numStars: 5,
        starWidth: "22px",
        normalFill: "#ccccce",
        ratedFill: "#E8AA31",
        readOnly: true,
        spacing: "10px",
        starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"/></svg>',
    });

});

$(function () {

    $('.rating-stars--visual-sum, .rating-stars--reviews').rateYo({
        starWidth: "22px",
        normalFill: "#E8AA31",
        ratedFill: "#E8AA31",
        readOnly: true,
        spacing: "10px",
        starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"/></svg>',
    });
});