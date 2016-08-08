//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* Prism copy to clipbaord for all pre with copytoclipboard class */
        $('pre.copytoclipboard').each(function () {
            $this = $(this);
            $button = $('<button>Copy</button>');
            $this.wrap('<div/>').removeClass('copytoclipboard');
            $wrapper = $this.parent();
            $wrapper.addClass('copytoclipboard-wrapper').css({position: 'relative'})
            $button.css({position: 'absolute', top: 10, right: 10}).appendTo($wrapper).addClass('copytoclipboard btn btn-default');
            /* */
            var copyCode = new Clipboard('button.copytoclipboard', {
                target: function (trigger) {
                    return trigger.previousElementSibling;
                }
            });
            copyCode.on('success', function (event) {
                event.clearSelection();
                event.trigger.textContent = 'Copied';
                window.setTimeout(function () {
                    event.trigger.textContent = 'Copy';
                }, 2000);
            });
            copyCode.on('error', function (event) {
                event.trigger.textContent = 'Press "Ctrl + C" to copy';
                window.setTimeout(function () {
                    event.trigger.textContent = 'Copy';
                }, 2000);
            });
        });