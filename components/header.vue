<template>
	<nav class="header">
		<div class="row column small-22 large-19 space-between">
			<h1 class="header__logo">
				<nuxt-link to="/">
					<img src="/img/cyd.svg" alt="logo Cyd"/>
				</nuxt-link>
			</h1>

			<ul class="header__navigation">
				<!-- <li class="header__nav-item">
					<nuxt-link class="forward-slash" to="/work">work</nuxt-link>
				</li> -->
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
	&__logo{
		width: grid(1);
		min-width: rem(40);
		img {
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
