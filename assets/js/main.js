var _toggleMobileNav = () => document.getElementById('mobile-nav').classList.toggle('active');

window.onload = () => {
    M.Materialbox.init(document.querySelectorAll('.materialboxed'));
    new LazyLoad({elements_selector: 'img[data-src]'});
    barba.init();

    barba.hooks.before(data => {
        return new Promise(resolve => {
        	var el = data.current.container.querySelector('#wrapper');
        	var animation = { css: { opacity: 0, transform: 'translateY(-20px)' } };
        	TweenMax.to(el, 0.25, animation).eventCallback('onComplete', resolve)
        });
    });

    barba.hooks.beforeEnter(data => {
        var el = data.next.container.querySelector('#wrapper');
       	var animation = { css: { opacity: 0, transform: 'translateY(20px)' } };
        TweenMax.from(el, 0.25, animation);
        new LazyLoad({elements_selector: 'img[data-src]'});
    });
}