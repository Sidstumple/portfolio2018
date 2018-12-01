<template>
	<div class="row title-intro space-between">
		<h1 class="title-intro__left column medium-11 small-full" v-html="left"></h1>
		<h4 class="title-intro__right serif column medium-11 small-full" v-html="right"></h4>
	</div>
</template>

<script>
export default {
	props: {
		left: {
			type: String,
			default: () => {}
		},
		right: {
			type: String,
			default: () => {}
		}
	}
};
</script>

<style lang="scss">
@import 'henris';

.title-intro {
	padding: grid(2 0 0);
	align-items: flex-start;
	@media #{$small-only} {
		padding: rem(32 16 0)
	}
	&__left {
		text-align: right;
		@media #{$small-only} {
			text-align: left;
		}
	}
	&__right {
		margin-top: 0;
		@media #{$small-only} {
			margin-top: rem(30);
		}
	}
}
</style>
