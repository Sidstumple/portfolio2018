<template>
	<nav class="header row">
		<h1 class="header__logo">
			<nuxt-link to="/">
				<img src="/img/cyd.svg" alt="logo Cyd"/>
			</nuxt-link>
		</h1>

		<ul class="header__navigation">
			<li class="header__nav-item">
				<nuxt-link class="background--code" to="/work">/work</nuxt-link>
			</li>
			<li class="header__nav-item">
				<nuxt-link class="background--code" to="/contact">/contact</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import 'henris';

.header {
	display: flex;
	justify-content: space-between;
	padding: grid(1 1 0);
	&__logo{
		width: rem(80);
		img {
			display: inline-block;
		}
	}
	&__navigation {
		display: flex;
	}
	&__nav-item {
		a {
			color: hotpink;
			padding: 2px;
		}
		& + li {
			margin-left: 2rem;
		}
	}
}

</style>
