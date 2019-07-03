$(document).ready(function () {
    $('.fas.fa-bars').click(function (e) { 
        e.preventDefault();
        $('.nav_chil').toggleClass('show');
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