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

    $(function ()
    {
        var headerHight = 80; //ヘッダの高さ
        $('a[href^=#]').click(function ()
        {
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
            $("html, body").animate({ scrollTop: position }, 550, "swing");　//この数値は移動スピード
            return false;
        });
    });


    var navPos = jQuery('header').offset().top; // グローバルメニューの位置
    var navHeight = jQuery('header').outerHeight(); // グローバルメニューの高さ
    jQuery(window).on('scroll', function ()
    {
        if (jQuery(this).scrollTop() > navPos)
        {
            jQuery('body').css('padding-top', 0);
            jQuery('header').addClass('fixed');
        } else
        {
            jQuery('body').css('padding-top', 0);
            jQuery('header').removeClass('fixed');
        }
    });

    /*
    * ハンバーガー
    */
    $(function ()
    {
        $(".burger-icon").on("click", function ()
        {
            if ($(this).hasClass("is-burger-nav-open"))
            {
                $(this).removeClass("is-burger-nav-open");
                $(".burger-nav").removeClass("open");
            } else
            {
                $(this).addClass("is-burger-nav-open");
                $(".burger-nav").addClass("open");
            }
        });
    });

    $('.burger-icon').on('click', function ()
    {
        $('#overlay').toggleClass('open');
    });
    
});
