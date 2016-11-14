/*eslint-disable*/
;(function($){
    var options = {
        itemsCustom : [
            [700, 1],
            [720, 2],
            [800, 2],
            [1000, 3],
            [1200, 3],
            [1250, 4],
            [1400, 4]
        ],
        navigation: false,
        responsive: true,
        responsiveRefreshRate: 0,
        autoHeight: true,
        scrollPerPage: true,
        pagination: false,
        transitionStyle:"fade",
        autoPlay : 5000
    };
    $(".top-girls-slider-content").owlCarousel(options);
    var owl = $(".top-girls-slider-content").data('owlCarousel');

    $('.slider-control.prev-btn').on('click', function(){
        owl.prev();
    });

    $('.slider-control.next-btn').on('click', function(){
        owl.next();
    });

})(jQuery);
/*eslint-enable*/
