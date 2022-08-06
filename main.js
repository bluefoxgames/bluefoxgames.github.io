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
    if(scrollY > 200){
        $('.scroll-anim').fadeOut(500);
    } else {
        $('.scroll-anim').fadeIn(500);
    };
});