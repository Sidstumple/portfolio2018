<template>
	<section class="container">
		<div class="filter">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
				<filter id="duotone">
					<feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
						<feFuncR type="table" tableValues="0.462745098 0.8196078431"></feFuncR>
						<feFuncG type="table" tableValues="0.4509803922 0.9137254902"></feFuncG>
						<feFuncB type="table" tableValues="0.6901960784 0.9215686275"></feFuncB>
						<feFuncA type="table" tableValues="0 1"></feFuncA>
					</feComponentTransfer>
				</filter>
				<circle cx="90vw" cy="100vh" r="80vw" fill="#D1E9EB" />
				<image x="60vw" y="0" filter="url(#duotone)" width="100vw" height="100vh" xlink:href="~/assets/img/cydBW.png"/>
			</svg>
		</div>
		<div class="intro">
			<h1>My name is Cyd,</h1>
			<p>I’m a web developer & designer based in Amsterdam. I studied Communication & Multimedia Design at the University of Applied Sciences.</p>
			<p>Want to work together?</p>
		</div>
		<aside class="sidebar">
			<p><span>Cyd Stumpel</span> — Web developer & designer — Amsterdam</p>
		</aside>
	</section>
</template>

<script>


export default {
	components: {

	}
};
</script>
