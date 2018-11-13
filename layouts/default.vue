<template>
	<div>
		<loader />
		<header-block />
		<sidebar />
		<nuxt/>
		<footer-block />
	</div>
</template>

<script>
import Sidebar from '~/components/sidebar';
import HeaderBlock from '~/components/header';
import FooterBlock from '~/components/footer';
import Loader from '~/components/loader';
export default {
	components: {
		Sidebar,
		HeaderBlock,
		FooterBlock,
		Loader
	}
};
</script>
