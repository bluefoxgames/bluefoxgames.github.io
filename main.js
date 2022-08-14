function animateElement(element = String, animation = String) {
    document.querySelector(element).style.animation = animation + ' forwards';
};


animateElement('.header', 'fadeOutUp 100ms');

function appearElements() {
    return false;
};

window.addEventListener("scroll", function () {
    if (scrollY > 120) {
        animateElement('.header', 'fadeInDown 800ms');
        $('.scroll-anim').fadeOut(500);
    } else {
        animateElement('.header', 'fadeOutUp 800ms');
        $('.scroll-anim').fadeIn(500);
    };
});

if (screen.width < 1080) {
    document.body.setAttribute('oncontextmenu', 'return false');
};