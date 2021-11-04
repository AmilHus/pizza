
$('#all').click(function(){
    $('.catalog-nav__btn').removeClass('is-active');
    $('#all').addClass('is-active');
    $('.catalog__item').fadeIn();
});

$('#mushroom').click(function(){
    $('.catalog-nav__btn').removeClass('is-active');
    $('#mushroom').addClass('is-active');
    $('.catalog__item').fadeOut();
    $('.mushroom').fadeIn();
});

$('#meat').click(function(){
    $('.catalog-nav__btn').removeClass('is-active');
    $('#meat').addClass('is-active');
    $('.catalog__item').fadeOut();
    $('.meat').fadeIn();
});

$('#cheese').click(function(){
    $('.catalog-nav__btn').removeClass('is-active');
    $('#cheese').addClass('is-active');
    $('.catalog__item').fadeOut();
    $('.cheese').fadeIn();
});

