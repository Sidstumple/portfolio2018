<template>
	<aside class="sidebar row">
		<p><span class="font-medium">Cyd Stumpel</span> — Web developer & designer — Amsterdam</p>
	</aside>
</template>

<style lang="scss">
@import 'henris';
	.sidebar {
		p{
			font-size: 14px;
		}
		position: fixed;
		pointer-events: none;
		writing-mode: vertical-lr;
		right: grid(.5);
		width: unset;
		top: 50%;
		transform: translateY(-50%);
		white-space: nowrap;
	}
</style>
