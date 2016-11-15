/*eslint-disable*/
;(function($){
    var $destroyed = true;
    var $sliderSlick = $('.blacklist-slider-content');
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
    var slideItems = $('.blacklist-slide');
    $.each(slideItems, function(index, element){
        slideItemsHeight.push($(element).height());
    });

    var maxHeightSlide = Math.max(...slideItemsHeight);
    maxHeightSlide += 15;
    $('.top-girls').height(maxHeightSlide);


    if ($documentSize > 670) {
        $sliderSlick.slick($sliderOptions);
        $destroyed = !$destroyed;
    }else{
        $('.blacklist-slide').removeAttr('style');
    }
    $(window).on('resize', function (e) {
        var documentSize = $(document).innerWidth();
        if (documentSize < 670 && !$destroyed) {
            $sliderSlick.slick('unslick');
            $('.blacklist-slide').removeAttr('style').css('overflow', 'visible');

            $destroyed = !$destroyed;
        } else if (documentSize >= 600 && $destroyed) {
            $sliderSlick.slick($sliderOptions);
            $('.blacklist-slide').height(maxHeightSlide ).css('overflow', 'hidden');
            $destroyed = !$destroyed;
        }
    });

})(jQuery);
/*eslint-enable*/
