/*eslint-disable*/
;(function($){
    var $destroyed = true;
    var $sliderSlick = $('.favorite-slider-content');
    var $documentSize = $(window).width();
    var $sliderOptions = {
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '.slider-control.prev-btn',
        nextArrow: '.slider-control.next-btn',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    };
    var slideItemsHeight = [];
    var slideItems = $('.favorite-slide');
    $.each(slideItems, function(index, element){
        slideItemsHeight.push($(element).height());
    });

    var maxHeightSlide = Math.max(...slideItemsHeight);
    


    if ($documentSize > 710) {
        $sliderSlick.slick($sliderOptions);
        $destroyed = !$destroyed;
    }else{
        $('.favorite-slide').removeAttr('style');
    }
    $(window).on('resize', function (e) {
        var documentSize = $(document).innerWidth();
        if (documentSize < 710 && !$destroyed) {
            $sliderSlick.slick('unslick');
            $('.favorite-slide').removeAttr('style').css('overflow', 'visible');

            $destroyed = !$destroyed;
        } else if (documentSize >= 710 && $destroyed) {
            $sliderSlick.slick($sliderOptions);
            $('.blacklist-slide').height(maxHeightSlide ).css('overflow', 'hidden');
            $destroyed = !$destroyed;
        }
    });

})(jQuery);
/*eslint-enable*/
