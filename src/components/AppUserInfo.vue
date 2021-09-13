<template>
	<div class="user-info">
		<picture class="user-info__avatar">
			<img src="../assets/user-avatar.svg" alt="Аватар">
		</picture>
		<div class="user-info__text-wrapper">
			<p class="user-info__name">David Hill</p>
			<p class="user-info__status">Online</p>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.user-info {
		position: relative;

		box-sizing: border-box;
		margin: 0;
		padding: 10px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		min-width: 250px;

		&::after {
			content: '';
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;

			display: block;
			width: 100%;
			height: 1px;

			background-color: rgba(#e5e5e5, 0.3);
		}
	}

	.user-info__avatar {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
		width: 50px;

		& img {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	.user-info__text-wrapper {
		box-sizing: border-box;
		margin: 0 0 0 10px;
		padding: 0;
		flex-grow: 1;
	}

	.user-info__name {
		margin: 0;
		padding: 0;

		font-family: inherit;
		font-weight: 400;
		font-style: normal;
		font-size: 18px;
		line-height: 20px;
		color: #ffffff;
	}

	.user-info__status {
		margin: 10px 0 0;
		padding: 0;

		font-family: inherit;
		font-weight: 300;
		font-style: normal;
		font-size: 14px;
		line-height: 16px;
		color: #ffffff;
	}
</style>
