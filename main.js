var animatedElements = ['.presentation .left', '.presentation .right', '.about-us .left', '.about-us .right', '.projects', '.our-team'];
for (let index = 0; index < animatedElements.length; index++) {
    document.querySelector(animatedElements[index]).style.opacity = 0;
};
function animateElement(element = String, animation = String) {
    document.querySelector(element).style.animation = animation + ' forwards';
};


animateElement('.header', 'fadeOutUp 100ms');


window.addEventListener("scroll", function () {
    appearElements();

    if (scrollY > 120) {
        $('.scroll-anim').fadeOut(500);
        // document.getElementsByClassName('header')[0].style.animation = 'fadeInBottom 500ms forwards'
        animateElement('.header', 'fadeInBottom 800ms');
    } else {
        $('.scroll-anim').fadeIn(500);
        // document.getElementsByClassName('header')[0].style.animation = 'fadeOutUp 500ms forwards'
        animateElement('.header', 'fadeOutUp 800ms');
        // $('.header').fadeOut(500);
    };


});


function appearElements() {
    if (screen.width >= 1080) {
        if (scrollY >= 0 && scrollY <= 60) {
            animateElement(animatedElements[0], 'fadeInRight 1s 500ms');
            animateElement(animatedElements[1], 'fadeInLeft 1s 500ms');
    
        } else if (scrollY >= 360 && scrollY <= 800){
            animateElement(animatedElements[2], 'fadeInRight 1s');
            animateElement(animatedElements[3], 'fadeInLeft 1s');
    
        } else if (scrollY >= 800 && scrollY <= 1800){
            animateElement(animatedElements[4], 'fadeInUp 1s');
    
        } else if (scrollY >= 1800 && scrollY <= 2000){
            animateElement(animatedElements[5], 'fadeInUp 1s');
    
        }
    } else {
        if (scrollY >= 0 && scrollY <= 60) {
            animateElement(animatedElements[1], 'fadeInUp 1s 500ms');
    
        } else if (scrollY >= 360 && scrollY <= 800){
            animateElement(animatedElements[2], 'fadeInUp 1s');
    
        } else if (scrollY >= 800 && scrollY <= 1800){
            animateElement(animatedElements[4], 'fadeInUp 1s');
    
        } else if (scrollY >= 1800 && scrollY <= 2000){
            animateElement(animatedElements[5], 'fadeInUp 1s');
    
        }
    }
};