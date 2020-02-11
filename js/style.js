$(function ()
{
    $("body").css({ "opacity": "0" });
    $("body").animate({ "opacity": "1" }, 1300);
    $(".boxer").boxer({
        mobile: true, top: 50
    });
});
$(function ()
{
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

$(function ()
{
    var $win = $(window),
        $main = $('main'),
        $nav = $('nav'),
        navHeight = $nav.outerHeight(),
        navPos = $nav.offset().top,
        fixedClass = 'transform';

    $win.on('load scroll', function ()
    {
        var value = $(this).scrollTop();
        if (value > navPos)
        {
            $nav.addClass(fixedClass);
            $main.css('margin-top', navHeight);
        } else
        {
            $nav.removeClass(fixedClass);
            $main.css('margin-top', '0');
        }
    });
});