$(document).ready(function(){

    $('#dmenu').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#dmenu').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle');
    });

});
