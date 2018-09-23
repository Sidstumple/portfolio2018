<template>
	<div>
		<loader />
		<header-block />
		<sidebar />
		<nuxt/>
	</div>
</template>

<script>
import Sidebar from '~/components/sidebar';
import HeaderBlock from '~/components/header';
import Loader from '~/components/loader';
export default {
	components: {
		Sidebar,
		HeaderBlock,
		Loader
	}
};
</script>
