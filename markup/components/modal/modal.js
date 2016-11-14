/*eslint-disable*/

var modalEmailInput = document.querySelector('.modal .email-input-js');
var modalPasswordInput = document.querySelector('.modal .password-input-js');
var superPlaceholderOptions = {
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
    el: modalEmailInput,
    sentences: ['Укажите ваш личный email', 'Например: example@mail.ru'],
    options: superPlaceholderOptions
});

superplaceholder({
    el: modalPasswordInput,
    sentences: ['Укажите ваш пароль', 'Например: войтивматрицу'],
    options: superPlaceholderOptions
});

$(document).on('click', '.login-btn', function (e) {
    e.preventDefault();
    $('#login-modal').bPopup({
        closeClass: 'modal-close-link'
    });
});

/*eslint-enable*/
