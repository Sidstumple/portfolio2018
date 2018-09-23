<template>
	<div class="row intro">
		<div class="row intro__container">
			<section class="column small-full large-8 intro__title">
				<h1>Hi,</h1>
				<typewriter heading-type="h2" heading="I'm Cyd, a web developer from Amsterdam." />
				<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
			</section>
			<div class="intro__image small-full large-8 column">
				<div class="intro__image-inner" style="background-image: url('/img/cyd.jpg')" v-translate-on-scroll="{amount: 2}" :style="`transform: translateY(calc(${translateY}))`"></div>
			</div>
		</div>
		<section class="row">
			<p>Heeee hallo</p>
			<p>Heeee hallo</p>
			<p>Heeee hallo</p>
			<p>Heeee hallo</p>
			<p>Heeee hallo</p>
		</section>
	</div>
</template>

<script>
import Typewriter from '~/components/typewriter';

export default {
	components: {
		Typewriter
	},
	data() {
		return {
			translateY: '(100vh / 24) * 2'
		};
	}
};
</script>

<style lang="scss">
@import 'henris';
.intro{
	position: relative;
	min-height: grid(12);
	top: grid(2);
	&__container {
		width: grid(20);
	}
	&__title {
		position: relative;
		z-index: 2;
		min-height: 250px;
	}
	&__image {
		overflow: hidden;
		position: relative;
		z-index: 1;
		margin-left: grid(2);
		@media #{$medium-down}{
			margin-left: 0;
		}
		&-inner {
			transition: .4s ease-out;
			position: absolute;
			top: grid(-1);
			width: 100%;
			height: 100%;
			background-size: 150%;
			background-position: center;
			background-repeat: no-repeat;
		}
	}
}
</style>
