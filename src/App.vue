<template>
	<app-sidebar class="main-content__sidebar"></app-sidebar>
	<app-main-screen class="main-content__main-screen"></app-main-screen>
</template>

<script>
	import AppSidebar from "./components/AppSidebar";
	import AppMainScreen from "./components/AppMainScreen";

	export default {
		components: {
			AppSidebar,
			AppMainScreen
		}
	}
</script>

<style lang="scss">
	@import "~normalize.css";

	body {
		font-family: 'Roboto', sans-serif;
		width: 100%;
		height: 100vh;
		min-width: 768px;
	}

	.visually-hidden:not(:focus):not(:active),
	input[type="checkbox"].visually-hidden,
	input[type="radio"].visually-hidden {
		position: absolute;

		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;

		white-space: nowrap;

		clip-path: inset(100%);
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	.main-content {
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: stretch;
		width: 100%;
		height: 100%;
	}
</style>
