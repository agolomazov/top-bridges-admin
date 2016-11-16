/*eslint-disable*/
;(function($){
    var $destroyed = true;
    var $sliderSlick = $('.liked-slider-content');
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
    var slideItems = $('.liked-slide');
    $.each(slideItems, function(index, element){
        slideItemsHeight.push($(element).height());
    });

    var maxHeightSlide = Math.max(...slideItemsHeight);



    if ($documentSize > 710) {
        $sliderSlick.slick($sliderOptions);
        $destroyed = !$destroyed;
    }else{
        $('.liked-slide').removeAttr('style');
    }
    $(window).on('resize', function (e) {
        var documentSize = $(document).innerWidth();
        if (documentSize < 710 && !$destroyed) {
            $sliderSlick.slick('unslick');
            $('.liked-slide').removeAttr('style').css('overflow', 'visible');

            $destroyed = !$destroyed;
        } else if (documentSize >= 710 && $destroyed) {
            $sliderSlick.slick($sliderOptions);
            $('.liked-slide').height(maxHeightSlide ).css('overflow', 'hidden');
            $destroyed = !$destroyed;
        }
    });

})(jQuery);
/*eslint-enable*/

