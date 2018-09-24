/*
A Vue directive to create a swiper that only inits when needed, i.e. when the page is less wide than the container with slides.
It also takes responsiveness and Matise Grid in consideration 🎉
<element v-slider="{widths: { min: 240, responsive: 6}, spacing: {min: 20, responsive: 1}}"></element>
Responsive is based on Matise Grid.
*/

if ('NodeList' in window && !NodeList.prototype.forEach) {
	// Polyfill for ie11 forEach method
	NodeList.prototype.forEach = function(callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

import Vue from 'vue';
Vue.directive('slider', {
	bind: function(el, binding) {
		let settings = {
			sliderItems: el.children,
			sliderItemsCount: el.children.length,
			allLinks: el.querySelectorAll('a'),
			widths: {
				responsive: 0,
				min: 0,
				max: 100000,
				container: 0,
				slide: 0
			},
			spacing: {
				min: 0,
				responsive: 0,
				actual: 0
			},
			offset: {
				min: 0
			},
			viewport: {
				width: window.innerWidth,
				height: window.innerHeight
			},
			animation: {
				easing: 'ease-out',
				duration: '0.4s'
			},
			drag: {
				start: 0,
				distance: 0,
				position: 0
			},
			translate: {
				new: 0,
				current: 0,
				max: 0
			},
			slide: {
				active: 0
			},
			mouseUp: true,
			touch: false,
			touched: false,
			bullets: {
				implement: false,
				bulletContainerClass: 'bullet__container',
				bulletClass: 'bullet__item'
			},
			noSlider: true,
			infinite: false,
			dontEnd: true
		};

		let set = {
			once: function functionName() {
				if (binding.value.widths) {
					if (binding.value.widths.min) {
						settings.widths.min = binding.value.widths.min;
					}
					if (binding.value.widths.max) {
						settings.widths.max = binding.value.widths.max;
					}
				}

				if (binding.value.offset) {
					if (binding.value.offset.min) {
						settings.offset.min = binding.value.offset.min;
					}
				}

				if (binding.value.infinite) {
					settings.infinite = binding.value.infinite;
				}

				if (binding.value.animation) {
					if (binding.value.animation.easing) {
						settings.animation.easing = binding.value.animation.easing;
					}
					if (binding.value.animation.duration) {
						settings.animation.duration = binding.value.animation.duration;
					}
				}

				if (binding.value.bullets) {
					if (binding.value.bullets.implement) {
						settings.bullets.implement = binding.value.bullets.implement;
					}
					if (binding.value.bullets.bulletContainerClass) {
						settings.bullets.bulletContainerClass = binding.value.bullets.bulletContainerClass;
					}
					if (binding.value.bullets.bulletClass) {
						settings.bullets.bulletClass = binding.value.bullets.bulletClass;
					}
				}
				this.bullets();
				this.infiniteLoop();
			},
			responsiveWidths: function() {
				settings.viewport.height = window.innerHeight;
				settings.viewport.width = window.innerWidth;

				if (binding.value.widths.responsive) {
					settings.widths.responsive = binding.value.widths.responsive * (settings.viewport.width / 24);
				}
				if (settings.widths.min > settings.widths.responsive) {
					settings.widths.container = binding.value.widths.min * settings.sliderItemsCount + settings.spacing.actual * settings.sliderItemsCount;
					settings.widths.slide = binding.value.widths.min;
				} else if (settings.widths.max < settings.widths.responsive) {
					settings.widths.container = binding.value.widths.max * settings.sliderItemsCount + settings.spacing.actual * settings.sliderItemsCount;
					settings.widths.slide = binding.value.widths.max;
				} else {
					settings.widths.container = settings.widths.responsive * settings.sliderItemsCount + settings.spacing.actual * settings.sliderItemsCount;
					settings.widths.slide = settings.widths.responsive;
				}

				if (binding.value.spacing) {
					if (binding.value.spacing.min) {
						settings.spacing.min = binding.value.spacing.min;
					}
					if (binding.value.spacing.responsive) {
						settings.spacing.responsive = binding.value.spacing.responsive;
					}
					if (settings.spacing.responsive < settings.spacing.min) {
						settings.spacing.actual = binding.value.spacing.min;
					} else {
						settings.spacing.actual = binding.value.spacing.responsive;
					}
				}
				this.containerWidth();
			},
			containerWidth: function() {
				el.style.width = '1000vw';
				el.style.maxWidth = '1000vw';
			},
			cursor: function(cursor) {
				el.style.cursor = cursor;
			},
			bullets: function() {
				if (settings.bullets.implement == true) {
					create.bullets();
				}
			},
			infiniteLoop: function() {
				if (settings.infinite == true) {
					create.infiniteLoop();
				}
			},
			easing: function() {
				el.style.transition = settings.animation.easing;
				el.style.transitionDuration = settings.animation.duration;
			}
		};

		let create = {
			bullets: function() {
				let bulletContainer = document.querySelector(`.${settings.bullets.bulletContainerClass}`);
				for (let i = 0; i < settings.sliderItemsCount; i++) {
					let bullet = document.createElement('div');
					bullet.classList.add(settings.bullets.bulletClass, `bullet-${i}`);
					bullet.setAttribute('key', i);
					bulletContainer.appendChild(bullet);
					listen.bullet(bullet, i);
				}
			},
			infiniteLoop: function() {
				for (let i = 0; i < settings.sliderItemsCount; i++) {
					el.appendChild(settings.sliderItems[i].cloneNode(true));
				}
				set.responsiveWidths();
			}
		};

		let listen = {
			bullet: function(bullet, index) {
				bullet.addEventListener('click', function() {
					settings.slide.active = index;
					calc.activeToTranslate();
				});
			},
			dragStart: function() {
				el.addEventListener('mousedown', function(e) {
					settings.touch = false;
					drag.start(e);
				});

				el.addEventListener('touchstart', function(e) {
					settings.touch = true;
					settings.dontEnd = false;
					drag.start(e);

				});
			},
			dragMove: function() {
				el.addEventListener('mousemove', function(e) {
					drag.move(e);
				});
				el.addEventListener('touchmove', function(e) {
					drag.start(e);
					drag.move(e);
				});
			},
			dragEnd: function() {
				el.addEventListener('mouseup', function() {
					drag.end();
				});
				el.addEventListener('touchend', function() {
					if (!settings.dontEnd) {
						drag.end();
					}
					settings.dontEnd = true;
				});
			},
			links: function(pointer) {
				settings.allLinks.forEach(function(link) {
					if (!settings.touch) {
						if (pointer) {
							link.style.pointerEvents = 'auto';
						} else {
							link.style.pointerEvents = 'none';
						}
					}
				});
			}
		};

		let drag = {
			start: function(e) {
				if (!settings.touched) {
					if (settings.touch) {
						settings.drag.start = e.targetTouches[0].clientX;
						settings.translate.current = settings.translate.new;
					} else {
						if (settings.noSlider == false) {
							settings.mouseUp = false;
							set.cursor('grabbing');
							settings.drag.start = e.clientX;
							settings.translate.current = settings.translate.new;
						}
					}
					settings.touched = true;
				}
			},
			move: function(e) {
				if (settings.touch) {
					if (settings.touched) {
						settings.drag.position = e.targetTouches[0].clientX;
						slide.translate();
					}
				} else {
					if (settings.mouseUp == false) {
						settings.drag.position = e.clientX;
						listen.links(false);
						slide.translate();
					}
				}
			},
			end: function() {
				settings.touched = false;
				if (settings.noSlider == false) {
					set.cursor('grab');
					settings.mouseUp = true;
					setTimeout(function() {
						listen.links(true);
					}, 100);
				}
				calc.activeSlide();
			}
		};

		let slide = {
			translate: function() {
				settings.drag.distance = settings.drag.position - settings.drag.start;
				settings.translate.new = settings.translate.current + settings.drag.distance;
				el.style.transform = `translateX(${settings.translate.new}px)`;
				calc.animationTime();
			},
			nicePosition: function(translate) {
				setTimeout(function() {
					settings.translate.new = translate;
					el.style.transform = `translateX(${settings.translate.new}px)`;
				}, 200);
			}
		};

		let calc = {
			activeSlide: function() {
				let anchorPoint = settings.viewport.width / 8;
				if (settings.drag.distance > anchorPoint && settings.slide.active >= 1) {
					settings.slide.active--;
				} else if (settings.drag.distance < -anchorPoint && settings.slide.active != settings.sliderItemsCount - 1) {
					settings.slide.active++;
				} else {
					settings.slide.active = settings.slide.active;
				}

				this.activeToTranslate();
			},
			activeToTranslate: function() {
				if (settings.slide.active != 0) {
					let translate = -settings.slide.active * settings.widths.slide - settings.spacing.actual * (settings.slide.active - 1);
					slide.nicePosition(translate);
				} else {
					let translate = 0;
					slide.nicePosition(translate);
				}
			},
			animationTime: function() {
				settings.animation.duration = settings.drag.distance / 1000;
				el.style.transitionDuration = settings.animation.duration;
			}
		};

		window.addEventListener('resize', function() {
			set.responsiveWidths();
			if ((settings.widths.container + settings.offset.min * 2) > settings.viewport.width && settings.noSlider == false) {
				set.cursor('grab');
				listen.dragStart();
				listen.dragMove();
				listen.dragEnd();
				settings.noSlider = true;
			} else {
				settings.noSlider = false;
				set.cursor('normal');
			}
		});

		window.addEventListener('load', function() {
			set.once();
			set.responsiveWidths();
			set.easing();
			if ((settings.widths.container + settings.offset.min * 2) > settings.viewport.width) {
				console.log('init');
				
				settings.noSlider = false;
				set.cursor('grab');
				listen.dragStart();
				listen.dragMove();
				listen.dragEnd();
			}
		});
	}
});
