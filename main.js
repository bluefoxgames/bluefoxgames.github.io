// function updateContentByWidth(width) {
//     if (width < 900) {
//         $('.presentation .left').hide();
//         $('#vertical-line').hide();
//         $('.presentation h2').attr('align', 'center')
//     }
// };

// window.onload = function() {
//     $('content').show();
//     $('#loading').fadeOut(500);
// };

// updateContentByWidth(899);

window.addEventListener("scroll",function(){
    if(scrollY > 120){
        $('.scroll-anim').fadeOut(500);
        document.getElementsByClassName('header')[0].style.animation = 'fadeInBottom 500ms forwards'
    } else {
        $('.scroll-anim').fadeIn(500);
        document.getElementsByClassName('header')[0].style.animation = 'fadeOutUp 500ms forwards'
        // $('.header').fadeOut(500);
    };
});

document.getElementsByClassName('header')[0].style.animation = 'fadeOutUp 100ms forwards'