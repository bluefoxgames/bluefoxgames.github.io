var animatedElements = ['.presentation .left', '.presentation .right', '.about-us .left', '.about-us .right', '.projects', '.project:nth-child(1)', '.project:nth-child(2)', '.project:nth-child(3)', '.our-team', '.profile-boxes .profile:nth-child(1)', '.profile-boxes.double .profile:nth-child(1)', '.profile-boxes.double .profile:nth-child(2)'];
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
        animateElement('.header', 'fadeInDown 800ms');
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
            // animateElement(animatedElements[0], 'fadeInPop .7s 500ms ease-in-out');
            animateElement(animatedElements[0], 'fadeInRight 1s 500ms');
            animateElement(animatedElements[1], 'fadeInLeft 1s 500ms');
    
        } else if (scrollY >= 360 && scrollY <= 800){
            animateElement(animatedElements[2], 'fadeInRight 1s');
            animateElement(animatedElements[3], 'fadeInLeft 1s');
    
        } else if (scrollY >= 800 && scrollY <= 1800){
            animateElement(animatedElements[4], 'fadeInUp 1s');

            if (scrollY >= 800 && scrollY <= 1400) {
                animateElement(animatedElements[5], 'fadeInPop .7s ease-in-out');
                animateElement(animatedElements[6], 'fadeInPop .7s ease-in-out');

            } else if (scrollY >= 1400 && scrollY <= 1800) {
                animateElement(animatedElements[7], 'fadeInPop .7s ease-in-out');

            };
    
        } else if (scrollY >= 1800 && scrollY <= 2500){
            animateElement(animatedElements[8], 'fadeInUp 1s');
            
            if (scrollY >= 1800 && scrollY <= 2100) {
                animateElement(animatedElements[9], 'fadeInPop .7s ease-in-out');
                
            } else if (scrollY >= 2100 && scrollY <= 2500) {
                animateElement(animatedElements[10], 'fadeInPop .7s ease-in-out');
                animateElement(animatedElements[11], 'fadeInPop .7s ease-in-out');

            };
        }
    } else {
        if (scrollY >= 0 && scrollY <= 60) {
            // animateElement(animatedElements[1], 'fadeInPop .8s 500ms ease-in-out');
            animateElement(animatedElements[1], 'fadeInDown 1s 500ms');
    
        } else if (scrollY >= 360 && scrollY <= 600){
            animateElement(animatedElements[2], 'fadeInUp 1s');
    
        } else if (scrollY >= 600 && scrollY <= 1800){
            animateElement(animatedElements[4], 'fadeInUp 1s');

            if (scrollY >= 600 && scrollY <= 1800) {
                animateElement(animatedElements[5], 'fadeInPop .7s ease-in-out');
                
            } if (scrollY >= 1000 && scrollY <= 1800) {
                animateElement(animatedElements[6], 'fadeInPop .7s ease-in-out');

            } if (scrollY >= 1400 && scrollY <= 1800) {
                animateElement(animatedElements[7], 'fadeInPop .7s ease-in-out');

            };
    
        } else if (scrollY >= 1800 && scrollY <= 2600){
            animateElement(animatedElements[8], 'fadeInUp 1s');
            
            if (scrollY >= 1800 && scrollY <= 2600) {
                animateElement(animatedElements[9], 'fadeInPop .7s ease-in-out');
                
            } if (scrollY >= 2100 && scrollY <= 2600) {
                animateElement(animatedElements[10], 'fadeInPop .7s ease-in-out');

            } if (scrollY >= 2400 && scrollY <= 2600) {
                animateElement(animatedElements[11], 'fadeInPop .7s ease-in-out');

            };
        }
    }
};