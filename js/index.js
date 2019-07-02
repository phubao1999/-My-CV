$(document).ready(function () {
    $('.fas.fa-bars').click(function (e) { 
        e.preventDefault();
        $('.nav_chil').toggleClass('show');
    });
});