size = 0;

$('.product__size').click(function(){
    $('.product__size').removeClass('is-active');
    $(this).addClass('is-active');
});

$('.25').click(function(){
    size = 25;
});

$('.35').click(function(){
    size = 35;
});

$('.30').click(function(){
    
    size = 30;
});

$('.product__btn').click(function(){
    $('.order__size_value').text(size);
});