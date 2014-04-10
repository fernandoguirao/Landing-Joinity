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

$("#scrollbtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-02").offset().top
    }, 2000);
    $("#section-02").addClass('ani-processed');

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
        "path": "static/landing/media/",
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
