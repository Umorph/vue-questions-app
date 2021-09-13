<template>
	<aside class="sidebar">
		<app-user-info class="sidebar__user-info">
		</app-user-info>

		<app-folders-list class="sidebar__folders">
		</app-folders-list>
	</aside>
</template>

<script>
	import AppUserInfo from "./AppUserInfo";
	import AppFoldersList from "./AppFoldersList";

	export default {
		components: {
			AppUserInfo,
			AppFoldersList,
		}
	}
</script>

<style lang="scss">
	.sidebar {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		background-color: #05222A;
	}

	.sidebar__folders {
		margin: 10px 0 0;
	}
</style>
