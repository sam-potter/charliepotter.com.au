var splash, splashImages, splashTexts;

window.onload = function() {

    splash = document.getElementById('splash');
    splashImages = document.querySelectorAll('#splash .image');
    splashTexts = document.querySelectorAll('#splash .text');

    document.addEventListener('scroll', _handleScroll);
    _handleScroll();

    initScrollMagic();
}

var initScrollMagic = function() {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({ triggerElement: splash, triggerHook: 'onLeave', duration: '100%' })
        .setTween('#splash .white-overlay', 100, { ease: Power3.easeInOut, left: '-70%' })
        .setPin(splash)
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: splash, triggerHook: 'onLeave', duration: '100%' })
        .setTween('#splash .image', 100, { ease: Power4.easeInOut, left: '30%' })
        .addTo(controller);
} 

var _handleScroll = function() {
    var scroll = document.documentElement.scrollTop;

    var toggleElement = function(els, i) {
        els[i].classList.add('active');
        els[Math.abs(i - 1)].classList.remove('active');
    }

    if (window.innerHeight / scroll < 2) {
        toggleElement(splashImages, 1);
        toggleElement(splashTexts, 1);
    } else {
        toggleElement(splashImages, 0);
        toggleElement(splashTexts, 0);
    }
}