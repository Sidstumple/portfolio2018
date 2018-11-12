<template>
	<div class="row">
		<div class="row intro">
			<div class="row intro__container">
				<section class="column small-full large-8 intro__text">
					<div class="intro__left-text">
						<p class="text--lloyd smaller">
							<strong class="text--yellow">Cyd Stumpel</strong><br>
							Amsterdam<br>
							15.04.1994
						</p>
					</div>
					<div class="intro__right-text">
						<h1>Hi,</h1>
						<h2>I'm Cyd, a web developer from Amsterdam.</h2>
						<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
						<p>I started as an intern in August 2017 at Matise Amsterdam, where I've been working full-time since July 2018.</p>
					</div>
				</section>
				<div class="intro__image small-full large-10 column">
					<div class="intro__image-inner" style="background-image: url('/img/cyd.jpg')" v-translate-on-scroll="{amount: 2}" :style="`transform: translateY(calc(${translateY}))`"></div>
				</div>
			</div>
		</div>
		<div class="content-block row">
			<div class="content-block__text row">
				<div class="text--flip column small-22 medium-2 ">
					<h1>Nog een titel en nog een beetje over mij</h1>
				</div>
				<div class="content-block__body column small-22 medium-20 large-10">
					<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
					<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
					<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
				</div>
			</div>

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
		width: grid(20);
		align-items: center;
	}
	&__left-text {
		text-align: right;
		white-space: nowrap;
		padding-top: 10px;
	}
	&__right-text {
		padding-left: grid(.5);
	}
	&__text {
		position: relative;
		display: flex;
		z-index: 2;
		min-height: 250px;
	}
	&__image {
		overflow: hidden;
		position: relative;
		z-index: 1;
		width: grid(10);
		height: grid(12);
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
			background-size: cover;
			background-position: left center;
			background-repeat: no-repeat;
		}
	}
}
.content-block {
	&__text {
		margin: grid(4 4 0);
	}
	&__body {
		padding-left: grid(1);
	}
}

.text--flip {
	writing-mode: vertical-rl;
	width: max-content;
	height: 700px;
}
</style>
