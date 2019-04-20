var controller, scenes = [];

var Page = {
	activeElementId: undefined,
	isAnimating: false,

	render: function(s, id) {
		Page.clearContent(() => {
			if (!Page.isAnimating) {
				var el = document.getElementById(id);

				s.classList.add('active');

				el.style.visibility = 'hidden';
				el.style.transform = 'translateY(10px)';
				el.classList.add('active');

				Page.isAnimating = true
				TweenMax.to(el, 0.5, { ease: Power2.easeInOut, autoAlpha: 1, transform: 'translateY(0)' })
					.eventCallback('onComplete', () => {
						Page.activeElementId = id;
						Page.isAnimating = false;
					});
			}
		});
	},

	clearContent: function(cb) {
		if (controller) {
		    controller.destroy();
		    controller = null;
		}

		if (scenes.length > 0) {
			for (scene of scenes) {
			    scenes.destroy();
			}
			scenes = [];
		}

		var el = document.querySelectorAll('.tabcontent.active')[0];

		if (el) {
			TweenMax.to(el, 0.1, { autoAlpha: 0 })
				.eventCallback('onComplete', () => {
					el.classList.remove('active');
					cb();
				})
		} else {
			cb();
		}

		var s = document.querySelectorAll(`a[data-id=${Page.activeElementId}]`)[0];
		if (s) {
			s.classList.remove('active');
		}
	},

	initScrollMagic: function() {
	    controller = new ScrollMagic.Controller();
	    var els = document.querySelectorAll('.load-hidden');

	    for (var i = 0; i < els.length; i++) {
	        var el = els[i];

	        var tween = TweenMax.to(el, 0.5, { ease: Power2.easeInOut, delay: (Math.random() * 0.4), autoAlpha: 1, transform: 'translateY(0)' });

	        var scene = new ScrollMagic.Scene({ triggerElement: el, triggerHook: 0.9, reverse: false })
	            .setTween(tween)
	            .addTo(controller)

	        scenes.push(scene);
	    }
	}
}

window.onload = function() {

	M.AutoInit();

	Page.render(document.querySelectorAll('a[data-id=about]')[0], 'about');

}