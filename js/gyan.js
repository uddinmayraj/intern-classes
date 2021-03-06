$(function(){
    'use strict'
    $(window).on('scroll', function(){
        var navHeight =$('#navbar').height();
        var scrollSize =$(window).scrollTop();
        if(scrollSize > navHeight){
            $('#navbar').addClass('navfix');
        }else{
            $('#navbar').removeClass('navfix');
        }
    })
    $('.main_banner').slick({
        prevArrow:'<i class="fa-solid fa-angle-left icons bnricon"></i>',
        nextArrow : '<i class="fa-solid fa-angle-right icons bnricon"></i>'
    })
    $('.counter').counterUp({
        delay: 30,
        time: 1000
    });
    $('.course_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow : '<i class="fa-solid fa-angle-left icons c_sbtn"></i>',
        nextArrow : '<i class="fa-solid fa-angle-right icons c_sbtn"></i>',
        responsive:[{
            brackpoint:1200,
            settings:{
                slidesToShow: 3
            },
        }]
    });
    $('.fot_slider').slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    })
    $("#pb-calendar").pb_calendar({
        'next_month_button' :'<i class="fa-solid fa-angle-right "></i>',
        'prev_month_button' :'<i class="fa-solid fa-angle-left "></i>'
    });
    $('.aslider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass:'sDots'
    })
    $('.testSlider').slick({
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow : '<i class="fa-solid fa-angle-left testSlideIcon"></i>',
        nextArrow : '<i class="fa-solid fa-angle-right testSlideIcon"></i>'
    })
    $('.techr_slider').slick({
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})