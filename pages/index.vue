<template>
	<div class="row">
		<div class="row intro">
			<div class="row intro__container center">
				<section class="column small-22 medium-10 large-9 intro__text">
					<div class="intro__right-text">
						<h1>Hi, 👩🏽‍💻</h1>
						<h2>I'm Cyd, a web developer from Amsterdam.</h2>
						<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
						<p>I started as an intern in August 2017 at Matise Amsterdam, where I've been working full-time since July 2018.</p>
					</div>
				</section>
				<div class="intro__image small-full medium-8 large-9 column">
					<div class="intro__image-inner" style="background-image: url('/img/cyd.jpg')" v-translate-on-scroll="{amount: 2}" :style="`transform: translateY(calc(${translateY}))`"></div>
				</div>
			</div>
		</div>
		<div class="content-block row">
			<div class="content-block__text row">
				<div class="text--flip column small-22 medium-6 large-2 ">
					<h1 v-translate-on-scroll="{amount: 2}" :style="`transform: translateY(calc(${translateY}))`"><span class="text--yellow">Critical thinker</span> and crazy about details.</h1>
				</div>
				<div class="content-block__body column small-22 medium-18 large-13" v-translate-on-scroll="{amount: 1}" :style="`transform: translateY(calc(${translateY}))`">
					<p>I pride myself on being a critical thinker and always considering the user first. I love making websites as smooth as possible, which includes focusing on the tiniest details.</p>
					<p>During the minor Web Development I got very interested in inclusive design, taking all abilities in consideration whilst developing.</p>
					<p>At Matise I've had the opportunity to create websites for amazing companies like Amnesty International and Viacom.</p>
				</div>
			</div>
		</div>
		<div class="instagram row space-between">
			<h1 class="row instagram__title">I have quite an escalated hobby on instagram:</h1>
			<div class="column background--red instagram__post"></div>
			<div class="column background--red instagram__post"></div>
			<div class="column background--red instagram__post"></div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			translateY: '(100vh / 24) * 2'
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'henris';
.intro{
	margin-top: grid(2);
	height: 100%;
	&__container {
		align-items: center;
	}
	&__text {
		margin-bottom: grid(1);
		position: relative;
		display: flex;
		z-index: 2;
		min-height: 250px;
	}
	&__image {
		overflow: hidden;
		position: relative;
		z-index: 1;
		height: grid(12);
		margin-left: grid(1);
		@media #{$medium-down}{
			height: grid(8);
		}
		@media #{$small-only}{
			height: grid(14);
			margin-left: 0;
		}
		&-inner {
			transition: .4s ease-out;
			position: absolute;
			top: grid(-1);
			width: 100%;
			height: 100%;
			background-size: cover;
			background-position: left bottom;
			background-repeat: no-repeat;
		}
	}
}
.content-block {
	&__text {
		margin: grid(3 0 4 5);
		@media #{$medium-down} {
			margin: grid(3 2 2);
		}
	}
	&__body {
		padding-left: grid(1);
		max-width: 30rem;
	}
}

.text--flip {
	writing-mode: vertical-rl;
	width: max-content;
	height: grid(9);
	@media #{$medium-down}{
		writing-mode: initial;
		width: grid(18);
		height: auto;
		padding-bottom: grid(3);
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
