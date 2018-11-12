<template>
	<div class="loader background--white" :class="{'hide': hide}">
		<svgicon name="logo" color="#f9b41e"/>
		<div class="circle">
			<div class="circle__inner background--cydyellow" :style="`width: ${progress}vw; height: ${progress}vw; transform: translateY(${progress}vw)`"></div>
		</div>
	</div>
</template>

<script>
import '~/assets/icons';

export default {
	data (){
		return {
			hide: false,
			progress: 10
		};
	},
	mounted() {
		let self = this;
		// setTimeout(function() {
		self.hide = true;
		// },2010);
		setInterval(function() {
			if (self.progress != 100) {
				self.progress++;
			}
		}, 10);
	}
};
</script>

<style lang="scss">
@import 'henris';

	.loader {
		z-index: 10;
		position: fixed;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		svg {
			width: 100px;
			height: 100px;
			animation: pulse 3s cubic-bezier(.26,0,1,.5);
		}
		&.hide {
			display: none;
		}
	}
	.circle {
		position: absolute;
		height: 100vh;
		width: 100vw;
		&__inner {
			position: absolute;
			border-radius: 100%;
			bottom: 0;
			left: 0;
		}
	}
	@keyframes pulse {
		0% {
			transform: rotate(10deg)
		}
		10% {
			transform: rotate(-20deg)
		}
		14% {
			transform: rotate(-10deg)
		}
		20% {
			transform: rotate(20deg)
		}
		30% {
			transform: rotate(15deg)
		}
		45% {
			transform: rotate(40deg)
		}
		60% {
			transform: rotate(30deg)
		}
		65% {
			transform: rotate(120deg)
		}
		86% {
			transform: rotate(180deg)
		}
		100% {
			transform: rotate(100deg)
		}
	}
</style>
