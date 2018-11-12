<template>
	<section class="row">
		<div class="row intro center">
			<div class="column text-left medium-9 small-22">
				<h1>Werk werk <span class="text--yellow">werk</span></h1>
			</div>
			<div class="text-right column medium-7 small-22">
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
			</div>
		</div>
		<div class="row">
			<slider :slides="slides" :settings="sliderSettings" slider-type="Work" slider-class="slider__work row"></slider>
		</div>
		<section class="row body-text">
			<div class="column medium-10 small-22">
				<h1>He hallo titeltje</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
			</div>
		</section>
	</section>
</template>

<script>
import Slider from '~/components/slider/slider';

export default {
	components: {
		Slider
	},
	data() {
		return {
			sliderSettings: {
				responsive: {
					offset: 0,
					slide: {
						width: 10,
						spacing: 1,
					}
				},
				infinite: true,
				bullets: {
					implement: true
				},
				arrows: {
					implement: true
				}
			},
			slides: [
				{
					image: 'http://nationalzoo.com.au/wp-content/uploads/2017/09/20170919-_DSC9717-740x540.jpg'
				},
				{
					image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Meerkat_%28Suricata_suricatta%29_Tswalu.jpg'
				},
				{
					image: 'https://images.buyagift.co.uk/common/client/Images/Product/Extralarge/en-GB/11871113_ActivitySheetImage.jpg'
				},
				{
					image: 'http://www.natgeokids.com/wp-content/uploads/2016/11/meerkat-facts-5.jpg'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
@import '~henris';
.intro {
	padding: grid(1 0 2);
	.text-left {
		padding-right: grid(.5);
	}
	.text-right {
		padding-left: grid(.5);
	}
	.text-right, .text-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}
.slider__work {
	margin-top: grid(1);
	position: relative;
}

.body-text {
	margin-left: grid(4);
}

</style>
