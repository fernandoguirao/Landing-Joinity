$(document).ready(function() {

    var iframe = $('#pPlayer')[0];
    var player = $f(iframe);
    player.addEvent('ready', function() {});

    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }


    $('#play').click(function(evt) {
        evt.preventDefault();
        $('.mask').fadeIn('slow');
        $('.popup-video').fadeIn('slow');
        player.api('play')
        $('.mask').click(function() {
            player.api('pause');
            $('.popup-video').fadeOut('slow');
            $('.mask').fadeOut('slow');

        });
    });

    $('.content-23').each(function() {
        $(this).parallax('50%', 0.3, true);
    });

    // STELLAR JS
    // $(window).stellar();

// VIDEO BACKGROUND

    //resize video
    altura = $(window).height()
    $('.video').height(altura);
    $('#section-01').css({"max-height":altura});
    $(window).resize(function() {
        $('.video,#section-01').height($(window).height());
    });
    
    //show the icon
    $('.video .cont').addClass('visible');

    //show the beauty
    setTimeout(function() {
        $('.video .sdf, .video .suys, .video .arrow').addClass('visible');
    }, 2000);
    
    //bg video
    $.backgroundVideo($('#bgVideo'), {
        "align": "centerXY",
        "path": "static/media/",
        "videoid": "video01",
        "width": 846,
        "height": 476,
        "filename": "joinity",
        "types": ["mp4", "ogv", "webm"]
    });

    // $.backgroundVideo($('#bgVideo2'), {
    //     "align": "centerXY",
    //     "videoid": "video02",
    //      "path": "static/media/",
    //     "width": 846,
    //     "height": 476,
    //     "filename": "sexy",
    //     "types": ["mp4", "ogg", "webm"]
    // });
    
    // FIN DE VIDEO BACKGROUND
});
