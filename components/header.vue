<template>
	<nav class="header">
		<div class="row column small-full large-19 space-between">
			<h1 class="header__logo">
				<nuxt-link to="/">
					<svgicon name="logo" color="#ffb200"/>
				</nuxt-link>
			</h1>

			<ul class="header__navigation">
				<li class="header__nav-item">
					<nuxt-link class="forward-slash" to="/about">about</nuxt-link>
				</li>
				<li class="header__nav-item">
					<nuxt-link class="forward-slash" to="/contact">contact</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import 'henris';
$special-easing: cubic-bezier(0.7, -0.3, 0.3, 1);

.header {
	display: flex;
	justify-content: space-between;
	padding: grid(1 0 0);
	@media #{$medium-down} {
		padding: rem(40 16 20)
	}
	&__logo{
		width: grid(1);
		min-width: rem(40);
		svg {
			display: inline-block;
			transition: .4s $special-easing;
			&:hover {
				transform: rotate(45deg);
			}
		}
	}
	&__navigation {
		display: flex;
	}
	&__nav-item {
		a {
			transition: 0.4s ease-out;
			padding: 2px;
		}
		& + li {
			margin-left: 2rem;
		}
	}
}

</style>
