<template>
	<section class="container" :class="`text-${text} page-active--${activePage}`">

		<div class="filter" :class="`bg-${background} pos--${position}`">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" class="container">
				<filter id="duotone">
					<feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
						<feFuncR type="table" :tableValues="rColors"></feFuncR>
						<feFuncG type="table" :tableValues="gColors"></feFuncG>
						<feFuncB type="table" :tableValues="bColors"></feFuncB>
						<feFuncA type="table" :tableValues="aColors"></feFuncA>
					</feComponentTransfer>
				</filter>
				<circle cx="90vw" cy="100vh" r="50vw" :fill="color"> </circle>
				<image x="0" y="0" style="filter: url(#duotone)" width="100%" height="100vh" xlink:href="~/assets/img/cydBW.png"/>
			</svg>
		</div>

		<div class="icons">
			<div v-for="(icon, index) in allIcons" @mouseenter="changePosition(`${icon}-${index}`)" :key="index">
				<svgicon :name="icon" :class="`${icon}-${index} icon-${index}`" color="#ffcc00"></svgicon>
			</div>
		</div>

		<nav class="navigation">
			<ul class="navigation__list" :class="{'contrast' : contactActive}">
				<li class="navigation__item" @click="checkContrast(about)"><nuxt-link to="/#about">about</nuxt-link></li>
				<li class="navigation__item" @click="checkContrast(work)"><nuxt-link to="/#work">work</nuxt-link></li>
				<li class="navigation__item" @click="checkContrast(contact)"><nuxt-link to="/#contact">contact</nuxt-link></li>
			</ul>
		</nav>

		<div class="intro section" :class="{'section--active': about}">
			<typewriter heading="Developer, designer, accessibility warrior" @doneTyping="show=true">
			</typewriter>
			<div :class="{show: show}" class="intro__text">
				<p class="column small-full medium-three-quarter">Based in Amsterdam, I’m a web developer & designer with a passion for inclusive design.</p>
				<nuxt-link to="#contact">Want to work together?</nuxt-link>
			</div>
		</div>

		<div class="work section" :class="{'section--active': work}">
			<h1 :class="`text-${background}`">Work</h1>
			<article :class="{show: show}" class="work__items">
				<section class="work__item">
					<div class="text text--viacom">
						<p><span class="monotype block">Viacom</span>Out of office generator</p>
					</div>
					<div class="image image--viacom">
						<img src="~/assets/img/hero_viacom.jpg"/>
					</div>
				</section>

				<div class="column work__items--small">
					<section class="work__item">
						<div class="image image--bag">
							<img src="~/assets/img/bag.jpg"/>
						</div>
						<div class="text text--bag">
							<p><span class="monotype block">Matise</span>Design system</p>
						</div>
					</section>
					<section class="work__item">
						<div class="image image--matise">
							<img src="~/assets/img/matise.jpg"/>
						</div>
						<div class="text text--matise">
							<p><span class="monotype block">Matise</span>Website 2018</p>
						</div>
					</section>
				</div>
			</article>
		</div>

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
	</section>
</template>

<script>
import Typewriter from '~/components/typewriter';

import '~/assets/icons';

export default {
	components: {
		Typewriter
	},
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
	watch:{
		$route (to){
			if (to.hash == '#about') {
				this.about = true;
				this.work = false;
				this.contact = false;
				this.position = 'top-right';
				this.activePage = 'about';
			} else if (to.hash == '#work') {
				this.about = false;
				this.work = true;
				this.contact = false;
				this.position = 'bottom-right';
				this.activePage = 'work';
			} else if (to.hash == '#contact') {
				this.about = false;
				this.work = false;
				this.contact = true;
				this.position = 'top-left';
				this.activePage = 'contact';
			}
		}
	},
	mounted() {
		let allSvgIcons = document.querySelectorAll('.icons div > svg');

		allSvgIcons.forEach(function (icon) {
			let sizeRandomNumber = Math.floor((Math.random() * 200) + 50);
			let vhRandomNumber = Math.floor((Math.random() * 80) + 20);
			let vwRandomNumber = Math.floor((Math.random() * 40) + 5);
			icon.style.width = `${sizeRandomNumber}px`;
			icon.style.top = `${vhRandomNumber}vh`;
			icon.style.left = `${vwRandomNumber}vw`;
			console.log(sizeRandomNumber, vhRandomNumber, vwRandomNumber);
		});
	},
	methods: {
		checkContrast: function(active) {
			console.log(active);
		},
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
		changePosition: function(icon) {
			let hovered = document.querySelector(`.${icon}`).getBoundingClientRect();
			console.log(hovered.top);
		}
	},

};
</script>
