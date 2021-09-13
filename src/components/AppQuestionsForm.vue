<template>
	<form class="question-form" action="#">
		<div class="question-form__input-wrapper">
			<label class="question-form__label" for="question-textarea">Добавьте вопрос</label>
			<textarea class="question-form__textarea" name="question" id="question-textarea"></textarea>
		</div>
		<button class="question-form__submit-button">
			<span class="visually-hidden">Отправить</span>
		</button>
	</form>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.question-form {
		box-sizing: border-box;
		padding: 15px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;

		background-color: #fff;
		border-top-right-radius: 15px;
	}

	.question-form__input-wrapper {
		margin: 0;
		padding: 0;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
	}

	.question-form__label {
		margin: 0;
		padding: 0;

		font-weight: 400;
		font-style: normal;
		font-size: 18px;
		line-height: 20px;
		color: #212121;
	}

	.question-form__textarea {
		box-sizing: border-box;
		margin: 10px 0 0;
		padding: 7px 10px;

		font-weight: 300;
		font-style: normal;
		font-size: 14px;
		line-height: 16px;
		color: #212121;

		background: #fff;
		border: 1px solid #c7c7c7;
		border-radius: 5px;

		cursor: pointer;
		resize: none;
		transition: all 0.3s ease-in-out;

		&:hover,
		&:focus {
			outline: none;
			border-color: #212121;
		}
	}

	.question-form__submit-button {
		margin: 25px 0 0 20px;
		padding: 0;

		width: 40px;
		height: 40px;

		background: #1CB9ED url("../assets/send-icon.svg") center no-repeat;
		border: none;
		border-radius: 50%;

		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&:hover,
		&:focus {
			outline: none;
			box-shadow: 3px 3px 5px 1px #bd9f9f;
		}

		&:active {
			box-shadow: none;
		}
	}
</style>
