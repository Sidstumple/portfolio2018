<template>
	<main>
		<content-image-right :title="intro.title" :subtitle="intro.subtitle" :image-url="intro.image">
			<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
			<p>I started as an intern in August 2017 at Matise Amsterdam, where I've been working full-time since July 2018.</p>
		</content-image-right>

		<div class="work__container column small-full medium-20 large-19 row center" v-translate-on-scroll="{amount: 1}" :style="`transform: translateY(calc(${translateY}))`">
			<div class="row">
				<div class="philosophy">
					<h5 class="text--yellow">It's a problem free</h5>
					<h1 class="serif">Philosophy</h1>
					<div class="row space-between">
						<div class="philosophy__item column medium-11 small-full">
							<p>/fɪˈlɒsəfi/ — <i class="text--grey">noun</i><br>
								From Greek <span class="text--yellow">φιλοσοφία</span>, philosophia.</p>
						</div>
						<div class="philosophy__item column medium-11 small-full">
							<p>A theory or attitude that acts as a guiding principle for behaviour.</p>
						</div>
					</div>
					<div class="row">
						<p>Did you ever try to read an article in a crowded metro? Ever wanted to read a recipe with your hands covered in dough? Inclusive design is not just important for people with disabilities, it generally makes navigating websites easier for everyone.</p>
					</div>
				</div>
			</div>
		</div>


		<title-flip :translate-y="translateY" :title="more.title">
			<p>I pride myself on being a critical thinker and always considering the user first. I love making websites as smooth as possible, which includes focusing on the tiniest details.</p>
			<p>During the minor Web Development I got very interested in inclusive design, taking all abilities in consideration whilst developing.</p>
			<p>At Matise I've had the opportunity to create websites for amazing companies like Amnesty International and Viacom.</p>
		</title-flip>

		<div class="instagram row space-between">
			<h1 class="row instagram__title">I have quite an escalated hobby on instagram:</h1>
			<div class="column background--red instagram__post"></div>
			<div class="column background--red instagram__post"></div>
			<div class="column background--red instagram__post"></div>
		</div>
	</main>
</template>

<script>
import TitleFlip from '~/components/content-blocks/title-flip';
import ContentImageRight from '~/components/content-blocks/content-image-right';
export default {
	components: {
		TitleFlip,
		ContentImageRight
	},
	data() {
		return {
			intro: {
				title: 'Hi, 👩🏽‍💻',
				subtitle: 'I\'m Cyd, a web developer from Amsterdam.',
				image: 'img/cyd.jpg'
			},
			more: {
				title: '<span class="text--yellow">Critical thinker</span> and crazy about details.'
			},
			translateY: '(100vh / 24) * 2'
		};
	}
};
</script>

<style lang="scss" scoped>
	@import 'henris';
	.philosophy {
		padding: grid(2 0 0);
		p {
			max-width: 50rem;
		}
		@media #{$small-only} {
			padding: rem(32 16 0);
		}
	}
	.instagram {
		display: none;
		width: grid(20);
		&__title {
			padding-bottom: grid(1);
		}
		&__post {
			width: grid(6);
			height: grid(6);
		}
	}
</style>
