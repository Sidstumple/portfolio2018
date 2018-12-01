<template>
	<main class="page page--home">
		<section class="page__container column small-full medium-20 large-18 row center">
			<title-intro :left="intro.left" :right="intro.right" />

			<div class="row">
				<div class="photo__grid row space-between">
					<div class="photo__item column medium-11 small-full" v-translate-on-scroll="{amount: 2}" :style="`background-image: url('img/desk.jpg');transform: translateY(calc(${translateY}))`"></div>
					<div class="photo__item column medium-11 small-full" v-translate-on-scroll="{amount: 1}" :style="`background-image: url('img/wv.png');transform: translateY(calc(${translateY}))`"></div>
				</div>
			</div>

			<!-- <div class="row work">
				<div class="">
					<h5 class="text--yellow">Work</h5>
					<h1 class="serif">What I do</h1>
				</div>
				<div class="row work__grid space-between">
					<div class="work__item column medium-11 large-7 small-full background--red" v-translate-on-scroll="{amount: 1}" :style="`transform: translateY(calc(${translateY}))`">

					</div>
					<div class="work__item column medium-11 large-7 small-full background--red" v-translate-on-scroll="{amount: 2}" :style="`transform: translateY(calc(${translateY * -2}))`">

					</div>
					<div class="work__item column medium-11 large-7 small-full background--red" v-translate-on-scroll="{amount: 3}" :style="`transform: translateY(calc(${translateY * -3}))`">

					</div>
				</div>
			</div> -->
		</section>
	</main>
</template>

<script>
import titleIntro from '~/components/content-blocks/title-intro';

export default {
	components: {
		titleIntro
	},
	data() {
		return {
			intro: {
				left: `This is for <span class="text--yellow hover-">everyone</span>`,
				right: `I'm a <span class="text--yellow">web developer</span> from Amsterdam. 👩🏽‍💻 I make accessible and inclusive websites and focus on the details, because I believe the web is <span class="text--yellow">for everyone.</span>`
			},
			translateY: '(100vh / 24)'
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'henris';

.photo{
	&__grid {}
	&__item {
		height: grid(11);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-top: grid(1);
		&:first-of-type {
			margin-top: grid(2);
		}
		@media #{$small-only} {
			height: grid(24);
			& + .photo__item {
				margin-top: 4rem;
			}
		}
	}
}

.work {
	padding: grid(2 0 0);
	&__grid {}
	&__item{
		height: grid(8);
	}
}

</style>
