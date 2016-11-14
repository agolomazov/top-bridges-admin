/*eslint-disable*/
$(document).ready(function(){
    $('.reviews-list').owlCarousel({
        items: 1,
        paginationNumbers: true,
        navigation: true,
        navigationText: ['&larr;', '&rarr;'],
        responsive: true,
        responsiveRefreshRate: 0,
        responsiveBaseWidth: '.reviews-list',
        autoHeight: true,
        scrollPerPage: true,
        itemsCustom: [[1220, 1]]
    });
});
/*eslint-enable*/
