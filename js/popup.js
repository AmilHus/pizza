
$('.product__btn').click(function(){
    $('.popup-order').addClass('is-active');
    $('body').addClass('no-scrolling');
    $('.order__img').attr("src",'img/' + $(this).attr('id') + ".svg");
    $('.order__title_value').text(($(this).parent().parent().parent().children('.product__content').children('.product__title').text()));
    $('.order__title_cost').text(($(this).parent().parent().parent().children('.product__footer').children('.product__bottom').children('.product__price').children('.product__price-value').text()));
    
});

$('.btn-close').click(function(){
    $('.popup').removeClass('is-active');
    $('body').removeClass('no-scrolling');
});

$('.btn-menu').click(function(){
    $('.popup-menu').addClass('is-active');
    $('body').addClass('no-scrolling');

    
});

$('.btn-top').click(function(){
    $('html, body').animate({
        scrollTop: $('#catalog').offset().top + 'px'},{
        duration:1000,
        easing: 'swing',
    });
    return false;
})

$(document).ready(function() {
    $('.header-page__link').click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top + 'px'},{
            duration:1000,
            easing: 'swing',
        });
        return false;
    });

    $('.mobile-menu__link').click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top + 'px'},{
            duration:1000,
            easing: 'swing',
        });
        return false;
    });
});
