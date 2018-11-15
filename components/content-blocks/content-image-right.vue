<template>
	<section class="row content-image-right">
		<div class="row content-image-right__container center">
			<div class="column small-22 medium-10 large-9 content-image-right__text">
				<h1>{{ title }}</h1>
				<h2>{{ subtitle }}</h2>
				<slot />
			</div>
			<div class="content-image-right__image small-full medium-8 large-9 column">
				<div class="content-image-right__image-inner" v-translate-on-scroll="{amount: 2}" :style="`background-image: url('${imageUrl}'); transform: translateY(calc(${translateY}))`"></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['translateY', 'title', 'subtitle', 'imageUrl']
};
</script>

<style lang="scss">
@import 'henris';
.content-image-right {
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
		flex-direction: column;
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
</style>
