<template>
	<section class="work-slide column">
		<div class="work-slide__image parallax-item" :style="`background-image: url('${data.image}');`"></div>
	</section>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {}
		}
	}
};
</script>

<style lang="scss">
@import '~henris';

.work-slide {
	margin-left: grid(1);
	overflow: hidden;
	&__image {
		height: grid(8);
		width: grid(10);
		background-size: auto 130%;
		background-position: center -15%;
		background-repeat: no-repeat;
	}
}

</style>
