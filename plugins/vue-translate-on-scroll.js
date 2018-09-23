/*
A Vue directive to check if the element is under or above the fold and add a class when the element is above.
<element v-scroll-trigger="{activeClass: 'is-active', offset: 30, relative: false }" ></element>
*/

import Vue from 'vue';
Vue.directive('translate-on-scroll', {
	bind: function(el, binding) {
		let get = {
			position: function(elem) {
				var _x = 0;
				var _y = 0;
				while (elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
					_x += elem.offsetLeft - elem.scrollLeft;
					_y += elem.offsetTop - elem.scrollTop;
					elem = elem.offsetParent;
				}
				return { top: _y, left: _x };
			}
		};

		// Set the default settings
		let settings = {
			active: false,
			originalOffset: Math.floor((binding.value.amount * window.innerHeight) / 24),
			amount: binding.value.amount,
			translate: '',
			elRect: el.getBoundingClientRect(),
			elPos: get.position(el)
		};

		let init = {
			once: function() {
				settings.translate = settings.originalOffset;
			},
			check: function() {
				let point = (el.parentElement.getBoundingClientRect().top) * 1 * settings.amount * 0.1;

				if (point >= settings.originalOffset + 1) {
					if (settings.originalOffset != settings.translate) {
						settings.translate = settings.originalOffset;
					}
				} else {
					settings.translate = point;
				}
				el.style.transform = `translateY(${settings.translate}px)`;
			}
		};

		window.addEventListener('resize', function() {
			settings.windowHeight = window.innerHeight;
			settings.originalOffset = (window.innerHeight / 24) * settings.amount;
		});
		// When scrolling, check the position.
		window.addEventListener('scroll', function() {
			if (el.getBoundingClientRect().top - window.innerHeight < 0) {
				init.check();
			}
		});
		init.once();
	}
});
