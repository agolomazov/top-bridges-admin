/*eslint-disable*/
;(function($){
    var $destroyed = true;
    var $sliderSlick = $('.top-girls-slider-content');
    var $documentSize = $(window).width();
    var $sliderOptions = {
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '.slider-control.prev-btn',
        nextArrow: '.slider-control.next-btn'
    };
    var slideItemsHeight = [];
    var slideItems = $('.top-girls-wrapper .profile-item');
    $.each(slideItems, function(index, element){
        slideItemsHeight.push($(element).height());
    });

    var maxHeightSlide = Math.max(...slideItemsHeight);
    $('.top-girls').height(maxHeightSlide);


    if ($documentSize > 600) {
        $sliderSlick.slick($sliderOptions);
        $destroyed = !$destroyed;
    }else{
        $('.top-girls').removeAttr('style');
    }
    $(window).on('resize', function (e) {
        var documentSize = $(document).innerWidth();
        if (documentSize < 600 && !$destroyed) {
            $sliderSlick.slick('unslick');
            $('.top-girls').removeAttr('style').css('overflow', 'visible');

            $destroyed = !$destroyed;
        } else if (documentSize >= 600 && $destroyed) {
            $sliderSlick.slick($sliderOptions);
            $('.top-girls').height(maxHeightSlide).css('overflow', 'hidden');
            $destroyed = !$destroyed;
        }
    });

})(jQuery);
/*eslint-enable*/
