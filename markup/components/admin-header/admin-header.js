/*eslint-disable*/
$(document).ready(function(){
    $(window).on('resize', function (e) {
        var ww = $(this).width();

        if(ww > 780){
            $('.nav-menu').removeAttr('style');
        }
    });

    $(document).on('click', '.nav-toggle', function(){
        $('.nav-menu').fadeToggle(300);
    });
});
/*eslint-enable*/
