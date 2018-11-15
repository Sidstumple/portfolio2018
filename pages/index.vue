<template>
	<div class="row">
		<content-image-right title="Hi, 👩🏽‍💻" subtitle="I'm Cyd, a web developer from Amsterdam." image-url="img/cyd.jpg">
			<p>In 2018 I graduated from the University of Applied Sciences in Amsterdam and got my BaSc in Communication and Multimedia Design.</p>
			<p>I started as an intern in August 2017 at Matise Amsterdam, where I've been working full-time since July 2018.</p>
		</content-image-right>

		<title-flip :translate-y="translateY" title="<span class='text--yellow'>Critical thinker</span> and crazy about details.">
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
	</div>
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
			translateY: '(100vh / 24) * 2'
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'henris';

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
