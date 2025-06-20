// USPS SLIDES 

var action = "click";
var speed = "500";

$(document).ready(function () {
    $('li.usp:first-of-type').next()
        .slideToggle(speed)
    // Question handler
    $('li.usp').on(action, function () {
        // Get next element
        $(this).next()

            .slideToggle(speed)
            // Select all other answers
            .siblings('li.a')
            .slideUp();
    });
});

// INGREDIENTS

$(document).on('click', '.ingredient', function (event) {
    var $name = $(this);
    var $details = $name.next();
    $($details).toggleClass('is-visible');
});

$(document).click(function (e) {
    if (($(e.target).is('.ingr-popup')) || $(e.target).is('.close')) {
        $(".ingr-popup").removeClass('is-visible');
    }
});