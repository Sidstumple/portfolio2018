<template>
	<nav class="header">
		<div class="row column small-full large-19 space-between">
			<h1 class="header__logo">
				<nuxt-link to="/">
					<svgicon name="logo" color="#ffb200"/>
				</nuxt-link>
			</h1>

			<ul class="header__navigation">
				<li class="nav__item">
					<nuxt-link class="nav__link" to="/about">about</nuxt-link>
				</li>
				<li class="nav__item">
					<nuxt-link class="nav__link" to="/contact">contact</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

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
				transform: rotate(15deg);
			}
		}
	}
	&__navigation {
		display: flex;
		.nav {
			&__item {
				& + li {
					margin-left: 2rem;
				}
			}
			&__link {
				transition: 0.4s ease-out;
				padding-left: 2px;
				position: relative;
				&:before {
					content: '';
					transition: 0.4s ease-out;
					position: absolute;
					height: 14px;
					width: 1px;
					background: color(Black);
					transform: rotate(90deg);
					bottom: 2px;
					left: -10px;
				}
				&:hover, &--active {
					&:before {
						left: -2px;
						transform: rotate(20deg);
					}
				}
			}
		}
	}
}

</style>
