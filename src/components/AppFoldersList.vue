<template>
	<section class="folders">
		<h2 class="folders__heading">Messages</h2>
		<span class="folders__hint">history</span>
		<ul class="folders__list">
			<li class="folders__item">
				<button class="folders__button">My Questions (85)</button>
			</li>
			<li class="folders__item">
				<button class="folders__button">Messenger (911)</button>
			</li>
			<li class="folders__item">
				<button class="folders__button">Community QA (1185)</button>
			</li>
			<li class="folders__item">
				<button class="folders__button">FAQ</button>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.folders {
		box-sizing: border-box;
		margin: 0;
		padding: 10px;
		flex-grow: 1;
	}

	.folders__heading {
		margin: 0;
		padding: 0;

		font-family: inherit;
		font-weight: 500;
		font-style: normal;
		font-size: 22px;
		line-height: 24px;
		color: #ffffff;
	}

	.folders__hint {
		margin: 10px 0 0;
		padding: 0;

		font-family: inherit;
		font-weight: 300;
		font-style: normal;
		font-size: 14px;
		line-height: 16px;
		color: rgba(#fff, 0.5);
	}

	.folders__list {
		margin: 20px 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		list-style: none;
	}

	.folders__item {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		&:not(:first-child) {
			margin-top: 10px;
		}
	}

	.folders__button {
		position: relative;

		box-sizing: border-box;
		margin: 0;
		padding: 8px 5px 8px 30px;

		font-family: inherit;
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		line-height: 14px;
		color: #ffffff;
		text-decoration: none;
		text-align: left;

		background: transparent;
		border: none;
		border-radius: 5px;

		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&:hover,
		&:focus {
			outline: none;
			background: rgba(#fff, 0.3);
		}

		&::before {
			content: '';
			position: absolute;
			top: 5px;
			left: 5px;

			display: block;
			width: 20px;
			height: 20px;

			background: url("../assets/inbox-icon.svg") center / cover no-repeat;
		}
	}
</style>
