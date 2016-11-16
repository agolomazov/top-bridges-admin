/*eslint-disable*/

var giftsContainer = $('#gifts-list');
giftsContainer.mixItUp({
    selectors: {
        target: '.gift-item',
        filter: '.filter'
    }
});

$('.filter-all').addClass('active');

$('.filter').on('click', function (e) {
    $('.filter').removeClass('active');
    $(this).addClass('active');
});


/*eslint-enable*/
