/*eslint-disable*/
var imgsLeftTopPart = $('.advanced-popup .left-part-top-part .slider-photo img');
var heightsLeftTopPars = [];
var widthLeftTopPars = [];
$.each(imgsLeftTopPart, function (i, el) {
    heightsLeftTopPars.push(el.height);
    widthLeftTopPars.push(el.width);
});
var maxHeightImgLeftTopPart = Math.max(...heightsLeftTopPars);
var maxWidthImgLeftTopPart = Math.max(...widthLeftTopPars);
$('.left-part-top-part .slider-photo').height(maxHeightImgLeftTopPart).width(maxWidthImgLeftTopPart);
$('.right-part-top-part .slider-photo').height(maxHeightImgLeftTopPart).width(maxWidthImgLeftTopPart);

// Слайдер
var bigSlider = $('.advanced-popup .top-part .left-part-top-part .slider-photo li');
var countSlides = bigSlider.length;
var currentSlideid = bigSlider.eq(0).data('slide-id');
bigSlider.eq(0).show().css('z-index', '10').addClass('active');

// Второй боковой слайдер
var $selector = '.slider-photo.slide-thumbs li.slide-item[data-slide-id="'+ currentSlideid +'"]';
$($selector).addClass('active');

var $thirdslider = '.advanced-popup .bottom-part .slider-photo li.slide-item[data-slide-id="'+ currentSlideid +'"]';
$($thirdslider).addClass('active');

$('.advanced-popup .left-part-top-part .slider-controls .slider-control').on('click', function(){
    var flag = $(this).hasClass('prev-item'); // если false - следующий слайд, true - предыдуший
    var countSlides = bigSlider.length;
    if(!flag){
        // получаю активный слайд на большом слайдере
        var activeBigSlide = $('.advanced-popup .top-part .left-part-top-part .slider-photo li.active');
        var currentSlideId = activeBigSlide.data('slide-id');
        activeBigSlide.fadeOut(300).css('z-index', '1').removeClass('active');
        if((currentSlideId + 1) > countSlides){
            currentSlideId = 1;
        } else {
            currentSlideId++;
        }

        bigSlider.eq(currentSlideId - 1).fadeIn(300).css('z-index', '10').addClass('active');
        $('.advanced-popup .right-part-top-part .slide-thumbs li.active').removeClass('active');

    } else {
        // получаю активный слайд на большом слайдере
        var activeBigSlide = $('.advanced-popup .top-part .left-part-top-part .slider-photo li.active');
        var currentSlideId = activeBigSlide.data('slide-id');
        activeBigSlide.fadeOut(300).css('z-index', '1').removeClass('active');
        if((currentSlideId - 1) < 1){
            currentSlideId = countSlides;
        } else {
            currentSlideId--;
        }

        bigSlider.eq(currentSlideId - 1).fadeIn().css('z-index', '10').addClass('active');
        $('.advanced-popup .right-part-top-part .slide-thumbs li.active').removeClass('active');

    }

    var $secondSlider = '.advanced-popup .right-part-top-part .slide-thumbs li[data-slide-id="'+ currentSlideId +'"]';
    $($secondSlider).addClass('active');

    var $thirdslider = '.advanced-popup .bottom-part .slider-photo li';
    $($thirdslider).removeClass('active');
    $thirdslider = '.advanced-popup .bottom-part .slider-photo li[data-slide-id="'+ currentSlideId +'"]';
    $($thirdslider).addClass('active');
});


var advEmailInput = document.querySelector('.advanced-popup .email-input-js');
var advNameInput = document.querySelector('.advanced-popup .name-input-js');
var advLastNameInput = document.querySelector('.advanced-popup .lastname-input-js');
var advPasswordInput = document.querySelector('.advanced-popup .password-input-js');
var advSuperPlaceholderOptions = {
    // delay between letters (in milliseconds)
    letterDelay: 100, // milliseconds
    // delay between sentences (in milliseconds)
    sentenceDelay: 1000,
    // should start on input focus. Set false to autostart
    startOnFocus: true,
    // loop through passed sentences
    loop: true,
    // Initially shuffle the passed sentences
    shuffle: false,
    // Show cursor or not. Shows by default
    showCursor: true,
    // String to show as cursor
    cursor: '|'
};


superplaceholder({
    el: advEmailInput,
    sentences: ['Укажите ваш личный email', 'Например: example@mail.ru'],
    options: advSuperPlaceholderOptions
});

superplaceholder({
    el: advNameInput,
    sentences: ['Укажите ваше имя', 'Например: Дональд'],
    options: advSuperPlaceholderOptions
});

superplaceholder({
    el: advLastNameInput,
    sentences: ['Укажите вашу фамилию', 'Например: Трамп'],
    options: advSuperPlaceholderOptions
});

superplaceholder({
    el: advPasswordInput,
    sentences: ['Укажите ваш пароль', 'Например: войтивматрицу'],
    options: advSuperPlaceholderOptions
});

$(document).on('click', '.advanced-modal-btn', function (e) {
    e.preventDefault();
    $('.advanced-popup').bPopup({
        closeClass: 'modal-close-link'
    });
});
/*eslint-enable*/
