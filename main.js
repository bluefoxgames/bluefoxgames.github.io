function animateElement(element = String, animation = String) {
    document.querySelector(element).style.animation = animation + ' forwards';
};


animateElement('.header', 'fadeOutUp 100ms');

function appearElements() {
    return false;
};

window.addEventListener("scroll", function () {
    // appearElements();

    if (scrollY > 120) {
        $('.scroll-anim').fadeOut(500);
        // document.getElementsByClassName('header')[0].style.animation = 'fadeInBottom 500ms forwards'
        animateElement('.header', 'fadeInDown 800ms');
    } else {
        $('.scroll-anim').fadeIn(500);
        // document.getElementsByClassName('header')[0].style.animation = 'fadeOutUp 500ms forwards'
        animateElement('.header', 'fadeOutUp 800ms');
        // $('.header').fadeOut(500);
    };
});
