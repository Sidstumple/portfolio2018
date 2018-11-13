<template>
	<div class="row">
		<div class="row contact">
			<section class="column small-22 medium-20 large-18 contact__text">
				<h1>Want to go for <span class="text--yellow">coffee</span> ☕️?</h1>
				<p>Let's keep in touch: </p>
				<div class="row touchpoint">
					<svgicon name="linkedin" color="#ffb200" width="32px" height="32px"></svgicon>
					<a class=" font-medium" href="https://www.linkedin.com/in/cydstumpel/">cydstumpel</a>
				</div>

				<div class="row touchpoint">
					<svgicon name="github" color="#ffb200" width="32px" height="32px"></svgicon>
					<a class="font-medium" href="https://github.com/Sidstumple">sidstumple</a>
				</div>

				<div class="row touchpoint">
					<svgicon name="instagram" color="#ffb200" width="32px" height="32px"></svgicon>
					<a class="font-medium" href="https://www.instagram.com/sidstumpel/">sidstumpel</a>
				</div>

				<div class="row touchpoint">
					<svgicon name="mail" color="#ffb200" width="32px" height="32px"></svgicon>
					<a class="font-medium" href="mailto:info@cydstumpel.nl">info@cydstumpel.nl</a>
				</div>

				<div class="row touchpoint">
					<svgicon name="phone" color="#ffb200" width="32px" height="32px"></svgicon>
					<a class="font-medium" href="tel:+31651456736">0651456736</a>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import 'henris';
.contact {
	margin-left: grid(4);
	margin-top: grid(2);
	min-height: 70vh;
	padding-bottom: grid(2);
}
.touchpoint {
	height: 2rem;
	margin-top: 1rem;
	align-items: center;
	a {
		margin-left: 1rem;
	}
}
</style>
