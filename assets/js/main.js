var Page = {

	init: function(id) {
		Page.render(id);
		Page.scrollMagic();

        document.querySelectorAll('.menu-toggle')[0].addEventListener('mousedown', Page.openMenu);
        document.querySelectorAll('.close-toggle')[0].addEventListener('mousedown', Page.closeMenu);
	},

    render: function(id) {
        var el = document.getElementById(id);

        el.style.visibility = 'hidden';
        el.style.transform = 'translateY(10px)';
        el.classList.add('active');

        TweenMax.to(el, 0.5, { ease: Power2.easeInOut, autoAlpha: 1, transform: 'translateY(0)' })
    },

    scrollMagic: function() {
        var controller = new ScrollMagic.Controller();
        var els = document.querySelectorAll('.load-hidden');

        for (var i = 0; i < els.length; i++) {
            var el = els[i];

            var tween = TweenMax.to(el, 0.5, { ease: Power2.easeInOut, autoAlpha: 1, transform: 'translateY(0)' });

            new ScrollMagic.Scene({ triggerElement: el, triggerHook: 0.8 })
                .setTween(tween)
                .addTo(controller)
        }
    },

    openMenu: () => document.getElementById('mobile-nav').classList.add('active'),

    closeMenu: () => document.getElementById('mobile-nav').classList.remove('active')

}