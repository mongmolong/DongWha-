$(document).ready(function () {

    // -------------------------indi-----------------------------
    let pos1 = $("#move01").offset().top;
    let pos2 = $("#move02").offset().top;
    let pos3 = $("#move03").offset().top;
    let pos4 = $("#move04").offset().top;
    let pos5 = $("#move05").offset().top;
    let pos6 = $("#move06").offset().top;


    $(window).scroll(function () {
        let scroll = $(this).scrollTop();

        $(".indi>li>a").removeClass("in_on");

        if (scroll >= pos1 && scroll < pos2) {
            $(".indi>li").eq(0).find("a").addClass("in_on");
        } else if (scroll >= pos2 && scroll < pos3) {
            $(".indi>li").eq(1).find("a").addClass("in_on");
        } else if (scroll >= pos3 && scroll < pos4) {
            $(".indi>li").eq(2).find("a").addClass("in_on");
        } else if (scroll >= pos4 && scroll < pos5) {
            $(".indi>li").eq(3).find("a").addClass("in_on");
        } else if (scroll >= pos5 && scroll < pos6) {
            $(".indi>li").eq(4).find("a").addClass("in_on");
        } else {
            $(".indi>li").eq(5).find("a").addClass("in_on");
        }
    });

    $(".indi>li>a").click(function (e) {
        e.preventDefault();
        let indi_list = $(this).attr("href");
        let distance = $(indi_list).offset().top;
        $("body,html").stop().animate({ "scrollTop": distance }, 500);
    });



    // --------------------------top_btn-----------------------------
    $(".top_btn").hide();

    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        if (scroll > 937) {
            $(".top_btn").fadeIn();
            $(".bottom").addClass("current");

        } else {
            $(".top_btn").fadeOut();
            $(".bottom").removeClass("current");

        }
    });

    $(".top_btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });


    // ------------모달 스크롤-----------------------
    $("#g_modal").on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    $("#section").off('scroll touchmove mousewheel');

    // --------------------------모달----------------------

    $(".modal01>li").click(function () {
        let mo_index = 0;
        mo_index = $(this).index();

        $(".modal01>li").removeClass("mo01_on");
        $(".modal01>li").eq(mo_index).addClass("mo01_on");

        $(".modal02>ul").removeClass("mo02_on");
        $(".modal02>ul").eq(mo_index).addClass("mo02_on");
    });


    // ------------------------- 헤더 효과------------------------

    $(".g_list>li").mouseenter(function () {
        let g_list_conts = $(this).index();

        $(".bottom").stop().css({ "height": "400px" });
        $(".g_list>li").removeClass("g_list_on");

        $(".g_sub").removeClass("g_sub_on");
        $(".g_sub").eq(g_list_conts).addClass("g_sub_on");
    });


    $(".g_sub").mouseenter(function () {
        let g_list_conts02 = $(this).index();

        $(".g_list>li").removeClass("g_list_on");
        $(".g_list>li").eq(g_list_conts02).addClass("g_list_on");
    });


    $(".b_top").mouseleave(function () {
        $(".g_sub").removeClass("g_sub_on");
        $(".g_list>li").removeClass("g_list_on");

        $(".bottom").stop().css({ "height": "102px" });
    });


    // ----------------------------------메인 배너-----------------------------------------
    let main_list = 0;
    let main_count = $(".ma_back>div").length;
    let main_wid = $(".main").width();
    let main_dot = $(".ma_page>li.page_on").index();

    ma_text();

    $(".ma_page>li").eq(main_list).addClass("page_on");

    $(".ma_page>li").click(function () {
        main_list = $(this).index();
        main_r();
    });

    $(".l_ma_btn").click(function () {
        if (main_list == 0) {
            main_list = main_count - 1;
        } else {
            main_list--;
        }
        main_r();
    });

    $(".r_ma_btn").click(function () {
        if (main_list == main_count - 1) {
            main_list = 0;
        } else {
            main_list++;
        }
        main_r();
    });

    let autoSlide01 = setInterval(function () {
        if (main_list == main_count - 1) {
            main_list = 0;
        } else {
            main_list++;
        }
        main_r();
    }, 6000);


    $(".ma_btn>p").mouseenter(function () {
        clearInterval(autoSlide01);
    });
    $(".ma_btn>p").mouseleave(function () {
        autoSlide01 = setInterval(function () {
            if (main_list == main_count - 1) {
                main_list = 0;
            } else {
                main_list++;
            }
            main_r();
        }, 6000);
    });

    function main_r() {
        $(".ma_page>li").removeClass("page_on");
        $(".ma_page>li").eq(main_list).addClass("page_on");
        $(".ma_back").stop().animate({ "margin-left": -main_wid * main_list });

        ma_text();
    };

    function ma_text() {
        $(".ma_text").eq(main_list).children("h1").stop().animate({ "opacity": "0", "margin-left": "0%" });
        $(".ma_text").eq(main_list).children("p").stop().animate({ "opacity": "0", "margin-left": "0%" });

        $(".ma_text").eq(main_list).children("h1").stop().animate({ "opacity": "1", "margin-left": "14%" }, 1000);
        $(".ma_text").eq(main_list).children("p").stop().animate({ "opacity": "1", "margin-left": "21%" }, 1500);

    }


    // ----------------------------brand---------------------

    let br_list = 0;
    let br_count = $(".br_back>li").length;
    let br_hi = $(".brand>li").height();
    // let br_hi = $(".br_back>li").height();

    $(".b01").click(function () {
        if (br_list == 0) {
            br_list = br_count - 1;
        } else {
            br_list--;
        }

         
        $(".br_back").stop().animate({ "margin-top": br_hi * br_list });
        $('.br_back').prepend($('.br_back>li:last')).animate({ bottom: 0 });

        $(".br_backAll>li").stop().fadeOut(300);
        $(".br_backAll>li").eq(br_list).stop().fadeIn(300);
    });

    $(".b02").click(function () {
        if (br_list == br_count - 1) {
            br_list = 0;
        } else {
            br_list++;
        }
        topTop();
    });

    let brSlide = setInterval(function () {
        if (br_list == br_count - 1) {
            br_list = 0;
        } else {
            br_list++;
        }
        topTop();
    }, 5000);

    $(".br_back>li").mouseenter(function () {
        clearInterval(brSlide);
    });
    $(".br_btn>p").mouseenter(function () {
        clearInterval(brSlide);
    });

    $(".br_back>li").mouseleave(function () {
        brSlide = setInterval(function () {
            if (br_list == br_count - 1) {
                br_list = 0;
            } else {
                br_list++;
            }
            topTop();
        }, 5000);
    });


    $(".br_btn>p").mouseleave(function () {
        brSlide = setInterval(function () {
            if (br_list == br_count - 1) {
                br_list = 0;
            } else {
                br_list++;
            }
            topTop()
        }, 5000);
    });

    function topTop() {
        $(".br_back").stop().animate({ "margin-top": -br_hi * br_list });
        $('.br_back').append($('.br_back>li:first')).animate({ top: "-80px" });

        $(".br_backAll>li").stop().fadeOut(300);
        $(".br_backAll>li").eq(br_list).stop().fadeIn(300);
    }


    // ----------------------------new_pro---------------------

    $(".r_new_text>li").click(function (e) {
        e.preventDefault();
    });
    $(".r_new_text>li").mouseenter(function () {
        let new_list = 0;
        new_list = $(this).index();
        $(".new_photos>li").removeClass("new_p_on");
        $(".new_photos>li").eq(new_list).addClass("new_p_on");
    });

    // ----------------------------media---------------------
    $(".l_me_list>li").click(function () {
        let media_list = 0;
        media_list = $(this).index();
        $(".l_me_list>li").removeClass("media_on01");
        $(".l_me_list>li").eq(media_list).addClass("media_on01");

        $(".r_me_list>li").removeClass("media_on02");
        $(".r_me_list>li").eq(media_list).addClass("media_on02");
    });

    // ---------------------------------------------------------

    $(".top_bar").click(function () {
        $("#g_modal").animate({ "right": "0" }, 300);
        $(".move_img").stop().fadeIn(1000);
    });
    $("#g_modal>p").click(function () {
        $("#g_modal").animate({ "right": "-2000px" }, 300);
        $(".move_img").stop().fadeOut(900);
    });
});