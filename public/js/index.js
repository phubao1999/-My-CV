$(document).ready(function () {
    $('.fas.fa-bars').click(function (e) { 
        e.preventDefault();
        $('.nav_chil').toggleClass('show');
        $(this).addClass('fas fa-times');
        $('.fa-times').click(function (e) { 
            e.preventDefault();
            $(this).toggleClass('fa-times');
        });
        $('._4, ._5, ._6, ._7, ._8, footer').toggleClass('aaa');
    });
});   //Menu

$(document).ready(function () {
    $(window).scroll(function () { 
        if($('html, body').scrollTop() > $('._4').offset().top){
            $('.nav-desktop').addClass('effect-menu');
            $('.avatar img').addClass('effect-img');
            $('.nav-center ul li').addClass('effect-list');
            $('.nav-right ul li').addClass('effect-list');
            $('.backtotop').addClass('show');
        }else if($('html, body').scrollTop() < $('._4').offset().top){
            $('.nav-desktop').removeClass('effect-menu');
            $('.avatar img').removeClass('effect-img');
            $('.nav-center ul li').removeClass('effect-list');
            $('.nav-right ul li').removeClass('effect-list');
            $('.backtotop').removeClass('show');
        }
    });
});   //scroll Menu

$(document).ready(function () {
    $('.backtotop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },800)
    });
});

$('.menu .nav-center ul li:nth-child(1)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },800)
});    //Click Menu

$('.menu .nav-center ul li:nth-child(2)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._5').offset().top - 55
    },800)
});    //Click Menu

$('.menu .nav-center ul li:nth-child(3)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._6').offset().top - 60
    },800)
});    //Click Menu

$('.menu .nav-center ul li:nth-child(4)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._7').offset().top - 60
    },800)
});    //Click Menu

$('.menu .nav-center ul li:nth-child(5)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._8').offset().top - 65
    },800)
});    //Click Menu 

// ====================

$('.menuForPhone .nav_chil ul li:nth-child(1)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },800)
});    //Click Menu

$('.menuForPhone .nav_chil ul li:nth-child(2)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._5').offset().top - 55
    },800)
});    //Click Menu

$('.menuForPhone .nav_chil ul li:nth-child(3)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._6').offset().top - 58
    },800)
});    //Click Menu

$('.menuForPhone .nav_chil ul li:nth-child(4)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._7').offset().top - 58
    },800)
});    //Click Menu

$('.menuForPhone .nav_chil ul li:nth-child(5)').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('._8').offset().top - 58
    },800)
});    //Click Menu 