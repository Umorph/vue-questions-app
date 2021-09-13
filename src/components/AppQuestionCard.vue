<template>
	<li class="question-card">
		<div class="question-card__info">
			<span class="question-card__question-number">Q2718</span>
			<span class="question-card__question-time">16h</span>
		</div>
		<div class="question-card__question-inner">
			<strong class="question-card__text">Hello, what is the delivery time?</strong>
			<div class="question-card__meta">
				<span class="question-card__author">Guest</span>
				<span class="question-card__date">4:20 am</span>
				<div class="question-card__controls">
					<button class="question-card__button question-card__button--delete">
						<span class="visually-hidden">Удалить вопрос</span>
					</button>
					<button class="question-card__button question-card__button--close">
						<span class="visually-hidden">Закрыть вопрос</span>
					</button>
					<button class="question-card__button question-card__button--return">
						<span class="visually-hidden">Открыть вопрос</span>
					</button>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
	export default {

	}
</script>




<style lang="scss">
	.question-card {
		box-sizing: border-box;
		margin: 0;
		padding: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: stretch;
		min-height: 120px;

		background-color: #fff;
		box-shadow: 0 0 10px 0 #939393;
	}

	.question-card__info {
		position: relative;

		margin: 0;
		padding: 0 0 7px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		min-width: 60px;

		background-color: #f3f3f3;
		border-radius: 5px;

		&::after {
			content: "";
			position: absolute;
			top: 10px;
			left: 10px;

			display: block;
			width: 20px;
			height: 20px;

			background-color: #1CB9ED;
			transform: rotate(45deg);

			z-index: 0;
		}
	}

	.question-card__question-number {
		position: relative;
		box-sizing: border-box;
		margin: 0;
		padding: 5px 0;

		font-family: inherit;
		font-weight: 700;
		font-style: normal;
		font-size: 16px;
		line-height: 16px;
		color: #fff;
		white-space: nowrap;
		text-align: center;
		text-transform: uppercase;

		background-color: #1CB9ED;
		border-radius: 5px;

		z-index: 1;
	}

	.question-card__question-time {
		margin: 0;
		padding: 0;

		font-family: inherit;
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		line-height: 15px;
		color: #4a4a4a;
		text-align: center;
	}

	.question-card__question-inner {
		margin: 0 0 0 20px;
		padding: 0;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
	}

	.question-card__text {
		margin: 0;
		padding: 0;

		font-family: inherit;
		font-weight: 300;
		font-style: normal;
		font-size: 20px;
		line-height: 22px;
		color: #000;
	}

	.question-card__meta {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-end;
	}

	.question-card__author,
	.question-card__date {
		margin: 0;
		padding: 0;

		font-family: inherit;
		font-weight: 300;
		font-style: normal;
		font-size: 14px;
		line-height: 16px;
		color: #939393;
	}

	.question-card__date {
		margin-left: 10px;
	}

	.question-card__controls {
		margin: 0 0 0 auto;
		padding: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
	}

	.question-card__button {
		margin: 0;
		padding: 0;
		width: 35px;
		height: 35px;

		background: #939393;
		border: none;
		border-radius: 50%;

		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&:not(:first-child) {
			margin-left: 10px;
		}

		&:hover,
		&:focus {
			outline: none;
			box-shadow: 3px 3px 5px 1px #bd9f9f;
		}

		&:active {
			box-shadow: none;
		}

		&--delete {
			background: #ff4747 url("../assets/delete-icon.svg") center no-repeat;
		}

		&--close {
			background: #5BBC73 url("../assets/done-icon.svg") center no-repeat;
		}

		&--return {
			background: #1CB9ED url("../assets/return-icon.svg") center no-repeat;
		}
	}
</style>
