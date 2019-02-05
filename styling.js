$(document).ready(function () {
    $('.work-link, .closeBtn').click(function () {
        if ($('.workContent, .closeContent').hasClass('slide-up')) {
            $('.workContent, .closeContent').addClass('slide-down', 1000);
            $('.workContent, .closeContent').removeClass('slide-up');

        } else {
            $('.workContent, .closeContent').removeClass('slide-down');
            $('.workContent, .closeContent').addClass('slide-up', 1000);
        }
    });
});

$(document).ready(function () {
    $('.about-link, .closeBtn2').click(function () {
        if ($('.aboutContent, .closeContent2').hasClass('slide-up')) {
            $('.aboutContent, .closeContent2').addClass('slide-down', 1000);
            $('.aboutContent, .closeContent2').removeClass('slide-up');

        } else {
            $('.aboutContent, .closeContent2').removeClass('slide-down');
            $('.aboutContent, .closeContent2').addClass('slide-up', 1000);
        }
    });
});

$(document).ready(function () {
    $('.contact-link, .closeBtn3').click(function () {
        if ($('.contactContent, .closeContent3').hasClass('slide-up')) {
            $('.contactContent, .closeContent3').addClass('slide-down', 1000);
            $('.contactContent, .closeContent3').removeClass('slide-up');

        } else {
            $('.contactContent, .closeContent3').removeClass('slide-down');
            $('.contactContent, .closeContent3').addClass('slide-up', 1000);
        }
    });
});
