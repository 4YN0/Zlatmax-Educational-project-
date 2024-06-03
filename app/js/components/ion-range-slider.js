//  price

$(function () {

    var $range = $(".filter-price__slider"),
        // $priceInputFrom = $("#price-slider .js-input-from"),
        // $priceInputTo = $("#price-slider .js-input-to"),
        $priceInputFrom = $("#price-from"),
        $priceInputTo = $("#price-to"),
        instance,
        min = 3000,
        max = 75000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 15000,
        to: 44000,
        onStart: updateInputs,
        onChange: updateInputs,
        postfix: " ₽",
        prettify_enabled: true,
        prettify_separator: " "
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $priceInputFrom.prop("value", from);
        $priceInputTo.prop("value", to);
    }

    $priceInputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $priceInputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});


// lenght

$(function () {

    var $range = $(".filter-lenght__slider"),
        $lenghtInputFrom = $("#lenght-from"),
        $lenghtInputTo = $(" #lenght-to"),
        instance,
        min = 5,
        max = 180,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 40,
        to: 120,
        onStart: updateInputs,
        onChange: updateInputs,
        postfix: " мм",
        prettify_enabled: true,
        prettify_separator: " "
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $lenghtInputFrom.prop("value", from);
        $lenghtInputTo.prop("value", to);
    }

    $lenghtInputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $lenghtInputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});


// blade lenght

$(function () {

    var $range = $(".filter-bladelenght__slider"),
        $bladeLenghtInputFrom = $("#bladelenght-from"),
        $bladeLenghtInputTo = $("#bladelenght-to"),
        instance,
        min = 3,
        max = 150,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 20,
        to: 100,
        onStart: updateInputs,
        onChange: updateInputs,
        postfix: " мм",
        prettify_enabled: true,
        prettify_separator: " "
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $bladeLenghtInputFrom.prop("value", from);
        $bladeLenghtInputTo.prop("value", to);
    }

    $bladeLenghtInputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $bladeLenghtInputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});


// blade width

$(function () {

    var $range = $(".filter-bladewidth__slider"),
        $bladeLenghtInputFrom = $("#bladewidth-from"),
        $bladeLenghtInputTo = $("#bladewidth-to"),
        instance,
        min = 3,
        max = 15,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 6,
        to: 12,
        onStart: updateInputs,
        onChange: updateInputs,
        postfix: " мм",
        prettify_enabled: true,
        prettify_separator: " "
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $bladeLenghtInputFrom.prop("value", from);
        $bladeLenghtInputTo.prop("value", to);
    }

    $bladeLenghtInputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $bladeLenghtInputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});