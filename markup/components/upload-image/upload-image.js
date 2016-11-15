/*eslint-disable*/
window.onload = function () {
    var fileReader1 = new FileReader(),
        fileReader2 = new FileReader(),
        fileReader3 = new FileReader(),
        fileReader4 = new FileReader(),
        fileReader5 = new FileReader();

    fileReader1.addEventListener('load', function(){
       $('#img-1').attr('src', this.result);
    });

    $('#image-1').on('change', function(e){
        var file = e.target.files[0];
        $(this).closest('.upload-image').find('.btn-upload-img').fadeIn(300);
        fileReader1.readAsDataURL(file);
    });

    fileReader2.addEventListener('load', function(){
        $('#img-2').attr('src', this.result);
    });

    $('#image-2').on('change', function(e){
        var file = e.target.files[0];
        $(this).closest('.upload-image').find('.btn-upload-img').fadeIn(300);
        fileReader2.readAsDataURL(file);
    });

    fileReader3.addEventListener('load', function(){
        $('#img-3').attr('src', this.result);
    });

    $('#image-3').on('change', function(e){
        var file = e.target.files[0];
        $(this).closest('.upload-image').find('.btn-upload-img').fadeIn(300);
        fileReader3.readAsDataURL(file);
    });

    fileReader4.addEventListener('load', function(){
        $('#img-4').attr('src', this.result);
    });

    $('#image-4').on('change', function(e){
        var file = e.target.files[0];
        $(this).closest('.upload-image').find('.btn-upload-img').fadeIn(300);
        fileReader4.readAsDataURL(file);
    });

    fileReader5.addEventListener('load', function(){
        $('#img-5').attr('src', this.result);
    });

    $('#image-5').on('change', function(e){
        var file = e.target.files[0];
        $(this).closest('.upload-image').find('.btn-upload-img').fadeIn(300);
        fileReader5.readAsDataURL(file);
    });

};
/*eslint-enable*/
