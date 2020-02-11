$(function (){
    $("body").css({ "opacity": "0" });
    $("body").animate({ "opacity": "1" }, 1300);
    $(".boxer").boxer({
        mobile: true, top: 50
    });

    $('#nav-toggle').on('click', function ()
    {
        $('body').toggleClass('open');
    });

    $('a[href^="#"]').click(function ()
    {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });


});
