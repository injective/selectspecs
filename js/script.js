$(document).ready(function(){
    $(".sticky-container").sticky({topSpacing:0});
});

//mobile pushy menu - button
$('.menu-btn, .site-overlay').click(function(){
    var menuBtn = $('.menu-btn');

    if (menuBtn.hasClass('open')) {
        menuBtn.removeClass('open');
    } else {
        menuBtn.toggleClass('open');
    }
});