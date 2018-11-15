<template>
	<section class="title-flip">
		<div class="title-flip__text row">
			<div class="text--flip column small-22 medium-10 large-6 ">
				<h1 v-translate-on-scroll="{amount: 2}" :style="`transform: translateY(calc(${translateY}))`" v-html="title"></h1>
			</div>
			<div class="title-flip__body column small-22 medium-18 large-13" v-translate-on-scroll="{amount: 1}" :style="`transform: translateY(calc(${translateY}))`">
				<slot />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['translateY', 'title']
};
</script>

<style lang="scss">
@import 'henris';
.title-flip {
	&__text {
		padding: grid(3 0 4 5);
		@media #{$medium-down} {
			padding: grid(3 2 4);
			flex-direction: column;
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
	height: grid(12);
	@media #{$medium-down}{
		writing-mode: initial;
		height: auto;
		padding-bottom: grid(2);
	}
}
</style>
