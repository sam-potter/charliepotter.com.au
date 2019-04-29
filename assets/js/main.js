var Page = {
	id: undefined,

	init: function(id) {
		Page.id = id;

		Page.render();
		Page.scrollMagic();
	},

    render: function() {
        var el = document.getElementById(Page.id);

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
    }

}