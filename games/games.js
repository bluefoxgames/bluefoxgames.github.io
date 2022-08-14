function animateElement(element = String, animation = String) {
    document.querySelector(element).style.animation = animation + ' forwards';
};

var animatedElements = [
    '.title', 
    '.game-list', 
];
for (let index = 0; index < animatedElements.length; index++) {
    document.querySelector(animatedElements[index]).style.opacity = 0;
};


function appearElements() {
    animateElement(animatedElements[0], 'fadeInUp 1s 300ms');
    animateElement(animatedElements[1], 'fadeInUp 1s 300ms');
}


window.addEventListener("scroll", function () {
    appearElements();
});