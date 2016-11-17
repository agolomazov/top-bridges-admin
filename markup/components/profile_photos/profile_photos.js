/*eslint-disable*/
var bigSlider = $('.other-profile-big-slider li');
var countSlides = bigSlider.length;
var currentSlideid = bigSlider.eq(0).data('slide-id');
bigSlider.eq(0).show().css('z-index', '10').addClass('active');
console.log('INITIAL SLIDER');
// Второй боковой слайдер
var $selector = '.other-profile-thumb-slider li.profile-photo-item[data-slide-id="'+ currentSlideid +'"]';
$($selector).addClass('active');

$('.profile-modal-slider-controls .slider-control').on('click', function(){
    var flag = $(this).hasClass('prev-item'); // если false - следующий слайд, true - предыдуший
    var countSlides = bigSlider.length;
    if(!flag){
        // получаю активный слайд на большом слайдере
        var activeBigSlide = $('.other-profile-big-slider li.active');
        var currentSlideId = activeBigSlide.data('slide-id');
        activeBigSlide.fadeOut(300).css('z-index', '1').removeClass('active');
        if((currentSlideId + 1) > countSlides){
            currentSlideId = 1;
        } else {
            currentSlideId++;
        }

        bigSlider.eq(currentSlideId - 1).fadeIn(300).css('z-index', '10').addClass('active');
        $('.profile-photos-modal .other-profile-thumb-slider li.active').removeClass('active');

    } else {
        // получаю активный слайд на большом слайдере
        var activeBigSlide = $('.other-profile-big-slider li.active');
        var currentSlideId = activeBigSlide.data('slide-id');
        activeBigSlide.fadeOut(300).css('z-index', '1').removeClass('active');
        if((currentSlideId - 1) < 1){
            currentSlideId = countSlides;
        } else {
            currentSlideId--;
        }

        bigSlider.eq(currentSlideId - 1).fadeIn().css('z-index', '10').addClass('active');
        $('.profile-photos-modal .other-profile-thumb-slider li.active').removeClass('active');

    }

    var $secondSlider = '.profile-photos-modal .other-profile-thumb-slider li[data-slide-id="'+ currentSlideId +'"]';
    $($secondSlider).addClass('active');

});

$(document).on('click', '.my-photos', function (e) {
    e.preventDefault();
    $('.profile-photos-modal').bPopup({
        closeClass: 'modal-close'
    });
});


/*eslint-enable*/
