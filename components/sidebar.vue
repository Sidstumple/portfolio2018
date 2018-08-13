<template>
	<aside class="sidebar row">
		<p><span class="font-medium">Cyd Stumpel</span> — Web developer & designer — Amsterdam</p>
		<div class="color-pickers row">
			<div class="color" @click="changeColorScheme('lightblue-lavender')">
				<div class="color__choice bg-lightblue"></div>
				<div class="color__choice bg-lavender"></div>
			</div>
			<div class="color" @click="changeColorScheme('yellow-orange')">
				<div class="color__choice bg-yellow"></div>
				<div class="color__choice bg-orange"></div>
			</div>
			<div class="color" @click="changeColorScheme('mint-pink')">
				<div class="color__choice bg-mint"></div>
				<div class="color__choice bg-pink"></div>
			</div>
			<div class="color" @click="changeColorScheme('black-white')">
				<div class="color__choice bg-black"></div>
				<div class="color__choice bg-white"></div>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	data(){
		return {
			allIcons: ['design', 'logo', 'mail', 'phone', 'search'],
			contactActive: false,
			show: false,
			rColors: '0.462745098 0.8196078431',
			gColors: '0.4509803922 0.9137254902',
			bColors: '0.6901960784 0.9215686275',
			aColors: '0 1',
			background: 'lavender',
			color: '#D1E9EB',
			text: 'lightblue',
			about: true,
			work: false,
			contact: false,
			position: 'top-right',
			activePage: 'about',
			typeWork: false
		};
	},
	methods: {
		changeColorScheme: function(colorScheme) {
			if (colorScheme == 'lightblue-lavender') {
				this.rColors = '0.462745098 0.8196078431';
				this.gColors = '0.4509803922 0.9137254902';
				this.bColors = '0.6901960784 0.9215686275';
				this.background = 'lavender';
				this.text = 'lightblue';
				this.color = '#D1E9EB';
			} else if (colorScheme == 'yellow-orange') {
				this.rColors = '0.8705882353 0.9764705882 ';
				this.gColors = '0.3450980392 0.8431372549 ';
				this.bColors = '0.1803921569 0.2941176471 ';
				this.background = 'orange';
				this.text = 'yellow';
				this.color = '#F9D74B';
			} else if (colorScheme == 'mint-pink') {
				this.rColors = '0.8117647059 0.8235294118 ';
				this.gColors = '0.2941176471 0.9098039216 ';
				this.bColors = '0.3215686275 0.8705882353 ';
				this.background = 'pink';
				this.text = 'mint';
				this.color = '#D2E8DE';
			} else {
				this.rColors = '0 1';
				this.gColors = '0 1';
				this.bColors = '0 1';
				this.background = 'white';
				this.text = 'black';
				this.color = '#000000';
			}
		},
	}
}
</script>

<style lang="css">
</style>
