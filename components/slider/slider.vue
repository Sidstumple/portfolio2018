<template>
	<section class="slider-container">
		<div v-if="infinite" ref="slider" :class="`slider ${sliderClass} cursor--${cursorType}`" :style="`left: ${left}; transform: ${transform};`">
			<slide
				class="copy slide" :slide="slides[sliderItemsCount - 2]" :slide-index="sliderItemsCount - 2" :slider-type="sliderType"
				@mouseup.native="activeSlide(sliderItemsCount - 2)"
				@mousedown.native="dragStart($event)"
				@touchstart.native="dragStart($event, true)"
				@mousemove.native="dragMove($event)"
				@touchmove.native="dragMove($event)" />
			<slide
				class="copy slide" :slide="slides[sliderItemsCount - 1]" :slide-index="sliderItemsCount - 1" :slider-type="sliderType"
				@mouseup.native="activeSlide(sliderItemsCount - 1)"
				@mousedown.native="dragStart($event)"
				@touchstart.native="dragStart($event, true)"
				@mousemove.native="dragMove($event)"
				@touchmove.native="dragMove($event)" />
			<slide
				class="original slide" v-for="(data, index) in slides"
				:class="slide.active == index ? 'active' : ''"
				:key="index" :slide="data" :slide-index="index" :slider-type="sliderType"
				@mouseup.native="activeSlide(index)"
				@mousedown.native="dragStart($event)"
				@touchstart.native="dragStart($event, true)"
				@mousemove.native="dragMove($event)"
				@touchmove.native="dragMove($event)" />
			<slide
				class="copy slide" :slide="slides[0]" :slide-index="0" :slider-type="sliderType"
				@click.native="activeSlide(0)"
				@mousedown.native="dragStart($event)"
				@touchstart.native="dragStart($event, true)"
				@mousemove.native="dragMove($event)"
				@touchmove.native="dragMove($event)" />
			<slide
				class="copy slide" :slide="slides[1]" :slide-index="1" :slider-type="sliderType"
				@click.native="activeSlide(1)"
				@mousedown.native="dragStart($event)"
				@touchstart.native="dragStart($event, true)"
				@mousemove.native="dragMove($event)"
				@touchmove.native="dragMove($event)" />
		</div>
		<div v-else ref="slider" :class="`slider ${sliderClass} cursor--${cursorType}`" :style="`left: ${left}; transform: ${transform};`" >
			<slide
				class="original slide" v-for="(data, index) in slides" :key="index" :slide="data" :slide-index="index" :slider-type="sliderType"
				@click.native="activeSlide(index)"
				@mousedown.native="dragStart($event)"
				@touchstart.native="dragStart($event, true)"
				@mousemove.native="dragMove($event)"
				@touchmove.native="dragMove($event)" />
		</div>

		<div class="navigation-arrow" v-if="arrows.implement && !infinite">
			<div class="prevSlide" @click="activeSlide(slide.active - 1)" v-if="slide.active > 0"></div>
			<div class="prevSlide prevSlide--inactive" v-else></div>
			<div class="nextSlide" @click="activeSlide(slide.active + 1)" v-if="slide.active < sliderItemsCount - 1"></div>
			<div class="nextSlide nextSlide--inactive" v-else></div>
		</div>
		<div class="navigation-arrow" v-if="arrows.implement && infinite">
			<div class="prevSlide" @click="activeSlide(slide.active - 1)" v-if="slide.active > 0"></div>
			<div class="prevSlide prevSlide--inactive" v-else @click="activeSlide(sliderItemsCount - 1)"></div>
			<div class="nextSlide" @click="activeSlide(slide.active + 1)" v-if="slide.active < sliderItemsCount - 1"></div>
			<div class="nextSlide nextSlide--inactive" v-else @click="activeSlide(0)"></div>
		</div>

		<div class="row center" :class="bullets.bulletContainerClass" v-if="bullets.implement">
			<div :class="[`${bullets.bulletClass} bullet-${index}`, slide.lastActive < slide.active && slide.active == index ? 'active active--back' : '', slide.lastActive > slide.active && slide.active == index ? 'active active--forward' : '', slide.lastActive == slide.active && slide.active == index ? 'active' : '']" v-for="(bullet, index) in slides" :key="index" @click="activeSlide(index)"></div>
		</div>
	</section>
</template>

<script>
import Slide from '~/components/slider/slide';

export default {
	components: {
		Slide
	},
	props: {
		slides: {
			type: Array,
			default: () => {}
		},
		settings: {
			type: Object,
			default: () => {}
		},
		sliderClass: {
			type: String,
			default: () => {}
		},
		sliderType: {
			type: String,
			default: () => {}
		}
	},
	data() {
		return {
			sliderItemsCount: 0, // Amount of slides
			allLinks: '', // Add all anchor tags here to delay default behavior
			fullWidth: false, // Not sure if this is necessary
			viewport: {
				width: 0, // width of the viewport
				height: 0 // height of the viewport
			},
			responsive: {
				offset: 0,
				slide: {
					width: 0, // Responsive width of slider item (in grid)
					spacing: 0
				}
			},
			static: {
				implement: false,
				offset: 0,
				slide: {
					width: 0,
					spacing: 0
				}
			},
			widths: {
				container: 0, // Container size (in pixels)
				slide: {
					min: 0, // Minimal width of slider item (in pixels)
					max: 100000, // Maximum width of slider item (in pixels)
					actual: 0,// Actual slide width in pixels
					spacing: {
						min: 0, // Minimal space between slides (in pixels)
						max: 4000, // Maximum space between slides (in pixels)
						actual: 0 // Actual slide width in pixels
					},
				},
				offset: {
					min: 0, // Minimum offset left (in pixels)
					max: 0, // Maximum offset left (in pixels)
					actual: 0 // actual offset
				},
			},
			breakpoints: {
				small: {
					breakpoint: 750, // Breakpoint in pixels
					gridWidth: 0,	// Width of slide (in grids)
					spacing: 0 //Spacing between slides (in grids)
				},
				medium: {
					breakpoint: 960, // Breakpoint in pixels
					gridWidth: 0,	// Width of slide (in grids)
					spacing: 0 //Spacing between slides (in grids)
				},
				large: {
					breakpoint: 1280, // Breakpoint in pixels
					gridWidth: 0,	// Width of slide (in grids)
					spacing: 0 //Spacing between slides (in grids)
				},
				xlarge: {
					breakpoint: 1920, // Breakpoint in pixels
					gridWidth: 0,	// Width of slide (in grids)
					spacing: 0 //Spacing between slides (in grids)
				}
			},
			animation: {
				easing: 'ease-out', // Animation easing
				duration: '0.4s' // Animation duration
			},
			drag: {
				start: 0, // Start position of drag event
				position: 0, // Current position of mouse or finger
				distance: 0 // Distance between start and position
			},
			navigated: { // Check for infinite slider if slider was navigated by dragging or bullets
				bullets: false,
				drag: false
			},
			translate: {
				new: 0, // New translate when drag is let go
				current: 0 // Current translate while dragging
			},
			slide: {
				active: 0, // Currently active slide
				lastActive: 0 // Previously active
			},
			arrows: {
				implement: false // Boolean arrow navigation
			},
			mouseUp: true, // Boolean if mouse click is up
			touch: false, // Boolean if navigation type is touch
			touched: false, // Boolean if slider is already touched
			bullets: {
				implement: false, // Boolean bullet navigation
				bulletContainerClass: 'bullet__container', // Customizable bullet container class
				bulletClass: 'bullet__item' // Customizable bullet class
			},
			slider: false, // Boolean to check if slider should be initiated
			infinite: false, // Boolean infinte slider
			dontEnd: true, // Boolean to check if drag has actually ended
			left: 0, // Left -offset for infinite slider
			dragging: false, // Check if dragging
			cursorType: 'grab', // Set cursor
			transform: 'translateX(0px)' // Translate
		};
	},
	watch: {
		'slide.active': function () {
			this.$emit('slidechange', this.slide.active); // Emit slide change event to parent
		}
	},
	mounted() {
		this.allLinks = this.$refs.slider.querySelectorAll('a'); // Collect all links
		this.once(); // Initiate slider settings that only need to be checked at initial mount
		let self = this;
		if (this.widths.container + this.widths.offset.actual * 2 > this.viewport.width + 1) {
			// If slider is wider than viewport:
			this.slider = true;
			this.cursor('grab');
		}

		window.addEventListener('resize', function() {
			// Check again on resize, also adjust viewport width and height
			if (window.innerWidth != self.viewport.width) {
				self.viewport.width = window.innerWidth;
				self.responsiveWidths();

				if (self.widths.container + self.widths.offset.actual * 2 > self.viewport.width && !self.slider) {
					self.cursor('grab');
					self.activeSlide(self.slide.active);
					self.slider = true;
				} else if (self.widths.container + self.widths.offset.actual * 2 > self.viewport.width && self.slider) {
					self.slider = true;
				} else {
					self.slider = false;
					self.cursor('auto');
					self.slide.active = 0;
					self.activeToTranslate();
				}
			}
		});

		// Add mouseup and touchend listeners on entire window
		window.addEventListener('mouseup', function(e) {
			self.dragEnd(e);
		});
		window.addEventListener('touchend', function(e) {
			self.touchEnd(e);
		});
	},
	methods: {
		once() {
			this.sliderItemsCount = this.slides.length;
			this.overwriteSettings(this._data, this.settings);
			this.easing(this.animation.easing, this.animation.duration);
			this.responsiveWidths();
		},
		overwriteSettings(settings, overwrite) {
			const allKeys = [...Object.keys(settings), ...Object.keys(overwrite)];
			let self = this;
			let arr = [];
			let duplicates = [];
			allKeys.forEach((key) => {
				if (arr.includes(key)){
					duplicates.push(key);
				} else {
					arr.push(key);
				}
			});
			duplicates.forEach((dup) => {
				let nested = Object.keys(settings[dup]).length;
				if (nested == 0) {
					settings[dup] = overwrite[dup];
				} else {
					self.overwriteSettings(settings[dup], overwrite[dup]);
				}
			});
		},
		easing(easing, duration) {
			this.$refs.slider.style.transition = `${duration} ${easing}`;
		},
		calcMinMax(min, initial, max) {
			if (min > initial) {
				return min;
			} else if (max < initial){
				return max;
			} else  {
				return initial;
			}
		},
		responsiveWidths() {
			this.viewport.height = window.innerHeight;
			this.viewport.width = window.innerWidth;

			let width = 0;
			let spacing = 0;
			let offset = 0;

			let settings = this.settings;
			let grid = this.viewport.width / 24;

			if (settings.static) {
				this.static.implement == settings.static.implement;
			}
			if (this.static.implement == false) {
				width = this.responsive.slide.width * grid;
				spacing = this.responsive.slide.spacing * grid;
				offset = this.responsive.offset * grid;
			} else {
				width = this.static.slide.width;
				spacing = this.static.slide.spacing;
				offset = this.static.offset;
			}

			this.widths.slide.actual = this.calcMinMax(this.widths.slide.min, width, this.widths.slide.max);
			this.widths.slide.spacing.actual = this.calcMinMax(this.widths.slide.spacing.min, spacing, this.widths.slide.spacing.max);
			this.widths.offset.actual = this.calcMinMax(this.widths.offset.min, offset, this.widths.offset.max);

			this.widths.container = this.widths.slide.actual * this.sliderItemsCount + this.widths.slide.spacing.actual * this.sliderItemsCount;

			if (settings.infinite) {
				this.left = `-${(this.widths.slide.actual * 1.5 + this.widths.slide.spacing.actual)  / this.viewport.width * 100}vw`;
				if(settings.fullWidth) {
					this.left = `-${(this.widths.slide.actual * 2 + this.widths.slide.spacing.actual) / this.viewport.width * 100}vw`;
				}
			} else {
				this.left = `${this.widths.offset.actual}px`;
			}
			let translate = 0;
			this.nicePosition(translate);
		},
		calcActiveSlide() {
			this.slide.lastActive = this.slide.active;
			let anchorPoint = this.viewport.width / 6;

			if (this.drag.distance > anchorPoint && this.slide.lastActive > 0) {
				this.slide.active--;
			} else if (this.drag.distance < -anchorPoint && this.slide.lastActive != this.sliderItemsCount - 1) {
				this.slide.active++;
			} else if (this.drag.distance > anchorPoint && this.infinite) {
				if (this.slide.lastActive == 0) {
					this.slide.active = this.sliderItemsCount - 1;
				}
			} else {
				if (this.infinite) {
					if (this.drag.distance > anchorPoint || this.drag.distance < -anchorPoint) {
						this.slide.active = 0;
					} else {
						this.slide.active = this.slide.active;
					}
				} else {
					this.slide.active = this.slide.active;
				}
			}
			this.drag.distance = 0;
			this.activeToTranslate();
		},
		activeSlide(index) {
			if (this.slider && !this.dragging) {
				this.slide.lastActive = this.slide.active;
				this.slide.active = index;

				this.activeToTranslate();
			}
		},
		formula(active) {
			return active * this.widths.slide.actual + this.widths.slide.spacing.actual * active;
		},
		activeToTranslate() {
			let self = this;
			let translate;
			if (this.infinite && this.slide.lastActive == 0 && this.slide.active == this.sliderItemsCount - 1 || this.slide.lastActive == this.sliderItemsCount - 1 && this.slide.active == 0) {
				this.translateInfinite();
			} else {
				if (self.slide.active != 0) {
					translate = -this.formula(this.slide.active);
				} else {
					translate = 0;
				}
				if (this.slide.active !== 0 || this.slide.active !== this.sliderItemsCount - 1 && this.slide.active !== this.slide.lastActive) {
					self.nicePosition(translate);
				}
			}
		},
		translateInfinite() {
			let self = this;
			let extraTranslate = 0;
			let translate;
			if (this.navigated.drag){
				extraTranslate = this.drag.position - this.drag.start;
			}
			if (this.slide.lastActive == 0 && this.slide.active == this.sliderItemsCount - 1) {
				self.easing('ease-out', 'none');
				setTimeout(function() {
					translate = -self.formula(self.sliderItemsCount) + extraTranslate;
					self.nicePosition(translate);
				}, 10);

				setTimeout(function() {
					translate = -self.formula(self.slide.active);
					self.easing('ease-out', '0.4s');
					self.nicePosition(translate);
				}, 100);
			} else if (this.slide.lastActive == this.sliderItemsCount - 1 && this.slide.active == 0) {
				self.easing('ease-out', 'none');
				setTimeout(function() {
					translate = -self.formula(-1) + extraTranslate;
					self.nicePosition(translate);
				}, 10);
				setTimeout(function() {
					translate = 0;
					self.easing('ease-out', '0.4s');
					self.nicePosition(translate);
				}, 100);
			}
		},
		nicePosition(translate) {
			this.translate.new = translate;
			this.transform = `translateX(${this.translate.new}px)`;
		},
		cursor(cursorType) {
			this.cursorType = cursorType;
		},
		dragStart(e, touch) {
			this.dontEnd = false;
			this.touch = touch;
			if (!this.touched) {
				if (this.touch) {
					this.drag.start = e.targetTouches[0].clientX;
					this.translate.current = this.translate.new;
				} else {
					if (this.slider) {
						this.mouseUp = false;
						this.cursor('grabbing');
						this.drag.start = e.clientX;
						this.translate.current = this.translate.new;
					}
				}
				this.touched = true;
			}
		},
		dragMove(e) {
			if (this.touch) {
				if (this.touched) {
					this.dragging = true;
					this.drag.position = e.targetTouches[0].clientX;
					this.dragTranslate();
				}
			} else {
				if (!this.mouseUp) {
					this.drag.position = e.clientX;
					this.listenLinks(false);
					this.dragTranslate();
				}
			}
		},
		touchEnd() {
			if (!this.dontEnd) {
				this.dragEnd();
			}
			this.dontEnd = true;
		},
		dragEnd() {
			let self = this;
			this.dragging = false;
			this.navigated.drag = true;
			this.navigated.bullets = false;
			if (this.slider && this.touched) {
				this.cursor('grab');
				this.mouseUp = true;
				setTimeout(function() {
					self.listenLinks(true);
					self.calcActiveSlide();
				}, 10);
				this.touched = false;
			}
		},
		dragTranslate() {
			this.drag.distance = this.drag.position - this.drag.start;
			this.translate.new = this.translate.current + this.drag.distance;
			this.transform = `translateX(${this.translate.new}px)`;
		},
		listenLinks(pointer) {
			let self = this;
			this.allLinks.forEach(function(link) {
				if (!self.touch) {
					if (pointer) {
						link.style.pointerEvents = 'auto';
					} else {
						link.style.pointerEvents = 'none';
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
	@import '~assets/scss/colors/colors';
	@import '~henris';

	.slider {
		min-width: 10000vw;
		&.cursor {
			&--grab {
				cursor: grab;
			}
			&--grabbing {
				cursor: grabbing;
				.slide .video-placeholder {
					cursor: grabbing;
				}
			}
			&--pointer {
				cursor: pointer;
			}
		}
	}
	.slider-container {
		width: 100%;
		height: 100%;
		max-width: 100vw;
		overflow: hidden;
	}
	.bullet{
		&__container {
			padding: grid(1 0 2);
		}
		&__item {
			background: color(Black, .25);
			width: 10px;
			height: 10px;
			border-radius: 100%;
			cursor: pointer;
			border-radius: 100%;
			overflow: hidden;
			& + .bullet__item {
				margin-left: 10px;
			}
			&.active{
				transform: translateX(0);
				&:before {
					content: '';
					border-radius: 100%;
					position: absolute;
					width: 100%;
					height: 100%;
					background: color(Black);
				}
				&--forward {
					&:before {
						animation: forward 1s forwards;
					}
				}
				&--back {
					&:before {
						animation: back 1s forwards;
					}
				}
			}
		}
	}

.navigation-arrow {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	top: 0;
	pointer-events: none;
	.prevSlide, .nextSlide {
		pointer-events: auto;
		cursor: pointer;
		position: relative;
		width: 2rem;
		height: 2rem;
		background: color(White);
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		&:before, &:after {
			content: '';
			transition: .4s ease-out;
			position: relative;
			background: color(Black);
			width: 2px;
			height: 8px;
		}
		&:before {
			transform: rotate(45deg);
			top: -2px;
		}
		&:after {
			transform: rotate(-45deg);
			top: 2px;
			left: -2px;
		}
		&--inactive {
			cursor: auto;
			&:before, &:after {
				background: color(Shade4);
			}
		}
	}
	.nextSlide {
		transform: rotate(180deg);
	}
}

@keyframes forward {
	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(0);
	}
}
@keyframes back {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
